"use client";

import { useEffect, useRef } from "react";
import { useFxStore, PaymentStatus } from "@/app/store/zustand/useFxManagementStore";
import ToggleSwitch from "@/app/components/ToggleSwitch";

const STATUS_OPTIONS: PaymentStatus[] = ["Basic", "Premium", "VIP"];

export default function EditModal() {
  const { editingId, editForm, editErrors, closeEdit, setEditField, submitEdit } =
    useFxStore();
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editingId) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeEdit();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [editingId, closeEdit]);

  if (!editingId) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) closeEdit();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitEdit();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40 px-4"
    >
      <div className="w-full max-w-md rounded-xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div>
            <h3 className="text-base font-semibold text-gray-900">Edit FX Rule</h3>
            <p className="text-xs text-gray-500 mt-0.5">{editForm.currency}</p>
          </div>
          <button
            type="button"
            onClick={closeEdit}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M12 4L4 12M4 4l8 8" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">User Plan</label>
            <div className="flex gap-2">
              {STATUS_OPTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setEditField("status", s)}
                  className={`flex-1 rounded-lg border py-2 text-xs font-medium transition-all ${
                    editForm.status === s
                      ? s === "Basic"
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : s === "Premium"
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-amber-500 bg-amber-50 text-amber-700"
                      : "border-gray-200 text-gray-500 hover:border-gray-300"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Markup %</label>
            <div className="relative">
              <input
                type="number"
                step="0.01"
                min="0"
                value={editForm.markup}
                onChange={(e) => setEditField("markup", e.target.value)}
                placeholder="e.g. 1.50"
                className={`w-full rounded-lg border px-3 py-2.5 pr-8 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 ${
                  editErrors.markup ? "border-red-400 bg-red-50" : "border-gray-200 bg-white focus:border-blue-400"
                }`}
              />
              <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">%</span>
            </div>
            {editErrors.markup && (
              <p className="mt-1 text-xs text-red-500">{editErrors.markup}</p>
            )}
          </div>

          <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-800">Weekend Rule</p>
              <p className="text-xs text-gray-500">Apply additional spread on weekends</p>
            </div>
            <ToggleSwitch
              checked={editForm.weekendRule}
              onChange={() => setEditField("weekendRule", !editForm.weekendRule)}
            />
          </div>

          {editForm.weekendRule && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1.5">Weekend Spread %</label>
              <div className="relative">
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">+</span>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  value={editForm.spread}
                  onChange={(e) => setEditField("spread", e.target.value)}
                  placeholder="e.g. 0.50"
                  className={`w-full rounded-lg border pl-6 pr-8 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 ${
                    editErrors.spread ? "border-red-400 bg-red-50" : "border-gray-200 bg-white focus:border-blue-400"
                  }`}
                />
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">%</span>
              </div>
              {editErrors.spread && (
                <p className="mt-1 text-xs text-red-500">{editErrors.spread}</p>
              )}
            </div>
          )}

          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1.5">Daily Limit (USD)</label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">$</span>
              <input
                type="number"
                min="0"
                value={editForm.limit}
                onChange={(e) => setEditField("limit", e.target.value)}
                placeholder="e.g. 5000"
                className={`w-full rounded-lg border pl-6 py-2.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500/20 ${
                  editErrors.limit ? "border-red-400 bg-red-50" : "border-gray-200 bg-white focus:border-blue-400"
                }`}
              />
            </div>
            {editErrors.limit && (
              <p className="mt-1 text-xs text-red-500">{editErrors.limit}</p>
            )}
          </div>

          <div className="flex gap-3 pt-1">
            <button
              type="button"
              onClick={closeEdit}
              className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}