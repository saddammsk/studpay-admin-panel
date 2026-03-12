import React from "react";
import { AlertTriangle, XCircle, BadgeCheck, Shield, CheckCircle } from "lucide-react";

interface PropertyActionBarProps {
  price: string;
  listingId: string;
}

const PropertyActionBar: React.FC<PropertyActionBarProps> = ({
  price,
  listingId,
}) => {
  return (
    <div className="w-full flex-wrap gap-4 flex mt-8 items-center justify-center border gap-5 rounded-md px-4 py-3 bg-white border border-gray-1000 shadow-sm">

      {/* Left Section */}
      <div className="flex items-center md:flex-nowrap flex-wrap gap-4 text-xs">

        <div className="flex items-center gap-1 py-0.5 px-2.5 text-blue-1300 font-medium bg-gray-1600 rounded-full">
          <AlertTriangle size={12} className="text-yellow-1100" />
          <span>High Value Property</span>
        </div>

        <div className="font-semibold text-gray-800 border border-gray-1000 rounded-full py-0.5 px-2.5">{price}</div>

        <div className="text-gray-500">
          Listing ID: <span className="font-medium text-blue-1300">{listingId}</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center md:flex-nowrap flex-wrap gap-3">

        <button className="flex items-center text-sm gap-2 px-4 py-2 border border-red-500 text-red-600 rounded-md hover:bg-red-50 transition">
          <XCircle size={16} />
          Reject & Notify
        </button>

        <button className="flex items-center text-sm gap-2 px-4 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50 transition">
          <Shield size={16} />
          Add Verified Badge
        </button>

        <button className="flex items-center text-sm gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition">
          <CheckCircle size={16} />
          Approve & Go Live
        </button>

      </div>
    </div>
  );
};

export default PropertyActionBar;