"use client";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useApiKeyStore } from "@/app/store/zustand/useApikeyStore";

export default function DeleteKeyModal() {
  const { isDeleteModalOpen, closeDeleteModal, selectedKey, deleteKey } =
    useApiKeyStore();

  if (!selectedKey) return null;

  return (
    <Transition appear show={isDeleteModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-9999" onClose={closeDeleteModal}>
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
              <Dialog.Panel className="w-full max-w-sm rounded-xl bg-white shadow-xl border border-gray-100">
                <div className="px-6 pt-6 pb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <Dialog.Title className="text-sm font-semibold text-gray-900">
                        Revoke API Key
                      </Dialog.Title>
                      <p className="text-xs text-gray-500 mt-0.5">This action cannot be undone</p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    Are you sure you want to revoke{" "}
                    <span className="font-medium text-gray-900">
                      &quot;{selectedKey.name}&quot;
                    </span>
                    ? Any applications using this key will immediately lose access.
                  </p>

                  <div className="mt-3 p-2.5 bg-gray-50 rounded-md border border-gray-100">
                    <code className="text-xs font-mono text-gray-500 break-all">
                      {selectedKey.key.slice(0, 20)}••••••••••••
                    </code>
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2.5 px-6 py-4 border-t border-gray-100">
                  <button
                    onClick={closeDeleteModal}
                    className="h-9 px-4 text-sm font-medium text-gray-600 rounded-md border border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => deleteKey(selectedKey.id)}
                    className="h-9 px-4 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 transition-colors"
                  >
                    Revoke Key
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