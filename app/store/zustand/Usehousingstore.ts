import { create } from "zustand";

export type KycStatus = "Verified" | "Pending" | "Rejected";
export type CampaignSource = "Univ-Promotion" | "Summer-Special" | "Early-Bird" | "";
export type ReservationStatus = "Confirmed" | "Pending" | "Cancelled";
export type SortDir = "asc" | "desc" | null;

export interface BoostedListing {
  id: string;
  name: string;
  landlord: string;
  campaign: string;
  campaignColor: string;
  budget: string;
  bookings: number;
  roi: string;
}

export interface Listing {
  id: string;
  name: string;
  location: string;
  city: string;
  price: string;
  landlord: string;
  kyc: KycStatus;
  status: string;
  campaign: CampaignSource;
}

export interface Reservation {
  id: string;
  student: string;
  email: string;
  property: string;
  location: string;
  checkIn: string;
  checkOut: string;
  amount: string;
  status: ReservationStatus;
}

export interface ListingFilters {
  city: string;
  status: string;
  campaign: string;
  search: string;
}

export interface ListingSort {
  field: keyof Listing | null;
  dir: SortDir;
}

const boostedListingsData: BoostedListing[] = [
  { id: "LST-001", name: "Modern Studio Apartment", landlord: "Hans Müller",   campaign: "Univ-Promotion", campaignColor: "bg-gray-1600 text-blue-1300", budget: "€450", bookings: 12, roi: "267%" },
  { id: "LST-002", name: "Cozy 2BR near Campus",    landlord: "Anna Schmidt",  campaign: "Summer-Special", campaignColor: "bg-gray-1600 text-blue-1300", budget: "€320", bookings: 8,  roi: "175%" },
  { id: "LST-003", name: "Luxury Penthouse Suite",  landlord: "Michael Weber", campaign: "Early-Bird",     campaignColor: "bg-gray-1600 text-blue-1300", budget: "€680", bookings: 15, roi: "221%" },
  { id: "LST-004", name: "Student Shared House",    landlord: "Laura Fischer", campaign: "Univ-Promotion", campaignColor: "bg-gray-1600 text-blue-1300", budget: "€280", bookings: 9,  roi: "321%" },
];

const listingsData: Listing[] = [
  { id: "LST-101", name: "Bright Studio near TU Berlin", location: "Berlin, Charlottenburg",    city: "Berlin",    price: "€650",  landlord: "Thomas Braun",    kyc: "Verified", status: "Active",   campaign: "Univ-Promotion"  },
  { id: "LST-102", name: "Spacious 3BR Family Apt",       location: "Munich, Schwabing",          city: "Munich",    price: "€1450", landlord: "Maria Hoffmann",  kyc: "Pending",  status: "Active",   campaign: ""                },
  { id: "LST-103", name: "Minimalist Loft Downtown",      location: "Frankfurt, Sachsenhausen",   city: "Frankfurt", price: "€890",  landlord: "Klaus Richter",   kyc: "Verified", status: "Active",   campaign: "Early-Bird"      },
  { id: "LST-104", name: "Garden View Apartment",         location: "Hamburg, Eimsbüttel",        city: "Hamburg",   price: "€780",  landlord: "Sabine Wolf",     kyc: "Rejected", status: "Inactive", campaign: ""                },
  { id: "LST-105", name: "Modern 2BR with Balcony",       location: "Berlin, Prenzlauer Berg",    city: "Berlin",    price: "€1100", landlord: "Peter Schneider", kyc: "Pending",  status: "Active",   campaign: ""                },
  { id: "LST-106", name: "Cozy Attic Room",               location: "Munich, Maxvorstadt",        city: "Munich",    price: "€520",  landlord: "Julia Becker",    kyc: "Verified", status: "Active",   campaign: "Summer-Special"  },
  { id: "LST-107", name: "Historic City Centre Flat",     location: "Frankfurt, Altstadt",        city: "Frankfurt", price: "€960",  landlord: "Erik Vogel",      kyc: "Verified", status: "Active",   campaign: "Univ-Promotion"  },
  { id: "LST-108", name: "Riverside Studio",              location: "Hamburg, HafenCity",         city: "Hamburg",   price: "€870",  landlord: "Nina Krause",     kyc: "Pending",  status: "Active",   campaign: ""                },
];

const reservationsData: Reservation[] = [
  { id: "RES-001", student: "Priya Sharma",   email: "priya@student.de",   property: "Modern Studio Apartment",  location: "Berlin",    checkIn: "2025-04-01", checkOut: "2025-09-30", amount: "€3,900",  status: "Confirmed"  },
  { id: "RES-002", student: "Amit Verma",     email: "amit@uni.de",        property: "Cozy 2BR near Campus",     location: "Munich",    checkIn: "2025-05-01", checkOut: "2025-10-31", amount: "€2,560",  status: "Pending"    },
  { id: "RES-003", student: "Sophie Martin",  email: "sophie@edu.fr",      property: "Minimalist Loft Downtown", location: "Frankfurt", checkIn: "2025-03-15", checkOut: "2025-08-14", amount: "€4,450",  status: "Confirmed"  },
  { id: "RES-004", student: "James O'Brien",  email: "james@ox.ac.uk",     property: "Luxury Penthouse Suite",   location: "Berlin",    checkIn: "2025-06-01", checkOut: "2025-11-30", amount: "€5,100",  status: "Confirmed"  },
  { id: "RES-005", student: "Yuki Tanaka",    email: "yuki@waseda.jp",     property: "Cozy Attic Room",          location: "Munich",    checkIn: "2025-04-15", checkOut: "2025-07-14", amount: "€1,560",  status: "Cancelled"  },
  { id: "RES-006", student: "Ahmed El-Sayed", email: "ahmed@cairo.edu",    property: "Student Shared House",     location: "Hamburg",   checkIn: "2025-05-01", checkOut: "2025-08-31", amount: "€1,120",  status: "Pending"    },
  { id: "RES-007", student: "Clara Schmidt",  email: "clara@fh-berlin.de", property: "Bright Studio near TU",    location: "Berlin",    checkIn: "2025-03-01", checkOut: "2025-08-31", amount: "€3,900",  status: "Confirmed"  },
  { id: "RES-008", student: "Luca Rossi",     email: "luca@polimi.it",     property: "Modern 2BR with Balcony",  location: "Berlin",    checkIn: "2025-07-01", checkOut: "2025-12-31", amount: "€6,600",  status: "Pending"    },
];

const defaultListingFilters = (): ListingFilters => ({ city: "", status: "", campaign: "", search: "" });

interface HousingState {
  boostedListings: BoostedListing[];

  listings: Listing[];
  listingFilters: ListingFilters;
  listingSort: ListingSort;
  listingPage: number;
  listingPageSize: number;
  selectedListing: Listing | null;

  reservations: Reservation[];
  reservationFilters: { status: string; search: string };
  reservationPage: number;
  reservationPageSize: number;
  selectedReservation: Reservation | null;

  activeTab: "manage" | "student";

  setActiveTab: (tab: "manage" | "student") => void;

  setListingFilter: <K extends keyof ListingFilters>(key: K, value: string) => void;
  resetListingFilters: () => void;
  setListingSort: (field: keyof Listing) => void;
  setListingPage: (p: number) => void;
  openListingDetail: (id: string) => void;
  closeListingDetail: () => void;

  filteredListings: () => Listing[];
  paginatedListings: () => Listing[];
  totalListingPages: () => number;

  setReservationFilter: <K extends keyof HousingState["reservationFilters"]>(key: K, value: string) => void;
  setReservationPage: (p: number) => void;
  openReservationDetail: (id: string) => void;
  closeReservationDetail: () => void;

  filteredReservations: () => Reservation[];
  paginatedReservations: () => Reservation[];
  totalReservationPages: () => number;
}

export const useHousingStore = create<HousingState>()((set, get) => ({
  boostedListings: boostedListingsData,

  listings: listingsData,
  listingFilters: defaultListingFilters(),
  listingSort: { field: null, dir: null },
  listingPage: 1,
  listingPageSize: 6,
  selectedListing: null,

  reservations: reservationsData,
  reservationFilters: { status: "", search: "" },
  reservationPage: 1,
  reservationPageSize: 5,
  selectedReservation: null,

  activeTab: "manage",

  setActiveTab: (tab) => set({ activeTab: tab }),

  setListingFilter: (key, value) =>
    set((s) => ({ listingFilters: { ...s.listingFilters, [key]: value }, listingPage: 1 })),

  resetListingFilters: () => set({ listingFilters: defaultListingFilters(), listingPage: 1 }),

  setListingSort: (field) =>
    set((s) => {
      const same = s.listingSort.field === field;
      const nextDir: SortDir = same
        ? s.listingSort.dir === "asc" ? "desc" : s.listingSort.dir === "desc" ? null : "asc"
        : "asc";
      return { listingSort: { field, dir: nextDir } };
    }),

  setListingPage: (p) => set({ listingPage: p }),

  openListingDetail: (id) => {
    const item = get().listings.find((l) => l.id === id) ?? null;
    set({ selectedListing: item });
  },

  closeListingDetail: () => set({ selectedListing: null }),

  filteredListings: () => {
    const { listings, listingFilters, listingSort } = get();
    let result = listings.filter((l) => {
      if (listingFilters.city     && l.city     !== listingFilters.city)     return false;
      if (listingFilters.status   && l.kyc      !== listingFilters.status)   return false;
      if (listingFilters.campaign && l.campaign !== listingFilters.campaign) return false;
      if (listingFilters.search) {
        const q = listingFilters.search.toLowerCase();
        if (!l.name.toLowerCase().includes(q) && !l.landlord.toLowerCase().includes(q) && !l.location.toLowerCase().includes(q)) return false;
      }
      return true;
    });
    if (listingSort.field && listingSort.dir) {
      result = [...result].sort((a, b) => {
        const av = a[listingSort.field!];
        const bv = b[listingSort.field!];
        const cmp = av < bv ? -1 : av > bv ? 1 : 0;
        return listingSort.dir === "asc" ? cmp : -cmp;
      });
    }
    return result;
  },

  paginatedListings: () => {
    const { listingPage, listingPageSize } = get();
    const all = get().filteredListings();
    return all.slice((listingPage - 1) * listingPageSize, listingPage * listingPageSize);
  },

  totalListingPages: () =>
    Math.max(1, Math.ceil(get().filteredListings().length / get().listingPageSize)),

  setReservationFilter: (key, value) =>
    set((s) => ({ reservationFilters: { ...s.reservationFilters, [key]: value }, reservationPage: 1 })),

  setReservationPage: (p) => set({ reservationPage: p }),

  openReservationDetail: (id) => {
    const item = get().reservations.find((r) => r.id === id) ?? null;
    set({ selectedReservation: item });
  },

  closeReservationDetail: () => set({ selectedReservation: null }),

  filteredReservations: () => {
    const { reservations, reservationFilters } = get();
    return reservations.filter((r) => {
      if (reservationFilters.status && r.status !== reservationFilters.status) return false;
      if (reservationFilters.search) {
        const q = reservationFilters.search.toLowerCase();
        if (!r.student.toLowerCase().includes(q) && !r.property.toLowerCase().includes(q)) return false;
      }
      return true;
    });
  },

  paginatedReservations: () => {
    const { reservationPage, reservationPageSize } = get();
    const all = get().filteredReservations();
    return all.slice((reservationPage - 1) * reservationPageSize, reservationPage * reservationPageSize);
  },

  totalReservationPages: () =>
    Math.max(1, Math.ceil(get().filteredReservations().length / get().reservationPageSize)),
}));