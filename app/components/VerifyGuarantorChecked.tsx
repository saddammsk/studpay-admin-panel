"use client";
import { useState } from "react";
import Image from "next/image"; 

const checklistData = [
      {
            id: 1,
            label: "Valid Government ID verified",
            icon: "/icons/id-card.svg",
      },
      {
            id: 2,
            label: "Income proof documents submitted",
            icon: "/icons/income-doller.svg",
      },
      {
            id: 3,
            label: "Legal signature authenticated",
            icon: "/icons/signature-icon.svg",
      },
      {
            id: 4,
            label: "Contract terms reviewed",
            icon: "/icons/terms-file.svg",
      },
];

export default function Checklist() {
      const [checked, setChecked] = useState<number[]>([]);

      const toggleCheck = (id: number) => {
            if (checked.includes(id)) {
                  setChecked(checked.filter((item) => item !== id));
            } else {
                  setChecked([...checked, id]);
            }
      };

      return (
            <div className="space-y-3 max-w-xl">
                  {checklistData.map((item) => (
                        <div
                              key={item.id}
                              className="flex items-center justify-between rounded-lg px-3 py-3.5 bg-gray-1500 border border-solid border-gray-3600"
                        >
                              <div className="flex items-center sm:gap-3 gap-1">
                                    <span className="w-4 h-4  flex items-center justify-center">
                                          <input
                                                type="checkbox"
                                                checked={checked.includes(item.id)}
                                                onChange={() => toggleCheck(item.id)}
                                                className="w-4 h-4 rounded border border-solid border-blue-1300"
                                          />
                                    </span>

                                    <span className="text-lg">
                                          <Image
                                                src={item.icon}
                                                width={16}
                                                height={16}
                                                alt=""
                                          />
                                    </span>

                                    <span className="text-blue-13 text-sm leading-5 font-normal">
                                          {item.label}
                                    </span>
                              </div>

                              <button className="w-4 h-4 cursor-pointer flex items-center justify-center">
                                    <Image
                                          src="/icons/xross-icon.svg"
                                          width={16}
                                          height={16}
                                          alt=""
                                    />
                              </button>
                        </div>
                  ))}
            </div>
      );
}