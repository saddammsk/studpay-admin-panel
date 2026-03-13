"use client"

import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"

type Status = {
  name: string
  color: string
}

const statuses: Status[] = [
  { name: "Active", color: "bg-green-500" },
  { name: "Inactive", color: "bg-yellow-500" },
  { name: "Suspended", color: "bg-red-500" },
  { name: "Pending", color: "bg-blue-500" }
]

export default function AccountStatusDropdown() {
  const [selectedStatus, setSelectedStatus] = useState<Status>(statuses[0])

  return (
    <div className="relative w-72">
      <Listbox value={selectedStatus} onChange={setSelectedStatus}>
        {({ open }) => (
          <>
            <Listbox.Label className="text-black-2000 mb-2 block font-medium sm:text-sm text-xs leading-3.5">
              Account Status
            </Listbox.Label>

            <Listbox.Button className="flex items-center justify-between border border-grey-5400 rounded-md px-3 h-10 w-full bg-gray-1500">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${selectedStatus.color}`} />
                <span className="text-black-2000 text-sm leading-5">
                  {selectedStatus.name}
                </span>
              </div>

              <svg
                className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
              </svg>
            </Listbox.Button>

            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 w-full overflow-hidden bg-white border rounded-md shadow z-10">
                {statuses.map((status) => (
                  <Listbox.Option
                    key={status.name}
                    value={status}
                    className={({ active }) =>
                      `flex items-center gap-2 px-3 py-2 cursor-pointer ${
                        active ? "bg-gray-100" : ""
                      }`
                    }
                  >
                    {({ selected }) => (
                      <>
                        <span className={`w-3 h-3 rounded-full ${status.color}`} />
                        <span className={`text-sm ${selected ? "font-medium" : ""}`}>
                          {status.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  )
}