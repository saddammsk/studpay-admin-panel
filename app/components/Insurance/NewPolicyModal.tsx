"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { useInsuranceHubStore, PolicyType, PolicyStatus } from "@/app/store/zustand/useInsuranceHubStore";

type Props = {
  open: boolean;
  onClose: () => void;
};

const emptyForm = {
  student:   "",
  type:      "Health" as PolicyType,
  provider:  "",
  startDate: "",
  endDate:   "",
  status:    "Pending" as PolicyStatus,
  source:    "",
};

export default function NewPolicyModal({ open, onClose }: Props) {
  const { addPolicy, policies } = useInsuranceHubStore();
  const [form, setForm] = useState(emptyForm);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.student || !form.provider || !form.startDate || !form.endDate) return;
    const newId = `POL-${new Date().getFullYear()}-${String(policies.length + 1).padStart(3, "0")}`;
    addPolicy({ id: newId, ...form });
    setForm(emptyForm);
    onClose();
  };

  return (
    // Backdrop
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-1300">New Policy</h2>
            <p className="text-sm text-gray-1200">Fill in the details to create a new policy</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-1200 mb-1 block">Student Name *</label>
            <input
              name="student"
              value={form.student}
              onChange={handleChange}
              placeholder="e.g. Emma Thompson"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-1300 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-1200 mb-1 block">Type *</label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-1300"
            >
              <option value="Health">Health</option>
              <option value="Travel">Travel</option>
              <option value="Liability">Liability</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-1200 mb-1 block">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-1300"
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Expired">Expired</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-1200 mb-1 block">Provider *</label>
            <input
              name="provider"
              value={form.provider}
              onChange={handleChange}
              placeholder="e.g. Allianz"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-1300 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-1200 mb-1 block">Source / Campaign</label>
            <input
              name="source"
              value={form.source}
              onChange={handleChange}
              placeholder="e.g. TU Berlin Referral"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-1300 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-1200 mb-1 block">Start Date *</label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-1300"
            />
          </div>

          <div>
            <label className="text-xs text-gray-1200 mb-1 block">End Date *</label>
            <input
              type="date"
              name="endDate"
              value={form.endDate}
              onChange={handleChange}
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-1300"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md border border-gray-1000 bg-gray-6600 text-blue-1300 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!form.student || !form.provider || !form.startDate || !form.endDate}
            className="px-4 py-2 text-sm rounded-md bg-blue-1000 text-white hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Create Policy
          </button>
        </div>
      </div>
    </div>
  );
}