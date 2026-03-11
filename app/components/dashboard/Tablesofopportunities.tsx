"use client";

import Image from "next/image";
import Link from "next/link";


type OpportunityVariant = "yellow" | "red";

interface Opportunity {
  id: number;
  variant: OpportunityVariant;
  name: string;
  description: string;
  detailsHref: string;
}


const opportunities: Opportunity[] = [
  {
    id: 1,
    variant: "yellow",
    name: "King's College London",
    description: "E00 application rordom. Drronth.",
    detailsHref: "#",
  },
  {
    id: 2,
    variant: "red",
    name: "University of Toronto",
    description: "Fasets formcation month.",
    detailsHref: "#",
  },
  {
    id: 3,
    variant: "red",
    name: "Kyoto University",
    description: "E50 Application month.",
    detailsHref: "#",
  },
];


const variantConfig: Record<
  OpportunityVariant,
  { iconBg: string; iconSrc: string }
> = {
  yellow: {
    iconBg: "bg-yellow1700",
    iconSrc: "/images/college-cap.svg",
  },
  red: {
    iconBg: "bg-red-1100",
    iconSrc: "/images/college-cap-red.svg",
  },
};


function OpportunityRow({ opportunity }: { opportunity: Opportunity }) {
  const { variant, name, description, detailsHref } = opportunity;
  const { iconBg, iconSrc } = variantConfig[variant];

  return (
    <div className="flex items-center gap-3">
      <span
        className={`${iconBg} rounded-full flex items-center justify-center w-10 h-10 shrink-0`}
      >
        <Image src={iconSrc} alt="" width={16} height={16} />
      </span>

      <div className="flex-1 flex items-center justify-between">
        <div>
          <h4 className="text-black-5000 font-inter text-sm font-semibold leading-4">
            {name}
          </h4>
          <p className="text-grey-5100 font-inter text-xs font-normal leading-4">
            {description}
          </p>
        </div>

        <Link
          href={detailsHref}
          className="inline-flex gap-1 items-center border border-solid border-grey-5200 rounded h-6.5 px-2 text-grey-5100 font-inter font-medium text-xs leading-5"
        >
          Details
          <Image
            src="/images/right-arrow-dark.svg"
            alt=""
            width={12}
            height={12}
            className="h-2"
          />
        </Link>
      </div>
    </div>
  );
}


export default function TablesOfOpportunities() {
  return (
    <div className="bg-white shadow-48xl rounded-2xl p-5 w-full">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-black-5000 font-inter font-bold text-base leading-6">
          Tables of Opportunities
        </h4>
      </div>

      <div className="flex flex-col gap-4">
        {opportunities.map((opportunity) => (
          <OpportunityRow key={opportunity.id} opportunity={opportunity} />
        ))}
      </div>
    </div>
  );
}