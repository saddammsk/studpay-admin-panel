"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "@/app/components/ui/Button";
import ApiKeyTable from "@/app/components/GlobalFinancing/ApiKeyTable";
import { useApiKeyStore } from "@/app/store/zustand/useApikeyStore";
import GenerateKeyModal from "@/app/components/GlobalFinancing/Generatekeymodal";
import ViewKeyModal from "@/app/components/GlobalFinancing/Viewkeymodal";
import DeleteKeyModal from "@/app/components/GlobalFinancing/Deletekeymodal";

const menuItems2 = [
  {
    name: "API Keys",
    href: "/global_financing/financing_api_console",
    icon: "/icons/api-key.svg",
    iconActive: "/icons/api-key-active.svg",
    active: true,
  },
  {
    name: "Access Control",
    href: "/global_financing/financing_api_console/api_access_control",
    icon: "/icons/access-icon.svg",
    iconActive: "/icons/access-icon-active.svg",
    active: false,
  },
  {
    name: "Monitoring",
    href: "/global_financing/financing_api_console/monitoring",
    icon: "/icons/monitoring-icon.svg",
    iconActive: "/icons/monitoring-icon-active.svg",
    active: false,
  },
  {
    name: "Emergency",
    href: "/global_financing/financing_api_console/emergency",
    icon: "/icons/Emergency-icon.svg",
    iconActive: "/icons/Emergency-icon-active.svg",
    active: false,
  },
];

const financingapiconsole = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { keys, openGenerateModal } = useApiKeyStore();
  const activeCount = keys.length;

  return (
    <>
      {/* Headless UI Modals */}
      <GenerateKeyModal />
      <ViewKeyModal />
      <DeleteKeyModal />

      <div className="w-full">
        <div className="mt-6">
          <div className="bg-gray-6200/50 inline-flex sm:w-auto w-full border border-solid border-grey5800 rounded-md px-1 py-0.75">
            <ul className="sm:flex grid grid-cols-2 items-center sm:w-auto w-full">
              {menuItems2.map((item) => (
                <li key={item.name} className="sm:w-auto w-full">
                  <Link
                    href={item.href}
                    className={`inline-flex sm:w-auto w-full sm:justify-start justify-center items-center h-8 px-3 gap-1.5 font-inter font-normal text-sm leading-5 relative rounded ${
                      item.active
                        ? "text-blue1700 bg-white shadow-4xl"
                        : "text-gray-5000"
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      <Image
                        src={item.active ? item.iconActive : item.icon}
                        width={16}
                        height={16}
                        alt={item.name}
                      />
                    </span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white border border-solid border-grey5800 mt-7 rounded-lg shadow-4xl">
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border-b border-solid border-grey5800 px-5 py-4">
            <div className="flex items-center gap-2">
              <h4 className="text-blue1700 text-base font-semibold leading-6 flex items-center gap-2">
                <Image src="/icons/api-key.svg" width="16" height="16" alt="" />
                API Keys & Client Secrets
              </h4>
              <span className="text-blue1700 text-xs font-bold leading-4 font-JetBrainsMono px-2.5 inline-flex items-center justify-center bg-gray-6200 border border-solid border-gray-6200 rounded-full">
                {activeCount} {activeCount === 1 ? "key" : "keys"}
              </span>
            </div>
            <Button
              onClick={openGenerateModal}
              iconSrc="/images/plus-icon.svg"
              label="Generate Key"
              className="text-gray22 text-sm font-medium gap-1.5 h-9 px-3! bg-royalBlue129 hover:bg-royalBlue129/90 rounded-md border border-solid border-royalBlue129 m-0!"
            />
          </div>
          <ApiKeyTable />
        </div>
      </div>
    </>
  );
};

export default financingapiconsole;