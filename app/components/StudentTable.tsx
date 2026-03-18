"use client";

import { useRouter } from "next/navigation";
import { Flag, ChevronRight } from "lucide-react";
import { useGuaranteesStore } from "@/app/store/zustand/useGuaranteesStore";
import Pagination from "@/app/components/common/Pagination";

const badgeStyles = {
  risk: {
    Low:    "bg-green-1600/10 border-green-1600/30 text-green-1600",
    Medium: "bg-yellow-1100/10 border-yellow-1100/30 text-yellow-1100",
    High:   "bg-red-1300/10 border-red-1300/30 text-red-1300",
  },
  status: {
    Approved:      "bg-green-1600/10 border-green-1600/30 text-green-1600",
    Pending:       "bg-yellow-1100/10 border-yellow-1100/30 text-yellow-1100",
    "Under Review":"bg-blue-1000/10 border-blue-1000/30 text-blue-1000",
  },
  type: {
    Rental:    "bg-blue-1000/10 text-blue-1000",
    Financial: "bg-gray-1600 text-blue-1300",
  },
};

export default function StudentTable() {
  const router = useRouter();

  const {
    page, pageSize,
    filters,
    setPage,
    filteredStudents,
    paginatedStudents,
    totalPages,
  } = useGuaranteesStore();

  const rows  = paginatedStudents();
  const total = filteredStudents().length;
  const pages = totalPages();
  const hasFilters = Object.values(filters).some(Boolean);

  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-auto">
        <table className="xl:w-full w-300 text-sm">
          <thead className="bg-gray-1600/50 border-b border-gray-1000 text-gray-1200 uppercase text-xs">
            <tr>
              <th className="px-4 py-4 text-left">ID</th>
              <th className="px-4 py-4 text-left">Student</th>
              <th className="px-4 py-4 text-left">Type</th>
              <th className="px-4 py-4 text-left">Coverage</th>
              <th className="px-4 py-4 text-left">Risk</th>
              <th className="px-4 py-4 text-left">Status</th>
              <th className="px-4 py-4 text-left">Source</th>
              <th className="px-4 py-4"></th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-12 text-gray-1200 text-sm">
                  {hasFilters ? "No students match your filters." : "No students found."}
                </td>
              </tr>
            ) : rows.map((student) => (
              <tr
                key={student.id}
                 onClick={() => router.push(`/guarantees/${student.id}`)}
                className="border-t border-gray-1000 hover:bg-gray-50 transition cursor-pointer"
              >
                <td className="px-4 py-4 text-gray-1200 text-sm font-normal leading-5">
                  {student.id}
                </td>

                <td className="px-4 py-4">
                  <div className="flex items-start gap-2">
                    {student.flagged && (
                      <Flag className="w-4 h-4 text-yellow-1100 mt-1" />
                    )}
                    <div>
                      <p className="font-normal text-sm leading-5 text-blue-1300">{student.name}</p>
                      <p className="text-gray-1200 font-normal leading-4 text-xs">{student.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-md text-xs inline-block leading-4 font-normal ${badgeStyles.type[student.type]}`}>
                    {student.type}
                  </span>
                </td>

                <td className="px-4 py-4 font-sm leading-5 font-normal text-blue-1300">
                  {student.coverage}
                </td>

                <td className="px-4 py-4">
                  <span className={`px-2.5 py-1 border rounded-full inline-block text-xs font-normal leading-4 ${badgeStyles.risk[student.risk]}`}>
                    {student.risk}
                  </span>
                </td>

                <td className="px-4 py-4">
                  <span className={`px-2.5 py-1 border rounded-full inline-block text-xs font-normal leading-4 ${badgeStyles.status[student.status]}`}>
                    {student.status}
                  </span>
                </td>

                <td className="px-4 py-4 text-sm font-normal text-gray-1200">
                  {student.source}
                </td>

                <td className="px-4 py-4 text-right">
                  <ChevronRight className="w-5 h-5 text-gray-1200" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {pages > 1 && (
        <div className="mt-4">
          <Pagination
            page={page}
            totalPages={pages}
            totalItems={total}
            pageSize={pageSize}
            onPageChange={setPage}
          />
        </div>
      )}
    </>
  );
}