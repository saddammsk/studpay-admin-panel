"use client";

import Image from "next/image";
import Link from "next/link";


interface Transaction {
  id: number;
  name: string;
  avatar: string;
  actionIcon: string;
  actionLabel: string;
  flagIcon: string;
  locationLabel: string;
  time: string;
  showArrow?: boolean;
}


const transactions: Transaction[] = [
  {
    id: 1,
    name: "Olivia Sanchez",
    avatar: "/images/customer-img.jpg",
    actionIcon: "/images/card-gray2.svg",
    actionLabel: "1,200 from",
    flagIcon: "/images/🇺🇸.png",
    locationLabel: "Unit USDm",
    time: "5m",
    showArrow: true,
  },
  {
    id: 2,
    name: "Daniel Lee",
    avatar: "/images/customer-img2.jpg",
    actionIcon: "/images/swip-arrow.svg",
    actionLabel: "Opened an AVI •",
    flagIcon: "/images/🇰🇷.png",
    locationLabel: "154 Korea",
    time: "17m ago",
    showArrow: false,
  },
  {
    id: 3,
    name: "Marie Dubois",
    avatar: "/images/customer-img3.jpg",
    actionIcon: "/images/card-gray2.svg",
    actionLabel: "5,500 from",
    flagIcon: "/images/🇫🇷.png",
    locationLabel: "France",
    time: "1h",
    showArrow: true,
  },
  {
    id: 4,
    name: "Ahmed Hussain",
    avatar: "/images/customer-img4.jpg",
    actionIcon: "/images/card-gray2.svg",
    actionLabel: "7,900 from",
    flagIcon: "/images/🇦🇪.png",
    locationLabel: "inchebrab Emirates",
    time: "3h ago",
    showArrow: false,
  },
];


function TransactionRow({ transaction }: { transaction: Transaction }) {
  const { name, avatar, actionIcon, actionLabel, flagIcon, locationLabel, time, showArrow } =
    transaction;

  return (
    <div className="mb-3 pr-3 py-2 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="flex items-center justify-center rounded-full bg-white shadow-52xl w-10 h-10">
          <Image
            src={avatar}
            alt={name}
            width={36}
            height={36}
            className="rounded-full"
          />
        </span>
        <div>
          <h4 className="text-black-5000 font-inter text-sm font-medium leading-5">
            {name}
          </h4>
          <ul className="flex items-center gap-1">
            <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
              <Image
                src={actionIcon}
                alt=""
                width={12}
                height={12}
                className="rounded-full"
              />
              {actionLabel}
            </li>
            <li className="text-grey-5100 flex items-center gap-1 font-inter 4xl:text-xs text-[10px] font-normal leading-4">
              <Image
                src={flagIcon}
                alt=""
                width={12}
                height={12}
                className="rounded-full"
              />
              {locationLabel}
            </li>
          </ul>
        </div>
      </div>

      <Link
        href="#"
        className="text-grey-5100 font-normal text-xs leading-4 flex items-center gap-1"
      >
        {time}
        {showArrow && (
          <Image
            src="/images/arrow-gray2.svg"
            alt=""
            width={12}
            height={12}
          />
        )}
      </Link>
    </div>
  );
}


export default function RecentTransactionsList() {
  return (
    <div className="rounded-2xl border border-solid border-gray-3600 bg-white 4xl:p-5 p-2.5">
      {transactions.map((transaction) => (
        <TransactionRow key={transaction.id} transaction={transaction} />
      ))}

      <Link
        href="#"
        className="flex gap-2 items-center justify-center border border-solid border-grey-5200 rounded-full bg-white h-10.5 text-grey-5100 font-inter font-normal text-sm leading-5"
      >
        View Map
        <Image
          src="/images/right-arrow-dark.svg"
          alt=""
          width={16}
          height={16}
          className="h-2"
        />
      </Link>
    </div>
  );
}