"use client";

import { useState } from "react";
import Image from "next/image";
import ToggleSwitch from "./ui/ToggleSwitch";

interface NotificationItem {
  id: number;
  title: string;
  icon: string;
}

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
}

interface Settings {
  [key: number]: NotificationSettings;
}

const notifications: NotificationItem[] = [
  {
    id: 1,
    title: "Transaction Alerts",
    icon: "/images/transaction-icon.svg",
  },
  {
    id: 2,
    title: "KYC Updates",
    icon: "/images/file-tick.svg",
  },
  {
    id: 3,
    title: "System Maintenance",
    icon: "/images/setting-icon2.svg",
  },
];

export default function NotificationTable() {
  const [settings, setSettings] = useState<Settings>({
    1: { email: true, push: true, sms: false },
    2: { email: true, push: true, sms: true },
    3: { email: true, push: false, sms: false },
  });

  const handleToggle = (
    id: number,
    type: "email" | "push" | "sms",
    value: boolean
  ) => {
    setSettings((prev) => ({
      ...prev,
      [id]: {
        ...prev[id],
        [type]: value,
      },
    }));
  };

  return (
    <div className="bg-white  mt-4">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-3900">
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-3800 uppercase tracking-wider">
                Notification Type
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-gray-3800 uppercase">
             <div className="flex items-center gap-4"> <img src="/images/inbox-icon.svg" alt="" />  Email</div>
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-gray-3800 uppercase">
                       <div className="flex items-center gap-4"> <img src="/images/bell-icon2.svg" alt="" /> Push</div> 
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-gray-3800 uppercase">
               <div className="flex items-center gap-4">  SMS</div>
              </th>
            </tr>
          </thead>

          <tbody>
            {notifications.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-3900 last:border-0 hover:bg-gray-50 transition"
              >
                {/* Notification Type */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center bg-gray-1600/50 rounded-xl">
                      <Image
                        src={item.icon}
                        alt={item.title}
                        width={18}
                        height={18}
                      />
                    </div>
                    <span className="text-base font-normal text-black-2000">
                      {item.title}
                    </span>
                  </div>
                </td>

                {/* Email Toggle */}
                <td className="px-6 py-5 text-center">
                  <ToggleSwitch
                    enabled={settings[item.id].email}
                    setEnabled={(val: boolean) =>
                      handleToggle(item.id, "email", val)
                    }
                  />
                </td>

                {/* Push Toggle */}
                <td className="px-6 py-5 text-center">
                  <ToggleSwitch
                    enabled={settings[item.id].push}
                    setEnabled={(val: boolean) =>
                      handleToggle(item.id, "push", val)
                    }
                  />
                </td>

                {/* SMS Toggle */}
                <td className="px-6 py-5 text-center">
                  <ToggleSwitch
                    enabled={settings[item.id].sms}
                    setEnabled={(val: boolean) =>
                      handleToggle(item.id, "sms", val)
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}