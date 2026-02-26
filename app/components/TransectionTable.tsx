"use client";

type Status = "Verified" | "Pending" | "Inactive";

interface Partner {
  id: string;
  name: string;
  category: string;
  country: string;
  activeStudents: number;
  conversion: string;
  commission: string;
  status: Status;
}

const statusConfig: Record<Status, { classes: string }> = {
  Verified: {
    classes: "bg-lightgreen12 border-lightgreen13 text-green12",
  },
  Pending: {
    classes: "bg-yellow1200 border-yellow1300 text-brown1200",
  },
  Inactive: {
    classes: "bg-gray1500 border-gray1600 text-gray1200",
  },
};

const partners: Partner[] = [
  { id: "P-001", name: "TU Berlin", category: "Education", country: "Germany", activeStudents: 847, conversion: "68.5%", commission: "15%", status: "Verified" },
  { id: "P-002", name: "RWTH Aachen University", category: "Education", country: "Germany", activeStudents: 623, conversion: "72.3%", commission: "18%", status: "Verified" },
  { id: "P-003", name: "StudySmarter GmbH", category: "Education", country: "Germany", activeStudents: 412, conversion: "54.2%", commission: "12%", status: "Verified" },
  { id: "P-004", name: "HousingAnywhere", category: "Housing", country: "Netherlands", activeStudents: 356, conversion: "45.8%", commission: "10%", status: "Verified" },
  { id: "P-005", name: "Deutsche Bank Student", category: "Finance", country: "Germany", activeStudents: 289, conversion: "62.1%", commission: "8%", status: "Pending" },
  { id: "P-006", name: "LMU Munich", category: "Education", country: "Germany", activeStudents: 534, conversion: "71.2%", commission: "16%", status: "Verified" },
  { id: "P-007", name: "Uniplaces", category: "Housing", country: "Portugal", activeStudents: 198, conversion: "38.4%", commission: "9%", status: "Inactive" },
  { id: "P-008", name: "N26 Student", category: "Finance", country: "Germany", activeStudents: 445, conversion: "58.9%", commission: "7%", status: "Verified" },
  { id: "P-009", name: "Heidelberg University", category: "Education", country: "Germany", activeStudents: 378, conversion: "65.7%", commission: "14%", status: "Verified" },
  { id: "P-010", name: "Spotahome", category: "Housing", country: "Spain", activeStudents: 167, conversion: "42.1%", commission: "11%", status: "Pending" },
];

export default function PartnerTable() {
  return (
    <div className="bg-white border border-gray-1000 rounded-lg overflow-x-auto">
      <table className="2xl:w-full w-341.25">
        <thead>
          <tr className="bg-gray-1500 border-b border-gray1600">
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Partner ID</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Partner Name</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Category</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Country</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Active Students</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Conversion %</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Commission</th>
            <th className="px-4 py-3 text-left text-black-1200 font-normal font-neulis-sans text-sm">Status</th>
          </tr>
        </thead>
        <tbody>
          {partners.map((item) => (
            <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50">
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.id}</td>
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.name}</td>
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.category}</td>
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.country}</td>
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.activeStudents}</td>
              <td className={`px-4 py-6 font-neulis-sans font-normal text-sm leading-5 ${parseFloat(item.conversion) > 60 ? "text-green12" : parseFloat(item.conversion) > 50 ? "text-orange11" : "text-red12"}`}>
                {item.conversion}
              </td>
              <td className="px-4 py-6 text-black-1200 font-neulis-sans font-normal text-sm leading-5">{item.commission}</td>
              <td className="px-4 py-6">
                <span className={`px-3 h-5.5 rounded-full text-xs font-normal leading-4 border border-solid inline-flex items-center justify-center ${statusConfig[item.status].classes}`}>
                  {item.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}