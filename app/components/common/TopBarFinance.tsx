"use client"; 
import Button from "../ui/Button";
import { NotificationsDropdown } from "@/app/components/NotificationsDropdown";
import CustomSelect from "@/app/components/CustomSelect";
import { useSidebarStore } from "@/app/store/zustand/useSidebarStore";

const TopBar = () => {
  const toggleSidebar = useSidebarStore((state: any) => state.toggle);
   const { collapsed } = useSidebarStore();

   
  return (
    <div className={`bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0 ${collapsed ? "xl:pl-16 lg:pl-8" : "xl:pl-72 lg:pl-62.5"} `}>
      <div className="flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000">
        <div className="flex-1 flex items-center gap-4">
          <div className="">
            <h1 className="font-semibold font-inter sm:text-2xl text-lg leading-8 tracking-[-0.6px]">
              Global Financing
            </h1>
            <p className="text-gray-1900 font-inter font-normal sm:text-sm text-xs leading-5">
              Manage loan applications and pipeline
            </p>
          </div>
        </div>
        <div className="flex items-center md:gap-4 gap-1">
          <ul className="flex items-center md:gap-4 gap-1">
            <li className="md:block hidden">
              <CustomSelect
                className="h-9! w-34! text-gray-1900!"
                options={[
                  { label: "Last 30 days", value: "Last 30 days" },
                  { label: "2000", value: "2000" },
                ]}
              />
            </li>
            <li>
              <NotificationsDropdown />
            </li>

            <li className="md:block hidden">
              <Button
                onClick={() => {}}
                iconSrc="/images/plus-icon.svg"
                label="New Application"
                className="text-white text-sm font-normal gap-2 h-9 px-3! bg-blue-1000 hover:bg-blue800 rounded-md border border-solid border-gray1600 m-0!"
              />
            </li>
          </ul>
          <button onClick={toggleSidebar} className="lg:hidden">
            <img src="/images/hamburger.svg" className="w-6 h-6" alt="menu" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
