"use client";
import Image from "next/image";
import TopBar from "@/app/components/common/TopBar";
import TrackingMap from "@/app/components/TrackingMap";
import TimeRangeSlider from "@/app/components/TimeRangeSlider";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useHistoryPositionStore, UserRecord, SortField } from "@/app/store/zustand/useHistoryPositionStore";

const HISTORY_RANGE_OPTIONS = [
  { label: "Last 24 hours", value: "Last 24 hours" },
  { label: "Last 7 days", value: "Last 7 days" },
  { label: "Last 30 days", value: "Last 30 days" },
];

const RETENTION_OPTIONS: { label: string; value: import("@/app/store/zustand/useHistoryPositionStore").RetentionPeriod }[] = [
  { label: "7 days", value: "7 days" },
  { label: "14 days", value: "14 days" },
  { label: "30 days", value: "30 days" },
  { label: "90 days", value: "90 days" },
];

function signalColor(s: string) {
  if (s === "Strong") return "text-green-1500";
  if (s === "Moderate") return "text-yellow-2500";
  return "text-red-2200";
}

function batteryColor(b: number) {
  if (b >= 60) return "text-green-1500";
  if (b >= 30) return "text-yellow-2500";
  return "text-red-2200";
}

function SortIcon({ field, active, order }: { field: SortField; active: boolean; order: "asc" | "desc" }) {
  return (
    <span className="inline-flex flex-col ml-1 opacity-60">
      <svg width="8" height="5" viewBox="0 0 8 5" className={active && order === "asc" ? "opacity-100" : "opacity-30"}>
        <path d="M4 0L8 5H0L4 0Z" fill="currentColor" />
      </svg>
      <svg width="8" height="5" viewBox="0 0 8 5" className={`mt-0.5 ${active && order === "desc" ? "opacity-100" : "opacity-30"}`}>
        <path d="M4 5L0 0H8L4 5Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function PurgeModal() {
  const { isPurgeModalOpen, purgeConfirmText, purgeError, closePurgeModal, setPurgeConfirmText, confirmPurge, retentionPeriod } = useHistoryPositionStore();
  if (!isPurgeModalOpen) return null;
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-xl shadow-4xl w-full max-w-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L2 17h16L10 2Z" stroke="#DC2626" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M10 8v4M10 14h.01" stroke="#DC2626" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h6 className="text-base font-bold text-black-1600">Manual Data Purge</h6>
            <p className="text-xs text-gray-1200">This action is irreversible</p>
          </div>
        </div>
        <p className="text-sm text-gray-1200 mb-4">
          You are about to permanently delete all GPS data older than <span className="font-bold text-black-1600">{retentionPeriod}</span>. This cannot be undone.
        </p>
        <label className="block text-xs font-normal text-gray-1200 mb-1.5">
          Type <span className="font-bold text-red-2200">PURGE</span> to confirm
        </label>
        <input
          type="text"
          value={purgeConfirmText}
          onChange={(e) => setPurgeConfirmText(e.target.value)}
          className="w-full h-9 px-3 border border-gray-1000 rounded-[10px] text-sm outline-none focus:border-red-2200 mb-1"
          placeholder="PURGE"
        />
        {purgeError && <p className="text-xs text-red-2200 mb-3">{purgeError}</p>}
        <div className="flex gap-3 mt-4">
          <button onClick={closePurgeModal} className="flex-1 h-9 rounded-[10px] border border-gray-1000 bg-gray-1800 text-sm text-black-1600 font-normal hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button onClick={confirmPurge} className="flex-1 h-9 rounded-[10px] bg-red-1300 text-sm text-white font-normal hover:opacity-90 transition-opacity">
            Confirm Purge
          </button>
        </div>
      </div>
    </div>
  );
}

function ExportModal() {
  const { isExportModalOpen, closeExportModal, selectedUser } = useHistoryPositionStore();
  if (!isExportModalOpen) return null;
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-xl shadow-4xl w-full max-w-md p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <img src="/images/download-file.svg" alt="" />
          </div>
          <div>
            <h6 className="text-base font-bold text-black-1600">Legal Export</h6>
            <p className="text-xs text-gray-1200">GDPR-compliant data export</p>
          </div>
        </div>
        <p className="text-sm text-gray-1200 mb-4">
          Export GPS history for <span className="font-bold text-black-1600">{selectedUser?.name ?? "all users"}</span> in a legally compliant format.
        </p>
        <div className="flex gap-3">
          <button onClick={closeExportModal} className="flex-1 h-9 rounded-[10px] border border-gray-1000 bg-gray-1800 text-sm text-black-1600 hover:bg-gray-100 transition-colors">
            Cancel
          </button>
          <button
            onClick={() => {
              const data = JSON.stringify(selectedUser?.positions ?? [], null, 2);
              const blob = new Blob([data], { type: "application/json" });
              const url = URL.createObjectURL(blob);
              const a = document.createElement("a");
              a.href = url;
              a.download = `gps-export-${selectedUser?.id ?? "all"}.json`;
              a.click();
              URL.revokeObjectURL(url);
              closeExportModal();
            }}
            className="flex-1 h-9 rounded-[10px] bg-blue1400 text-sm text-white hover:opacity-90 transition-opacity"
          >
            Download JSON
          </button>
        </div>
      </div>
    </div>
  );
}

function UserListRow({ user }: { user: UserRecord }) {
  const { selectedUser, selectUser } = useHistoryPositionStore();
  const isSelected = selectedUser?.id === user.id;
  return (
    <tr
      onClick={() => selectUser(user)}
      className={`border-b border-gray-5600 cursor-pointer transition-colors ${isSelected ? "bg-blue-50" : "hover:bg-gray-50"}`}
    >
      <td className="px-4 py-3">
        <div className="flex items-center gap-2.5">
          <Image src={user.avatar} alt={user.name} width={32} height={32} className="rounded-full" />
          <div>
            <p className="text-sm font-medium text-black-1600">{user.name}</p>
            <p className="text-xs text-gray-1200">{user.id}</p>
          </div>
        </div>
      </td>
      <td className="px-4 py-3 text-xs text-gray-1200">{user.lastSeen}</td>
      <td className="px-4 py-3">
        <span className={`text-xs font-bold ${batteryColor(user.battery)}`}>{user.battery}%</span>
      </td>
      <td className="px-4 py-3">
        <span className={`text-xs font-medium ${signalColor(user.signal)}`}>● {user.signal}</span>
      </td>
      <td className="px-4 py-3 text-xs text-gray-1200">{user.address}</td>
    </tr>
  );
}

export default function HistoryPosition() {
  const {
    selectedUser,
    searchQuery,
    setSearchQuery,
    historyRange,
    setHistoryRange,
    retentionPeriod,
    setRetentionPeriod,
    activeTab,
    setActiveTab,
    playbackIndex,
    setPlaybackIndex,
    stepPlayback,
    isPlaying,
    togglePlay,
    sortField,
    sortOrder,
    toggleSort,
    filteredUsers,
    currentPosition,
    openPurgeModal,
    openExportModal,
  } = useHistoryPositionStore();

  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPlaying && selectedUser) {
      playIntervalRef.current = setInterval(() => {
        const { playbackIndex: idx, selectedUser: u, togglePlay } = useHistoryPositionStore.getState();
        if (!u) return;
        if (idx >= u.positions.length - 1) {
          togglePlay();
          return;
        }
        useHistoryPositionStore.setState({ playbackIndex: idx + 1 });
      }, 1200);
    } else {
      if (playIntervalRef.current) clearInterval(playIntervalRef.current);
    }
    return () => { if (playIntervalRef.current) clearInterval(playIntervalRef.current); };
  }, [isPlaying, selectedUser]);

  const pos = currentPosition();
  const users = filteredUsers();
  const positions = selectedUser?.positions ?? [];
  const playbackPercent = positions.length > 1 ? (playbackIndex / (positions.length - 1)) * 100 : 0;

  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
      <TopBar />
      <PurgeModal />
      <ExportModal />

      <div className="md:p-6 p-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-blue-2500 rounded-xl w-10 h-10 flex items-center justify-center">
            <img src="/images/location-blue.svg" className="w-5 h-5" alt="" />
          </div>
          <div className="flex-1">
            <h6 className="text-xl font-bold leading-8 text-black-1600">History &amp; Positions</h6>
            <p className="text-sm font-normal leading-5 text-gray-1200">
              Audit trail · Last known positions · Movement playback
            </p>
          </div>
        </div>

        <form className="mt-2 mb-7" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="text-sm font-normal text-gray-2300 placeholder:text-gray-2300 px-4 pl-10 h-10 bg-gray-1800 border border-gray-5600 rounded-[10px] w-full outline-0"
              placeholder="Search user by name or ID..."
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="/images/search-icon.svg" width={16} height={16} alt="" />
            </div>
          </div>
        </form>

        {selectedUser && (
          <div className="bg-white rounded-xl border-l-2 border-blue1400 p-5 mb-6">
            <div className="max-w-[1060px]">
              <div className="flex mb-4 items-start justify-between">
                <div>
                  <h6 className="text-xs font-bold text-gray-1200 uppercase mb-1">Last Known Position</h6>
                  <h4 className="text-lg font-bold leading-7 text-black-1600">{selectedUser.name}</h4>
                  <span className="text-xs font-normal text-gray-1200 block">{selectedUser.id}</span>
                </div>
                <div className="text-xs font-bold text-blue1400 py-0.5 px-2.5 border border-blue1400 rounded-full">LKP</div>
              </div>
              <div className="grid md:grid-cols-4 gap-4">
                <div>
                  <div className="flex items-center mb-1 gap-1.5">
                    <img src="/images/location-gray.svg" alt="" />
                    <h6 className="text-xs font-normal leading-4 text-gray-1200">Timestamp</h6>
                  </div>
                  <h6 className="text-sm font-bold leading-5 text-black-1600">{selectedUser.lastSeen}</h6>
                </div>
                <div>
                  <div className="flex items-center mb-1 gap-1.5">
                    <img src="/images/battery-icon.svg" alt="" />
                    <h6 className="text-xs font-normal leading-4 text-gray-1200">Battery</h6>
                  </div>
                  <h6 className={`text-sm font-bold leading-5 ${batteryColor(selectedUser.battery)}`}>{selectedUser.battery}%</h6>
                </div>
                <div>
                  <div className="flex items-center mb-1 gap-1.5">
                    <img src="/images/signal-icon2.svg" alt="" />
                    <h6 className="text-xs font-normal leading-4 text-gray-1200">Signal</h6>
                  </div>
                  <h6 className={`text-sm font-bold leading-5 ${signalColor(selectedUser.signal)}`}>{selectedUser.signal}</h6>
                </div>
                <div>
                  <div className="flex items-center mb-1 gap-1.5">
                    <img src="/images/gps-icon.svg" alt="" />
                    <h6 className="text-xs font-normal leading-4 text-gray-1200">GPS Source</h6>
                  </div>
                  <h6 className="text-sm font-bold leading-5 text-black-1600">{selectedUser.gpsSource}</h6>
                </div>
              </div>
              <div className="bg-gray-1600 mt-3 rounded-[10px] py-2 px-3">
                <h6 className="text-xs font-normal leading-4 text-gray-1200">
                  Coordinates: {selectedUser.lat.toFixed(4)}°N, {selectedUser.lng.toFixed(4)}°E · {selectedUser.address}
                </h6>
              </div>
            </div>
          </div>
        )}

        <div className="flex md:gap-6 gap-4 md:flex-nowrap flex-wrap mt-6">
          <div className="2xl:w-8/12 md:w-1/2 w-full">
            <div className="bg-white border border-gray-1000 rounded-xl mb-6 shadow-4xl">
              <div className="2xl:p-6 p-4">
                <div className="flex items-center justify-between mb-3">
                  <h6 className="text-base font-bold leading-6 text-black-1600">History Explorer</h6>
                  <select
                    value={historyRange}
                    onChange={(e) => setHistoryRange(e.target.value)}
                    className="bg-gray-1800 text-sm text-black-1600 border border-gray-1000 rounded-[10px] px-3 h-9 outline-none cursor-pointer min-w-[130px]"
                  >
                    {HISTORY_RANGE_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                </div>

                <div className="bg-gray-6000 mb-3 rounded-[10px] grid grid-cols-2 p-1">
                  <button
                    onClick={() => setActiveTab("map")}
                    className={`flex items-center justify-center gap-1.5 text-sm font-normal p-1.5 rounded-lg cursor-pointer transition-colors ${activeTab === "map" ? "bg-gray-1800 text-black-1600" : "text-gray-1200"}`}
                  >
                    <img src="/images/map-icon.svg" alt="" /> Map View
                  </button>
                  <button
                    onClick={() => setActiveTab("list")}
                    className={`flex items-center justify-center gap-1.5 text-sm font-normal p-1.5 rounded-lg cursor-pointer transition-colors ${activeTab === "list" ? "bg-gray-1800 text-black-1600" : "text-gray-1200"}`}
                  >
                    <img src="/images/list-icon.svg" alt="" /> List View
                  </button>
                </div>

                {activeTab === "map" ? (
                  <div className="bg-gray-1600/50 border border-gray-1000 rounded-xl">
                    <TrackingMap />
                  </div>
                ) : (
                  <div className="overflow-x-auto rounded-xl border border-gray-1000">
                    <table className="w-full min-w-[560px]">
                      <thead>
                        <tr className="bg-gray-5800/80 border-b border-gray-5600">
                          <th className="px-4 py-2.5 text-left">
                            <button onClick={() => toggleSort("name")} className="flex items-center text-xs font-normal text-gray-1200 uppercase">
                              User <SortIcon field="name" active={sortField === "name"} order={sortOrder} />
                            </button>
                          </th>
                          <th className="px-4 py-2.5 text-left">
                            <button onClick={() => toggleSort("lastSeen")} className="flex items-center text-xs font-normal text-gray-1200 uppercase">
                              Last Seen <SortIcon field="lastSeen" active={sortField === "lastSeen"} order={sortOrder} />
                            </button>
                          </th>
                          <th className="px-4 py-2.5 text-left">
                            <button onClick={() => toggleSort("battery")} className="flex items-center text-xs font-normal text-gray-1200 uppercase">
                              Battery <SortIcon field="battery" active={sortField === "battery"} order={sortOrder} />
                            </button>
                          </th>
                          <th className="px-4 py-2.5 text-left text-xs font-normal text-gray-1200 uppercase">Signal</th>
                          <th className="px-4 py-2.5 text-left text-xs font-normal text-gray-1200 uppercase">Location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.length === 0 ? (
                          <tr>
                            <td colSpan={5} className="px-4 py-8 text-center text-sm text-gray-1200">No users match your search.</td>
                          </tr>
                        ) : (
                          users.map((u) => <UserListRow key={u.id} user={u} />)
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img src="/images/timer-icon2.svg" alt="" />
                  <h6 className="text-sm font-bold leading-5 text-black-1600">Timeline Playback</h6>
                </div>
                <h6 className="text-xs font-normal text-gray-1200">
                  {pos ? pos.timestamp : "—"}
                </h6>
              </div>
              <input
                type="range"
                min={0}
                max={Math.max(positions.length - 1, 1)}
                value={playbackIndex}
                onChange={(e) => setPlaybackIndex(Number(e.target.value))}
                className="w-full accent-blue1400 cursor-pointer"
              />
              <div className="flex items-center mt-3 justify-between">
                {positions.length > 0 ? (
                  <>
                    <h6 className="text-[10px] font-normal text-gray-1200">{positions[0]?.timestamp.slice(11, 16)}</h6>
                    {positions.length > 2 && (
                      <h6 className="text-[10px] font-normal text-gray-1200">{positions[Math.floor(positions.length / 2)]?.timestamp.slice(11, 16)}</h6>
                    )}
                    <h6 className="text-[10px] font-normal text-gray-1200">{positions[positions.length - 1]?.timestamp.slice(11, 16)}</h6>
                  </>
                ) : (
                  <h6 className="text-[10px] font-normal text-gray-1200">No data</h6>
                )}
              </div>
              {pos && (
                <div className="mt-2 bg-gray-1600 rounded-[10px] px-3 py-1.5">
                  <p className="text-xs text-gray-1200">
                    <span className="font-medium text-black-1600">{pos.address}</span> · {pos.lat.toFixed(4)}°N, {pos.lng.toFixed(4)}°E
                  </p>
                </div>
              )}
              <ul className="flex items-center mt-3 justify-center gap-2">
                <li>
                  <button onClick={() => stepPlayback("prev")} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                    <img src="/images/left-icon.svg" alt="" />
                  </button>
                </li>
                <li>
                  <button onClick={togglePlay} className="w-9 h-9 flex items-center justify-center bg-blue1400 rounded-full hover:opacity-90 transition-opacity">
                    {isPlaying
                      ? <svg width="14" height="14" viewBox="0 0 14 14" fill="white"><rect x="2" y="1" width="4" height="12" rx="1" /><rect x="8" y="1" width="4" height="12" rx="1" /></svg>
                      : <img src="/images/play-icon.svg" alt="" />
                    }
                  </button>
                </li>
                <li>
                  <button onClick={() => stepPlayback("next")} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
                    <img src="/images/right-icon.svg" alt="" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="2xl:w-4/12 md:w-1/2 w-full">
            <div className="bg-white border border-gray-1000 rounded-xl shadow-4xl p-6">
              <div className="flex items-center mb-3 gap-2">
                <img src="/images/shield-blue.svg" alt="" />
                <h6 className="text-base font-bold leading-5 text-black-1600">Data Retention &amp; Privacy</h6>
              </div>
              <div className="flex items-center mb-3 gap-2">
                <img src="/images/timer-gray.svg" className="w-[14px] h-[14px]" alt="" />
                <h6 className="text-xs font-normal leading-4 text-gray-1200">GPS Data Retention Period</h6>
              </div>
              <select
                value={retentionPeriod}
                onChange={(e) => setRetentionPeriod(e.target.value as any)}
                className="w-full bg-gray-1800 border border-gray-1000 rounded-[10px] px-3 h-9 text-sm text-black-1600 outline-none cursor-pointer"
              >
                {RETENTION_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
              <p className="text-[11px] mt-2 mb-5 leading-4 font-normal text-gray-1200">
                Data older than {retentionPeriod} is automatically purged per GDPR/local regulations.
              </p>
              <ul className="flex gap-2 mb-5">
                <li className="w-1/2">
                  <button
                    onClick={openPurgeModal}
                    className="text-sm leading-5 justify-center w-full text-white flex items-center gap-1.5 py-2 px-2.5 rounded-[10px] bg-red-1300 hover:opacity-90 transition-opacity"
                  >
                    <img src="/images/del-icon3.svg" alt="" /> Manual Purge
                  </button>
                </li>
                <li className="w-1/2">
                  <button
                    onClick={openExportModal}
                    className="text-sm leading-5 justify-center w-full text-black-1600 flex items-center gap-1.5 py-2 px-2.5 rounded-[10px] bg-gray-1800 border border-gray-1000 hover:bg-gray-100 transition-colors"
                  >
                    <img src="/images/download-file.svg" alt="" /> Legal Export
                  </button>
                </li>
              </ul>
              <div className="bg-gray-6000 rounded-[10px] p-3 flex items-center gap-2">
                <div className="text-[10px] leading-[15px] text-white py-1 px-2.5 bg-blue-2700 rounded-full">GDPR</div>
                <h6 className="text-[11px] leading-4 text-gray-1200">
                  Compliant with EU data retention laws. Consent-based purge available.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}