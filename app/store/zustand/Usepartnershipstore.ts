import { create } from "zustand";


export type PartnerStatus = "Verified" | "Pending" | "Suspended";
export type PartnerType = "Education" | "Housing" | "Insurance" | "FinTech";

export interface Campaign {
  name: string;
  leads: number;
  conversion: number;
  status: "Active" | "Ended";
}

export interface ActivityItem {
  title: string;
  description: string;
  date: string;
}

export interface Partner {
  id: string;
  name: string;
  country: string;
  type: PartnerType;
  status: PartnerStatus;
  referralCode: string;
  referralUsage: number;
  activeStudents: number;
  conversionRate: number;
  commissionRate: number;
  monthlyPayout: number;
  email: string;
  phone: string;
  campaigns: Campaign[];
  activity: ActivityItem[];
  joinedDate: string;
}

export interface OnboardForm {
  name: string;
  country: string;
  type: PartnerType | "";
  email: string;
  phone: string;
  commissionRate: string;
}

export interface OnboardErrors {
  name?: string;
  country?: string;
  type?: string;
  email?: string;
  phone?: string;
  commissionRate?: string;
}


export type TablePartnerStatus = "Verified" | "Pending" | "Inactive";
export type SortField = "name" | "activeStudents" | "conversion" | "commission";
export type SortOrder = "asc" | "desc";

export interface TablePartner {
  id: string;
  name: string;
  logo: string;
  category: string;
  country: string;
  activeStudents: number;
  conversion: string;
  commission: string;
  status: TablePartnerStatus;
}

export interface CommissionRule {
  id: string;
  partnerType: PartnerType | "All Types";
  rate: number;
  minStudents: number;
  bonusThreshold: number;
  bonusRate: number;
}


const PARTNERS: Partner[] = [
  {
    id: "P-001", name: "TU Berlin", country: "Germany", type: "Education", status: "Verified",
    referralCode: "TUBERLIN2024", referralUsage: 847, activeStudents: 847, conversionRate: 68.5,
    commissionRate: 15, monthlyPayout: 1524.6, email: "partnerships@tuberlin.com", phone: "+49 30 1234 5678",
    joinedDate: "Jan 10, 2023",
    campaigns: [
      { name: "Welcome Offer 2024", leads: 234, conversion: 72, status: "Active" },
      { name: "Summer Housing Deal", leads: 156, conversion: 58, status: "Active" },
      { name: "Insurance Bundle", leads: 89, conversion: 45, status: "Ended" },
    ],
    activity: [
      { title: "New referral registered", description: "Student Ahmed Hassan signed up", date: "2 hours ago" },
      { title: "Commission paid", description: "€1,524.6 transferred", date: "Yesterday" },
      { title: "Campaign launched", description: "Summer Housing Deal started", date: "3 days ago" },
      { title: "Contract renewed", description: "Annual contract renewed", date: "Jan 10, 2024" },
    ],
  },
  {
    id: "P-002", name: "LMU Munich", country: "Germany", type: "Education", status: "Verified",
    referralCode: "LMUMUNICH2024", referralUsage: 612, activeStudents: 612, conversionRate: 61.2,
    commissionRate: 14, monthlyPayout: 1102.4, email: "partnerships@lmu.de", phone: "+49 89 2180 0",
    joinedDate: "Mar 5, 2023",
    campaigns: [
      { name: "Spring Intake 2024", leads: 198, conversion: 65, status: "Active" },
      { name: "Health Insurance Pack", leads: 112, conversion: 50, status: "Ended" },
    ],
    activity: [
      { title: "New referral registered", description: "Student Maria Schmidt signed up", date: "5 hours ago" },
      { title: "Commission paid", description: "€1,102.4 transferred", date: "2 days ago" },
    ],
  },
  {
    id: "P-003", name: "StudyFlat GmbH", country: "Germany", type: "Housing", status: "Verified",
    referralCode: "STUDYFLAT24", referralUsage: 520, activeStudents: 520, conversionRate: 74.3,
    commissionRate: 18, monthlyPayout: 2340.0, email: "partners@studyflat.de", phone: "+49 40 5555 1234",
    joinedDate: "Feb 14, 2023",
    campaigns: [{ name: "Winter Accommodation", leads: 300, conversion: 78, status: "Active" }],
    activity: [
      { title: "Listing updated", description: "20 new rooms added", date: "1 day ago" },
      { title: "Commission paid", description: "€2,340 transferred", date: "3 days ago" },
    ],
  },
  {
    id: "P-004", name: "Allianz Care", country: "Germany", type: "Insurance", status: "Verified",
    referralCode: "ALLIANZ2024", referralUsage: 388, activeStudents: 388, conversionRate: 55.8,
    commissionRate: 12, monthlyPayout: 876.0, email: "students@allianz.com", phone: "+49 89 3800 0",
    joinedDate: "Apr 20, 2023",
    campaigns: [
      { name: "Student Health Bundle", leads: 180, conversion: 60, status: "Active" },
      { name: "Travel Insurance Add-on", leads: 90, conversion: 42, status: "Ended" },
    ],
    activity: [{ title: "Policy issued", description: "45 new policies this week", date: "1 day ago" }],
  },
  {
    id: "P-005", name: "RWTH Aachen", country: "Germany", type: "Education", status: "Pending",
    referralCode: "RWTH2024", referralUsage: 0, activeStudents: 0, conversionRate: 0,
    commissionRate: 13, monthlyPayout: 0, email: "int.office@rwth-aachen.de", phone: "+49 241 80 0",
    joinedDate: "Pending", campaigns: [],
    activity: [{ title: "Application submitted", description: "Awaiting KYC verification", date: "2 days ago" }],
  },
  {
    id: "P-006", name: "N26 Bank", country: "Germany", type: "FinTech", status: "Verified",
    referralCode: "N26STUD24", referralUsage: 210, activeStudents: 210, conversionRate: 48.5,
    commissionRate: 10, monthlyPayout: 420.0, email: "partners@n26.com", phone: "+49 30 9999 0000",
    joinedDate: "Jun 1, 2023",
    campaigns: [{ name: "Free Account Promo", leads: 150, conversion: 52, status: "Active" }],
    activity: [{ title: "Promo code redeemed", description: "30 new accounts opened", date: "Today" }],
  },
  {
    id: "P-007", name: "KIT Karlsruhe", country: "Germany", type: "Education", status: "Suspended",
    referralCode: "KIT2024", referralUsage: 120, activeStudents: 0, conversionRate: 32.1,
    commissionRate: 12, monthlyPayout: 0, email: "international@kit.edu", phone: "+49 721 608 0",
    joinedDate: "Aug 15, 2023", campaigns: [],
    activity: [{ title: "Account suspended", description: "Awaiting compliance review", date: "1 week ago" }],
  },
  {
    id: "P-008", name: "HHL Leipzig", country: "Germany", type: "Education", status: "Verified",
    referralCode: "HHL2024", referralUsage: 95, activeStudents: 95, conversionRate: 62.0,
    commissionRate: 13, monthlyPayout: 308.5, email: "office@hhl.de", phone: "+49 341 9851 0",
    joinedDate: "Sep 3, 2023",
    campaigns: [{ name: "MBA Student Pack", leads: 60, conversion: 65, status: "Active" }],
    activity: [{ title: "New leads", description: "12 new referrals this week", date: "3 days ago" }],
  },
];

const EMPTY_FORM: OnboardForm = { name: "", country: "", type: "", email: "", phone: "", commissionRate: "" };


const TABLE_PARTNERS: TablePartner[] = [
  { id: "P-001", name: "TU Berlin", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 847, conversion: "68.5%", commission: "15%", status: "Verified" },
  { id: "P-002", name: "RWTH Aachen University", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 623, conversion: "72.3%", commission: "18%", status: "Verified" },
  { id: "P-003", name: "StudySmarter GmbH", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 412, conversion: "54.2%", commission: "12%", status: "Verified" },
  { id: "P-004", name: "HousingAnywhere", logo: "/images/calculator-icon.svg", category: "Housing", country: "Netherlands", activeStudents: 356, conversion: "45.8%", commission: "10%", status: "Verified" },
  { id: "P-005", name: "Deutsche Bank Student", logo: "/images/bank-icon.svg", category: "Finance", country: "Germany", activeStudents: 289, conversion: "62.1%", commission: "8%", status: "Pending" },
  { id: "P-006", name: "LMU Munich", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 534, conversion: "71.2%", commission: "16%", status: "Verified" },
  { id: "P-007", name: "Uniplaces", logo: "/images/calculator-icon.svg", category: "Housing", country: "Portugal", activeStudents: 198, conversion: "38.4%", commission: "9%", status: "Inactive" },
  { id: "P-008", name: "N26 Student", logo: "/images/bank-icon.svg", category: "Finance", country: "Germany", activeStudents: 445, conversion: "58.9%", commission: "7%", status: "Verified" },
  { id: "P-009", name: "Heidelberg University", logo: "/images/hat-icon.svg", category: "Education", country: "Germany", activeStudents: 378, conversion: "65.7%", commission: "14%", status: "Verified" },
  { id: "P-010", name: "Spotahome", logo: "/images/calculator-icon.svg", category: "Housing", country: "Spain", activeStudents: 167, conversion: "42.1%", commission: "11%", status: "Pending" },
];

const DEFAULT_COMMISSION_RULES: CommissionRule[] = [
  { id: "CR-001", partnerType: "Education", rate: 15, minStudents: 100, bonusThreshold: 500, bonusRate: 2 },
  { id: "CR-002", partnerType: "Housing", rate: 18, minStudents: 50, bonusThreshold: 300, bonusRate: 3 },
  { id: "CR-003", partnerType: "Insurance", rate: 12, minStudents: 50, bonusThreshold: 200, bonusRate: 1.5 },
  { id: "CR-004", partnerType: "FinTech", rate: 10, minStudents: 100, bonusThreshold: 400, bonusRate: 1 },
];


interface PartnershipStore {
  partners: Partner[];
  selectedPartnerId: string;
  searchQuery: string;
  typeFilter: PartnerType | "All Types";
  statusFilter: PartnerStatus | "All Statuses";
  isOnboardModalOpen: boolean;
  onboardForm: OnboardForm;
  onboardErrors: OnboardErrors;
  onboardSuccess: boolean;
  copiedCode: string | null;

  filteredPartners: () => Partner[];
  selectedPartner: () => Partner | undefined;
  totalActiveStudents: () => number;
  avgConversion: () => string;

  setSelectedPartnerId: (id: string) => void;
  setSearchQuery: (q: string) => void;
  setTypeFilter: (v: PartnerType | "All Types") => void;
  setStatusFilter: (v: PartnerStatus | "All Statuses") => void;
  openOnboardModal: () => void;
  closeOnboardModal: () => void;
  setOnboardField: (field: keyof OnboardForm, value: string) => void;
  submitOnboard: () => void;
  copyReferralCode: (code: string) => void;
}

function validateOnboard(form: OnboardForm): OnboardErrors {
  const errors: OnboardErrors = {};
  if (!form.name.trim()) errors.name = "Partner name is required.";
  if (!form.country.trim()) errors.country = "Country is required.";
  if (!form.type) errors.type = "Type is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email.";
  if (!form.phone.trim()) errors.phone = "Phone is required.";
  if (!form.commissionRate.trim()) errors.commissionRate = "Commission rate is required.";
  else if (isNaN(Number(form.commissionRate)) || Number(form.commissionRate) <= 0 || Number(form.commissionRate) > 50)
    errors.commissionRate = "Enter a valid rate between 1–50%.";
  return errors;
}

export const usePartnershipStore = create<PartnershipStore>((set, get) => ({
  partners: PARTNERS,
  selectedPartnerId: "P-001",
  searchQuery: "",
  typeFilter: "All Types",
  statusFilter: "All Statuses",
  isOnboardModalOpen: false,
  onboardForm: EMPTY_FORM,
  onboardErrors: {},
  onboardSuccess: false,
  copiedCode: null,

  filteredPartners: () => {
    const { partners, searchQuery, typeFilter, statusFilter } = get();
    const q = searchQuery.toLowerCase();
    return partners.filter((p) => {
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.country.toLowerCase().includes(q) || p.referralCode.toLowerCase().includes(q);
      const matchType = typeFilter === "All Types" || p.type === typeFilter;
      const matchStatus = statusFilter === "All Statuses" || p.status === statusFilter;
      return matchSearch && matchType && matchStatus;
    });
  },

  selectedPartner: () => get().partners.find((p) => p.id === get().selectedPartnerId),
  totalActiveStudents: () => get().filteredPartners().reduce((sum, p) => sum + p.activeStudents, 0),
  avgConversion: () => {
    const filtered = get().filteredPartners().filter((p) => p.conversionRate > 0);
    if (!filtered.length) return "0%";
    return `${(filtered.reduce((sum, p) => sum + p.conversionRate, 0) / filtered.length).toFixed(1)}%`;
  },

  setSelectedPartnerId: (id) => set({ selectedPartnerId: id }),
  setSearchQuery: (q) => set({ searchQuery: q }),
  setTypeFilter: (v) => set({ typeFilter: v }),
  setStatusFilter: (v) => set({ statusFilter: v }),
  openOnboardModal: () => set({ isOnboardModalOpen: true, onboardForm: EMPTY_FORM, onboardErrors: {}, onboardSuccess: false }),
  closeOnboardModal: () => set({ isOnboardModalOpen: false, onboardErrors: {}, onboardSuccess: false }),
  setOnboardField: (field, value) => set((s) => ({ onboardForm: { ...s.onboardForm, [field]: value }, onboardErrors: { ...s.onboardErrors, [field]: undefined } })),

  submitOnboard: () => {
    const { onboardForm, partners } = get();
    const errors = validateOnboard(onboardForm);
    if (Object.keys(errors).length > 0) { set({ onboardErrors: errors }); return; }
    const newPartner: Partner = {
      id: `P-${String(partners.length + 1).padStart(3, "0")}`,
      name: onboardForm.name, country: onboardForm.country, type: onboardForm.type as PartnerType,
      status: "Pending", referralCode: onboardForm.name.toUpperCase().replace(/\s+/g, "") + "2024",
      referralUsage: 0, activeStudents: 0, conversionRate: 0,
      commissionRate: Number(onboardForm.commissionRate), monthlyPayout: 0,
      email: onboardForm.email, phone: onboardForm.phone, joinedDate: "Pending",
      campaigns: [], activity: [{ title: "Partner onboarded", description: "Awaiting verification", date: "Just now" }],
    };
    set({ partners: [...partners, newPartner], onboardSuccess: true, selectedPartnerId: newPartner.id });
    setTimeout(() => set({ isOnboardModalOpen: false, onboardSuccess: false }), 1500);
  },

  copyReferralCode: (code) => {
    navigator.clipboard.writeText(code).catch(() => {});
    set({ copiedCode: code });
    setTimeout(() => set({ copiedCode: null }), 2000);
  },
}));


interface PartnerTableStore {
  partners: TablePartner[];
  sortField: SortField;
  sortOrder: SortOrder;
  openMenuId: string | null;
  tableSearch: string;
  tableCategoryFilter: string;
  tableStatusFilter: TablePartnerStatus | "All Statuses";
  isCommissionsModalOpen: boolean;
  commissionRules: CommissionRule[];
  editingRule: CommissionRule | null;
  commissionSaveSuccess: boolean;

  filteredSortedPartners: () => TablePartner[];
  sortedPartners: () => TablePartner[];

  toggleSort: (field: SortField) => void;
  setOpenMenuId: (id: string | null) => void;
  updateStatus: (id: string, status: TablePartnerStatus) => void;
  removePartner: (id: string) => void;
  setTableSearch: (q: string) => void;
  setTableCategoryFilter: (v: string) => void;
  setTableStatusFilter: (v: TablePartnerStatus | "All Statuses") => void;
  openCommissionsModal: () => void;
  closeCommissionsModal: () => void;
  setEditingRule: (rule: CommissionRule | null) => void;
  updateRule: (id: string, field: keyof CommissionRule, value: string | number) => void;
  saveCommissions: () => void;
}

export const usePartnerTableStore = create<PartnerTableStore>((set, get) => ({
  partners: TABLE_PARTNERS,
  sortField: "activeStudents",
  sortOrder: "desc",
  openMenuId: null,
  tableSearch: "",
  tableCategoryFilter: "All Categories",
  tableStatusFilter: "All Statuses",
  isCommissionsModalOpen: false,
  commissionRules: DEFAULT_COMMISSION_RULES,
  editingRule: null,
  commissionSaveSuccess: false,

  filteredSortedPartners: () => {
    const { partners, tableSearch, tableCategoryFilter, tableStatusFilter, sortField, sortOrder } = get();
    const q = tableSearch.toLowerCase();
    const filtered = partners.filter((p) => {
      const matchSearch = !q || p.name.toLowerCase().includes(q) || p.id.toLowerCase().includes(q) || p.country.toLowerCase().includes(q);
      const matchCategory = tableCategoryFilter === "All Categories" || p.category === tableCategoryFilter;
      const matchStatus = tableStatusFilter === "All Statuses" || p.status === tableStatusFilter;
      return matchSearch && matchCategory && matchStatus;
    });
    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortField === "name") cmp = a.name.localeCompare(b.name);
      else if (sortField === "activeStudents") cmp = a.activeStudents - b.activeStudents;
      else if (sortField === "conversion") cmp = parseFloat(a.conversion) - parseFloat(b.conversion);
      else if (sortField === "commission") cmp = parseFloat(a.commission) - parseFloat(b.commission);
      return sortOrder === "asc" ? cmp : -cmp;
    });
  },

  sortedPartners: () => get().filteredSortedPartners(),

  toggleSort: (field) => set((s) => ({ sortField: field, sortOrder: s.sortField === field && s.sortOrder === "asc" ? "desc" : "asc" })),
  setOpenMenuId: (id) => set({ openMenuId: id }),
  updateStatus: (id, status) => set((s) => ({ partners: s.partners.map((p) => p.id === id ? { ...p, status } : p), openMenuId: null })),
  removePartner: (id) => set((s) => ({ partners: s.partners.filter((p) => p.id !== id), openMenuId: null })),
  setTableSearch: (q) => set({ tableSearch: q }),
  setTableCategoryFilter: (v) => set({ tableCategoryFilter: v }),
  setTableStatusFilter: (v) => set({ tableStatusFilter: v }),
  openCommissionsModal: () => set({ isCommissionsModalOpen: true, commissionSaveSuccess: false }),
  closeCommissionsModal: () => set({ isCommissionsModalOpen: false, editingRule: null }),
  setEditingRule: (rule) => set({ editingRule: rule }),
  updateRule: (id, field, value) => set((s) => ({
    commissionRules: s.commissionRules.map((r) => r.id === id ? { ...r, [field]: value } : r),
  })),
  saveCommissions: () => {
    set({ commissionSaveSuccess: true });
    setTimeout(() => set({ isCommissionsModalOpen: false, commissionSaveSuccess: false }), 1200);
  },
}));