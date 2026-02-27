"use client";

import Link from "next/link";

type LoanStatus = "Pending" | "Approved" | "Rejected";

interface LoanApplication {
  id: string;
  name: string;
  description: string;
  status: LoanStatus;
  avatar: string; // image path
}

const LOAN_APPLICATIONS: LoanApplication[] = [
  { id: "1", name: "Emily Park",   description: "Student Loan €10,000", status: "Pending", avatar: "images/avatar.png"  },
  { id: "2", name: "Andrs Slive",  description: "Blocked Account",       status: "Pending", avatar: "images/avatar2.png" },
  { id: "3", name: "Kcsia Ndidi",  description: "Student Loan €1,500",   status: "Pending", avatar: "images/avatar3.png" },
];

export const LoanApplications = () => {
  return (
    <div>
      <div className="bg-white rounded-2xl shadow-48xl pt-3.5 pb-1.5 p-6">
        <p className="text-base font-medium leading-6 text-black-5100 pb-2.75">
          Loan Applications
        </p>
        <div className="h-22.5 overflow-y-auto pb-1">
          {LOAN_APPLICATIONS.map((app, i) => (
            <div
              key={app.id}
              className={`flex items-start justify-between ${i < LOAN_APPLICATIONS.length - 1 ? "pb-1" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span>
                  <img src={app.avatar} alt="" />
                </span>
                <div>
                  <p className="text-xs font-semibold leading-4 text-blue-1200">
                    {app.name}
                  </p>
                  <p className="text-grey-5000 text-[10px] font-normal leading-3.75">
                    {app.description}
                  </p>
                </div>
              </div>
              <div>
                <span className="text-green-600 text-[10px] font-medium leading-3.75 px-2 h-5.75 rounded-full inline-flex items-center justify-center bg-green-100/50">
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="#"
          className="text-sm font-normal leading-5 text-grey-5100 border border-solid border-grey-5200 flex items-center justify-center gap-2 rounded-[20px] h-10.5"
        >
          View All
          <span>
            <img src="images/double-arw.svg" alt="" />
          </span>
        </Link>
      </div>
    </div>
  );
};