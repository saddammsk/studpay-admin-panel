"use client";
import { Fragment } from "react";
import { Dialog, Transition, Listbox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useApiKeyStore, KeyEnvironment } from "@/app/store/zustand/useApikeyStore";

const environments: { value: KeyEnvironment; label: string; color: string }[] = [
  { value: "production", label: "Production", color: "text-emerald-600 bg-emerald-50" },
  { value: "sandbox", label: "Sandbox", color: "text-amber-600 bg-amber-50" },
  { value: "staging", label: "Staging", color: "text-blue-600 bg-blue-50" },
];

const allPermissions = [
  { id: "read", label: "Read", description: "GET requests only" },
  { id: "write", label: "Write", description: "POST & PUT requests" },
  { id: "delete", label: "Delete", description: "DELETE requests" },
  { id: "admin", label: "Admin", description: "Full access" },
];

export default function GenerateKeyModal() {
  const {
    isGenerateModalOpen,
    closeGenerateModal,
    formData,
    setFormData,
    generateKey,
    isLoading,
  } = useApiKeyStore();

  const selectedEnv =
    environments.find((e) => e.value === formData.environment) ?? environments[0];

  const togglePermission = (permId: string) => {
    const current = formData.permissions;
    const updated = current.includes(permId)
      ? current.filter((p) => p !== permId)
      : [...current, permId];
    setFormData({ permissions: updated });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) return;
    await generateKey();
  };

  return (
    <Transition appear show={isGenerateModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={closeGenerateModal}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95 translate-y-2"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-2"
            >
              <Dialog.Panel className="w-full max-w-md transform rounded-xl bg-white shadow-xl transition-all border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M10.5 1.5a4 4 0 0 1 0 8 4 4 0 0 1-3.874-3H1v2H0V5h6.626A4 4 0 0 1 10.5 1.5zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="#3B5CE6" />
                      </svg>
                    </div>
                    <Dialog.Title className="text-sm font-semibold text-gray-900">
                      Generate New API Key
                    </Dialog.Title>
                  </div>
                  <button
                    onClick={closeGenerateModal}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-6 py-5 space-y-5">
                  {/* Key Name */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Key Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Production Integration Key"
                      value={formData.name}
                      onChange={(e) => setFormData({ name: e.target.value })}
                      className="w-full h-9 px-3 text-sm rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all placeholder:text-gray-400 text-gray-900"
                      required
                    />
                  </div>

                  {/* Environment */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Environment
                    </label>
                    <Listbox
                      value={formData.environment}
                      onChange={(val) => setFormData({ environment: val })}
                    >
                      <div className="relative">
                        <Listbox.Button className="relative w-full h-9 cursor-default rounded-md border border-gray-200 bg-white pl-3 pr-10 text-left text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all">
                          <span className="flex items-center gap-2">
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${selectedEnv.color}`}
                            >
                              {selectedEnv.label}
                            </span>
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-4 w-4 text-gray-400" />
                          </span>
                        </Listbox.Button>
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-100 py-1 focus:outline-none">
                            {environments.map((env) => (
                              <Listbox.Option
                                key={env.value}
                                value={env.value}
                                className={({ active }) =>
                                  `relative cursor-default select-none py-2 pl-3 pr-9 text-sm ${active ? "bg-gray-50" : ""}`
                                }
                              >
                                {({ selected }) => (
                                  <>
                                    <span
                                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${env.color}`}
                                    >
                                      {env.label}
                                    </span>
                                    {selected && (
                                      <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-blue-600">
                                        <CheckIcon className="h-4 w-4" />
                                      </span>
                                    )}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </div>

                  {/* Expiry Date */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1.5">
                      Expiration Date{" "}
                      <span className="text-gray-400 font-normal">(optional)</span>
                    </label>
                    <input
                      type="date"
                      value={formData.expiresAt}
                      onChange={(e) => setFormData({ expiresAt: e.target.value })}
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full h-9 px-3 text-sm rounded-md border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none transition-all text-gray-900"
                    />
                    <p className="mt-1 text-xs text-gray-400">
                      Leave empty for no expiration
                    </p>
                  </div>

                  {/* Permissions */}
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-2">
                      Permissions
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {allPermissions.map((perm) => {
                        const isSelected = formData.permissions.includes(perm.id);
                        return (
                          <button
                            type="button"
                            key={perm.id}
                            onClick={() => togglePermission(perm.id)}
                            className={`flex items-start gap-2.5 p-2.5 rounded-md border text-left transition-all ${
                              isSelected
                                ? "border-blue-500 bg-blue-50/50"
                                : "border-gray-200 hover:border-gray-300 bg-white"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 mt-0.5 rounded flex items-center justify-center flex-shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-blue-600 border-blue-600"
                                  : "border border-gray-300 bg-white"
                              }`}
                            >
                              {isSelected && (
                                <CheckIcon className="w-2.5 h-2.5 text-white" />
                              )}
                            </div>
                            <div>
                              <p
                                className={`text-xs font-medium leading-none mb-0.5 ${
                                  isSelected ? "text-blue-700" : "text-gray-700"
                                }`}
                              >
                                {perm.label}
                              </p>
                              <p className="text-xs text-gray-400">{perm.description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Warning notice */}
                  <div className="flex gap-2.5 p-3 bg-amber-50 border border-amber-100 rounded-md">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM7.25 5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0V5zm.75 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="currentColor" />
                    </svg>
                    <p className="text-xs text-amber-700 leading-relaxed">
                      The key and client secret will only be shown once. Make sure to copy and store them securely.
                    </p>
                  </div>
                </form>

                {/* Footer */}
                <div className="flex items-center justify-end gap-2.5 px-6 py-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={closeGenerateModal}
                    className="h-9 px-4 text-sm font-medium text-gray-600 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit as any}
                    disabled={isLoading || !formData.name.trim()}
                    className="h-9 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Generating…
                      </>
                    ) : (
                      <>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                          <path d="M10.5 1.5a4 4 0 0 1 0 8 4 4 0 0 1-3.874-3H1v2H0V5h6.626A4 4 0 0 1 10.5 1.5zm0 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="currentColor" />
                        </svg>
                        Generate Key
                      </>
                    )}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}