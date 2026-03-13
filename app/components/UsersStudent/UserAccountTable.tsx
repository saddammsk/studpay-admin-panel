"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useAccountsStore, Payment } from "@/app/store/zustand/useUserAccountsStore";

const statusConfig = {
  Active: { classes: "bg-lightgreen17/10 border-lightgreen17/20 text-lightgreen17" },
  Pending: { classes: "bg-yellow-1100/10 border-yellow-1100/20 text-yellow-1100" },
} as const;

function RowDropdown({ payment }: { payment: Payment }) {
  const { openDropdownId, setOpenDropdown, toggleStatus, deletePayment, setEditingPayment, setViewingPayment } =
    useAccountsStore();
  const isOpen = openDropdownId === payment.id;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen, setOpenDropdown]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpenDropdown(isOpen ? null : payment.id)}
        className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors"
      >
        <Image src="/images/vertical-dots.svg" width={16} height={16} alt="Options" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-8 z-50 w-44 bg-white border border-gray-3100 rounded-xl shadow-lg py-1 overflow-hidden">
          <button
            onClick={() => setViewingPayment(payment)}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-black-1600 font-inter text-sm hover:bg-gray-1600 transition-colors"
          >
            <Image src="/images/eye-icon.svg" width={14} height={14} alt="" />
            View Details
          </button>
          <button
            onClick={() => setEditingPayment(payment)}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-black-1600 font-inter text-sm hover:bg-gray-1600 transition-colors"
          >
            <Image src="/images/edit-icon.svg" width={14} height={14} alt="" />
            Edit Account
          </button>
          <button
            onClick={() => toggleStatus(payment.id)}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-black-1600 font-inter text-sm hover:bg-gray-1600 transition-colors"
          >
            <Image src="/images/sheild-active.svg" width={14} height={14} alt="" />
            {payment.status === "Active" ? "Set Pending" : "Set Active"}
          </button>
          <div className="border-t border-gray-3100 my-1" />
          <button
            onClick={() => deletePayment(payment.id)}
            className="w-full flex items-center gap-2.5 px-3 py-2 text-red-500 font-inter text-sm hover:bg-red-50 transition-colors"
          >
            <Image src="/images/freeze-icon.svg" width={14} height={14} alt="" />
            Remove Account
          </button>
        </div>
      )}
    </div>
  );
}

function ViewModal() {
  const { viewingPayment, setViewingPayment } = useAccountsStore();
  if (!viewingPayment) return null;
  const p = viewingPayment;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={() => setViewingPayment(null)} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <span className="bg-gray-1600 rounded-lg w-9 h-9 flex items-center justify-center">
              <Image src={p.account.icon} width={16} height={16} alt="" />
            </span>
            <div>
              <h3 className="text-black-1600 font-inter font-semibold text-base leading-6">{p.account.name}</h3>
              <p className="text-gray-1900 font-inter text-xs leading-4">{p.account.number}</p>
            </div>
          </div>
          <button
            onClick={() => setViewingPayment(null)}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors"
          >
            <Image src="/images/cross-gray.svg" width={14} height={14} alt="Close" />
          </button>
        </div>

        <div className="space-y-3">
          {[
            { label: "IBAN / Address", value: p.ibanAddress },
            { label: "Balance", value: p.balance },
            { label: "Last Activity", value: p.timestamp },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between py-2.5 border-b border-gray-3100 last:border-0">
              <span className="text-gray-1900 font-inter text-xs leading-4 uppercase tracking-[0.4px]">{label}</span>
              <span className="text-black-1600 font-inter font-medium text-sm">{value}</span>
            </div>
          ))}
          <div className="flex items-center justify-between py-2.5 border-b border-gray-3100">
            <span className="text-gray-1900 font-inter text-xs leading-4 uppercase tracking-[0.4px]">Status</span>
            <span className={`px-2.75 h-5.5 inline-flex items-center rounded-full text-xs border font-normal leading-4 ${statusConfig[p.status].classes}`}>
              {p.status}
            </span>
          </div>
          <div className="flex items-center justify-between py-2.5">
            <span className="text-gray-1900 font-inter text-xs leading-4 uppercase tracking-[0.4px]">Monthly Change</span>
            <span className={`flex items-center gap-1.5 text-sm font-medium ${p.change.direction === "down" ? "text-red1700" : "text-lightgreen17"}`}>
              <Image src={p.change.icon} width={12} height={12} alt="" />
              {p.change.type}
            </span>
          </div>
        </div>

        <button
          onClick={() => setViewingPayment(null)}
          className="mt-5 w-full h-10 rounded-lg border border-gray-3100 bg-gray-1600 text-black-1600 font-inter font-medium text-sm hover:bg-gray-200 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function EditModal() {
  const { editingPayment, setEditingPayment, updatePayment } = useAccountsStore();
  const [form, setForm] = useState<Payment | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setForm(editingPayment ? { ...editingPayment } : null);
  }, [editingPayment]);

  if (!editingPayment || !form) return null;

  const handleSave = () => {
    if (form) updatePayment(form);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={() => setEditingPayment(null)} />
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-black-1600 font-inter font-semibold text-base leading-6">Edit Account</h3>
          <button
            onClick={() => setEditingPayment(null)}
            className="w-7 h-7 flex items-center justify-center rounded-lg hover:bg-gray-1600 transition-colors"
          >
            <Image src="/images/cross-gray.svg" width={14} height={14} alt="Close" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-1900 font-inter font-medium text-xs uppercase tracking-[0.4px] mb-1.5">
              Account Name
            </label>
            <input
              type="text"
              value={form.account.name}
              onChange={(e) => setForm({ ...form, account: { ...form.account, name: e.target.value } })}
              className="w-full border border-gray-3100 rounded-lg px-3 h-10 font-inter text-sm text-black-1600 bg-gray-1600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-1900 font-inter font-medium text-xs uppercase tracking-[0.4px] mb-1.5">
              IBAN / Address
            </label>
            <input
              type="text"
              value={form.ibanAddress}
              onChange={(e) => setForm({ ...form, ibanAddress: e.target.value })}
              className="w-full border border-gray-3100 rounded-lg px-3 h-10 font-inter text-sm text-black-1600 bg-gray-1600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-1900 font-inter font-medium text-xs uppercase tracking-[0.4px] mb-1.5">
              Balance
            </label>
            <input
              type="text"
              value={form.balance}
              onChange={(e) => setForm({ ...form, balance: e.target.value })}
              className="w-full border border-gray-3100 rounded-lg px-3 h-10 font-inter text-sm text-black-1600 bg-gray-1600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>

          <div>
            <label className="block text-gray-1900 font-inter font-medium text-xs uppercase tracking-[0.4px] mb-1.5">
              Status
            </label>
            <select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value as Payment["status"] })}
              className="w-full border border-gray-3100 rounded-lg px-3 h-10 font-inter text-sm text-black-1600 bg-gray-1600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-5">
          <button
            onClick={() => setEditingPayment(null)}
            className="flex-1 h-10 rounded-lg border border-gray-3100 bg-gray-1600 text-black-1600 font-inter font-medium text-sm hover:bg-gray-200 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 h-10 rounded-lg bg-blue1400 text-white font-inter font-medium text-sm hover:bg-blue1400/90 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default function KycDocumentTable() {
  const { payments } = useAccountsStore();

  return (
    <>
      <div className="5xl:px-6 xl:px-3 px-4">
        <div className="overflow-x-auto">
          <table className="4xl:w-full w-257.5">
            <thead>
              <tr className="border-b border-gray1600">
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">Account</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">IBAN / Address</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">Balance</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">Status</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">Monthly Change</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-1900">Last Activity</th>
                <th className="px-3 py-2 text-right text-xs font-medium text-gray-1900" />
              </tr>
            </thead>

            <tbody>
              {payments.length === 0 ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-gray-1900 font-inter text-sm">
                    No accounts found.
                  </td>
                </tr>
              ) : (
                payments.map((item) => (
                  <tr key={item.id} className="border-b border-gray1600 hover:bg-gray1700/50 transition">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <span className="bg-gray-1600 rounded-lg w-10 h-10 flex items-center justify-center">
                          <Image src={item.account.icon} width={16} height={16} alt="" />
                        </span>
                        <div className="flex-1 w-full">
                          <h4 className="text-black-1600 font-inter font-medium text-sm leading-5">{item.account.name}</h4>
                          <p className="text-gray-1900 font-inter font-normal text-xs leading-4">{item.account.number}</p>
                        </div>
                      </div>
                    </td>

                    <td className="p-4">
                      <span className="inline-flex items-center text-black-1600 font-normal text-xs leading-4 bg-gray-1600 rounded pl-2 pr-5.5 h-6">
                        {item.ibanAddress}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className="inline-flex items-center text-black-1600 font-inter font-medium text-xs leading-5">
                        {item.balance}
                      </span>
                    </td>

                    <td className="p-4">
                      <span className={`px-2.75 h-5.5 inline-flex items-center rounded-full text-xs border border-solid font-normal leading-4 ${statusConfig[item.status].classes}`}>
                        {item.status}
                      </span>
                    </td>

                    <td className="p-4">
                      <div className={`flex items-center text-sm font-medium leading-5 gap-1.5 ${item.change.direction === "down" ? "text-red1700" : "text-lightgreen17"}`}>
                        <Image src={item.change.icon} width={12} height={12} alt="" />
                        <span>{item.change.type}</span>
                      </div>
                    </td>

                    <td className="p-4 text-gray-1900 font-inter font-normal text-sm leading-5">
                      {item.timestamp}
                    </td>

                    <td className="p-4 text-right">
                      <RowDropdown payment={item} />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ViewModal />
      <EditModal />
    </>
  );
}