import { create } from "zustand";

export type Severity = "HIGH" | "CRIT" | "MED" | "LOW";

export interface Change {
  from?: string;
  to?: string;
}

export interface AuditItem {
  id: string;
  time: string;
  date: string;
  user: string;
  role: string;
  action: string;
  module: string;
  severity: Severity;
  changes?: Change;
  ip: string;
  location: string;
}

const initialData: AuditItem[] = [
  {
    id: "LOG-2026-020514321845",
    time: "14:32:18", date: "2026-08-05",
    user: "Sarah Chen",       role: "Finance Manager",
    action: "Approved Payout for BK-2024-001",
    module: "Payments",       severity: "HIGH",
    changes: { from: "Pending", to: "Approved" },
    ip: "192.168.1.45",       location: "London, UK",
  },
  {
    id: "LOG-2026-020514284523",
    time: "14:28:45", date: "2026-08-05",
    user: "Ahmed Hassan",     role: "Security Lead",
    action: "Blocked User Account - Policy Violation",
    module: "Users",          severity: "CRIT",
    changes: { from: "Active", to: "Blocked" },
    ip: "10.0.0.23",          location: "Dubai, UAE",
  },
  {
    id: "LOG-2026-020514153300",
    time: "14:15:33", date: "2026-08-05",
    user: "Maria Rodriguez",  role: "System Admin",
    action: "Updated Housing Listing HSG-5521",
    module: "Housing",        severity: "MED",
    changes: { from: "€1,200/mo", to: "€1,350/mo" },
    ip: "172.16.0.88",        location: "Madrid, Spain",
  },
  {
    id: "LOG-2026-020514021100",
    time: "14:02:11", date: "2026-08-05",
    user: "James Wilson",     role: "Compliance Officer",
    action: "Viewed Guarantee Contract GRT-7892",
    module: "Guarantees",     severity: "LOW",
    ip: "192.168.2.100",      location: "New York, USA",
  },
  {
    id: "LOG-2026-020513450200",
    time: "13:45:02", date: "2026-08-05",
    user: "Sarah Chen",       role: "Finance Manager",
    action: "Released Crypto Payout 0.5 BTC",
    module: "Crypto",         severity: "CRIT",
    changes: { from: "Locked", to: "Released" },
    ip: "192.168.1.45",       location: "London, UK",
  },
  {
    id: "LOG-2026-020513325500",
    time: "13:32:55", date: "2026-08-05",
    user: "Priya Sharma",     role: "Operations",
    action: "Added Reward Points - 500 pts",
    module: "Rewards",        severity: "MED",
    changes: { from: "1,200 pts", to: "1,700 pts" },
    ip: "10.10.0.55",         location: "Mumbai, India",
  },
  {
    id: "LOG-2026-020513184400",
    time: "13:18:44", date: "2026-08-05",
    user: "Ahmed Hassan",     role: "Security Lead",
    action: "Modified RLS Policy on users_table",
    module: "System",         severity: "CRIT",
    changes: { from: "Policy v1.2", to: "Policy v1.3" },
    ip: "10.0.0.23",          location: "Dubai, UAE",
  },
  {
    id: "LOG-2026-020512552100",
    time: "12:55:21", date: "2026-08-05",
    user: "James Wilson",     role: "Compliance Officer",
    action: "Exported Audit Report - Q1 2026",
    module: "System",         severity: "LOW",
    ip: "192.168.2.100",      location: "New York, USA",
  },
];

const PAGE_SIZE = 5;

type Filters = {
  search: string;
  severity: string;
  module: string;
  date: string;
};

type AuditStore = {
  data: AuditItem[];
  filters: Filters;
  currentPage: number;
  selectedItem: AuditItem | null;
  isModalOpen: boolean;
  exportCSV: () => void;
  exportItemCSV: () => void;
exportItemPDF: () => void;

  setSearch: (v: string) => void;
  setSeverity: (v: string) => void;
  setModule: (v: string) => void;
  setDate: (v: string) => void;
  resetFilters: () => void;

  openModal: (item: AuditItem) => void;
  closeModal: () => void;

  setPage: (page: number) => void;

  filteredData: () => AuditItem[];
  paginatedData: () => AuditItem[];
  totalPages: () => number;
};

const emptyFilters: Filters = { search: "", severity: "", module: "", date: "" };

export const useAuditStore = create<AuditStore>((set, get) => ({
  data: initialData,
  filters: emptyFilters,
  currentPage: 1,
  selectedItem: null,
  isModalOpen: false,

  setSearch:   (search)   => set((s) => ({ filters: { ...s.filters, search   }, currentPage: 1 })),
  setSeverity: (severity) => set((s) => ({ filters: { ...s.filters, severity }, currentPage: 1 })),
  setModule:   (module)   => set((s) => ({ filters: { ...s.filters, module   }, currentPage: 1 })),
  setDate:     (date)     => set((s) => ({ filters: { ...s.filters, date     }, currentPage: 1 })),
  resetFilters: ()        => set({ filters: emptyFilters, currentPage: 1 }),

  openModal:  (item) => set({ selectedItem: item, isModalOpen: true  }),
  closeModal: ()     => set({ isModalOpen: false, selectedItem: null }),

  setPage: (page) => set({ currentPage: page }),

  filteredData: () => {
    const { data, filters } = get();
    return data.filter((item) => {
      const q = filters.search.toLowerCase();
      const matchSearch =
        !q ||
        item.user.toLowerCase().includes(q) ||
        item.action.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.ip.toLowerCase().includes(q);
      const matchSeverity = !filters.severity || item.severity === filters.severity;
      const matchModule   = !filters.module   || item.module   === filters.module;
      const matchDate     = !filters.date     || item.date     === filters.date;
      return matchSearch && matchSeverity && matchModule && matchDate;
    });
  },

  exportCSV: () => {
  const rows = get().filteredData();
  const headers = [
    "Log ID", "Date", "Time", "User", "Role",
    "Action", "Module", "Severity",
    "Change From", "Change To", "IP", "Location",
  ];
  const csvRows = rows.map((item) => [
    item.id, item.date, item.time, item.user, item.role,
    item.action, item.module, item.severity,
    item.changes?.from ?? "—", item.changes?.to ?? "—",
    item.ip, item.location,
  ]);
  const csv = [headers, ...csvRows]
    .map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `audit-log-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();
  URL.revokeObjectURL(url);
},

exportItemCSV: () => {
  const item = get().selectedItem;
  if (!item) return;
  const headers = [
    "Log ID", "Date", "Time", "User", "Role",
    "Action", "Module", "Severity",
    "Change From", "Change To", "IP", "Location",
  ];
  const row = [
    item.id, item.date, item.time, item.user, item.role,
    item.action, item.module, item.severity,
    item.changes?.from ?? "—", item.changes?.to ?? "—",
    item.ip, item.location,
  ];
  const csv = [headers, row]
    .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${item.id}.csv`;
  link.click();
  URL.revokeObjectURL(url);
},

exportItemPDF: () => {
  const item = get().selectedItem;
  if (!item) return;

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Audit Log ${item.id}</title>
      <style>
        body { font-family: sans-serif; padding: 32px; color: #1a1a2e; font-size: 13px; }
        h1 { font-size: 18px; margin-bottom: 4px; }
        .sub { color: #6b7280; font-size: 11px; margin-bottom: 24px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 12px; margin-bottom: 20px; }
        .card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px; background: #f9fafb; }
        .label { font-size: 9px; text-transform: uppercase; color: #9ca3af; margin-bottom: 4px; }
        .value { font-size: 12px; font-weight: 600; }
        table { width: 100%; border-collapse: collapse; margin-top: 16px; }
        th { background: #f3f4f6; text-align: left; padding: 8px 12px; font-size: 10px; text-transform: uppercase; color: #6b7280; }
        td { padding: 8px 12px; border-top: 1px solid #e5e7eb; font-size: 12px; }
        .changes { display: flex; gap: 16px; margin-top: 12px; }
        .old { background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; padding: 10px; flex: 1; }
        .new { background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 8px; padding: 10px; flex: 1; }
        pre { background: #f3f4f6; border-radius: 8px; padding: 16px; font-size: 10px; overflow: auto; white-space: pre-wrap; }
        @media print { body { padding: 16px; } }
      </style>
    </head>
    <body>
      <h1>Audit Log Details</h1>
      <p class="sub">${item.id}</p>

      <div class="grid">
        <div class="card"><div class="label">Timestamp</div><div class="value">${item.date} ${item.time}</div></div>
        <div class="card"><div class="label">Admin</div><div class="value">${item.user}</div></div>
        <div class="card"><div class="label">IP Address</div><div class="value">${item.ip}</div></div>
        <div class="card"><div class="label">Severity</div><div class="value">${item.severity}</div></div>
      </div>

      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Action</td><td>${item.action}</td></tr>
          <tr><td>Module</td><td>${item.module}</td></tr>
          <tr><td>Admin</td><td>${item.user} (${item.role})</td></tr>
          <tr><td>Location</td><td>${item.location}</td></tr>
          <tr><td>IP</td><td>${item.ip}</td></tr>
        </tbody>
      </table>

      ${item.changes?.from && item.changes?.to ? `
        <h3 style="margin-top:20px;font-size:13px;">Value Changes</h3>
        <div class="changes">
          <div class="old"><div class="label">Old Value</div><div style="color:#ef4444;margin-top:4px;">${item.changes.from}</div></div>
          <div class="new"><div class="label">New Value</div><div style="color:#16a34a;margin-top:4px;">${item.changes.to}</div></div>
        </div>
      ` : ""}

      <h3 style="margin-top:20px;font-size:13px;">Raw Technical Data</h3>
      <pre>${JSON.stringify({
        event_id: `evt_${item.id}`,
        event_type: "admin.action.executed",
        source: "admin-panel",
        version: "2.1.0",
        payload: {
          admin: item.user, role: item.role,
          action: item.action, module: item.module,
          severity: item.severity, ip: item.ip,
          location: item.location,
          timestamp: `${item.date}T${item.time}`,
        },
        metadata: { environment: "production", region: "eu-west-1", server_id: "srv-prod-012" },
      }, null, 2)}</pre>
    </body>
    </html>
  `;

  const blob = new Blob([html], { type: "text/html;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, "_blank");
  win?.addEventListener("load", () => {
    win.print();
    URL.revokeObjectURL(url);
  });
},

  paginatedData: () => {
    const { currentPage } = get();
    const filtered = get().filteredData();
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  },

  totalPages: () => Math.max(1, Math.ceil(get().filteredData().length / PAGE_SIZE)),
}));