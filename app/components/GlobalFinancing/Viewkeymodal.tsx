"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useApiKeyStore } from "@/app/store/zustand/useApikeyStore";

function MaskValue({ value }: { value: string }) {
  const [revealed, setRevealed] = useState(false);
  const masked = value.slice(0, 10) + "•".repeat(Math.max(0, value.length - 14)) + value.slice(-4);

  return (
    <div className="flex items-center gap-2 mt-1">
      <code className="flex-1 text-xs font-mono bg-gray-50 border border-gray-200 rounded px-2.5 py-1.5 text-gray-700 select-all break-all">
        {revealed ? value : masked}
      </code>
      <button
        onClick={() => setRevealed((r) => !r)}
        className="h-7 w-7 flex-shrink-0 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors"
        title={revealed ? "Hide" : "Reveal"}
      >
        {revealed ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </button>
    </div>
  );
}

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-xs font-medium text-gray-500">{label}</label>
        <button
          onClick={handleCopy}
          className={`text-xs flex items-center gap-1 transition-colors ${
            copied ? "text-emerald-600" : "text-blue-600 hover:text-blue-700"
          }`}
        >
          {copied ? (
            <>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
      <MaskValue value={value} />
    </div>
  );
}

const envColors: Record<string, string> = {
  production: "text-emerald-700 bg-emerald-50 border-emerald-200",
  sandbox: "text-amber-700 bg-amber-50 border-amber-200",
  staging: "text-blue-700 bg-blue-50 border-blue-200",
};

export default function ViewKeyModal() {
  const { isViewModalOpen, closeViewModal, selectedKey } = useApiKeyStore();

  if (!selectedKey) return null;

  return (
    <Transition appear show={isViewModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={closeViewModal}>
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
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-xl bg-white shadow-xl border border-gray-100">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-md bg-emerald-50 flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <Dialog.Title className="text-sm font-semibold text-gray-900">
                        {selectedKey.name}
                      </Dialog.Title>
                      <p className="text-xs text-gray-400 mt-0.5">Key generated successfully</p>
                    </div>
                  </div>
                  <button
                    onClick={closeViewModal}
                    className="w-7 h-7 rounded-md flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                <div className="px-6 py-5 space-y-4">
                  {/* Meta row */}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium border ${envColors[selectedKey.environment]}`}>
                      {selectedKey.environment.charAt(0).toUpperCase() + selectedKey.environment.slice(1)}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                      Active
                    </span>
                    <span className="text-xs text-gray-400">
                      Created {selectedKey.createdAt}
                    </span>
                    {selectedKey.expiresAt && (
                      <span className="text-xs text-gray-400">
                        · Expires {selectedKey.expiresAt}
                      </span>
                    )}
                  </div>

                  {/* Key fields */}
                  <CopyField label="API Key" value={selectedKey.key} />
                  <CopyField label="Client Secret" value={selectedKey.clientSecret} />

                  {/* Permissions */}
                  <div>
                    <label className="text-xs font-medium text-gray-500">Permissions</label>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {selectedKey.permissions.map((p) => (
                        <span key={p} className="px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 capitalize">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Warning */}
                  <div className="flex gap-2.5 p-3 bg-amber-50 border border-amber-100 rounded-md">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM7.25 5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-1.5 0V5zm.75 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="currentColor"/>
                    </svg>
                    <p className="text-xs text-amber-700 leading-relaxed">
                      This is the only time the full secret will be shown. Copy and store it securely — you won't be able to retrieve it later.
                    </p>
                  </div>
                </div>

                <div className="flex justify-end px-6 py-4 border-t border-gray-100">
                  <button
                    onClick={closeViewModal}
                    className="h-9 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Done
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