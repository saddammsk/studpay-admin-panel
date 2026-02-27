import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { setSearchQuery } from "@/app/store/slices/DashboardSlice";
import { useTranslation } from "react-i18next";
import "@/app/i18n/i18n";


export const GlobalSearchbox = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector((state) => state.dashboard.searchQuery);

  return (
    <div className="max-w-[448px] w-full">
      <form
        className="w-full relative"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="text-sm outline-0 transition duration-300 ring-2 ring-transparent focus:ring-blue-1000 font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-gray-1500 border border-gray-1000 rounded-md w-full"
          placeholder={t("topbar.searchPlaceholder")}
        />
        <div className="absolute top-1/2 -translate-y-1/2 left-3">
          <img src="/images/search-icon.svg" alt="search" />
        </div>
      </form>
    </div>
  );
};
