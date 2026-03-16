"use client";

import Link from "next/link";
import Image from "next/image";





interface MenuItem2 {
  name: string;
  href: string;
  icon: string;
  active?: boolean;
}

const menuItems2 = [
  {
    name: "API Keys",
    href: "/global_financing/financing_api_console",
    icon: "/icons/api-key.svg",
    iconActive: "/icons/api-key-active.svg",
    active: false,
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
    active: true,
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
  return (
    <>
      <div className="font-inter">
  
        <div className="mt-6">
          <div className="bg-gray-6200/50 inline-flex sm:w-auto w-full border border-solid border-grey5800 rounded-md px-1 py-0.75">
            <ul className="sm:flex grid grid-cols-2 items-center  sm:w-auto w-full">
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
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-4 justify-between border-b border-solid border-grey5800 px-5 py-4 ">
            <div className="flex items-center gap-2">
              <h4 className="text-blue1700 sm:text-base text-sm font-semibold leading-6 flex items-center gap-2">
                <Image
                  src="/icons/monitoring-icon.svg"
                  width="16"
                  height="16"
                  alt=""
                />
                Endpoint Monitoring
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <p className="text-green59 text-xs leading-4 font-medium flex items-center gap-1.5">
                <span className="bg-green59 w-2 h-2 flex items-center rounded-full"></span>
                99.97% uptime
              </p>
              <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-5.5 px-2.5 text-blue1700 text-xs leading-4 font-bold font-JetBrainsMono">
                24h
              </span>
            </div>
          </div>
          <div className="p-5">
            <div className="flex items-center mb-5">
              <Image
                src="/images/Monitoring-chart.png"
                width="1542"
                height="184"
                alt=""
              />
            </div>
            <div className="bg-lighrgrey36/30 mb-2 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  GET
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/dossiers
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  142 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  142 req/s
                </p>
                <p className="flex items-center gap-3 text-green59 text-xs leading-4 font-normal">
                  <Image
                    src="/images/arrow-up.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Healthy
                </p>
              </div>
            </div>
            <div className="bg-lighrgrey36/30 mb-2 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  POST
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/decisions
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  38 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  120ms
                </p>
                <p className="flex items-center gap-3 text-green59 text-xs leading-4 font-normal">
                  <Image
                    src="/images/arrow-up.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Healthy
                </p>
              </div>
            </div>
             <div className="bg-lighrgrey36/30 mb-2 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  POST
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/webhooks/hbl
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  12 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  89ms
                </p>
                <p className="flex items-center gap-3 text-yellow-1100 text-xs leading-4 font-normal">
                  <Image
                    src="/icons/down-yellow-right.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Degraded
                </p>
              </div>
            </div>
             <div className="bg-lighrgrey36/30 flex items-center justify-between border border-solid border-grey5800 rounded-md px-3 py-2">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full border border-solid border-grey5800 h-4.25 px-1.5 text-blue1700 text-[10px] leading-4 font-bold font-JetBrainsMono">
                  POST
                </span>
                <p className="text-blue1700 text-sm leading-5 font-normal font-JetBrainsMono">
                  /api/v1/auth/token
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-5000 text-xs leading-4 font-normal">
                  67 req/s
                </p>
                <p className="text-gray-5000 text-xs leading-4 font-normal font-JetBrainsMono">
                  32ms
                </p>
                <p className="flex items-center gap-3 text-green59 text-xs leading-4 font-normal">
                  <Image
                    src="/images/arrow-up.svg"
                    width="12"
                    height="12"
                    alt=""
                  />
                  Healthy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default financingapiconsole;
