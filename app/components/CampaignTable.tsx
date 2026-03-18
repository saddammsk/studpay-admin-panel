"use client";
import { Fragment } from "react";
import { Menu } from "@headlessui/react";
import { MoreHorizontal } from "lucide-react";
import { useCashbackStore } from "@/app/store/zustand/useCashbackStore";

const typeStyles = {
  Cashback: "bg-blue-1000/10 text-blue-1000",
  Points: "bg-gray-7200 text-gray-7300",
  Voucher: "bg-green-1600/10 text-green-1600",
};

const statusStyles = {
  Live: "bg-green-1600/10 text-green-1600",
  Paused: "bg-gray-2100 text-gray-1200",
};

export default function CampaignTable() {
  const { campaigns } = useCashbackStore();

  return (
    <div className="w-full overflow-auto">
      <table className="4xl:w-full w-[700px] text-sm">
        <thead className="border-b border-gray-1000 text-gray-1200 uppercase text-xs">
          <tr>
            <th className="px-4 py-4 text-left">Campaign</th>
            <th className="px-4 py-4 text-left">Type</th>
            <th className="px-4 py-4 text-left">Rule</th>
            <th className="px-4 py-4 text-left">Max Cap</th>
            <th className="px-4 py-4 text-left">Status</th>
            <th className="px-4 py-4 text-right"></th>
          </tr>
        </thead>

        <tbody>
          {campaigns.map((item) => (
            <Menu as={Fragment} key={item.id}>
              {({ open }) => (
                <>
                  {/* Main Row */}
                  <tr className="border-t border-gray-1000 hover:bg-gray-50 transition">
                    <td className="px-4 py-4 text-blue-1300 font-medium">
                      {item.campaign}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${typeStyles[item.type]}`}
                      >
                        {item.type}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-gray-1200">{item.rule}</td>

                    <td className="px-4 py-4 text-blue-1300 font-medium">
                      {item.cap}
                    </td>

                    <td className="px-4 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs ${statusStyles[item.status]}`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-4 py-4 text-right">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <Menu.Button className="p-1">
                          <MoreHorizontal className="w-4 h-4" />
                        </Menu.Button>

                        <Menu.Items className="absolute right-0 mt-2 w-36 origin-top-right bg-white border border-gray-200 rounded-lg shadow-lg focus:outline-none z-50">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`block w-full text-left px-3 py-2 text-sm ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                View
                              </button>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`block w-full text-left px-3 py-2 text-sm ${
                                  active ? "bg-gray-100" : ""
                                }`}
                              >
                                Edit
                              </button>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`block w-full text-left px-3 py-2 text-sm text-red-600 ${
                                  active ? "bg-red-50" : ""
                                }`}
                              >
                                Delete
                              </button>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                    </td>
                  </tr>
                </>
              )}
            </Menu>
          ))}
        </tbody>
      </table>
    </div>
  );
}
