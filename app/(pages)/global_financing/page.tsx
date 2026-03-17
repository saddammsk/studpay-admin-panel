"use client";


import { create } from "zustand";
import Image from "next/image";

import Modal from "@/app/components/Modal";
import ProgressBar from "@/app/components/ProgressBar";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";



type Status = "Approved" | "Under Review" | "Pending" | "Rejected";
type DocumentStatus = "Verified" | "Pending";
type SortField = "id" | "applicant" | "amount" | "sla" | "aiScore" | null;
type SortDir = "asc" | "desc";

interface CaseItem {
  id: string;
  applicant: string;
  amount: string;
  amountNum: number;    
  bank: string;
  manager: { name: string; phone: string };
  sla: string;
  slaNum: number;      
  status: Status;
  statusIcon: string;
  aiScore: number;
  aiScoreIcon: string;
}

interface ChatMessage {
  id: number;
  author: string;
  time: string;
  text: string;
  side: "left" | "right";
  internal?: boolean;
}

interface Document {
  label: string;
  status: DocumentStatus;
}

interface PaymentStat {
  value: number;
  label: string;
  color: string;
  bg: string;
}



const CASES: CaseItem[] = [
  {
    id: "STD-2024-001", applicant: "Ahmed Benali",   amount: "€25,000", amountNum: 25000,
    bank: "Deutsche Bank",    manager: { name: "Klaus Fischer",       phone: "+49 170 123456" },
    sla: "3d",  slaNum: 3,  status: "Approved",     statusIcon: "/images/checkgreendark.svg",  aiScore: 87, aiScoreIcon: "/icons/aiScoregreen.svg",
  },
  {
    id: "STD-2024-002", applicant: "Marie Dupont",   amount: "€18,500", amountNum: 18500,
    bank: "BNP Paribas",      manager: { name: "Jean-Pierre Moreau", phone: "+33 6 12345678" },
    sla: "7d",  slaNum: 7,  status: "Under Review", statusIcon: "/images/clock-yellow.svg",    aiScore: 72, aiScoreIcon: "/icons/aiScoreblue.svg",
  },
  {
    id: "STD-2024-003", applicant: "Carlos Mendes",  amount: "€32,000", amountNum: 32000,
    bank: "Société Générale", manager: { name: "Isabella Laurent",   phone: "+33 7 98765432" },
    sla: "12d", slaNum: 12, status: "Pending",       statusIcon: "/icons/warning-dark.svg",    aiScore: 58, aiScoreIcon: "/icons/aiScorered.svg",
  },
  {
    id: "STD-2024-004", applicant: "Fatima Zahra",   amount: "€21,000", amountNum: 21000,
    bank: "Deutsche Bank",    manager: { name: "Klaus Fischer",       phone: "+49 170 123456" },
    sla: "1d",  slaNum: 1,  status: "Approved",     statusIcon: "/images/checkgreendark.svg",  aiScore: 93, aiScoreIcon: "/icons/aiScoregreen.svg",
  },
  {
    id: "STD-2024-005", applicant: "Liam O'Brien",   amount: "€15,000", amountNum: 15000,
    bank: "ABN AMRO",         manager: { name: "Pieter van den Berg", phone: "+31 6 87654321" },
    sla: "5d",  slaNum: 5,  status: "Under Review", statusIcon: "/images/clock-yellow.svg",    aiScore: 65, aiScoreIcon: "/icons/aiScoreblue.svg",
  },
  {
    id: "STD-2024-006", applicant: "Yuki Tanaka",    amount: "€28,000", amountNum: 28000,
    bank: "BNP Paribas",      manager: { name: "Sophie Martin",       phone: "+33 6 55443322" },
    sla: "15d", slaNum: 15, status: "Rejected",     statusIcon: "/images/cross-circle.svg",    aiScore: 34, aiScoreIcon: "/icons/aiScorered.svg",
  },
  {
    id: "STD-2024-007", applicant: "Anna Kowalski",  amount: "€19,500", amountNum: 19500,
    bank: "Deutsche Bank",    manager: { name: "Markus Weber",        phone: "+49 171 654321" },
    sla: "2d",  slaNum: 2,  status: "Approved",     statusIcon: "/images/checkgreendark.svg",  aiScore: 88, aiScoreIcon: "/icons/aiScoregreen.svg",
  },
];

const PAYMENT_STATS: PaymentStat[] = [
  { value: 18, label: "On Time", color: "text-green57",      bg: "bg-green57/10"      },
  { value: 2,  label: "Late",    color: "text-yellow-1100",  bg: "bg-yellow-1100/10"  },
  { value: 0,  label: "Missed", color: "text-red-1300",     bg: "bg-red-1300/10"     },
];

const DOCUMENTS: Document[] = [
  { label: "Student ID",            status: "Verified" },
  { label: "Proof of Income",       status: "Verified" },
  { label: "Bank Statement",        status: "Pending"  },
  { label: "Enrollment Certificate",status: "Verified" },
];

const INITIAL_CHAT: ChatMessage[] = [
  { id: 1, author: "Ahmed Hassan", time: "10:23 AM", side: "left",
    text: "Hello, I tried to pay my housing deposit of €500 but the transaction failed. My bank shows the amount was debited but I didn't receive any confirmation from StudPay." },
  { id: 2, author: "Sarah (Support)", time: "10:25 AM", side: "right",
    text: "Hi Ahmed, I'm sorry to hear about this issue. Let me check your transaction details right away. Can you please share the last 4 digits of the card you used?" },
  { id: 3, author: "Ahmed Hassan", time: "10:27 AM", side: "left",
    text: "Yes, the card ends with 4521. The transaction was at 9:45 AM today." },
  { id: 4, author: "Sarah → Finance Team", time: "10:28 AM", side: "right", internal: true,
    text: "Need to check Stripe logs for transaction around 9:45 AM, card ending 4521. Student claims amount debited but no confirmation. Possible timeout issue?" },
  { id: 5, author: "Sarah (Support)", time: "10:32 AM", side: "right",
    text: "Thank you, Ahmed. I can see your transaction in our system. It appears there was a timeout during processing. The payment was actually successful but the confirmation email wasn't sent. I'm processing the booking now and you'll receive confirmation within 5 minutes." },
];



const SCORE_CONFIG: Record<number, string> = {
  87: "bg-lightgreenNew4 text-green58 shadow-69xl",
  72: "bg-lighrgrey43 text-ElectricBlue2 shadow-70xl",
  58: "bg-bgRed12 text-red2100",
  93: "bg-lightgreenNew4 text-green58 shadow-69xl",
  65: "bg-lighrgrey43 text-ElectricBlue2 shadow-70xl",
  34: "bg-bgRed12 text-red2100",
  88: "bg-lightgreenNew4 text-green58 shadow-69xl",
};

const STATUS_CONFIG: Record<Status, string> = {
  Approved:      "bg-lightgreenNew4 text-green58",
  "Under Review":"bg-yellow-3100 text-yellow-1100",
  Pending:       "bg-gray-6100 text-ElectricBlue2",
  Rejected:      "bg-gray-6100 text-red2100",
};

const SLA_COLOR: Record<Status, string> = {
  Approved:      "text-green58",
  "Under Review":"text-yellow-1100",
  Pending:       "text-blue-1100",
  Rejected:      "text-red2100",
};



interface TableStore {
  isCreditModalOpen: boolean;
  isAiModalOpen: boolean;
  selectedCase: CaseItem | null;
  openCreditModal: (c: CaseItem) => void;
  openAiModal: (c: CaseItem) => void;
  closeModals: () => void;

  aiActiveTab: number;
  setAiActiveTab: (idx: number) => void;

  sortField: SortField;
  sortDir: SortDir;
  toggleSort: (field: SortField) => void;

  filterOpen: boolean;
  filterStatus: Status | "All";
  filterBank: string;
  toggleFilterPanel: () => void;
  setFilterStatus: (s: Status | "All") => void;
  setFilterBank: (b: string) => void;
  resetFilters: () => void;

  chatMessages: ChatMessage[];
  chatInput: string;
  setChatInput: (v: string) => void;
  sendMessage: () => void;
}

const useTableStore = create<TableStore>((set, get) => ({
  // Modals
  isCreditModalOpen: false,
  isAiModalOpen: false,
  selectedCase: null,
  openCreditModal: (c) => set({ isCreditModalOpen: true, selectedCase: c }),
  openAiModal:    (c) => set({ isAiModalOpen: true,     selectedCase: c }),
  closeModals:    ()  => set({ isCreditModalOpen: false, isAiModalOpen: false }),

  // AI tab
  aiActiveTab: 0,
  setAiActiveTab: (idx) => set({ aiActiveTab: idx }),

  // Sort
  sortField: null,
  sortDir: "asc",
  toggleSort: (field) => {
    const { sortField, sortDir } = get();
    if (sortField === field) {
      set({ sortDir: sortDir === "asc" ? "desc" : "asc" });
    } else {
      set({ sortField: field, sortDir: "asc" });
    }
  },

  // Filter
  filterOpen: false,
  filterStatus: "All",
  filterBank: "All",
  toggleFilterPanel: () => set((s) => ({ filterOpen: !s.filterOpen })),
  setFilterStatus:   (v) => set({ filterStatus: v }),
  setFilterBank:     (v) => set({ filterBank: v }),
  resetFilters:      ()  => set({ filterStatus: "All", filterBank: "All" }),

  // Chat
  chatMessages: INITIAL_CHAT,
  chatInput: "",
  setChatInput: (v) => set({ chatInput: v }),
  sendMessage: () => {
    const { chatInput, chatMessages } = get();
    const trimmed = chatInput.trim();
    if (!trimmed) return;
    const newMsg: ChatMessage = {
      id: Date.now(),
      author: "Sarah (Support)",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      side: "right",
      text: trimmed,
    };
    set({ chatMessages: [...chatMessages, newMsg], chatInput: "" });
  },
}));



function getSortedFiltered(
  cases: CaseItem[],
  sortField: SortField,
  sortDir: SortDir,
  filterStatus: Status | "All",
  filterBank: string
): CaseItem[] {
  let result = [...cases];

  if (filterStatus !== "All") result = result.filter((c) => c.status === filterStatus);
  if (filterBank   !== "All") result = result.filter((c) => c.bank   === filterBank);

  if (sortField) {
    result.sort((a, b) => {
      let av: string | number = a[sortField] as string | number;
      let bv: string | number = b[sortField] as string | number;
      if (sortField === "amount") { av = a.amountNum; bv = b.amountNum; }
      if (sortField === "sla")    { av = a.slaNum;    bv = b.slaNum;    }
      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
  }

  return result;
}



const StatusBadge = ({ status }: { status: DocumentStatus }) => (
  <span
    className={`text-xs leading-4 font-normal w-15.75 h-6 rounded-full inline-flex items-center justify-center ${
      status === "Verified"
        ? "bg-green57/10 text-green57"
        : "bg-yellow-1100/10 text-yellow-1100"
    }`}
  >
    {status}
  </span>
);

const SortIcon = ({ field }: { field: SortField }) => {
  const { sortField, sortDir } = useTableStore();
  const active = sortField === field;
  return (
    <span className={`ml-1 inline-flex flex-col text-[8px] leading-none ${active ? "opacity-100" : "opacity-30"}`}>
      <span className={active && sortDir === "asc"  ? "text-ElectricBlue2" : ""}>▲</span>
      <span className={active && sortDir === "desc" ? "text-ElectricBlue2" : ""}>▼</span>
    </span>
  );
};


const BANKS    = ["All", "Deutsche Bank", "BNP Paribas", "Société Générale", "ABN AMRO"];
const STATUSES: (Status | "All")[] = ["All", "Approved", "Under Review", "Pending", "Rejected"];

function FilterPanel() {
  const { filterOpen, filterStatus, filterBank, setFilterStatus, setFilterBank, resetFilters } =
    useTableStore();

  if (!filterOpen) return null;

  return (
    <div className="absolute top-12 left-0 z-20 bg-white border border-gray-3100 rounded-xl shadow-lg p-4 w-64">
      <div className="mb-3">
        <p className="text-xs font-bold text-grey5700 uppercase mb-2">Status</p>
        <div className="flex flex-wrap gap-1.5">
          {STATUSES.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className={`px-2.5 py-1 rounded-full text-[10px] font-bold transition-all ${
                filterStatus === s
                  ? "bg-ElectricBlue2 text-white"
                  : "bg-gray-6100 text-grey5700 hover:bg-gray-200"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <div className="mb-3">
        <p className="text-xs font-bold text-grey5700 uppercase mb-2">Bank</p>
        <select
          value={filterBank}
          onChange={(e) => setFilterBank(e.target.value)}
          className="w-full text-xs border border-gray-3100 rounded-md px-2 py-1.5 outline-none text-black-1300"
        >
          {BANKS.map((b) => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>
      <button
        onClick={resetFilters}
        className="text-xs text-red2100 hover:underline mt-1"
      >
        Reset filters
      </button>
    </div>
  );
}



function CreditModalContent() {
  const { selectedCase } = useTableStore();

  return (
    <>
      <div>
        <h4 className="text-blue-1300 font-bold text-lg leading-7">Credit Assessment</h4>
        <p className="text-gray-1900 font-normal text-sm leading-5 mt-1">
          Financial breakdown for {selectedCase?.applicant ?? "—"}
        </p>
      </div>
      <div className="mt-6 flex items-center gap-4 bg-gray-7500 rounded-lg p-4">
        <div className="w-12 h-12 rounded-full bg-blue-2200/10 flex items-center justify-center">
          <span className="text-lg font-bold text-blue-2200 leading-7">
            {selectedCase?.applicant.split(" ").map((n) => n[0]).join("").slice(0, 2) ?? "?"}
          </span>
        </div>
        <div>
          <p className="text-base font-bold text-blue-1300 leading-6">{selectedCase?.applicant}</p>
          <p className="text-sm text-gray-1900 font-normal leading-5">{selectedCase?.bank}</p>
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg border border-gray-3600 p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm leading-5 font-normal text-gray-1900 block">Credit Score</span>
          <span className="text-lg leading-7 font-bold text-green57 block">78/100</span>
        </div>
        <ProgressBar value={78} bgColor="bg-gray-7500" barColor="bg-green57" />
        <p className="text-gray-1900 text-sm leading-5 mt-3">
          Based on payment history, income stability, and debt levels.
        </p>
      </div>
      <div className="border-t border-solid border-gray-3600 pt-6 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/images/wallet-blue.svg" width={16} height={16} alt="" />
          <h2 className="text-sm leading-6 font-bold text-blue-1300">Financial Overview</h2>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-gray-7500 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Image src="/images/price-arrow-green.svg" width={16} height={16} alt="" />
              <span className="text-sm leading-4 text-green57 font-normal">Monthly Income</span>
            </div>
            <p className="text-lg leading-7 font-bold text-blue-1300">€1,200</p>
          </div>
          <div className="bg-gray-7500 rounded-lg p-3">
            <div className="flex items-center gap-2 mb-1">
              <Image src="/images/price-down-arrow-yellow.svg" width={16} height={16} alt="" />
              <span className="text-sm leading-4 text-yellow-1100 font-normal">Monthly Expenses</span>
            </div>
            <p className="text-lg leading-7 font-bold text-blue-1300">€680</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-7500 rounded-lg p-3 mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-gray-1900 text-sm leading-5 font-normal block">Debt-to-Income Ratio</span>
          <span className="text-yellow-1100 text-sm leading-5 font-normal block">56.7%</span>
        </div>
        <ProgressBar value={56} bgColor="bg-gray-1500" barColor="bg-yellow-1100" />
      </div>
      <div className="border-t border-solid border-gray-3600 pt-6 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/icons/card-blue2.svg" width={16} height={16} alt="" />
          <h2 className="text-sm leading-6 font-bold text-blue-1300">Payment History</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {PAYMENT_STATS.map((stat) => (
            <div key={stat.label} className={`${stat.bg} rounded-lg p-3 flex flex-col items-center`}>
              <span className={`text-2xl leading-8 font-bold ${stat.color}`}>{stat.value}</span>
              <span className="text-xs leading-4 text-gray-1900 font-normal">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-solid border-gray-3600 pt-6 mt-6">
        <div className="flex items-center gap-2 mb-4">
          <Image src="/icons/file-check-blue.svg" width={16} height={16} alt="" />
          <h2 className="text-sm leading-6 font-bold text-blue-1300">Verification Documents</h2>
        </div>
        {DOCUMENTS.map((doc) => (
          <div key={doc.label} className="flex items-center justify-between bg-gray-7500 rounded-lg p-3 mb-2 last:mb-0">
            <span className="text-sm text-slate-600 font-medium">{doc.label}</span>
            <StatusBadge status={doc.status} />
          </div>
        ))}
      </div>
    </>
  );
}


function AiModalContent() {
  const {
    selectedCase,
    aiActiveTab, setAiActiveTab,
    chatMessages, chatInput, setChatInput, sendMessage,
  } = useTableStore();

  return (
    <>
      <div className="rounded-xl sm:px-6 sm:py-5 p-4 bg-linear-to-r from-violet123 to-ElectricBlue2">
        <h4 className="text-white font-bold sm:text-xl text-[17px] leading-7 flex items-center gap-2">
          <Image src="/icons/white-star.svg" width={20} height={20} alt="" />
          Fiche Diagnostic — AI Scoring
        </h4>
        <p className="text-white/70 font-normal text-sm leading-5 mt-1">
          {selectedCase?.applicant} • Dossier #{selectedCase?.id} • {selectedCase?.bank} • {selectedCase?.amount}
        </p>
      </div>

      <div className="mt-6">
        <TabGroup selectedIndex={aiActiveTab} onChange={setAiActiveTab}>
          <TabList className="border-b border-solid border-gray-3100 flex sm:gap-4 gap-2">
            {["Diagnostic", "Recommendations", "Communication"].map((label) => (
              <Tab
                key={label}
                className={({ selected }) =>
                  selected
                    ? "border-b-2 border-solid border-ElectricBlue2 text-ElectricBlue2 sm:text-sm text-xs leading-4 font-normal sm:pl-5 sm:pr-3.5 px-2.5 py-3 focus:outline-none"
                    : "text-grey5700 border-b-2 border-solid border-transparent sm:text-sm text-xs leading-4 font-normal sm:pl-5 sm:pr-3.5 px-2.5 py-3 hover:text-ElectricBlue2 hover:border-ElectricBlue2 cursor-pointer focus:outline-none"
                }
              >
                {label}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="mt-6">
                <div className="flex md:flex-row flex-col xl:gap-19 gap-4">
                  <div className="xl:max-w-124.25 md:max-w-87.5 max-w-full w-full border border-solid border-gray-3100 rounded-xl bg-white p-6">
                    <h4 className="text-blue-1200 text-sm leading-5 font-bold text-center">Credit Risk Meter</h4>
                    <div className="flex items-center justify-center mt-4">
                      <Image src="/images/Meter-img.png" width={192} height={96} alt="" />
                    </div>
                    <div className="text-center mt-4">
                      <h4 className="text-[36px] leading-10 font-bold text-green58">
                        {selectedCase?.aiScore ?? "—"}
                      </h4>
                      <p className="text-xs leading-4 font-normal text-grey5700 mt-1">
                        {(selectedCase?.aiScore ?? 0) >= 80 ? "Low Risk" : (selectedCase?.aiScore ?? 0) >= 60 ? "Medium Risk" : "High Risk"}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="w-full border border-solid border-gray-3100 rounded-xl bg-white p-6">
                      <h4 className="text-blue-1200 mb-4 text-sm leading-5 font-bold">Key Scoring Factors</h4>
                      {[
                        { label: "Income Stability",    value: 82, color: "text-ElectricBlue2", bg: "bg-lighrgrey43",   bar: "bg-ElectricBlue2" },
                        { label: "Repayment History",   value: 91, color: "text-green58",       bg: "bg-green58/20",    bar: "bg-green58"       },
                        { label: "Debt-to-Income Ratio",value: 45, color: "text-yellow-1100",   bg: "bg-yellow-1100/20",bar: "bg-yellow-1100"   },
                        { label: "Employment Duration", value: 73, color: "text-ElectricBlue2", bg: "bg-lighrgrey43",   bar: "bg-ElectricBlue2" },
                        { label: "Credit Utilization",  value: 28, color: "text-green58",       bg: "bg-green58/20",    bar: "bg-green58"       },
                      ].map(({ label, value, color, bg, bar }) => (
                        <div key={label} className="mb-4 last:mb-0">
                          <div className="flex items-center justify-between mb-1.5">
                            <p className="text-blue-1200 text-xs leading-4 font-normal">{label}</p>
                            <span className={`${color} text-[10px] leading-3.75 ${bg} pt-[1.5px] font-bold rounded-full h-4.75 px-2`}>
                              {value}%
                            </span>
                          </div>
                          <ProgressBar value={value} barColor={bar} bgColor="bg-gray-6100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 flex items-start gap-3 bg-lightgreenNew4 border border-solid border-green58/20 rounded-xl p-5">
                  <span className="flex items-center w-5 h-5.5">
                    <Image src="/images/checkgreendark.svg" width={20} height={22} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1200 text-sm leading-5 font-normal">Algorithm Verdict: Eligible</h4>
                    <p className="text-grey5700 text-xs leading-4 font-normal mt-1">
                      Strong repayment history and stable income. Recommended for accelerated processing with {selectedCase?.bank} Student Plus program.
                    </p>
                  </div>
                </div>
              </div>
            </TabPanel>

            {/* ── Recommendations ── */}
            <TabPanel>
              <div className="pt-6">
                <p className="text-grey5700 text-sm leading-5 font-normal">AI-recommended bank products ranked by compatibility score.</p>
                {[
                  { bank: "Deutsche Bank",    product: "Student Plus Loan",  rate: "3.2%", score: 94, color: "text-green58",      badge: true  },
                  { bank: "BNP Paribas",      product: "Éducation Flex",     rate: "3.5%", score: 87, color: "text-ElectricBlue2", badge: false },
                  { bank: "Société Générale", product: "Campus Credit",      rate: "3.8%", score: 79, color: "text-yellow-1100",   badge: false },
                ].map(({ bank, product, rate, score, color, badge }) => (
                  <div key={bank} className="mt-4 flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between bg-white border border-solid border-gray-3100 rounded-xl sm:p-6 p-4">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-lighrgrey43">
                        <Image src="/images/building5.svg" width={20} height={22} alt="" />
                      </span>
                      <div>
                        <h4 className="text-black-1200 text-sm leading-5 font-bold">{bank}</h4>
                        <p className="text-grey5700 text-xs leading-4 font-normal">{product} • Rate: {rate}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <h4 className={`text-lg leading-7 font-bold ${color}`}>{score}%</h4>
                        <p className="text-[10px] leading-3.75 font-normal text-grey5700">Match Score</p>
                      </div>
                      {badge && (
                        <div className="text-white flex items-center justify-center text-[10px] leading-3.75 uppercase font-bold rounded h-5.75 px-2 bg-linear-to-r from-green58 to-green60">
                          Best Fit
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </TabPanel>

            {/* ── Communication ── */}
            <TabPanel>
              <div className="pt-6">
                <div className="mb-4 space-y-4 max-h-96 overflow-y-auto pr-1">
                  {chatMessages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.side === "right" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`rounded-2xl py-2.5 px-4 max-w-lg ${
                          msg.internal
                            ? "bg-yellow2200 border border-solid border-yellow-1100/30"
                            : msg.side === "left"
                            ? "bg-yellow2200"
                            : "bg-gray-2000"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <h4 className="text-blue-1300/80 text-sm leading-4 font-normal">{msg.author}</h4>
                          {msg.internal && (
                            <span className="flex items-center">
                              <Image src="/icons/lock-yellow.svg" width={12} height={12} alt="" />
                            </span>
                          )}
                          <span className="text-gray-1900 text-xs leading-4 font-normal">{msg.time}</span>
                        </div>
                        <p className="text-blue-1300 text-sm leading-5 font-normal mt-1">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply input */}
                <div className="bg-gray-1500 rounded-lg border border-solid border-gray-3600">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }}
                    className="text-gray-1900 placeholder:text-gray-1900 text-sm leading-3.5 font-normal outline-0 w-full px-3 py-2 h-13 bg-transparent"
                    placeholder="Type your reply..."
                  />
                  <div className="flex items-center justify-between border-t border-solid border-gray-3600/50 pt-2 pb-3.5 px-2">
                    <button className="flex items-center justify-center w-8 h-8">
                      <Image src="/icons/attachment.svg" width={16} height={16} alt="" />
                    </button>
                    <button
                      onClick={sendMessage}
                      className="flex items-center justify-center gap-4 bg-blue1400 rounded-md h-9 px-3 text-white text-sm leading-5 hover:opacity-90 transition-opacity"
                    >
                      <Image src="/icons/send-icon.svg" width={16} height={16} alt="" className="brightness-200" />
                      Send Reply
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>
    </>
  );
}



export default function TransactionTable() {
  const {
    isCreditModalOpen, isAiModalOpen,
    openCreditModal, openAiModal, closeModals,
    sortField, sortDir, toggleSort,
    filterOpen, filterStatus, filterBank, toggleFilterPanel,
  } = useTableStore();

  const visibleCases = getSortedFiltered(CASES, sortField, sortDir, filterStatus, filterBank);

  const thCls = (field: SortField) =>
    `px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase cursor-pointer select-none hover:text-ElectricBlue2 transition-colors`;

  return (
    <>
      <div className="bg-white border border-solid border-gray-3100 rounded-lg">
        {/* ── Toolbar ── */}
        <div className="py-3 px-4 flex items-center justify-between border-b border-solid border-gray-3100 relative">
          <ul className="flex items-center gap-2">
            <li className="relative">
              <button
                onClick={toggleFilterPanel}
                className={`flex items-center justify-center text-grey5700 text-xs leading-4 font-normal gap-1.5 rounded-md h-7 px-2.5 transition-colors ${
                  filterOpen || filterStatus !== "All" || filterBank !== "All"
                    ? "bg-ElectricBlue2/10 text-ElectricBlue2"
                    : "bg-gray-6100"
                }`}
              >
                <Image src="/images/filter-icon2.svg" width={12} height={12} alt="" />
                Filters
                {(filterStatus !== "All" || filterBank !== "All") && (
                  <span className="w-1.5 h-1.5 rounded-full bg-ElectricBlue2 ml-0.5" />
                )}
              </button>
              <FilterPanel />
            </li>
            <li>
              <button
                onClick={() => toggleSort("id")}
                className="flex items-center justify-center text-grey5700 text-xs leading-4 font-normal gap-1.5 bg-gray-6100 rounded-md h-7 px-2.5 hover:text-ElectricBlue2 transition-colors"
              >
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M14 10.668L11.333 13.335L8.667 10.668" stroke="#6C7889" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11.333 13.335V2.668" stroke="#6C7889" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 5.335L4.667 2.668L7.333 5.335" stroke="#6C7889" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4.667 2.668V13.335" stroke="#6C7889" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Sort
              </button>
            </li>
          </ul>
          <p className="text-grey5700 text-xs leading-4 font-normal">
            {visibleCases.length} record{visibleCases.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* ── Table ── */}
        <div className="overflow-x-auto">
          <table className="2xl:w-full w-250">
            <thead>
              <tr className="bg-gray-6100/50">
                <th className={thCls("id")}     onClick={() => toggleSort("id")}>     Dossier ID    <SortIcon field="id"        /></th>
                <th className={thCls("applicant")} onClick={() => toggleSort("applicant")}>Applicant <SortIcon field="applicant"/></th>
                <th className={thCls("amount")} onClick={() => toggleSort("amount")}> Amount        <SortIcon field="amount"    /></th>
                <th className="px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase">Instructing Bank</th>
                <th className="px-4 py-3 text-left text-xs leading-4 font-bold text-grey5700 uppercase">Case Manager</th>
                <th className={`px-4 py-3 text-center text-xs leading-4 font-bold text-grey5700 uppercase cursor-pointer hover:text-ElectricBlue2`} onClick={() => toggleSort("sla")}>
                  SLA (Days) <SortIcon field="sla" />
                </th>
                <th className="px-4 py-3 text-center text-xs leading-4 font-bold text-grey5700 uppercase">Status</th>
                <th className={`px-4 py-3 text-center text-xs leading-4 font-bold text-grey5700 uppercase cursor-pointer hover:text-ElectricBlue2`} onClick={() => toggleSort("aiScore")}>
                  AI Score <SortIcon field="aiScore" />
                </th>
              </tr>
            </thead>

            <tbody>
              {visibleCases.length === 0 ? (
                <tr>
                  <td colSpan={8} className="px-4 py-8 text-center text-sm text-grey5700">
                    No records match the current filters.
                  </td>
                </tr>
              ) : (
                visibleCases.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200 hover:bg-gray-50 transition last:border-b-0">
                    <td onClick={() => openCreditModal(item)} className="px-4 py-5 text-sm text-ElectricBlue2 font-normal cursor-pointer">{item.id}</td>
                    <td onClick={() => openCreditModal(item)} className="px-4 py-5 text-sm leading-5 font-normal text-black-1300 cursor-pointer">{item.applicant}</td>
                    <td onClick={() => openCreditModal(item)} className="px-4 py-5 text-sm leading-5 font-bold text-black-1300 cursor-pointer">{item.amount}</td>
                    <td onClick={() => openCreditModal(item)} className="px-4 py-5 text-sm leading-5 font-normal text-black-1300 cursor-pointer">{item.bank}</td>
                    <td onClick={() => openCreditModal(item)} className="px-4 py-5 cursor-pointer">
                      <div className="text-xs leading-4 font-normal text-black-1300">{item.manager.name}</div>
                      <div className="text-[10px] leading-5 font-normal text-grey5700">{item.manager.phone}</div>
                    </td>
                    <td onClick={() => openCreditModal(item)} className={`px-4 py-5 text-center text-sm leading-5 font-bold cursor-pointer ${SLA_COLOR[item.status]}`}>
                      {item.sla}
                    </td>
                    <td onClick={() => openCreditModal(item)} className="px-4 py-5 text-center cursor-pointer">
                      <span className={`px-2 h-7 text-[10px] font-bold leading-5 rounded-full inline-flex items-center gap-1 ${STATUS_CONFIG[item.status]}`}>
                        <Image src={item.statusIcon} width={12} height={12} alt="" />
                        {item.status}
                      </span>
                    </td>
                    <td onClick={() => openAiModal(item)} className="px-4 py-5 text-center cursor-pointer">
                      <span className={`px-2 py-1 text-xs font-bold rounded-md inline-flex items-center gap-2 justify-center ${SCORE_CONFIG[item.aiScore] ?? "bg-gray-6100 text-gray-700"}`}>
                        <Image src={item.aiScoreIcon} width={12} height={12} alt="" />
                        {item.aiScore}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Credit Assessment Modal ── */}
      <Modal
        isOpen={isCreditModalOpen}
        onClose={closeModals}
        panelClassName="max-w-[512px] bg-gray-1500 relative h-full overflow-x-auto md:p-6 p-4"
      >
        <button onClick={closeModals} className="flex items-center justify-center shadow-71xl rounded w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </button>
        <CreditModalContent />
      </Modal>

      {/* ── AI Score Modal ── */}
      <Modal
        isOpen={isAiModalOpen}
        onClose={closeModals}
        panelClassName="max-w-[1365px] bg-white relative md:p-6 p-4 md:h-auto h-full md:overflow-x-hidden overflow-x-auto"
      >
        <button onClick={closeModals} className="flex items-center justify-center rounded cursor-pointer w-4 h-4 absolute top-2 right-3 z-10">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </button>
        <AiModalContent />
      </Modal>
    </>
  );
}