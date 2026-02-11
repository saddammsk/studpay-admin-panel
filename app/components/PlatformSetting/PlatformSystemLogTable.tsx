"use client";
 

type PaymentStatus = "Success";

const statusConfig = {
  Success: {
    classes: "bg-blue-1000 text-white",
  }, 
} as const;




interface Payment {
  id: number;
  action: string;
  admin: string;
  target: string;
  timestamp: string;
  status: PaymentStatus; 
}

const payments: Payment[] = [
  {
    id: 1,
    action: "User Role Modified",
    admin: "John Smith",
    target: "sarah.j@studpay.com",
    timestamp: "2024-05-25 14:30:22",
    status: "Success", 
  },
  {
    id: 2,
    action: "Permission Updated",
    admin: "John Smith",
    target: "Finance Manager Role",
    timestamp: "2024-05-25 13:15:45",
    status: "Success", 
  },
  {
    id: 3,
    action: "Admin Account Created",
    admin: "System",
    target: "mike.chen@studpay.com",
    timestamp: "2024-05-24 09:22:11",
    status: "Success", 
  },
];

export default function PlatformLanguage() {
  return (
    <div className="overflow-x-auto">
      <table className="xl:w-full w-197.5">
        <thead>
          <tr className="border-b border-gray1600">
            <th className="px-4 py-3.5 text-left text-sm leading-5 font-normal text-gray-1400">
              Action
            </th>
            <th className="px-4 py-3.5 text-left text-sm leading-5 font-normal text-gray-1400">
              Admin
            </th>
            <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
              Target
            </th>
            <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
              Timestamp
            </th>
            <th className="px-4 py-3 text-left text-[13.67px] font-normal text-gray-1400">
              Status
            </th> 
          </tr>
        </thead>

        <tbody>
          {payments.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray1600 hover:bg-gray1700/50 transition"
            >
              <td className="px-4 py-6 text-black13 font-neulis-sans font-normal text-sm leading-5">
                {item.action}
              </td>

              <td className="px-4 py-6 text-black13 font-neulis-sans font-normal text-sm leading-5">
                {item.admin}
              </td> 
              <td className="px-4 py-6 text-black13 font-neulis-sans font-normal text-sm leading-5">
                {item.target}
              </td>
               <td className="px-4 py-6 text-gray-1200 font-neulis-sans font-normal text-sm leading-5">
                {item.timestamp}
              </td>
              <td className="px-4 py-4.5">
                <span
                  className={`text-xs font-neulis-sans font-normal leading-4 h-5.5 px-2.75 rounded-full inline-flex items-center justify-center pt-0.5 ${statusConfig[item.status].classes}`}
                >
                  {item.status}
                </span>
              </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
