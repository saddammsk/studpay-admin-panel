import { create } from "zustand";

export type ProductCategory = "SIM" | "Furniture" | "Banking" | "Internet";
export type ProductStatus = "Live" | "Hidden";
export type PaymentStatus = "Paid" | "Pending" | "Delayed";
export type FulfillmentStatus = "Sent" | "In-Progress" | "Processing" | "Delayed";

export type Product = {
  id: string;
  product: string;
  category: ProductCategory;
  vendor: string;
  price: string;
  commission: string;
  campaign?: string;
  status: ProductStatus;
};

export type Order = {
  id: string;
  student: string;
  email: string;
  product: string;
  amount: string;
  campaign?: string;
  payment: PaymentStatus;
  fulfillment: FulfillmentStatus;
  date: string;
};

const initialProducts: Product[] = [
  {
    id: "1",
    product: "Lebara Student SIM",
    category: "SIM",
    vendor: "Lebara Mobile",
    price: "€9.99",
    commission: "15%",
    campaign: "TU Berlin Welcome Bundle",
    status: "Live",
  },
  {
    id: "2",
    product: "IKEA Starter Kit",
    category: "Furniture",
    vendor: "IKEA Germany",
    price: "€199.00",
    commission: "8%",
    campaign: "TU Berlin Welcome Bundle",
    status: "Live",
  },
  {
    id: "3",
    product: "N26 Student Account",
    category: "Banking",
    vendor: "N26 Bank",
    price: "Free",
    commission: "25%",
    status: "Live",
  },
  {
    id: "4",
    product: "Vodafone Home Internet",
    category: "Internet",
    vendor: "Vodafone DE",
    price: "€29.99",
    commission: "12%",
    status: "Live",
  },
  {
    id: "5",
    product: "Premium Desk Set",
    category: "Furniture",
    vendor: "Home24",
    price: "€349.00",
    commission: "10%",
    status: "Hidden",
  },
  {
    id: "6",
    product: "O2 Prepaid SIM",
    category: "SIM",
    vendor: "Telefónica",
    price: "€14.99",
    commission: "18%",
    status: "Live",
  },
  {
    id: "7",
    product: "DKB Student Visa",
    category: "Banking",
    vendor: "DKB Bank",
    price: "Free",
    commission: "20%",
    campaign: "Munich Uni Deal",
    status: "Live",
  },
];

const initialOrders: Order[] = [
  {
    id: "ORD-2024-1847",
    student: "Maria Schmidt",
    email: "maria.s@tu-berlin.de",
    product: "Lebara Student SIM",
    amount: "€9.99",
    campaign: "TU Berlin Welcome Bundle",
    payment: "Paid",
    fulfillment: "Sent",
    date: "Feb 1, 2024",
  },
  {
    id: "ORD-2024-1846",
    student: "Chen Wei",
    email: "chen.w@fu-berlin.de",
    product: "IKEA Starter Kit",
    amount: "€199.00",
    campaign: "TU Berlin Welcome Bundle",
    payment: "Paid",
    fulfillment: "In-Progress",
    date: "Feb 1, 2024",
  },
  {
    id: "ORD-2024-1845",
    student: "Anna Kowalski",
    email: "a.kowalski@hu-berlin.de",
    product: "N26 Student Account",
    amount: "Free",
    payment: "Pending",
    fulfillment: "Processing",
    date: "Jan 31, 2024",
  },
  {
    id: "ORD-2024-1844",
    student: "Lucas Müller",
    email: "l.mueller@tum.de",
    product: "Vodafone Home Internet",
    amount: "€29.99",
    payment: "Paid",
    fulfillment: "Delayed",
    date: "Jan 31, 2024",
  },
  {
    id: "ORD-2024-1843",
    student: "Sofia Garcia",
    email: "s.garcia@lmu.de",
    product: "DKB Student Visa",
    amount: "Free",
    campaign: "Munich Uni Deal",
    payment: "Paid",
    fulfillment: "Sent",
    date: "Jan 30, 2024",
  },
  {
    id: "ORD-2024-1842",
    student: "Kenji Tanaka",
    email: "k.tanaka@kit.edu",
    product: "O2 Prepaid SIM",
    amount: "€14.99",
    payment: "Delayed",
    fulfillment: "Processing",
    date: "Jan 30, 2024",
  },
];

type MarketplaceStore = {
  products: Product[];
  orders: Order[];
  addProduct: (product: Product) => void;
  getProductById: (id: string) => Product | null;
  getOrderById: (id: string) => Order | null;
};

export const useMarketplaceStore = create<MarketplaceStore>((set, get) => ({
  products: initialProducts,
  orders: initialOrders,

  addProduct: (product) =>
    set((state) => ({ products: [product, ...state.products] })),

  getProductById: (id) =>
    get().products.find((p) => p.id === id) ?? null,

  getOrderById: (id) =>
    get().orders.find((o) => o.id === id) ?? null,
}));