"use client";

import { useEffect, useRef } from "react";
import { useSavingPotsStore, Tier, ProductStatus } from "@/app/store/zustand/useSavingPotsStore";

const TIERS: Tier[] = ["Basic", "Premium", "VIP"];
const STATUSES: ProductStatus[] = ["Active", "Pending"];

const tierStyle: Record<Tier, string> = {
  Basic:   "border-gray-400  bg-gray-100  text-gray-600",
  Premium: "border-royalBlue123 bg-rosepink23 text-royalBlue123",
  VIP:     "border-yellow-1100 bg-rosepink23 text-yellow-1100",
};

const statusStyle: Record<ProductStatus, string> = {
  Active:  "border-lightgreen17 bg-rosepink23 text-lightgreen17",
  Pending: "border-yellow-1100 bg-rosepink23 text-yellow-1100",
};

interface FieldProps {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, required, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-medium text-black-2000 mb-1.5">
        {label} {required && <span className="text-red2100">*</span>}
      </label>
      {children}
      {error && <p className="mt-1 text-xs text-red2100">{error}</p>}
    </div>
  );
}

const inputCls = (error?: string) =>
  `w-full rounded-lg border px-3 py-2.5 text-sm text-black-2000 outline-none placeholder:text-gray-2300 focus:ring-2 focus:ring-royalBlue123/20 transition-all ${
    error ? "border-red2100 bg-red2100/5" : "border-gray-1000 bg-white focus:border-royalBlue123"
  }`;

export default function EditRatesModal() {
  const {
    editingProductId,
    editForm,
    editErrors,
    closeEdit,
    setEditField,
    submitEdit,
  } = useSavingPotsStore();

  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editingProductId) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") closeEdit(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [editingProductId, closeEdit]);

  if (!editingProductId) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEdit();
  };

  return (
    <div
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) closeEdit(); }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 px-4 py-6 overflow-y-auto"
    >
      <div className="w-full max-w-lg rounded-xl bg-white shadow-2xl my-auto">
        <div className="flex items-center justify-between border-b border-solid border-gray-1000 px-6 py-4">
          <div>
            <h3 className="text-base font-bold text-black-2000">Edit Rates</h3>
            <p className="text-xs text-gray-2300 mt-0.5">{editForm.product}</p>
          </div>
          <button
            type="button"
            onClick={closeEdit}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-2300 hover:bg-gray-1600/30 hover:text-black-2000 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 4L4 12M4 4l8 8" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <Field label="Product Name" required error={editErrors.product}>
            <input
              type="text"
              value={editForm.product}
              onChange={(e) => setEditField("product", e.target.value)}
              placeholder="e.g. StudSave Premium"
              className={inputCls(editErrors.product)}
            />
          </Field>

          <div>
            <label className="block text-xs font-medium text-black-2000 mb-1.5">Tier</label>
            <div className="flex gap-2">
              {TIERS.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setEditField("tier", t)}
                  className={`flex-1 rounded-lg border py-2 text-xs font-medium transition-all ${
                    editForm.tier === t ? tierStyle[t] : "border-gray-1000 text-gray-2300 hover:border-gray-2300"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Field label="Interest Rate" required error={editErrors.interest}>
              <div className="relative">
                <input
                  type="text"
                  value={editForm.interest}
                  onChange={(e) => setEditField("interest", e.target.value)}
                  placeholder="4.5%"
                  className={inputCls(editErrors.interest)}
                />
              </div>
            </Field>
            <Field label="Index Rate" required error={editErrors.index}>
              <input
                type="text"
                value={editForm.index}
                onChange={(e) => setEditField("index", e.target.value)}
                placeholder="3.0%"
                className={inputCls(editErrors.index)}
              />
            </Field>
            <Field label="Margin" required error={editErrors.margin}>
              <input
                type="text"
                value={editForm.margin}
                onChange={(e) => setEditField("margin", e.target.value)}
                placeholder="1.5%"
                className={inputCls(editErrors.margin)}
              />
            </Field>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Field label="Min Deposit" required error={editErrors.minDeposit}>
              <input
                type="text"
                value={editForm.minDeposit}
                onChange={(e) => setEditField("minDeposit", e.target.value)}
                placeholder="EUR 500"
                className={inputCls(editErrors.minDeposit)}
              />
            </Field>
            <Field label="Max Deposit" required error={editErrors.maxDeposit}>
              <input
                type="text"
                value={editForm.maxDeposit}
                onChange={(e) => setEditField("maxDeposit", e.target.value)}
                placeholder="EUR 50,000"
                className={inputCls(editErrors.maxDeposit)}
              />
            </Field>
          </div>

          <Field label="Withdrawal Terms" required error={editErrors.withdrawal}>
            <input
              type="text"
              value={editForm.withdrawal}
              onChange={(e) => setEditField("withdrawal", e.target.value)}
              placeholder="e.g. Instant, no lock-in"
              className={inputCls(editErrors.withdrawal)}
            />
          </Field>

          <div>
            <label className="block text-xs font-medium text-black-2000 mb-1.5">Status</label>
            <div className="flex gap-2">
              {STATUSES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setEditField("status", s)}
                  className={`flex-1 rounded-lg border py-2 text-xs font-medium transition-all ${
                    editForm.status === s ? statusStyle[s] : "border-gray-1000 text-gray-2300 hover:border-gray-2300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={closeEdit}
              className="flex-1 rounded-lg border border-solid border-gray-1000 py-2.5 text-sm font-medium text-black-2000 transition-colors hover:bg-gray-1600/30"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-royalBlue123 py-2.5 text-sm font-medium text-white transition-colors hover:bg-royalBlue123/90"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}