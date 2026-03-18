import { create } from "zustand";

export type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
  commission: string;
  sales: number;
  image: string;
  bundle?: boolean;
  enabled: boolean;
};

export type Payout = {
  id: number;
  amount: string;
  date: string;
};

const initialProducts: Product[] = [
  {
    id: 1,
    name: "Student SIM Starter Pack",
    description: "10GB data, unlimited calls within Germany, 3-month plan",
    price: "€29.99",
    commission: "12%",
    sales: 2847,
    image: "/images/product-img1.png",
    bundle: true,
    enabled: true,
  },
  {
    id: 2,
    name: "Premium Data Plan",
    description: "Unlimited data, EU roaming included, 6-month commitment",
    price: "€49.99",
    commission: "10%",
    sales: 1523,
    image: "/images/product-img1.png",
    enabled: true,
  },
  {
    id: 3,
    name: "Prepaid Tourist SIM",
    description: "5GB data valid for 30 days, no contract required",
    price: "€14.99",
    commission: "15%",
    sales: 892,
    image: "/images/product-img1.png",
    enabled: true,
  },
  {
    id: 4,
    name: "International Calling Pack",
    description: "500 minutes to 50+ countries",
    price: "€9.99",
    commission: "8%",
    sales: 234,
    image: "/images/product-img1.png",
    enabled: false,
  },
  {
    id: 5,
    name: "Family Bundle",
    description: "3 SIM cards with shared 30GB data pool",
    price: "€69.99",
    commission: "10%",
    sales: 456,
    image: "/images/product-img1.png",
    bundle: true,
    enabled: true,
  },
];

const initialPayouts: Payout[] = [
  { id: 1, amount: "€8,234.50", date: "Jan 15, 2026" },
  { id: 2, amount: "€9,125.00", date: "Jan 1, 2026"  },
  { id: 3, amount: "€7,890.25", date: "Dec 15, 2025" },
];

type VendorStore = {
  products: Product[];
  payouts: Payout[];
  search: string;
  setSearch: (search: string) => void;
  toggleProduct: (id: number) => void;
  filteredProducts: () => Product[];
};

export const useVendorStore = create<VendorStore>((set, get) => ({
  products: initialProducts,
  payouts: initialPayouts,
  search: "",

  setSearch: (search) => set({ search }),

  toggleProduct: (id) =>
    set((state) => ({
      products: state.products.map((p) =>
        p.id === id ? { ...p, enabled: !p.enabled } : p
      ),
    })),

  filteredProducts: () => {
    const { products, search } = get();
    if (!search.trim()) return products;
    const q = search.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  },
}));