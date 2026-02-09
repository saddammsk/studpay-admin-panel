 "use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";
import { useTranslation } from "react-i18next";
import "@/app/i18n/i18n";

export const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: "en", label: t("language.en") },
    { code: "de", label: t("language.de") },
  ];

  const currentLang = (i18n.language || "en").toUpperCase();

  return (
    <Menu>
      <MenuButton className="flex outline-0 items-center cursor-pointer gap-3 py-2 md:px-3 px-1 transition-all ease-in-out duration-500 hover:bg-gray-1600 rounded-md text-sm font-medium leading-5 text-gray-1100">
        <img src="/images/globe-icon2.svg" className="md:block hidden" alt="" />
        <span>{currentLang}</span>
        <img src="/images/droparrow.svg" className="md:block hidden" alt="" />
      </MenuButton>

      <MenuItems
        transition
        anchor="bottom end"
        className="w-32 z-50 origin-top-right rounded-xl border border-gray-100 shadow-lg bg-white p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
      >
        {languages.map((lang) => (
          <MenuItem key={lang.code}>
            <button
              type="button"
              onClick={() => i18n.changeLanguage(lang.code)}
              className="group flex w-full text-black items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-1300"
            >
              {lang.label}
            </button>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
};
