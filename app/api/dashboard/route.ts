import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((res) => setTimeout(res, 800));

  return NextResponse.json({
    data: [
      {
        id: "active_students",
        title: "Total Active Students",
        value: 24563,
        change: "+12% from last month",
        color: "text-green-1000",
        icon: "/images/user-icon.svg",
      },
      {
        id: "verified_users",
        title: "Verified Users",
        value: 22481,
        change: "+8% from last month",
        color: "text-green-1000",
        icon: "/images/tick-circle.svg",
      },
      {
        id: "amount_blocked",
        title: "Total Amount Blocked in AVI",
        value: "€12.4M",
        change: "+5% from last month",
        color: "text-green-1000",
        icon: "/images/shield-icon.svg",
      },
      {
        id: "monthly_volume",
        title: "Monthly Disbursement Volume",
        value: "€3.8M",
        change: "+15% from last month",
        color: "text-green-1000",
        icon: "/images/euro-icon.svg",
      },
      {
        id: "new_subscriptions",
        title: "New Subscriptions This Week",
        value: 1247,
        change: "+23% from last week",
        color: "text-green-1000",
        icon: "/images/user-plus-icon.svg",
      },
      {
        id: "pending_docs",
        title: "Documents Pending Review",
        value: 156,
        change: "-8% from yesterday",
        color: "text-red-600",
        icon: "/images/kyc-icon.svg",
      },
    ],
  });
}
