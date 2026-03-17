import { Listbox } from "@headlessui/react";
import { Fragment } from "react";


interface Props {
  complianceManagers: string[];
  selectedManager: string;
  setSelectedManager: (manager: string) => void;
}

export default function ManagerDropdown({
  complianceManagers,
  selectedManager,
  setSelectedManager,
}: Props) {
  return (
    <div className="relative">
      <Listbox value={selectedManager} onChange={setSelectedManager}>
        <div className="relative">

          <Listbox.Button
            className={`w-full text-left px-3 h-12 border rounded-md text-sm leading-5 flex items-center justify-between transition-all duration-150 ${
              selectedManager
                ? "border-green-2200 text-blue1700 bg-white"
                : "border-gray-3900 text-blue1700 bg-white"
            } hover:border-green-2200/60`}
          >
            <span>
              {selectedManager || "Choose a compliance manager for sign-off"}
            </span>

            <svg
              className="w-4 h-4 text-[#94A3B8]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </Listbox.Button>

          <Listbox.Options className="absolute z-10 top-full left-0 right-0 mt-1 bg-white border border-gray-3900 rounded-xl shadow-lg overflow-hidden">
            {complianceManagers.map((manager) => (
              <Listbox.Option key={manager} value={manager} as={Fragment}>
                {({ active, selected }) => (
                  <li
                    className={`cursor-pointer px-4 py-3 text-[14px] transition-colors ${
                      active ? "bg-[#F0FAF6]" : ""
                    } ${
                      selected
                        ? "text-green-2200 font-medium"
                        : "text-SteelGray"
                    }`}
                  >
                    {manager}
                  </li>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>

        </div>
      </Listbox>
    </div>
  );
}