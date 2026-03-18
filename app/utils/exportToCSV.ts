import { Policy } from "@/app/store/zustand/useInsuranceHubStore";

export function exportToCSV(policies: Policy[], filename = "policies.csv") {
  const headers = ["Policy ID", "Student", "Type", "Provider", "Start Date", "End Date", "Status", "Source"];
  const rows = policies.map((p) => [
    p.id, p.student, p.type, p.provider, p.startDate, p.endDate, p.status, p.source,
  ]);

  const csv = [headers, ...rows]
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url  = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href     = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}