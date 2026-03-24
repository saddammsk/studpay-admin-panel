/* eslint-disable react-hooks/static-components */
'use client';
import TopBar from "@/app/components/common/TopBar";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import Link from "next/link";
import LedgerTable from "@/app/components/LedgerTable";
import ManagerTable from "@/app/components/ManagerTable";
import {
  useContentCMSStore,
  NotificationCategory,
  NotificationChannel,
  NotificationStatus,
} from "@/app/store/zustand/useContentCMSStore";

const CATEGORIES: NotificationCategory[] = ["Promotion", "Update", "Alert", "Announcement"];
const CHANNELS: NotificationChannel[] = ["Push", "Email", "In-App"];
const STATUSES: NotificationStatus[] = ["Live", "Draft", "Archived"];

function CreateContentModal() {
  const {
    isCreateModalOpen, contentForm, contentFormErrors, contentSaveSuccess,
    closeCreateModal, setContentField, submitContent,
  } = useContentCMSStore();

  if (!isCreateModalOpen) return null;

  const Field = ({ label, field, type = "text", placeholder }: { label: string; field: keyof typeof contentForm; type?: string; placeholder?: string }) => (
    <div>
      <label className="block text-xs font-medium text-gray-1200 mb-1">{label}</label>
      <input
        type={type}
        value={String(contentForm[field])}
        onChange={(e) => setContentField(field, e.target.value)}
        placeholder={placeholder}
        className={`w-full h-9 px-3 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-blue-1000 text-black-2600 ${(contentFormErrors as Record<string, string | undefined>)[field] ? "border-red-1300" : "border-gray-1000"}`}
      />
      {(contentFormErrors as Record<string, string | undefined>)[field] && (
        <p className="text-xs text-red-1300 mt-0.5">{(contentFormErrors as Record<string, string | undefined>)[field]}</p>
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-xl shadow-4xl w-full max-w-lg p-6 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h6 className="text-base font-bold text-black-2600">Create New Content</h6>
            <p className="text-xs text-gray-1200">Fill in the details to publish or schedule content</p>
          </div>
          <button onClick={closeCreateModal} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {contentSaveSuccess ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-green-1600/10 flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="#16A249" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm font-bold text-black-2600">Content created successfully!</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-3">
              <Field label="Title *" field="title" placeholder="e.g. Winter Semester Offer" />

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-1200 mb-1">Category *</label>
                  <select
                    value={contentForm.category}
                    onChange={(e) => setContentField("category", e.target.value)}
                    className={`w-full h-9 px-3 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-blue-1000 text-black-2600 ${contentFormErrors.category ? "border-red-1300" : "border-gray-1000"}`}
                  >
                    <option value="">Select category</option>
                    {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {contentFormErrors.category && <p className="text-xs text-red-1300 mt-0.5">{contentFormErrors.category}</p>}
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-1200 mb-1">Channel *</label>
                  <select
                    value={contentForm.channel}
                    onChange={(e) => setContentField("channel", e.target.value)}
                    className={`w-full h-9 px-3 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-blue-1000 text-black-2600 ${contentFormErrors.channel ? "border-red-1300" : "border-gray-1000"}`}
                  >
                    <option value="">Select channel</option>
                    {CHANNELS.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {contentFormErrors.channel && <p className="text-xs text-red-1300 mt-0.5">{contentFormErrors.channel}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Field label="Target Segment *" field="targetSegment" placeholder="e.g. All Users" />
                <div>
                  <label className="block text-xs font-medium text-gray-1200 mb-1">Status</label>
                  <select
                    value={contentForm.status}
                    onChange={(e) => setContentField("status", e.target.value)}
                    className="w-full h-9 px-3 text-sm border border-gray-1000 rounded-md outline-none bg-white focus:ring-1 focus:ring-blue-1000 text-black-2600"
                  >
                    {STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
              </div>

              <Field label="Scheduled Date" field="scheduledDate" type="date" />

              <div>
                <label className="block text-xs font-medium text-gray-1200 mb-1">Content Body *</label>
                <textarea
                  rows={4}
                  value={contentForm.body}
                  onChange={(e) => setContentField("body", e.target.value)}
                  placeholder="Write the message content..."
                  className={`w-full px-3 py-2 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-blue-1000 text-black-2600 resize-none ${contentFormErrors.body ? "border-red-1300" : "border-gray-1000"}`}
                />
                {contentFormErrors.body && <p className="text-xs text-red-1300 mt-0.5">{contentFormErrors.body}</p>}
              </div>
            </div>

            <div className="flex gap-3 mt-5">
              <button onClick={closeCreateModal} className="flex-1 h-9 border border-gray-1000 rounded-md text-sm text-black-2600 bg-white hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={submitContent} className="flex-1 h-9 rounded-md text-sm text-white bg-blue-1000 hover:bg-blue-1000/90 transition-opacity font-medium">
                Create Content
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function EmergencyAlertModal() {
  const {
    isEmergencyModalOpen, emergencyForm, emergencyFormErrors, emergencySentSuccess,
    closeEmergencyModal, setEmergencyField, toggleEmergencyChannel, submitEmergency,
  } = useContentCMSStore();

  if (!isEmergencyModalOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-xl shadow-4xl w-full max-w-md p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-red-1300/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 2L1.5 14h13L8 2Z" stroke="#EF4444" strokeWidth="1.3" strokeLinejoin="round" />
                <path d="M8 6v3.5M8 11h.01" stroke="#EF4444" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h6 className="text-base font-bold text-black-2600">Emergency Alert</h6>
              <p className="text-xs text-gray-1200">Broadcast immediately to all selected channels</p>
            </div>
          </div>
          <button onClick={closeEmergencyModal} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M13 1L1 13" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {emergencySentSuccess ? (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-green-1600/10 flex items-center justify-center mx-auto mb-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5 13L9 17L19 7" stroke="#16A249" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="text-sm font-bold text-black-2600">Emergency alert sent!</p>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-4">
              <div>
                <label className="block text-xs font-medium text-gray-1200 mb-1">Alert Title *</label>
                <input
                  type="text"
                  value={emergencyForm.title}
                  onChange={(e) => setEmergencyField("title", e.target.value)}
                  placeholder="e.g. Critical Security Issue"
                  className={`w-full h-9 px-3 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-red-1300 text-black-2600 ${emergencyFormErrors.title ? "border-red-1300" : "border-gray-1000"}`}
                />
                {emergencyFormErrors.title && <p className="text-xs text-red-1300 mt-0.5">{emergencyFormErrors.title}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-1200 mb-1">Message *</label>
                <textarea
                  rows={3}
                  value={emergencyForm.message}
                  onChange={(e) => setEmergencyField("message", e.target.value)}
                  placeholder="Describe the emergency clearly..."
                  className={`w-full px-3 py-2 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-red-1300 text-black-2600 resize-none ${emergencyFormErrors.message ? "border-red-1300" : "border-gray-1000"}`}
                />
                {emergencyFormErrors.message && <p className="text-xs text-red-1300 mt-0.5">{emergencyFormErrors.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-1200 mb-1">Target Segment *</label>
                <input
                  type="text"
                  value={emergencyForm.targetSegment}
                  onChange={(e) => setEmergencyField("targetSegment", e.target.value)}
                  className={`w-full h-9 px-3 text-sm border rounded-md outline-none bg-white focus:ring-1 focus:ring-red-1300 text-black-2600 ${emergencyFormErrors.targetSegment ? "border-red-1300" : "border-gray-1000"}`}
                />
                {emergencyFormErrors.targetSegment && <p className="text-xs text-red-1300 mt-0.5">{emergencyFormErrors.targetSegment}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-1200 mb-2">Broadcast Channels *</label>
                <div className="flex gap-2">
                  {CHANNELS.map((ch) => {
                    const active = emergencyForm.channels.includes(ch);
                    return (
                      <button
                        key={ch}
                        onClick={() => toggleEmergencyChannel(ch)}
                        className={`flex-1 h-9 text-xs font-medium rounded-md border transition-colors ${active ? "bg-red-1300 border-red-1300 text-white" : "border-gray-1000 text-black-2600 hover:bg-gray-50"}`}
                      >
                        {ch}
                      </button>
                    );
                  })}
                </div>
                {emergencyFormErrors.channels && <p className="text-xs text-red-1300 mt-1">{emergencyFormErrors.channels}</p>}
              </div>
            </div>

            <div className="bg-red-50 border border-red-1300/20 rounded-lg p-3 mb-4">
              <p className="text-xs text-red-1300 font-medium">⚠ This alert will be broadcast immediately. This action cannot be undone.</p>
            </div>

            <div className="flex gap-3">
              <button onClick={closeEmergencyModal} className="flex-1 h-9 border border-gray-1000 rounded-md text-sm text-black-2600 bg-white hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button onClick={submitEmergency} className="flex-1 h-9 rounded-md text-sm text-white bg-red-1300 hover:opacity-90 transition-opacity font-medium">
                Send Alert
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function ContentCMSPage() {
  const {
    ledgerSearch, setLedgerSearch,
    filteredNotifications, notifications,
    openCreateModal, openEmergencyModal,
    activePushCampaigns, pendingReviews,
  } = useContentCMSStore();

  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
      <TopBar />
      <CreateContentModal />
      <EmergencyAlertModal />

      <div className="flex xl:flex-nowrap flex-wrap xl:gap-0 gap-4 items-center bg-white justify-between 2xl:p-6 p-4">
        <div className="xl:flex-1">
          <h6 className="text-2xl font-bold leading-7 text-black-1600">Content CMS Hub</h6>
          <p className="text-sm font-normal leading-5 text-gray-1900">Manage all student-facing communications</p>
        </div>
        <form className="flex flex-wrap items-center gap-3" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <input
              type="text"
              value={ledgerSearch}
              onChange={(e) => setLedgerSearch(e.target.value)}
              className="text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-9 bg-white border border-gray1600 rounded-xl w-full outline-0"
              placeholder="Search communications..."
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="../images/search-icon.svg" width={16} height={16} alt="" />
            </div>
          </div>
          <Link href="/" className="w-10 h-10 flex items-center justify-center">
            <img src="/images/recycle-icon2.svg" alt="" />
          </Link>
        </form>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between flex-wrap gap-5 mb-6">
          <h6 className="text-sm font-normal leading-5 text-gray-1200">
            Last updated: <span className="text-black-2600">Today at 2:45 PM</span>
          </h6>
          <ul className="flex gap-3">
            <li>
              <button
                onClick={openCreateModal}
                className="text-white bg-blue-1000 flex items-center gap-2 justify-center h-10 px-4 rounded-md hover:bg-blue-1000/90 font-neulis-sans text-sm font-medium"
              >
                <img src="/images/plus-icon.svg" alt="" /> Create New Content
              </button>
            </li>
            <li>
              <button
                onClick={openEmergencyModal}
                className="text-white bg-red-1300 flex items-center gap-2 justify-center h-10 px-4 rounded-md hover:bg-red-1300/90 font-neulis-sans text-sm font-medium"
              >
                <img src="/images/caution-icon5.svg" alt="" /> Emergency Alert
              </button>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-3000 rounded-full block" />
          <h6 className="text-lg font-bold leading-7 text-black-2600">Campaign Visibility Metrics</h6>
        </div>

        <div className="grid 2xl:grid-cols-4 md:grid-cols-2 gap-4 mt-4 mb-6">
          <div className="bg-white border border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                  <img src="/images/eyes-blue.svg" className="w-5 h-5" alt="" />
                </div>
                <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">32.5%</h4>
                <span className="block text-sm font-medium leading-5 text-gray-1200">DAU/MAU Ratio</span>
              </div>
              <div className="text-xs font-normal leading-4 text-green-1600">8.2%</div>
            </div>
          </div>
          <div className="bg-white border border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                  <img src="/images/bell-icon-blue.svg" className="w-5 h-5" alt="" />
                </div>
                <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">{activePushCampaigns()}</h4>
                <span className="block text-sm font-medium leading-5 text-gray-1200">Active Push Campaigns</span>
              </div>
              <div className="text-xs font-normal leading-4 text-gray-1200">2 scheduled</div>
            </div>
          </div>
          <div className="bg-white border border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                  <img src="/images/file-tick-icon.svg" className="w-5 h-5" alt="" />
                </div>
                <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">{pendingReviews()}</h4>
                <span className="block text-sm font-medium leading-5 text-gray-1200">Pending Content Reviews</span>
              </div>
              <div className="text-xs font-normal leading-4 text-red-1300">3 urgent</div>
            </div>
          </div>
          <div className="bg-white border border-gray-1000 shadow-13xl rounded-2xl 4xl:p-6 pr-[18px] p-3">
            <div className="flex items-start justify-between">
              <div>
                <div className="bg-blue-3000/10 w-10 h-10 mb-3 flex items-center justify-center shadow-4xl rounded-xl">
                  <img src="/images/mobile-icon.svg" className="w-5 h-5" alt="" />
                </div>
                <h4 className="4xl:text-2xl text-[17px] font-bold mt-1 leading-9 text-black-2600">94.2%</h4>
                <span className="block text-sm font-medium leading-5 text-gray-1200">App Version Adoption</span>
              </div>
              <div className="text-xs font-normal leading-4 text-green-1600">+2.1%</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-1 h-5 bg-blue-3000 rounded-full block" />
          <h6 className="text-lg font-bold leading-7 text-black-2600">Communication Ledger</h6>
        </div>

        <div className="border border-gray-1000 mt-4 bg-white rounded-xl shadow-14xl">
     
          <LedgerTable />
        </div>

        <div className="flex mt-6 items-center gap-2">
          <span className="w-1 h-5 bg-blue-3000 rounded-full block" />
          <h6 className="text-lg font-bold leading-7 text-black-2600">Knowledge Base Manager</h6>
        </div>

        <div className="border border-gray-1000 mt-4 bg-white rounded-xl shadow-14xl">
          <div className="py-4 px-5 flex items-center justify-between flex-wrap gap-5">
            <div>
              <h6 className="text-base font-bold leading-6 text-black-2600">Knowledge Base Manager</h6>
              <p className="text-sm font-normal leading-5 text-gray-1200">Top searched help articles and FAQs</p>
            </div>
            <Link href="/" className="flex items-center gap-1 text-sm font-normal text-blue-3000">
              View All <img src="/images/export-blue.svg" alt="" />
            </Link>
          </div>
          <ManagerTable />
        </div>
      </div>
    </div>
  );
}

export default ContentCMSPage;