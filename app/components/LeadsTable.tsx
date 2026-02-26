"use client";

import Link from "next/link";
import Image from "next/image";

type LeadStatus = "Hot" | "Warm" | "Cold";
type InterestType = "Housing" | "Health Insurance" | "Blocked Account";

const statusConfig = {
    Hot: {
        img: "/images/burn-icon.svg",
        classes: "text-red-600",
    },
    Warm: {
        img: "/images/burn-icon.svg",
        classes: "text-orange-500",
    },
    Cold: {
        img: "/images/burn-icon.svg",
        classes: "text-blue-500",
    },
} as const;

const interestConfig = {
    Housing: {
        classes: "bg-blue-1400/20 border-blue-1400/30 text-blue-1400",
    },
    "Health Insurance": {
        classes: "bg-green-2000/20 border-green-2000/30 text-green-2000",
    },
    "Blocked Account": {
        classes: "bg-golden-1000/20 border-golden-1000/30 text-golden-1000",
    },
} as const;

// Lead score color logic (image jesa)
const getScoreClasses = (score: number) => {
    if (score >= 90) {
        return "bg-green-2000/20 border-green-2000/30 text-green-2000";
    }
    if (score >= 70) {
        return "bg-yellow-1100/10 text-yellow-1100";
    }
    if (score >= 50) {
        return "bg-golden-1000/20 border-golden-1000/30 text-golden-1000";
    }
    return "bg-blue-1400/20 border-blue-1400/30 text-blue-1400";
};

interface Lead {
    id: number;
    status: LeadStatus;
    name: string;
    email: string;
    source: string;
    interest: InterestType;
    score: number;
    lastContacted: string;
}

const leads: Lead[] = [
    {
        id: 1,
        status: "Hot",
        name: "Raj Patel",
        email: "raj@gmail.com",
        source: "University Partner",
        interest: "Housing",
        score: 95,
        lastContacted: "15 min ago",
    },
    {
        id: 2,
        status: "Hot",
        name: "Ahmed Hassan",
        email: "ahmed@gmail.com",
        source: "University Partner",
        interest: "Housing",
        score: 92,
        lastContacted: "2 hours ago",
    },
    {
        id: 3,
        status: "Hot",
        name: "Fatima Al-Rashid",
        email: "fatima@gmail.com",
        source: "Social Media",
        interest: "Housing",
        score: 91,
        lastContacted: "30 min ago",
    },
    {
        id: 4,
        status: "Warm",
        name: "Li Wei Chen",
        email: "liwei@outlook.com",
        source: "Google Ads",
        interest: "Blocked Account",
        score: 78,
        lastContacted: "3 hours ago",
    },
    {
        id: 5,
        status: "Warm",
        name: "Sophie Laurent",
        email: "sophie@gmail.com",
        source: "Social Media",
        interest: "Health Insurance",
        score: 71,
        lastContacted: "8 hours ago",
    },
    {
        id: 6,
        status: "Warm",
        name: "Carlos Rodriguez",
        email: "carlos@gmail.com",
        source: "Google Ads",
        interest: "Health Insurance",
        score: 52,
        lastContacted: "2 days ago",
    },
    {
        id: 7,
        status: "Cold",
        name: "Jonas Müller",
        email: "jonas@web.de",
        source: "Referral",
        interest: "Health Insurance",
        score: 45,
        lastContacted: "3 days ago",
    },
];

function LeadsTable() {
    return (
        <div className="bg-white border mt-4 border-gray1600 rounded-xl shadow-4xl shadow-9xl">
            <div className="overflow-x-auto">
                <table className="4xl:w-full w-[1440px]">
                    <thead>
                        <tr className="border-b border-gray-3600 bg-gray1700/50">
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                Status
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                Student Name
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                Source
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                Interest
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                Lead Score
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-bold text-gray-1900">
                                Last Contacted
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {leads.map((item) => (
                            <tr
                                key={item.id}
                                className="border-b border-gray1600 hover:bg-gray1700/50 transition"
                            >
                                <td className="px-4 py-4">
                                    <span
                                        className={`flex items-center gap-2 text-sm font-medium ${statusConfig[item.status].classes}`}
                                    >
                                        <Image
                                            src={statusConfig[item.status].img}
                                            alt={item.status}
                                            width={16}
                                            height={16}
                                        />
                                        {item.status}
                                    </span>
                                </td>

                                {/* Student */}
                                <td className="px-4 py-4">
                                    <div className="flex flex-col">
                                        <span className="text-blue-1300 text-sm">
                                            {item.name}
                                        </span>
                                        <span className="text-gray-1900 text-sm">
                                            {item.email}
                                        </span>
                                    </div>
                                </td>

                                {/* Source */}
                                <td className="px-4 py-4 text-gray-1900 text-sm">
                                    {item.source}
                                </td>

                                {/* Interest */}
                                <td className="px-4 py-4">
                                    <span
                                        className={`text-xs font-normal border leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${interestConfig[item.interest].classes}`}
                                    >
                                        {item.interest}
                                    </span>
                                </td>

                                {/* Lead Score */}
                                <td className="px-4 py-4">
                                    <span
                                        className={`text-xs font-normal border leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center ${getScoreClasses(
                                            item.score
                                        )}`}
                                    >
                                        {item.score}
                                    </span>
                                </td>

                                {/* Last Contacted */}
                                <td className="px-4 py-4 text-gray-1900 text-sm">
                                    {item.lastContacted}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LeadsTable;