"use client";
import { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import {
  useFinancingStore,
  LOANS,
  type LoanStatus,
  type RiskLevel,
} from "@/app/store/zustand/useGlobalFinancingStore";

const statusConfig: Record<LoanStatus, string> = {
  Active: "bg-green-1300/10 border-lightgreen15 text-green-1800",
  "Pending Approval": "bg-yellow-1300/10 border-yellow2100 text-BurntOrange",
  "Under Review": "bg-blue-1700/10 border-blue300 text-blue800",
  Disbursed: "bg-purple-1100/10 border-purpal12 text-purpal14",
  Defaulted: "bg-red-1300/10 border-red-1300/20 text-red-1300",
  Completed: "bg-green-1300/10 border-lightgreen15 text-green-1800",
};

const riskConfig: Record<RiskLevel, string> = {
  Low: "bg-green-1300/10 border-lightgreen15 text-green-1800",
  Medium: "bg-yellow-1300/10 border-yellow2100 text-BurntOrange",
  High: "bg-red-1300/10 border-red-1300/20 text-red-1300",
};

const progressColor = (v: number) => {
  if (v >= 75) return "bg-green57";
  if (v >= 40) return "bg-yellow-1100";
  if (v > 0) return "bg-red-1300";
  return "bg-gray-300";
};

export default function FinancingLoanLedgerTable() {
  const store = useFinancingStore();
  const {
    search, statusFilter, riskFilter, partnerFilter,
    currentPage, itemsPerPage, sortField, sortDirection,
    detailModalOpen, detailLoan,
    newAppModalOpen, newAppForm, newAppErrors,
  } = store;

  const filtered = useMemo(() => {
    let data = [...LOANS];
    if (search) {
      const q = search.toLowerCase();
      data = data.filter((r) =>
        r.studentName.toLowerCase().includes(q) ||
        r.loanId.toLowerCase().includes(q) ||
        r.university.toLowerCase().includes(q) ||
        r.partner.toLowerCase().includes(q)
      );
    }
    if (statusFilter !== "All") data = data.filter((r) => r.status === statusFilter);
    if (riskFilter !== "All") data = data.filter((r) => r.risk === riskFilter);
    if (partnerFilter !== "All") data = data.filter((r) => r.partner === partnerFilter);
    if (sortField) {
      data.sort((a, b) => {
        if (sortField === "amountNum" || sortField === "repaymentProgress" || sortField === "id") {
          return sortDirection === "asc" ? a[sortField] - b[sortField] : b[sortField] - a[sortField];
        }
        const aV = String(a[sortField]), bV = String(b[sortField]);
        return sortDirection === "asc" ? aV.localeCompare(bV) : bV.localeCompare(aV);
      });
    }
    return data;
  }, [search, statusFilter, riskFilter, partnerFilter, sortField, sortDirection]);

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, filtered.length);
  const hasFilters = search !== "" || statusFilter !== "All" || riskFilter !== "All" || partnerFilter !== "All";

  const thSort = "px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold cursor-pointer select-none";
  const thStatic = "px-4 py-3.5 text-blue-1300 text-sm leading-5 font-bold";

  return (
    <>
      {/* FILTERS */}
      <div className="border border-solid border-gray-3600 bg-white rounded-xl p-4 mb-4 shadow-68xl">
        <div className="2xl:flex items-center gap-3">
          <div className="relative flex-1 w-full 2xl:mb-0 mb-4">
            <input
              type="text"
              className="text-sm transition duration-300 ring-2 ring-transparent focus:ring-transparent font-normal font-neulis-sans text-gray-1900 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-gray-1500 border border-gray-3600 rounded-md w-full outline-0"
              placeholder="Search by loan ID, student, or university..."
              value={search}
              onChange={(e) => store.setSearch(e.target.value)}
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-3">
              <Image src="/images/search-icon.svg" width="16" height="16" alt="" />
            </div>
          </div>
          <div className="2xl:flex items-center grid sm:grid-cols-4 grid-cols-2 gap-3">
            <div className="2xl:w-40 w-full">
              <CustomSelect
                value={statusFilter}
                className="h-10"
                onChange={store.setStatusFilter}
                options={[
                  { label: "All Statuses", value: "All" },
                  { label: "Active", value: "Active" },
                  { label: "Pending Approval", value: "Pending Approval" },
                  { label: "Under Review", value: "Under Review" },
                  { label: "Disbursed", value: "Disbursed" },
                  { label: "Defaulted", value: "Defaulted" },
                  { label: "Completed", value: "Completed" },
                ]}
              />
            </div>
            <div className="2xl:w-36 w-full">
              <CustomSelect
                value={riskFilter}
                className="h-10"
                onChange={store.setRiskFilter}
                options={[
                  { label: "All Risk", value: "All" },
                  { label: "Low", value: "Low" },
                  { label: "Medium", value: "Medium" },
                  { label: "High", value: "High" },
                ]}
              />
            </div>
            <div className="2xl:w-44 w-full">
              <CustomSelect
                value={partnerFilter}
                className="h-10"
                onChange={store.setPartnerFilter}
                options={[
                  { label: "All Partners", value: "All" },
                  { label: "EduFund Africa", value: "EduFund Africa" },
                  { label: "StudyLoan NG", value: "StudyLoan NG" },
                  { label: "Prodigy Finance", value: "Prodigy Finance" },
                ]}
              />
            </div>
            <div className="flex items-center gap-2">
              {hasFilters && (
                <button type="button" onClick={store.resetFilters} className="text-red-1300 hover:bg-red-1300/10 text-xs font-medium px-3 h-10 rounded-md transition-colors whitespace-nowrap inline-flex items-center gap-1">
                  <Image src="/images/cross-red.svg" width="12" height="12" alt="" />
                  Clear
                </button>
              )}
              <button onClick={store.exportCSV} className="inline-flex items-center gap-2 text-black-1000 text-sm border border-gray-3600 rounded-md bg-white h-10 px-3 hover:bg-gray-1500 transition-colors cursor-pointer whitespace-nowrap">
                <Image src="/images/export-icon4.svg" width="16" height="16" alt="" />
                Export
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-68xl">
        <div className="overflow-x-auto">
          <table className="5xl:w-full w-375">
            <thead>
              <tr className="border-b border-gray-1000 text-left bg-gray24/30">
                <th className={thSort} onClick={() => store.setSorting("loanId")}>Loan ID</th>
                <th className={thSort} onClick={() => store.setSorting("studentName")}>Student</th>
                <th className={thStatic}>Partner</th>
                <th className={thSort} onClick={() => store.setSorting("amountNum")}>Amount</th>
                <th className={thSort} onClick={() => store.setSorting("status")}>Status</th>
                <th className={thSort} onClick={() => store.setSorting("risk")}>Risk</th>
                <th className={thStatic}>Repayment</th>
                <th className={thStatic}>Maturity</th>
                <th className={thStatic}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginated.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-16 text-center text-sm text-gray-1200">No matching loans found</td>
                </tr>
              ) : (
                paginated.map((item) => (
                  <tr key={item.id} className="border-b border-gray-1000 hover:bg-gray24/50">
                    <td className="px-3 py-4">
                      <span className="text-blue-1300 text-sm leading-5 font-medium">{item.loanId}</span>
                    </td>
                    <td className="px-3 py-4">
                      <div className="text-blue-1300 text-sm leading-5 font-normal mb-0.5">{item.studentName}</div>
                      <div className="text-gray-1200 text-xs leading-4 font-normal">{item.university}</div>
                    </td>
                    <td className="px-3 py-4 text-blue-1300 text-sm leading-5 font-normal">{item.partner}</td>
                    <td className="px-3 py-4 text-blue-1300 text-sm leading-5 font-bold">{item.amount}</td>
                    <td className="px-3 py-4">
                      <span className={`px-2.5 h-5.5 inline-flex items-center pt-0.5 justify-center rounded-full text-xs font-normal leading-4 border border-solid ${statusConfig[item.status]}`}>{item.status}</span>
                    </td>
                    <td className="px-3 py-4">
                      <span className={`px-2.5 h-5.5 inline-flex items-center pt-0.5 justify-center rounded-full text-xs font-normal leading-4 border border-solid ${riskConfig[item.risk]}`}>{item.risk}</span>
                    </td>
                    <td className="px-3 py-4">
                      <div className="flex items-center gap-2 min-w-[100px]">
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full transition-all ${progressColor(item.repaymentProgress)}`} style={{ width: `${item.repaymentProgress}%` }} />
                        </div>
                        <span className="text-xs leading-4 text-gray-1200 font-medium w-8 text-right">{item.repaymentProgress}%</span>
                      </div>
                    </td>
                    <td className="px-3 py-4 text-gray-1200 text-sm leading-5 font-normal">{item.maturityDate}</td>
                    <td className="px-3 py-4">
                      <ul className="flex items-center gap-2 justify-end">
                        <li>
                          <button onClick={() => store.openDetailModal(item)} className="group hover:bg-LightSkyBlue rounded-md flex cursor-pointer items-center justify-center w-8 h-8">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="group-hover:stroke-royalBlue124" d="M1.37468 8.232C1.31912 8.08232 1.31912 7.91767 1.37468 7.768C1.91581 6.4559 2.83435 5.33402 4.01386 4.5446C5.19336 3.75517 6.58071 3.33374 8.00001 3.33374C9.41932 3.33374 10.8067 3.75517 11.9862 4.5446C13.1657 5.33402 14.0842 6.4559 14.6253 7.768C14.6809 7.91767 14.6809 8.08232 14.6253 8.232C14.0842 9.54409 13.1657 10.666 11.9862 11.4554C10.8067 12.2448 9.41932 12.6663 8.00001 12.6663C6.58071 12.6663 5.19336 12.2448 4.01386 11.4554C2.83435 10.666 1.91581 9.54409 1.37468 8.232Z" stroke="#0F1729" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                              <path className="group-hover:stroke-royalBlue124" d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#0F1729" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between flex-wrap gap-3 px-4 py-3 border-t border-gray-1000">
            <p className="text-xs text-gray-1200">Showing {startItem}–{endItem} of {filtered.length}</p>
            <div className="flex items-center gap-1">
              <button disabled={currentPage === 1} onClick={() => store.setCurrentPage(currentPage - 1)} className="w-8 h-8 flex items-center justify-center rounded-md text-gray-1200 hover:bg-gray24/50 disabled:opacity-40 disabled:cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} onClick={() => store.setCurrentPage(p)} className={`w-8 h-8 rounded-md text-xs font-medium transition-colors ${currentPage === p ? "bg-blue-1300 text-white" : "text-blue-1300 hover:bg-gray24/50"}`}>{p}</button>
              ))}
              <button disabled={currentPage === totalPages} onClick={() => store.setCurrentPage(currentPage + 1)} className="w-8 h-8 flex items-center justify-center rounded-md text-gray-1200 hover:bg-gray24/50 disabled:opacity-40 disabled:cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* VIEW DETAIL MODAL */}
      <Modal
        isOpen={detailModalOpen}
        onClose={store.closeDetailModal}
        panelClassName="max-w-[620px] bg-white relative shadow-66xl! overflow-x-auto"
      >
        <Link onClick={store.closeDetailModal} href={"#"} className="flex items-center justify-center w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        {detailLoan && (
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
                <Image src="/images/wallet-blue.svg" width="24" height="24" alt="" />
              </div>
              <div>
                <h2 className="text-lg leading-7 font-bold text-blue-1300">Loan Details</h2>
                <p className="text-sm leading-5 text-gray-1200">{detailLoan.loanId}</p>
              </div>
            </div>

            <div className="border border-gray-1000 rounded-xl p-4 bg-gray24/30 mb-4">
              <h3 className="text-sm font-bold text-blue-1300 mb-3">Student Information</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">Student Name</p>
                  <p className="text-sm leading-5 font-medium text-blue-1300">{detailLoan.studentName}</p>
                </div>
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">University</p>
                  <p className="text-sm leading-5 font-medium text-blue-1300">{detailLoan.university}</p>
                </div>
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">Lending Partner</p>
                  <p className="text-sm leading-5 font-medium text-blue-1300">{detailLoan.partner}</p>
                </div>
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">Interest Rate</p>
                  <p className="text-sm leading-5 font-medium text-blue-1300">{detailLoan.interestRate}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-1000 rounded-xl p-4 bg-gray24/30 mb-4">
              <h3 className="text-sm font-bold text-blue-1300 mb-3">Financial Details</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">Loan Amount</p>
                  <p className="text-sm leading-5 font-bold text-blue-1300">{detailLoan.amount}</p>
                </div>
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">Monthly Payment</p>
                  <p className="text-sm leading-5 font-bold text-blue-1300">{detailLoan.monthlyPayment}</p>
                </div>
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">Disbursed Date</p>
                  <p className="text-sm leading-5 font-medium text-blue-1300">{detailLoan.disbursedDate}</p>
                </div>
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-0.5">Maturity Date</p>
                  <p className="text-sm leading-5 font-medium text-blue-1300">{detailLoan.maturityDate}</p>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <p className="text-xs leading-4 text-gray-1200">Repayment Progress</p>
                  <p className="text-xs leading-4 font-bold text-blue-1300">{detailLoan.repaymentProgress}%</p>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full transition-all ${progressColor(detailLoan.repaymentProgress)}`} style={{ width: `${detailLoan.repaymentProgress}%` }} />
                </div>
              </div>
            </div>

            <div className="border border-gray-1000 rounded-xl p-4 bg-gray24/30">
              <h3 className="text-sm font-bold text-blue-1300 mb-3">Status</h3>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-1">Loan Status</p>
                  <span className={`px-2.5 h-5.5 inline-flex items-center pt-0.5 justify-center rounded-full text-xs font-normal leading-4 border border-solid ${statusConfig[detailLoan.status]}`}>{detailLoan.status}</span>
                </div>
                <div>
                  <p className="text-xs leading-4 text-gray-1200 mb-1">Risk Level</p>
                  <span className={`px-2.5 h-5.5 inline-flex items-center pt-0.5 justify-center rounded-full text-xs font-normal leading-4 border border-solid ${riskConfig[detailLoan.risk]}`}>{detailLoan.risk}</span>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="px-6 py-4 bg-gray-1600/50 border-t border-solid border-gray-3900">
          <button onClick={store.closeDetailModal} className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10">
            Close
          </button>
        </div>
      </Modal>

      {/* NEW APPLICATION MODAL */}
      <Modal
        isOpen={newAppModalOpen}
        onClose={store.closeNewAppModal}
        panelClassName="max-w-[580px] bg-white relative shadow-66xl! h-full overflow-x-auto"
      >
        <Link onClick={store.closeNewAppModal} href={"#"} className="flex items-center justify-center w-4 h-4 absolute top-4 right-4">
          <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
        </Link>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="4xl:w-12 w-11 4xl:h-12 h-11 bg-blue-2200/10 rounded-xl flex items-center justify-center">
              <Image src="/images/plus-icon.svg" width="20" height="20" alt="" />
            </div>
            <div>
              <h2 className="text-lg leading-7 font-bold text-blue-1300">New Loan Application</h2>
              <p className="text-sm leading-5 text-gray-1200">Submit a new financing application</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-blue-1300 font-normal text-sm leading-5 mb-1.5 block">Student Name <span className="text-red-1300">*</span></label>
              <input
                type="text"
                className={`text-sm font-normal text-gray-1900 placeholder:text-gray-1400 px-4 h-11 bg-gray-1500 border border-solid rounded-md w-full outline-0 ${newAppErrors.studentName ? "border-red-1300 ring-1 ring-red-1300/20" : "border-gray-3600"}`}
                placeholder="Enter student full name"
                value={newAppForm.studentName}
                onChange={(e) => store.setNewAppField("studentName", e.target.value)}
              />
              {newAppErrors.studentName && <p className="text-xs text-red-1300 mt-1">{newAppErrors.studentName}</p>}
            </div>

            <div>
              <label className="text-blue-1300 font-normal text-sm leading-5 mb-1.5 block">University <span className="text-red-1300">*</span></label>
              <input
                type="text"
                className={`text-sm font-normal text-gray-1900 placeholder:text-gray-1400 px-4 h-11 bg-gray-1500 border border-solid rounded-md w-full outline-0 ${newAppErrors.university ? "border-red-1300 ring-1 ring-red-1300/20" : "border-gray-3600"}`}
                placeholder="Enter university name"
                value={newAppForm.university}
                onChange={(e) => store.setNewAppField("university", e.target.value)}
              />
              {newAppErrors.university && <p className="text-xs text-red-1300 mt-1">{newAppErrors.university}</p>}
            </div>

            <div>
              <label className="text-blue-1300 font-normal text-sm leading-5 mb-1.5 block">Lending Partner <span className="text-red-1300">*</span></label>
              <CustomSelect
                className={`h-11 rounded-md ${newAppErrors.partner ? "border-red-1300 ring-1 ring-red-1300/20" : ""}`}
                value={newAppForm.partner}
                onChange={(v) => store.setNewAppField("partner", v)}
                options={[
                  { label: "Select partner...", value: "" },
                  { label: "EduFund Africa", value: "EduFund Africa" },
                  { label: "StudyLoan NG", value: "StudyLoan NG" },
                  { label: "Prodigy Finance", value: "Prodigy Finance" },
                ]}
              />
              {newAppErrors.partner && <p className="text-xs text-red-1300 mt-1">{newAppErrors.partner}</p>}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-blue-1300 font-normal text-sm leading-5 mb-1.5 block">Loan Amount <span className="text-red-1300">*</span></label>
                <input
                  type="text"
                  className={`text-sm font-normal text-gray-1900 placeholder:text-gray-1400 px-4 h-11 bg-gray-1500 border border-solid rounded-md w-full outline-0 ${newAppErrors.amount ? "border-red-1300 ring-1 ring-red-1300/20" : "border-gray-3600"}`}
                  placeholder="€0.00"
                  value={newAppForm.amount}
                  onChange={(e) => store.setNewAppField("amount", e.target.value)}
                />
                {newAppErrors.amount && <p className="text-xs text-red-1300 mt-1">{newAppErrors.amount}</p>}
              </div>
              <div>
                <label className="text-blue-1300 font-normal text-sm leading-5 mb-1.5 block">Interest Rate</label>
                <input
                  type="text"
                  className="text-sm font-normal text-gray-1900 placeholder:text-gray-1400 px-4 h-11 bg-gray-1500 border border-solid border-gray-3600 rounded-md w-full outline-0"
                  placeholder="e.g. 4.5%"
                  value={newAppForm.interestRate}
                  onChange={(e) => store.setNewAppField("interestRate", e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-blue-1300 font-normal text-sm leading-5 mb-1.5 block">Maturity Date <span className="text-red-1300">*</span></label>
              <input
                type="date"
                className={`text-sm font-normal text-gray-1900 px-4 h-11 bg-gray-1500 border border-solid rounded-md w-full outline-0 ${newAppErrors.maturityDate ? "border-red-1300 ring-1 ring-red-1300/20" : "border-gray-3600"}`}
                value={newAppForm.maturityDate}
                onChange={(e) => store.setNewAppField("maturityDate", e.target.value)}
              />
              {newAppErrors.maturityDate && <p className="text-xs text-red-1300 mt-1">{newAppErrors.maturityDate}</p>}
            </div>
          </div>
        </div>
        <div className="px-6 py-4 bg-gray-1600/50 border-t border-solid border-gray-3900">
          <ul className="flex items-center justify-between gap-3">
            <li>
              <button onClick={store.closeNewAppModal} className="px-4 cursor-pointer hover:bg-blue1900 hover:text-blue2000 transition-all duration-500 ease-in-out w-full border rounded-md text-gray-3800 font-medium text-sm leading-5 bg-gray-1500 border-solid border-grey-5400 h-10">
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={() => { if (store.validateNewApp()) store.closeNewAppModal(); }}
                className="cursor-pointer sm:px-8 px-5 flex items-center sm:gap-4 gap-3 justify-center w-full transition-all duration-500 ease-in-out border rounded-md text-white font-bold text-sm leading-5 bg-blue-1000 hover:bg-blue800 border-solid border-blue-1000 h-10"
              >
                <Image src="/images/plus-icon.svg" width="16" height="16" alt="" className="brightness-10000" />
                Submit Application
              </button>
            </li>
          </ul>
        </div>
      </Modal>
    </>
  );
}