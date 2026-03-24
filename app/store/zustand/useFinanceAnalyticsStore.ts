import { create } from "zustand";

export type SortField = "university" | "ltv" | "cac" | "ratio" | "students" | "revenue";
export type SortOrder = "asc" | "desc";

export interface UniversityRow {
  id: string;
  university: string;
  country: string;
  flag: string;
  students: number;
  ltv: number;
  cac: number;
  ratio: number;
  revenue: number;
  trend: "up" | "down" | "neutral";
}

const UNIVERSITY_DATA: UniversityRow[] = [
  { id: "U-001", university: "TU Berlin", country: "Germany", flag: "🇩🇪", students: 847, ltv: 12400, cac: 142, ratio: 87.3, revenue: 1524600, trend: "up" },
  { id: "U-002", university: "LMU Munich", country: "Germany", flag: "🇩🇪", students: 612, ltv: 11800, cac: 155, ratio: 76.1, revenue: 1102400, trend: "up" },
  { id: "U-003", university: "Sorbonne Paris", country: "France", flag: "🇫🇷", students: 534, ltv: 10900, cac: 168, ratio: 64.9, revenue: 980200, trend: "up" },
  { id: "U-004", university: "Vienna University", country: "Austria", flag: "🇦🇹", students: 412, ltv: 9800, cac: 181, ratio: 54.1, revenue: 742800, trend: "neutral" },
  { id: "U-005", university: "RWTH Aachen", country: "Germany", flag: "🇩🇪", students: 389, ltv: 11200, cac: 163, ratio: 68.7, revenue: 876400, trend: "up" },
  { id: "U-006", university: "Delft University", country: "Netherlands", flag: "🇳🇱", students: 298, ltv: 9400, cac: 192, ratio: 48.9, revenue: 540200, trend: "neutral" },
  { id: "U-007", university: "Complutense Madrid", country: "Spain", flag: "🇪🇸", students: 234, ltv: 8700, cac: 204, ratio: 42.6, revenue: 420600, trend: "down" },
  { id: "U-008", university: "Bocconi Milan", country: "Italy", flag: "🇮🇹", students: 198, ltv: 10200, cac: 178, ratio: 57.3, revenue: 384400, trend: "up" },
  { id: "U-009", university: "Heidelberg Uni", country: "Germany", flag: "🇩🇪", students: 378, ltv: 11600, cac: 149, ratio: 77.8, revenue: 840800, trend: "up" },
  { id: "U-010", university: "Paris-Dauphine", country: "France", flag: "🇫🇷", students: 267, ltv: 10400, cac: 171, ratio: 60.8, revenue: 562400, trend: "neutral" },
];

const METRIC_KEYWORDS = [
  "gmv", "gross merchandise value", "net revenue", "burn rate", "runway", "default rate",
  "cash flow", "inflow", "outflow", "heatmap", "geographic", "ltv", "cac", "lifetime value",
  "acquisition", "university", "germany", "france", "austria", "netherlands", "spain", "italy",
];

interface FinanceAnalyticsStore {
  searchQuery: string;
  searchResults: string[];

  dateFrom: string;
  dateTo: string;

  forecastEnabled: boolean;

  universityData: UniversityRow[];
  sortField: SortField;
  sortOrder: SortOrder;
  universitySearch: string;

  filteredUniversityData: () => UniversityRow[];
  avgLTV: () => string;
  avgCAC: () => string;
  ltvCacRatio: () => string;
  totalStudents: () => number;

  setSearchQuery: (q: string) => void;
  setDateFrom: (d: string) => void;
  setDateTo: (d: string) => void;
  resetFilters: () => void;
  toggleForecast: () => void;
  toggleSort: (field: SortField) => void;
  setUniversitySearch: (q: string) => void;
  exportReport: () => void;
}

export const useFinanceAnalyticsStore = create<FinanceAnalyticsStore>((set, get) => ({
  searchQuery: "",
  searchResults: [],
  dateFrom: "",
  dateTo: "",
  forecastEnabled: false,
  universityData: UNIVERSITY_DATA,
  sortField: "revenue",
  sortOrder: "desc",
  universitySearch: "",

  filteredUniversityData: () => {
    const { universityData, universitySearch, sortField, sortOrder, searchQuery } = get();
    const q = (universitySearch || searchQuery).toLowerCase();
    const filtered = q
      ? universityData.filter(
          (r) =>
            r.university.toLowerCase().includes(q) ||
            r.country.toLowerCase().includes(q) ||
            r.id.toLowerCase().includes(q)
        )
      : universityData;

    return [...filtered].sort((a, b) => {
      let cmp = 0;
      if (sortField === "university") cmp = a.university.localeCompare(b.university);
      else if (sortField === "ltv") cmp = a.ltv - b.ltv;
      else if (sortField === "cac") cmp = a.cac - b.cac;
      else if (sortField === "ratio") cmp = a.ratio - b.ratio;
      else if (sortField === "students") cmp = a.students - b.students;
      else if (sortField === "revenue") cmp = a.revenue - b.revenue;
      return sortOrder === "asc" ? cmp : -cmp;
    });
  },

  avgLTV: () => {
    const data = get().filteredUniversityData();
    if (!data.length) return "€0";
    const avg = data.reduce((s, r) => s + r.ltv, 0) / data.length;
    return `€${Math.round(avg).toLocaleString()}`;
  },

  avgCAC: () => {
    const data = get().filteredUniversityData();
    if (!data.length) return "€0";
    const avg = data.reduce((s, r) => s + r.cac, 0) / data.length;
    return `€${Math.round(avg)}`;
  },

  ltvCacRatio: () => {
    const data = get().filteredUniversityData();
    if (!data.length) return "0x";
    const avgLTV = data.reduce((s, r) => s + r.ltv, 0) / data.length;
    const avgCAC = data.reduce((s, r) => s + r.cac, 0) / data.length;
    return `${(avgLTV / avgCAC).toFixed(2)}x`;
  },

  totalStudents: () => get().filteredUniversityData().reduce((s, r) => s + r.students, 0),

  setSearchQuery: (q) => {
    const results = q.length > 1
      ? METRIC_KEYWORDS.filter((k) => k.includes(q.toLowerCase())).slice(0, 5)
      : [];
    set({ searchQuery: q, searchResults: results });
  },

  setDateFrom: (d) => set({ dateFrom: d }),
  setDateTo: (d) => set({ dateTo: d }),

  resetFilters: () => set({ searchQuery: "", searchResults: [], dateFrom: "", dateTo: "", universitySearch: "" }),

  toggleForecast: () => set((s) => ({ forecastEnabled: !s.forecastEnabled })),

  toggleSort: (field) =>
    set((s) => ({
      sortField: field,
      sortOrder: s.sortField === field && s.sortOrder === "desc" ? "asc" : "desc",
    })),

  setUniversitySearch: (q) => set({ universitySearch: q }),

  exportReport: () => {
    const data = get().filteredUniversityData();
    const headers = ["ID", "University", "Country", "Students", "LTV (€)", "CAC (€)", "LTV:CAC", "Revenue (€)"];
    const rows = data.map((r) => [r.id, r.university, r.country, r.students, r.ltv, r.cac, r.ratio, r.revenue]);
    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `finance-report-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  },
}));