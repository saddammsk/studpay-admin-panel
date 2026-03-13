"use client";

import Link from "next/link";
import Image from "next/image";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import InputField from "@/app/components/InputField";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import { useSupportStore } from "@/app/store/zustand/useSupportStore";
import SupportStatsCards from "@/app/components/UserSupport/Supportstatscards";
import CustomerSatisfaction from "@/app/components/UserSupport/CustomerSatisfaction";
import AdminActions from "@/app/components/UsersStudent/AdminActions";
import ChatBox from "@/app/components/UserSupport/ChatBox";
import SupportTicketsSection from "@/app/components/UserSupport/SupportTicketsSection";

const UsersStudentsPage = () => {
  const {
    activeModal,
    openModal,
    closeModal,
    ticketForm,
    setTicketForm,
    setTicketFile,
    isTicketValid,
    escalationForm,
    setEscalationForm,
    isEscalationValid,
  } = useSupportStore();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setTicketFile(e.target.files[0]);
    }
  };

  const handleCreateTicket = () => {
    if (!isTicketValid()) return;
    closeModal();
  };

  const handleEscalate = () => {
    if (!isEscalationValid()) return;
    closeModal();
  };

  return (
    <div className="w-full">
      <div className="">
        <SupportStatsCards />

        <div className="flex 2xl:flex-row flex-col items-start gap-6 mt-6">
          <div className="2xl:w-[60%] w-full">

            <SupportTicketsSection/>

            <CustomerSatisfaction />

            <div className="xl:mt-6 mt-4 border border-solid border-gray-3600 bg-white shadow-64xl xl:p-6 p-4 rounded-lg">
              <h4 className="text-blue-1300 font-semibold text-[15.6px] leading-7 mb-3 flex items-center gap-2">
                <Image src="/icons/action-icon.svg" width={16} height={16} alt="" /> Quick Actions
              </h4>
              <button type="button" onClick={() => openModal("createTicket")} className="w-full flex items-center text-white gap-3 text-[13px] leading-5 bg-blue1400 rounded-lg px-4 py-3 cursor-pointer">
                <Image src="/icons/plus-rounded.svg" width={16} height={16} alt="" />
                Create New Ticket
              </button>
              <ul className="grid grid-cols-2 gap-2 mt-2 max-w-139.25 w-full">
                <li>
                  <button type="button" onClick={() => openModal("escalate")} className="w-full flex items-center text-red-1300 gap-3 text-[13px] leading-5 bg-gray-1500 border border-solid border-red-1300/30 rounded-lg px-4 py-3 cursor-pointer">
                    <Image src="/icons/escalate-top.svg" width={16} height={16} alt="" />
                    Escalate
                  </button>
                </li>
                <li>
                  <Link href="#" className="flex items-center text-blue-1300 gap-3 text-[13px] leading-5 bg-gray-1500 border border-solid border-gray-3600 rounded-lg px-4 py-3">
                    <Image src="/icons/bell-dark.svg" width={16} height={16} alt="" />
                    Notify
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="2xl:w-[40%] w-full">
            <ChatBox />
            <AdminActions/>
          </div>
        </div>
      </div>

      <Modal isOpen={activeModal === "createTicket"} onClose={closeModal} panelClassName="max-w-[560px] bg-gray22 border-gray1600! shadow-7xl! rounded-xl! relative h-full overflow-y-auto">
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="Close" />
        </button>
        <div className="md:p-6 p-4">
          <h4 className="text-black13 font-medium text-xl leading-7 tracking-[-0.5px] flex items-center gap-2">
            <Image src="/icons/Ticket-icon.svg" width={20} height={20} alt="" />
            Create Internal Support Ticket
          </h4>
          <p className="text-gray-1400 font-normal text-[13.1px] leading-5 mt-1.5">
            Manually create a ticket on behalf of a student who reported an issue via phone or email.
          </p>
          <div className="bg-gray1700/50 border border-solid border-gray1600 rounded-xl p-4 mt-6">
            <h4 className="text-gray-1400 font-medium text-xs leading-4 uppercase">Student Information</h4>
            <ul className="grid grid-cols-2 gap-6 mt-4.5">
              <li>
                <span className="text-gray-1400 font-normal text-[11.3px] leading-4 block mb-1.75">Student Name</span>
                <h5 className="text-black13 font-normal text-[13.3px] leading-5">Marcus Schmidt</h5>
              </li>
              <li>
                <span className="text-gray-1400 font-normal text-[11.3px] leading-4 block mb-1.75">Student ID</span>
                <h5 className="text-black13 font-normal text-[13.3px] leading-5">STU-2024-0847</h5>
              </li>
            </ul>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-4 md:mt-6 mt-4">
              <div>
                <label className="text-black13 mb-3 font-normal text-sm leading-5 flex items-center">Category <span className="text-red-1300">*</span></label>
                <CustomSelect className="rounded-[10px]!" value={ticketForm.category} onChange={(value: string) => setTicketForm({ category: value })} options={[{ label: "Select category", value: "" }, { label: "Card Issue", value: "card_issue" }, { label: "Account Access", value: "account_access" }, { label: "Payment", value: "payment" }]} />
              </div>
              <div>
                <label className="text-black13 mb-3 font-normal text-sm leading-5 flex items-center">Priority <span className="text-red-1300">*</span></label>
                <CustomSelect className="rounded-[10px]!" value={ticketForm.priority} onChange={(value: string) => setTicketForm({ priority: value })} options={[{ label: "Select priority", value: "" }, { label: "Low", value: "low" }, { label: "Medium", value: "medium" }, { label: "High", value: "high" }, { label: "Urgent", value: "urgent" }]} />
              </div>
            </div>
            <div className="md:mt-6 mt-4">
              <label className="text-black13 mb-3 font-normal text-sm leading-5 flex items-center">Subject <span className="text-red-1300">*</span></label>
              <InputField ClassName="bg-gray-1500 text-gray-3800 rounded-[10px]! px-3! h-10!" type="text" placeholder="Brief title for the issue..." value={ticketForm.subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTicketForm({ subject: e.target.value })} />
            </div>
            <div className="md:mt-6 mt-4">
              <label className="text-black13 mb-3 font-normal text-sm leading-5 flex items-center">Description <span className="text-red-1300">*</span></label>
              <textarea className="text-gray-1400 placeholder:text-gray-1200 h-30 font-normal text-[13.1px] focus:outline-0 leading-5 px-3.5 py-2.5 bg-gray22 border border-solid border-gray-1000 rounded-md w-full" placeholder="Detailed notes about the student's issue..." value={ticketForm.description} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setTicketForm({ description: e.target.value })} />
            </div>
            <div className="md:mt-6 mt-4">
              <label className="text-black13 mb-3 font-normal text-sm leading-5 flex items-center">Assign to Agent <span className="text-red-1300">*</span></label>
              <CustomSelect className="rounded-[10px]!" value={ticketForm.agent} onChange={(value: string) => setTicketForm({ agent: value })} options={[{ label: "Select agent", value: "" }, { label: "Sophie Martin", value: "sophie" }, { label: "Jean-Pierre Blanc", value: "jean" }]} />
            </div>
            <div className="md:mt-6 mt-4">
              <label className="text-black13 mb-3 font-normal text-sm leading-5 flex items-center">Attachments</label>
              <div className="flex items-center gap-3">
                <label className="group cursor-pointer inline-flex items-center bg-gray22 hover:bg-lightgreenNew3 hover:text-green15 border border-solid border-gray1600 rounded-[10px] h-9 gap-1.5 px-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="group-hover:stroke-green15" d="M14.2929 7.36645L8.16621 13.4931C7.41565 14.2437 6.39767 14.6653 5.33621 14.6653C4.27475 14.6653 3.25677 14.2437 2.50621 13.4931C1.75565 12.7425 1.33398 11.7246 1.33398 10.6631C1.33398 9.60166 1.75565 8.58367 2.50621 7.83311L8.21954 2.11978C8.71992 1.61852 9.39892 1.33656 10.1072 1.33594C10.8154 1.33531 11.495 1.61607 11.9962 2.11645C12.4975 2.61682 12.7794 3.29583 12.78 4.00409C12.7807 4.71235 12.4999 5.39185 11.9995 5.89311L6.27288 11.6064C6.02269 11.8566 5.68336 11.9972 5.32954 11.9972C4.97572 11.9972 4.6364 11.8566 4.38621 11.6064C4.13602 11.3563 3.99547 11.0169 3.99547 10.6631C3.99547 10.3093 4.13602 9.96997 4.38621 9.71978L10.0462 4.06645" stroke="#65758B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Attach File
                  <input type="file" className="hidden" onChange={handleFileChange} />
                </label>
                {ticketForm.file && (
                  <div className="flex items-center gap-2 text-sm text-blue-1300">
                    <span>{ticketForm.file.name}</span>
                    <button type="button" onClick={() => setTicketFile(null)} className="text-red-1300 text-xs cursor-pointer">✕</button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mt-6">
            <button type="button" disabled={!isTicketValid()} onClick={handleCreateTicket} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-blue600/90 transition-all duration-500 ease-in-out border rounded-[10px] text-white font-normal gap-2 text-sm leading-6 bg-blue600 border-solid border-blue600 disabled:opacity-50 h-11">
              Create & Notify Student
            </button>
          </div>
        </div>
      </Modal>

      <Modal isOpen={activeModal === "escalate"} onClose={closeModal} panelClassName="max-w-[520px] bg-white rounded-xl! border-gray-3600! relative h-full overflow-y-auto">
        <button type="button" onClick={closeModal} className="flex items-center justify-center rounded-lg w-4 h-4 absolute top-4 right-4 cursor-pointer">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="Close" />
        </button>
        <div className="md:px-6 md:pb-6 md:pt-10 p-4">
          <div className="flex items-center gap-3">
            <span className="bg-blue-1700/20 rounded-xl w-10 h-10 flex items-center justify-center">
              <Image src="/icons/arrow-up-rounded.svg" width={20} height={20} alt="" />
            </span>
            <div>
              <h4 className="text-blue1700 flex items-center font-bold text-lg leading-7 tracking-[-0.45px]">Escalation Command</h4>
              <p className="text-gray-2300 font-normal text-sm leading-5">Ticket <span className="text-xs leading-4 rounded h-4 px-1.5 bg-gray-5800">TKT-2847</span></p>
            </div>
          </div>
          <div className="bg-blue-1700/20 mt-3 flex items-center gap-2 border border-solid border-blue-1700/20 rounded-xl py-2 px-3">
            <span className="flex items-center justify-center w-4 h-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.108 14.9999L11.4414 3.33319C11.296 3.0767 11.0852 2.86335 10.8305 2.71492C10.5757 2.56649 10.2862 2.48828 9.99136 2.48828C9.69654 2.48828 9.40699 2.56649 9.15226 2.71492C8.89753 2.86335 8.68673 3.0767 8.54136 3.33319L1.8747 14.9999C1.72777 15.2543 1.65072 15.5431 1.65137 15.837C1.65202 16.1308 1.73035 16.4192 1.8784 16.673C2.02646 16.9269 2.23899 17.137 2.49444 17.2822C2.7499 17.4274 3.0392 17.5025 3.33303 17.4999H16.6664C16.9588 17.4996 17.246 17.4223 17.4991 17.2759C17.7522 17.1295 17.9624 16.9191 18.1085 16.6658C18.2545 16.4125 18.3314 16.1252 18.3313 15.8328C18.3312 15.5404 18.2542 15.2531 18.108 14.9999Z" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 7.5V10.8333" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 14.166H10.0083" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-DarkBrown122 text-xs leading-4 flex-1 w-full font-normal">This is a critical action. The ticket will be reassigned and the current agent removed.</p>
          </div>
          <div className="mt-6">
            <label className="text-blue1700 mb-2.5 font-bold text-sm leading-5 flex items-center">Escalation Reason <span className="text-red-1300">*</span></label>
            <CustomSelect className="rounded-[10px]!" value={escalationForm.reason} onChange={(value: string) => setEscalationForm({ reason: value })} options={[{ label: "Select a reason...", value: "" }, { label: "Unresponsive Agent", value: "unresponsive" }, { label: "Complex Issue", value: "complex" }, { label: "SLA Breach", value: "sla_breach" }]} />
          </div>
          <div className="mt-7">
            <label className="text-blue1700 mb-2.5 font-bold text-sm leading-5 flex items-center">Escalation Level<span className="text-red-1300">*</span></label>
            <div className="grid grid-cols-2 gap-3">
              {([2, 3] as const).map((level) => (
                <button key={level} type="button" onClick={() => setEscalationForm({ level })} className={`text-left bg-gray-1800 border border-solid rounded-xl p-3 cursor-pointer ${escalationForm.level === level ? "border-blue1700" : "border-gray-5600"}`}>
                  <h4 className="text-blue1700 text-sm leading-5 font-bold mb-[2.5px]">Level {level}</h4>
                  <p className="text-gray-2300 text-xs leading-4 font-normal">{level === 2 ? "Team Lead" : "Super Admin / Dev Team"}</p>
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <label className="text-blue1700 mb-2.5 font-bold text-sm leading-5 flex items-center">Internal Note<span className="text-red-1300">*</span></label>
            <textarea className="text-gray-2300 placeholder:text-gray-2300 h-25 font-normal text-sm focus:outline-0 leading-5 px-3.5 py-2.5 bg-gray-1800 border border-solid border-gray-5600 rounded-[10px] w-full" placeholder="Explain why you're escalating this case... (min 10 characters)" value={escalationForm.note} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEscalationForm({ note: e.target.value })} />
            <p className="text-gray-2300 text-xs leading-4 font-normal">{escalationForm.note.length}/500 characters</p>
          </div>
          <div className="mt-6 bg-gray-5800/30 border border-solid border-gray-5600 rounded-xl p-4">
            <h4 className="text-blue1700 text-sm leading-5 font-bold flex items-center gap-2">
              <Image src="/icons/bell-dark.svg" width={16} height={16} alt="" className="opacity-70" />Impact Notifications
            </h4>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h4 className="text-blue1700 text-sm leading-5 font-normal">Slack Notification</h4>
                <p className="text-gray-2300 text-xs leading-4 font-normal">Alert assignee via Slack channel</p>
              </div>
              <ToggleSwitch checked={escalationForm.slackNotification} onChange={(checked: boolean) => setEscalationForm({ slackNotification: checked })} />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <h4 className="text-blue1700 text-sm leading-5 font-normal">Email Notification</h4>
                <p className="text-gray-2300 text-xs leading-4 font-normal">Send email to new assignee</p>
              </div>
              <ToggleSwitch checked={escalationForm.emailNotification} onChange={(checked: boolean) => setEscalationForm({ emailNotification: checked })} />
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-3 mt-8">
            <li>
              <button type="button" onClick={closeModal} className="flex items-center justify-center px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10">Cancel</button>
            </li>
            <li>
              <button type="button" disabled={!isEscalationValid()} onClick={handleEscalate} className="cursor-pointer px-4 flex items-center justify-center w-full hover:bg-red-1000/90 transition-all duration-500 ease-in-out border rounded-md text-white font-normal gap-2 text-sm leading-5 bg-red-1000 border-solid border-red-1000 disabled:opacity-50 h-10">
                <Image src="/icons/arrow-up-rounded.svg" className="brightness-10000" width={16} height={16} alt="" />Escalate Now
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default UsersStudentsPage;