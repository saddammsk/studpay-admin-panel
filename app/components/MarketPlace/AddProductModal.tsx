"use client";
import { useState } from "react";
import { X } from "lucide-react";
import {
  useMarketplaceStore,
  ProductCategory,
  ProductStatus,
} from "@/app/store/zustand/useMarketplaceStore";

type Props = { open: boolean; onClose: () => void };

const emptyForm = {
  product:    "",
  category:   "SIM" as ProductCategory,
  vendor:     "",
  price:      "",
  commission: "",
  campaign:   "",
  status:     "Live" as ProductStatus,
};

export default function AddProductModal({ open, onClose }: Props) {
  const { addProduct, products } = useMarketplaceStore();
  const [form, setForm] = useState(emptyForm);

  if (!open) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const isValid = form.product.trim() && form.vendor.trim() && form.price.trim() && form.commission.trim();

  const handleSubmit = () => {
    if (!isValid) return;
    const newId = String(products.length + 1);
    addProduct({
      id: newId,
      ...form,
      campaign: form.campaign || undefined,
    });
    setForm(emptyForm);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-xl w-full max-w-lg mx-4 p-6 space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-blue-2900">Add Product</h2>
            <p className="text-sm text-gray-5000">Fill in the details to add a new product</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="text-xs text-gray-5000 mb-1 block">Product Name *</label>
            <input
              name="product"
              value={form.product}
              onChange={handleChange}
              placeholder="e.g. Lebara Student SIM"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-2900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-5000 mb-1 block">Category *</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-2900"
            >
              <option value="SIM">SIM</option>
              <option value="Furniture">Furniture</option>
              <option value="Banking">Banking</option>
              <option value="Internet">Internet</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-5000 mb-1 block">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-2900"
            >
              <option value="Live">Live</option>
              <option value="Hidden">Hidden</option>
            </select>
          </div>

          <div>
            <label className="text-xs text-gray-5000 mb-1 block">Vendor *</label>
            <input
              name="vendor"
              value={form.vendor}
              onChange={handleChange}
              placeholder="e.g. Lebara Mobile"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-2900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-5000 mb-1 block">Price *</label>
            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="e.g. €9.99 or Free"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-2900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-5000 mb-1 block">Commission % *</label>
            <input
              name="commission"
              value={form.commission}
              onChange={handleChange}
              placeholder="e.g. 15%"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-2900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="text-xs text-gray-5000 mb-1 block">Campaign (optional)</label>
            <input
              name="campaign"
              value={form.campaign}
              onChange={handleChange}
              placeholder="e.g. TU Berlin Welcome Bundle"
              className="w-full h-10 px-3 text-sm border border-gray-1000 rounded-md bg-gray-6600 outline-none text-blue-2900 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md border border-gray-1000 bg-gray-6600 text-blue-2900 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={!isValid}
            className="px-4 py-2 text-sm rounded-md bg-blue-2800 text-white hover:bg-blue-800 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}