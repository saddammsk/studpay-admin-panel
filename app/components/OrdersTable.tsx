"use client";
import React from "react";
import {
  CircleCheck, Clock, AlertCircle,
  CircleAlert, Bus, Package,
} from "lucide-react";
import { useMarketplaceStore, PaymentStatus, FulfillmentStatus } from "@/app/store/zustand/useMarketplaceStore";

const paymentStyles = {
  Paid:    "bg-green-1600/10 text-green-1600 border-green-1600/30",
  Pending: "bg-yellow-1100/10 text-yellow-1100 border-yellow-1100/30",
  Delayed: "bg-red-1300/10 text-red-1300 border-red-1300/30",
};

const fulfillmentStyles = {
  Sent:          "bg-green-1600/10 text-green-1600",
  "In-Progress": "bg-blue-1000/10 text-blue-1000",
  Processing:    "bg-gray-1600 text-gray-1200",
  Delayed:       "bg-red-1300/10 text-red-1300",
};

const paymentIcon = (status: PaymentStatus) => {
  switch (status) {
    case "Paid":    return <CircleCheck  className="w-3.5 h-3.5" />;
    case "Pending": return <Clock        className="w-3.5 h-3.5" />;
    case "Delayed": return <AlertCircle  className="w-3.5 h-3.5" />;
  }
};

const fulfillmentIcon = (status: FulfillmentStatus) => {
  switch (status) {
    case "Sent":          return <CircleCheck  className="w-3.5 h-3.5" />;
    case "In-Progress":   return <Bus          className="w-3.5 h-3.5" />;
    case "Processing":    return <Package      className="w-3.5 h-3.5" />;
    case "Delayed":       return <CircleAlert  className="w-3.5 h-3.5" />;
  }
};

export default function OrdersTable() {
  const { orders } = useMarketplaceStore();

  return (
    <div className="w-full overflow-auto">
      <table className="2xl:w-full w-[1400px] text-sm">
        <thead className="bg-gray-6900/50 border-b border-gray-1000 text-gray-1200 uppercase text-xs">
          <tr>
            <th className="px-4 py-4 text-left">Order ID</th>
            <th className="px-4 py-4 text-left">Student</th>
            <th className="px-4 py-4 text-left">Product</th>
            <th className="px-4 py-4 text-left">Amount</th>
            <th className="px-4 py-4 text-left">Campaign</th>
            <th className="px-4 py-4 text-left">Payment</th>
            <th className="px-4 py-4 text-left">Fulfillment</th>
            <th className="px-4 py-4 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              className="border-t border-gray-1000 hover:bg-gray-50 transition"
            >
              <td className="px-4 py-4 text-blue-2800 font-medium">{order.id}</td>
              <td className="px-4 py-4">
                <div className="flex flex-col">
                  <span className="text-blue-2900">{order.student}</span>
                  <span className="text-xs text-gray-5000">{order.email}</span>
                </div>
              </td>
              <td className="px-4 py-4 text-blue-2900">{order.product}</td>
              <td className="px-4 py-4 text-blue-2900">
                {order.amount === "Free"
                  ? <span className="text-green-3200">Free</span>
                  : order.amount
                }
              </td>
              <td className="px-4 py-4">
                {order.campaign ? (
                  <span className="px-2.5 py-1 bg-gray-7200 text-gray-7300 inline-block rounded-full text-xs">
                    {order.campaign}
                  </span>
                ) : "-"}
              </td>
              <td className="px-4 py-4">
                <span className={`px-2.5 py-1 border rounded-full inline-flex items-center gap-1 text-xs ${paymentStyles[order.payment]}`}>
                  {paymentIcon(order.payment)}
                  {order.payment}
                </span>
              </td>
              <td className="px-4 py-4">
                <span className={`px-2.5 py-1 rounded-full inline-flex items-center gap-1 text-xs ${fulfillmentStyles[order.fulfillment]}`}>
                  {fulfillmentIcon(order.fulfillment)}
                  {order.fulfillment}
                </span>
              </td>
              <td className="px-4 py-4 text-gray-5000">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}