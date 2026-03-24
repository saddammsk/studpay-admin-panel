/* eslint-disable react-hooks/static-components */
"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import {
  usePartnerTableStore,
  TablePartnerStatus as PartnerStatus,
  SortField,
  CommissionRule,
  usePartnershipStore,
  PartnerType,
} from "@/app/store/zustand/Usepartnershipstore";

const statusConfig: Record<PartnerStatus, { classes: string }> = {
  Verified: { classes: "bg-green-1500/10 border-green-1500/20 text-green-1500" },
  Pending: { classes: "bg-yellow-1300/10 border-yellow-1300/20 text-orange-2000" },
  Inactive: { classes: "bg-gray1700 border-gray-3600 text-gray-1900" },
};

const CATEGORIES = ["All Categories", "Education", "Housing", "Finance"];
const TABLE_STATUSES: Array<PartnerStatus | "All Statuses"> = ["All Statuses", "Verified", "Pending", "Inactive"];

function SortIcon({ field, active, order }: { field: SortField; active: boolean; order: "asc" | "desc" }) {
  return (
    <span className="inline-flex flex-col ml-1 align-middle">
      <svg width="7" height="4" viewBox="0 0 7 4" className={active && order === "asc" ? "opacity-100" : "opacity-25"}>
        <path d="M3.5 0L7 4H0L3.5 0Z" fill="currentColor" />
      </svg>
      <svg width="7" height="4" viewBox="0 0 7 4" className={`mt-0.5 ${active && order === "desc" ? "opacity-100" : "opacity-25"}`}>
        <path d="M3.5 4L0 0H7L3.5 4Z" fill="currentColor" />
      </svg>
    </span>
  );
}

function RowMenu({ partnerId }: { partnerId: string }) {
  const { openMenuId, setOpenMenuId, updateStatus, removePartner } = usePartnerTableStore();
  const isOpen = openMenuId === partnerId;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpenMenuId(null);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, setOpenMenuId]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpenMenuId(isOpen ? null : partnerId)}
        className="w-7 h-7 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
      >
        <img src="/images/dots-icon2.svg" alt="" />
      </button>
      {isOpen && (
        <div className="absolute right-0 top-full mt-1 w-44 bg-white border border-gray-3600 rounded-lg shadow-13xl z-20 overflow-hidden">
          <button onClick={() => updateStatus(partnerId, "Verified")} className="w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-green-1500 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-1500 shrink-0" /> Mark Verified
          </button>
          <button onClick={() => updateStatus(partnerId, "Pending")} className="w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-orange-2000 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-1300 shrink-0" /> Mark Pending
          </button>
          <button onClick={() => updateStatus(partnerId, "Inactive")} className="w-full text-left text-xs px-3 py-2 hover:bg-gray-50 text-gray-1900 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" /> Mark Inactive
          </button>
          <div className="border-t border-gray-3600" />
          <button onClick={() => removePartner(partnerId)} className="w-full text-left text-xs px-3 py-2 hover:bg-red-50 text-red-1300 flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1.5 3h9M4.5 3V2a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v1M5 5.5v3M7 5.5v3M2 3l.5 6.5A1 1 0 003.5 10.5h5a1 1 0 001-1L10 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Remove Partner
          </button>
        </div>
      )}
    </div>
  );
}

function CommissionsModal() {
  const {
    isCommissionsModalOpen, closeCommissionsModal,
    commissionRules, updateRule, saveCommissions, commissionSaveSuccess,
  } = usePartnerTableStore();

  if (!isCommissionsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-xl shadow-4xl w-full max-w-2xl p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h6 className="text-base font-bold text-black-1600">Manage Commissions</h6>
            <p className="text-xs text-gray-1900">Set commission rates and bonus thresholds per partner type</p>
          </div>
          <button onClick={closeCommissionsModal} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {commissionSaveSuccess ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-green-1500/10 flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="#16A249" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm font-bold text-black-1600">Commission rules saved!</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-5 gap-2 mb-2 px-2">
              {["Partner Type", "Base Rate (%)", "Min Students", "Bonus Threshold", "Bonus Rate (%)"].map((h) => (
                <p key={h} className="text-xs font-medium text-gray-1900 uppercase">{h}</p>
              ))}
            </div>
            <div className="space-y-3">
              {commissionRules.map((rule: CommissionRule) => (
                <div key={rule.id} className="grid grid-cols-5 gap-2 bg-gray-1500 border border-gray-3600 rounded-lg p-3 items-center">
                  <div className="text-xs font-medium text-black-1600 py-0.5 px-2.5 border border-gray-3600 rounded-full w-fit">
                    {rule.partnerType}
                  </div>
                  {(["rate", "minStudents", "bonusThreshold", "bonusRate"] as const).map((field) => (
                    <input
                      key={field}
                      type="number"
                      value={rule[field]}
                      onChange={(e) => updateRule(rule.id, field, Number(e.target.value))}
                      className="h-8 px-2 text-sm border border-gray-3600 rounded-md outline-none focus:ring-1 focus:ring-gray-7400 bg-white text-black-1600 w-full"
                      min={0}
                    />
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-xs text-blue-700 font-medium mb-1">How bonuses work</p>
              <p className="text-xs text-blue-600">
                When a partner exceeds the bonus threshold (active students), they earn the base rate + bonus rate on all referrals above the threshold.
              </p>
            </div>

            <div className="flex gap-3 mt-5">
              <button onClick={closeCommissionsModal} className="flex-1 h-9 border border-gray-3600 rounded-md text-sm text-black-1600 bg-gray-1500 hover:bg-gray-100 transition-colors">
                Cancel
              </button>
              <button onClick={saveCommissions} className="flex-1 h-9 rounded-md text-sm text-white bg-gray-7400 hover:opacity-90 transition-opacity font-medium">
                Save Changes
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const SORTABLE: Array<{ key: SortField; label: string }> = [
  { key: "name", label: "Partner Name" },
  { key: "activeStudents", label: "Active Students" },
  { key: "conversion", label: "Conversion %" },
  { key: "commission", label: "Commission" },
];


type FormField = "name" | "country" | "type" | "email" | "phone" | "commissionRate";
const TYPE_OPTIONS: Array<PartnerType | "All Types"> = ["All Types", "Education", "Housing", "Insurance", "FinTech"];
const STATUS_OPTIONS: Array<PartnerStatus | "All Statuses"> = ["All Statuses", "Verified", "Pending", "Suspended"];

function OnboardModal() {
  const {
    isOnboardModalOpen, onboardForm, onboardErrors, onboardSuccess,
    closeOnboardModal, setOnboardField, submitOnboard,
  } = usePartnershipStore();

  if (!isOnboardModalOpen) return null;

  const Field = ({ label, field, type = "text", placeholder }: { label: string; field: FormField; type?: string; placeholder?: string }) => (
    <div>
      <label className="block text-xs font-medium text-gray-1900 mb-1">{label}</label>
      <input
        type={type}
        value={onboardForm[field]}
        onChange={(e) => setOnboardField(field, e.target.value)}
        placeholder={placeholder}
        className={`w-full h-9 px-3 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-gray-7400 text-black-1600 ${onboardErrors[field] ? "border-red-1300" : "border-gray-3600"}`}
      />
      {onboardErrors[field] && <p className="text-xs text-red-1300 mt-0.5">{onboardErrors[field]}</p>}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-xl shadow-4xl w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h6 className="text-base font-bold text-black-1600">Onboard New Partner</h6>
            <p className="text-xs text-gray-1900">Fill in partner details to begin onboarding</p>
          </div>
          <button onClick={closeOnboardModal} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {onboardSuccess ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-green-1500/10 flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="#16A249" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm font-bold text-black-1600">Partner onboarded successfully!</p>
            <p className="text-xs text-gray-1900 mt-1">Awaiting verification review.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Field label="Partner Name *" field="name" placeholder="e.g. TU Berlin" />
              <Field label="Country *" field="country" placeholder="e.g. Germany" />
            </div>
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-1900 mb-1">Partner Type *</label>
              <select
                value={onboardForm.type}
                onChange={(e) => setOnboardField("type", e.target.value)}
                className={`w-full h-9 px-3 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-gray-7400 text-black-1600 ${onboardErrors.type ? "border-red-1300" : "border-gray-3600"}`}
              >
                <option value="">Select type</option>
                {(["Education", "Housing", "Insurance", "FinTech"] as PartnerType[]).map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
              {onboardErrors.type && <p className="text-xs text-red-1300 mt-0.5">{onboardErrors.type}</p>}
            </div>
            <div className="grid grid-cols-2 gap-3 mb-3">
              <Field label="Email *" field="email" type="email" placeholder="partner@example.com" />
              <Field label="Phone *" field="phone" placeholder="+49 30 1234 5678" />
            </div>
            <div className="mb-5">
              <Field label="Commission Rate (%) *" field="commissionRate" type="number" placeholder="e.g. 15" />
            </div>
            <div className="flex gap-3">
              <button onClick={closeOnboardModal} className="flex-1 h-9 border border-gray-3600 rounded-md text-sm text-black-1600 bg-gray-1500 hover:bg-gray-100 transition-colors">
                Cancel
              </button>
              <button onClick={submitOnboard} className="flex-1 h-9 rounded-md text-sm text-white bg-gray-7400 hover:opacity-90 transition-opacity font-medium">
                Onboard Partner
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}


export default function PartnerTable() {
  const {
    filteredSortedPartners, sortField, sortOrder, toggleSort,
    tableSearch, setTableSearch,
    tableCategoryFilter, setTableCategoryFilter,
    tableStatusFilter, setTableStatusFilter,
    openCommissionsModal,
  } = usePartnerTableStore();

  const {
  openOnboardModal
  } = usePartnershipStore();

  const partners = filteredSortedPartners();

  return (
    <>
      <CommissionsModal />
         <OnboardModal />

      <div className="px-4 py-3 bg-gray-1500 border-b border-gray-3600 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={tableSearch}
            onChange={(e) => setTableSearch(e.target.value)}
            placeholder="Search partners..."
            className="w-full pl-8 pr-3 h-9 text-sm border border-gray-3600 rounded-md bg-white outline-none focus:ring-1 focus:ring-gray-7400 text-gray-1900 placeholder:text-gray-1900"
          />
        </div>
        <select
          value={tableCategoryFilter}
          onChange={(e) => setTableCategoryFilter(e.target.value)}
          className="h-9 px-3 text-sm border border-gray-3600 rounded-md bg-white outline-none cursor-pointer text-black-1600"
        >
          {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          value={tableStatusFilter}
          onChange={(e) => setTableStatusFilter(e.target.value as PartnerStatus | "All Statuses")}
          className="h-9 px-3 text-sm border border-gray-3600 rounded-md bg-white outline-none cursor-pointer text-black-1600"
        >
          {TABLE_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <button
          onClick={openCommissionsModal}
          className="ml-auto text-black-1600 text-sm font-medium leading-5 flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-3600 rounded-md hover:bg-gray-50 transition-colors"
        >
          <img src="/images/setting-icon.svg" alt="" /> Manage Commissions
        </button>

         <button
                onClick={openOnboardModal}
                className="text-white bg-gray-7400 justify-center h-9 px-3 rounded-md hover:opacity-90 transition-opacity font-medium text-sm flex items-center gap-2"
              >
                <img src="/images/plus-icon.svg" alt="" /> Onboard New Partner
              </button>
      </div>

      <div className="border-t border-gray-1000 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-5600">
              <th className="px-4 py-3 text-left text-sm text-black-1600">Partner ID</th>
              {SORTABLE.map(({ key, label }) => (
                <th key={key} className="px-4 py-3 text-left text-sm text-black-1600">
                  <button onClick={() => toggleSort(key)} className="flex items-center gap-0.5 hover:opacity-70 transition-opacity">
                    {label}
                    <SortIcon field={key} active={sortField === key} order={sortOrder} />
                  </button>
                </th>
              ))}
              <th className="px-4 py-3 text-left text-sm text-black-1600">Category</th>
              <th className="px-4 py-3 text-left text-sm text-black-1600">Country</th>
              <th className="px-4 py-3 text-left text-sm text-black-1600">Status</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {partners.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-8 text-center text-sm text-gray-1900">
                  No partners match your filters.
                </td>
              </tr>
            ) : (
              partners.map((item) => (
                <tr key={item.id} className="border-b border-gray-3600">
                  <td className="px-4 py-6 text-sm text-gray-1900">{item.id}</td>
                  <td className="px-4 py-6 text-sm">
                    <div className="flex items-center gap-3 text-black-1600">
                      <Image src={item.logo} alt={item.name} width={16} height={16} className="rounded-full object-cover" />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-6 text-sm font-medium text-black-1600">{item.activeStudents.toLocaleString()}</td>
                  <td className={`px-4 py-6 text-sm font-medium ${parseFloat(item.conversion) > 60 ? "text-green-1500" : parseFloat(item.conversion) > 50 ? "text-orange-2000" : "text-gray-1900"}`}>
                    {item.conversion}
                  </td>
                  <td className="px-4 py-6 text-sm">{item.commission}</td>
                  <td className="px-4 py-6 text-sm text-gray-1900">
                    <span className="py-0.5 px-2.5 border border-gray-3600 rounded-full inline-block">{item.category}</span>
                  </td>
                  <td className="px-4 py-6 text-sm text-gray-1900">{item.country}</td>
                  <td className="px-4 py-6">
                    <span className={`px-3 h-5.5 rounded-full text-xs border inline-flex items-center justify-center ${statusConfig[item.status].classes}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-6">
                    <RowMenu partnerId={item.id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}