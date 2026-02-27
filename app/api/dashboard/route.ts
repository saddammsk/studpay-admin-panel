import { NextResponse } from "next/server";

export async function GET() {
  await new Promise((res) => setTimeout(res, 800));

  return NextResponse.json({
    data: [
      { id: "active_students",   title: "Total Accounts",     value: "145,092", change: "+12%", pricetext: "309 Accounts"  },
      { id: "verified_users",    title: "Total Deposits",     value: "€123.7M", change: "+1.9%", pricetext: "vs Last Month" },
      { id: "amount_blocked",    title: "Active AVI Folders", value: "2,847",   change: "1.2%",  pricetext: "vs Last Month" },
      { id: "monthly_volume",    title: "Revenue Fees",       value: "€456K",   change: "+8.3%", pricetext: "MTD"           },
      { id: "new_subscriptions", title: "Blocked Accounts",   value: "26,745",  change: "+5.3%", pricetext: "This Month"    },
      { id: "pending_docs",      title: "Pending Loans",      value: "€1.42M",  change: "3.4%",  pricetext: "3rd Accounts"  },
    ],
  });
}