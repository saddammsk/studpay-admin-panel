"use client";
import { Dialog } from "@headlessui/react";
import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  actions?: ReactNode;
  panelClassName?: string;
}


export default function Modal({ isOpen, onClose, children, actions, panelClassName }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-9999">
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4">
        <Dialog.Panel
          className={`w-full border border-solid border-gray-1000 rounded-lg shadow-54xl  ${panelClassName ?? "max-w-140 bg-white "}`}
        >
          <div>{children}</div>
          {actions && <div className="flex gap-4 mt-4">{actions}</div>}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

