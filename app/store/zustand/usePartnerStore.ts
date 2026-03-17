import { create } from "zustand";

export type PartnerStatus = "Active" | "Pending Legal Review" | "Suspended";

export interface PartnerItem {
  id: string;
  bank: { title: string; name: string; subtitle: string };
  account: { name: string; icon: string; email: string };
  status: PartnerStatus;
  loan: number;
  portfolioHealth: { approved: number; pending: number };
}

export interface PartnerFormData {
  bankName: string;
  country: string;
  accountManager: string;
  managerEmail: string;
  contractFile: File | null;
  minCreditScore: string;
  maxLoanAmount: string;
  interestRateRange: string;
}

interface PartnerStore {
  partners: PartnerItem[];
  isAddModalOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
  addPartner: (form: PartnerFormData) => void;
}

const INITIAL_PARTNERS: PartnerItem[] = [
  {
    id: "1",
    bank: { title: "DB", name: "Deutsche Bank", subtitle: "Germany" },
    account: { name: "Klaus Müller", icon: "/icons/email23.svg", email: "k.mueller@db.com" },
    status: "Active",
    loan: 412,
    portfolioHealth: { approved: 78, pending: 22 },
  },
  {
    id: "2",
    bank: { title: "CO", name: "Commerzbank", subtitle: "Germany" },
    account: { name: "Anna Schmidt", icon: "/icons/email23.svg", email: "a.schmidt@commerzbank.com" },
    status: "Active",
    loan: 287,
    portfolioHealth: { approved: 82, pending: 18 },
  },
  {
    id: "3",
    bank: { title: "IG", name: "ING Group", subtitle: "Netherlands" },
    account: { name: "Pieter van Dijk", icon: "/icons/email23.svg", email: "p.vandijk@ing.com" },
    status: "Active",
    loan: 198,
    portfolioHealth: { approved: 71, pending: 29 },
  },
  {
    id: "4",
    bank: { title: "BP", name: "BNP Paribas", subtitle: "France" },
    account: { name: "Claire Dubois", icon: "/icons/email23.svg", email: "c.dubois@bnpparibas.com" },
    status: "Pending Legal Review",
    loan: 54,
    portfolioHealth: { approved: 65, pending: 35 },
  },
  {
    id: "5",
    bank: { title: "SA", name: "Santander", subtitle: "Spain" },
    account: { name: "Miguel Torres", icon: "/icons/email23.svg", email: "m.torres@santander.com" },
    status: "Active",
    loan: 321,
    portfolioHealth: { approved: 76, pending: 24 },
  },
  {
    id: "6",
    bank: { title: "UN", name: "UniCredit", subtitle: "Italy" },
    account: { name: "Luca Romano", icon: "/icons/email23.svg", email: "l.romano@unicredit.eu" },
    status: "Suspended",
    loan: 89,
    portfolioHealth: { approved: 43, pending: 57 },
  },
  {
    id: "7",
    bank: { title: "RB", name: "Raiffeisen Bank", subtitle: "Austria" },
    account: { name: "Eva Huber", icon: "/icons/email23.svg", email: "e.huber@raiffeisen.at" },
    status: "Active",
    loan: 156,
    portfolioHealth: { approved: 80, pending: 20 },
  },
  {
    id: "8",
    bank: { title: "BA", name: "Barclays", subtitle: "United Kingdom" },
    account: { name: "James Whitfield", icon: "/icons/email23.svg", email: "j.whitfield@barclays.co.uk" },
    status: "Pending Legal Review",
    loan: 42,
    portfolioHealth: { approved: 69, pending: 31 },
  },
];

export const usePartnerStore = create<PartnerStore>((set) => ({
  partners: INITIAL_PARTNERS,
  isAddModalOpen: false,

  openAddModal: () => set({ isAddModalOpen: true }),
  closeAddModal: () => set({ isAddModalOpen: false }),

  addPartner: (form) => {
    const words = form.bankName.trim().split(/\s+/);
    const title =
      words.length >= 2
        ? (words[0][0] + words[1][0]).toUpperCase()
        : form.bankName.slice(0, 2).toUpperCase();

    const newPartner: PartnerItem = {
      id: String(Date.now()),
      bank: { title, name: form.bankName, subtitle: form.country },
      account: { name: form.accountManager, icon: "/icons/email23.svg", email: form.managerEmail },
      status: "Pending Legal Review",
      loan: 0,
      portfolioHealth: { approved: 0, pending: 0 },
    };

    set((s) => ({ partners: [...s.partners, newPartner], isAddModalOpen: false }));
  },
}));
