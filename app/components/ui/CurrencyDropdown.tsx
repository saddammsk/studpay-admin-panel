"use client";
import { useState } from "react";
import Image from "next/image";

const currencies = [
  { code: "EUR", name: "Euro", flag: "/images/eu.png" },
  { code: "USD", name: "US Dollar", flag: "/images/🇺🇸.png" },
  { code: "GBP", name: "British Pound", flag: "/images/🇬🇧.png" },
];

export default function CurrencyDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(currencies[0]);

  return (
    <div className="relative">  
      {/* Selected */}
      <div
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between border border-solid border-grey-5400 rounded-md px-3 h-10 cursor-pointer bg-gray-1500"
      >
        <div className="flex items-center gap-2">
          <Image src={selected.flag} width={16} height={16} alt="" />
          <span className="text-black-2000 font-normal text-sm leading-5">
            {selected.code} - {selected.name}
          </span>
        </div>

        <span className="text-gray-500">
          <Image src="/images/down-arrow.svg" width={10} height={10} alt="" className="opacity-50" />
        </span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
          {currencies.map((item) => (
            <div
              key={item.code}
              onClick={() => {
                setSelected(item);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image src={item.flag} width={16} height={16} alt="" />
              <span>{item.code} - {item.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}