"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React from "react";

type DropdownProps = {
  title: string;
  items: {
    label: string;
    onClick: () => void;
  }[];
  buttonClassName?: string;
  menuClassName?: string;
  leftIconSrc?: string;
  leftIconAlt?: string;
  rightIconSrc?: string;
  rightIconAlt?: string;
};

export const Dropdown: React.FC<DropdownProps> = ({
  title,
  items,
  buttonClassName = "",
  menuClassName = "",
  leftIconSrc,
  leftIconAlt = "",
  rightIconSrc,
  rightIconAlt = "",
}) => {
  return (
    <div>
      <Menu>
        <MenuButton
          className={`flex items-center cursor-pointer gap-4 py-2 md:px-3 px-1 transition-all ease-in-out duration-500 hover:bg-gray-1600 rounded-md text-sm font-medium leading-5 text-gray-1100 ${buttonClassName}`}
        >
          {leftIconSrc && (
            <img
              src={leftIconSrc}
              className="md:block hidden"
              alt={leftIconAlt}
            />
          )}
          <span>{title}</span>
          {rightIconSrc && (
            <img
              src={rightIconSrc}
              className="md:block hidden"
              alt={rightIconAlt}
            />
          )}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className={`w-52 z-50 origin-top-right rounded-xl border border-gray-100 shadow-lg bg-white p-1 text-sm/6  transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 ${menuClassName}`}
        >
          {items.map((item, idx) => (
            <MenuItem key={idx}>
              <button
                type="button"
                onClick={item.onClick}
                className="group flex w-full text-black items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-normal leading-5 data-focus:bg-gray-1300"
              >
                {item.label}
              </button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
};
