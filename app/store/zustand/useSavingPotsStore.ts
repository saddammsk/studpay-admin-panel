import { create } from "zustand";

export type Tier = "Basic" | "Premium" | "VIP";
export type ProductStatus = "Active" | "Pending" | "Paused" | "Deprecated";
export type Risk = "Low" | "Medium" | "High";
export type PotStatus = "Active" | "Flagged" | "Completed";

export interface Product {
  id: number;
  product: string;
  tier: Tier;
  interest: string;
  index: string;
  margin: string;
  minDeposit: string;
  maxDeposit: string;
  withdrawal: string;
  aum: string;
  status: ProductStatus;
}

export interface Pot {
  id: number;
  risk: Risk;
  name: string;
  subtitle: string;
  icon: string;
  creator: string;
  date: string;
  participants: number;
  collected: string;
  limit: string;
  progress: number;
  status: PotStatus;
}

export interface ProductEditForm {
  product: string;
  tier: Tier;
  interest: string;
  index: string;
  margin: string;
  minDeposit: string;
  maxDeposit: string;
  withdrawal: string;
  status: ProductStatus;
}

export interface ProductEditErrors {
  product?: string;
  interest?: string;
  index?: string;
  margin?: string;
  minDeposit?: string;
  maxDeposit?: string;
  withdrawal?: string;
}


const initialProducts: Product[] = [
  {
    id: 1,
    product: "StudSave Basic",
    tier: "Basic",
    interest: "4.5%",
    index: "3.0%",
    margin: "1.5%",
    minDeposit: "EUR 500",
    maxDeposit: "EUR 50,000",
    withdrawal: "Instant, no lock-in",
    aum: "EUR 12.4 Cr",
    status: "Active",
  },
  {
    id: 2,
    product: "StudSave Premium",
    tier: "Premium",
    interest: "6.2%",
    index: "3.0%",
    margin: "3.2%",
    minDeposit: "EUR 5,000",
    maxDeposit: "EUR 2,00,000",
    withdrawal: "7-day notice period",
    aum: "EUR 28.7 Cr",
    status: "Active",
  },
  {
    id: 3,
    product: "StudSave VIP",
    tier: "VIP",
    interest: "8.0%",
    index: "3.0%",
    margin: "5.0%",
    minDeposit: "EUR 50,000",
    maxDeposit: "EUR 10,00,000",
    withdrawal: "30-day lock-in, early penalty 1%",
    aum: "EUR 8.2 Cr",
    status: "Pending",
  },
  {
    id: 4,
    product: "StudSave Youth",
    tier: "Basic",
    interest: "3.5%",
    index: "3.0%",
    margin: "0.5%",
    minDeposit: "EUR 100",
    maxDeposit: "EUR 20,000",
    withdrawal: "Instant, no lock-in",
    aum: "EUR 8.4 Cr",
    status: "Active",
  },
  {
    id: 5,
    product: "StudSave Legacy",
    tier: "VIP",
    interest: "5.1%",
    index: "3.0%",
    margin: "2.1%",
    minDeposit: "EUR 50,000",
    maxDeposit: "EUR 5,00,000",
    withdrawal: "60-day lock-in, early penalty 2%",
    aum: "EUR 6.1 Cr",
    status: "Deprecated",
  },
  {
    id: 6,
    product: "StudSave Boost",
    tier: "Premium",
    interest: "4.0%",
    index: "3.0%",
    margin: "1.0%",
    minDeposit: "EUR 2,000",
    maxDeposit: "EUR 1,00,000",
    withdrawal: "14-day notice period",
    aum: "EUR 4.9 Cr",
    status: "Active",
  },
  {
    id: 7,
    product: "StudSave Green",
    tier: "Premium",
    interest: "3.9%",
    index: "3.0%",
    margin: "0.9%",
    minDeposit: "EUR 1,000",
    maxDeposit: "EUR 75,000",
    withdrawal: "7-day notice period",
    aum: "EUR 3.2 Cr",
    status: "Active",
  },
];

const initialPots: Pot[] = [
  {
    id: 1,
    risk: "Low",
    name: "Birthday Gift - Rahul",
    subtitle: "",
    icon: "",
    creator: "Priya Sharma",
    date: "2024-01-15",
    participants: 12,
    collected: "EUR 8,450",
    limit: "EUR 10,000",
    progress: 84,
    status: "Active",
  },
  {
    id: 2,
    risk: "Medium",
    name: "College Trip Fund",
    subtitle: "High transaction frequency",
    icon: "/images/warning.svg",
    creator: "Amit Verma",
    date: "2024-01-10",
    participants: 28,
    collected: "EUR 42,800",
    limit: "EUR 50,000",
    progress: 86,
    status: "Active",
  },
  {
    id: 3,
    risk: "High",
    name: "Emergency Fund - Class",
    subtitle: "Suspicious P2P volume detected",
    icon: "/images/warning.svg",
    creator: "Unknown User",
    date: "2024-01-08",
    participants: 45,
    collected: "EUR 1,25,000",
    limit: "EUR 1,00,000",
    progress: 125,
    status: "Flagged",
  },
  {
    id: 4,
    risk: "Low",
    name: "Hostel Rent Collection",
    subtitle: "",
    icon: "",
    creator: "Sneha Patel",
    date: "2024-01-05",
    participants: 8,
    collected: "EUR 24,000",
    limit: "EUR 24,000",
    progress: 100,
    status: "Completed",
  },
  {
    id: 5,
    risk: "Low",
    name: "Sports Equipment",
    subtitle: "",
    icon: "",
    creator: "Vikram Singh",
    date: "2024-01-12",
    participants: 15,
    collected: "EUR 15,750",
    limit: "EUR 25,000",
    progress: 63,
    status: "Active",
  },
  {
    id: 6,
    risk: "Low",
    name: "Wedding Fund 2025",
    subtitle: "",
    icon: "",
    creator: "Sophie Martin",
    date: "2025-03-12",
    participants: 14,
    collected: "EUR 8,400",
    limit: "EUR 10,000",
    progress: 84,
    status: "Active",
  },
  {
    id: 7,
    risk: "High",
    name: "Suspicious Collection #4521",
    subtitle: "Velocity alert: 12 deposits in 2h",
    icon: "/icons/sheild-error.svg",
    creator: "Unknown User",
    date: "2025-03-15",
    participants: 3,
    collected: "EUR 22,100",
    limit: "EUR 20,000",
    progress: 110,
    status: "Flagged",
  },
  {
    id: 8,
    risk: "Medium",
    name: "Team Offsite Trip",
    subtitle: "",
    icon: "",
    creator: "Luca Rossi",
    date: "2025-02-28",
    participants: 9,
    collected: "EUR 3,600",
    limit: "EUR 6,000",
    progress: 60,
    status: "Active",
  },
  {
    id: 9,
    risk: "Low",
    name: "Birthday Surprise – Paul",
    subtitle: "",
    icon: "",
    creator: "Marie Dupont",
    date: "2025-03-01",
    participants: 7,
    collected: "EUR 700",
    limit: "EUR 700",
    progress: 100,
    status: "Completed",
  },
  {
    id: 10,
    risk: "High",
    name: "High Frequency Pot #88",
    subtitle: "Multiple jurisdictions detected",
    icon: "/icons/sheild-error.svg",
    creator: "Anonymous",
    date: "2025-03-16",
    participants: 1,
    collected: "EUR 14,500",
    limit: "EUR 10,000",
    progress: 145,
    status: "Flagged",
  },
];


const defaultEditForm = (): ProductEditForm => ({
  product: "",
  tier: "Basic",
  interest: "",
  index: "",
  margin: "",
  minDeposit: "",
  maxDeposit: "",
  withdrawal: "",
  status: "Active",
});

const validateEditForm = (form: ProductEditForm): ProductEditErrors => {
  const e: ProductEditErrors = {};
  if (!form.product.trim())    e.product    = "Product name is required.";
  if (!form.interest.trim())   e.interest   = "Interest rate is required.";
  if (!form.index.trim())      e.index      = "Index rate is required.";
  if (!form.margin.trim())     e.margin     = "Margin is required.";
  if (!form.minDeposit.trim()) e.minDeposit = "Min deposit is required.";
  if (!form.maxDeposit.trim()) e.maxDeposit = "Max deposit is required.";
  if (!form.withdrawal.trim()) e.withdrawal = "Withdrawal terms are required.";
  return e;
};


interface SavingPotsState {
  // Products
  products: Product[];
  productPage: number;
  productPageSize: number;
  editingProductId: number | null;
  editForm: ProductEditForm;
  editErrors: ProductEditErrors;

  paginatedProducts: () => Product[];
  totalProductPages: () => number;
  setProductPage: (p: number) => void;
  openEdit: (id: number) => void;
  closeEdit: () => void;
  setEditField: <K extends keyof ProductEditForm>(key: K, value: ProductEditForm[K]) => void;
  submitEdit: () => boolean;

  // Pots
  pots: Pot[];
  potPage: number;
  potPageSize: number;

  paginatedPots: () => Pot[];
  totalPotPages: () => number;
  setPotPage: (p: number) => void;
}

export const useSavingPotsStore = create<SavingPotsState>()((set, get) => ({
  products: initialProducts,
  productPage: 1,
  productPageSize: 5,
  editingProductId: null,
  editForm: defaultEditForm(),
  editErrors: {},

  paginatedProducts: () => {
    const { products, productPage, productPageSize } = get();
    return products.slice(
      (productPage - 1) * productPageSize,
      productPage * productPageSize
    );
  },

  totalProductPages: () =>
    Math.max(1, Math.ceil(get().products.length / get().productPageSize)),

  setProductPage: (p) => set({ productPage: p }),

  openEdit: (id) => {
    const item = get().products.find((x) => x.id === id);
    if (!item) return;
    set({
      editingProductId: id,
      editForm: {
        product:    item.product,
        tier:       item.tier,
        interest:   item.interest,
        index:      item.index,
        margin:     item.margin,
        minDeposit: item.minDeposit,
        maxDeposit: item.maxDeposit,
        withdrawal: item.withdrawal,
        status:     item.status,
      },
      editErrors: {},
    });
  },

  closeEdit: () =>
    set({ editingProductId: null, editForm: defaultEditForm(), editErrors: {} }),

  setEditField: (key, value) =>
    set((s) => ({
      editForm:   { ...s.editForm,   [key]: value     },
      editErrors: { ...s.editErrors, [key]: undefined },
    })),

  submitEdit: () => {
    const { editingProductId, editForm } = get();
    const errors = validateEditForm(editForm);
    if (Object.keys(errors).length) {
      set({ editErrors: errors });
      return false;
    }
    set((s) => ({
      products: s.products.map((p) =>
        p.id === editingProductId ? { ...p, ...editForm } : p
      ),
      editingProductId: null,
      editForm:         defaultEditForm(),
      editErrors:       {},
    }));
    return true;
  },

  pots: initialPots,
  potPage: 1,
  potPageSize: 5,

  paginatedPots: () => {
    const { pots, potPage, potPageSize } = get();
    return pots.slice(
      (potPage - 1) * potPageSize,
      potPage * potPageSize
    );
  },

  totalPotPages: () =>
    Math.max(1, Math.ceil(get().pots.length / get().potPageSize)),

  setPotPage: (p) => set({ potPage: p }),
}));