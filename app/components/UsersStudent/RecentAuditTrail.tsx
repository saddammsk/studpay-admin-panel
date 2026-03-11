import Image from 'next/image';
import Link from 'next/link';
import RecentAuditTable from './RecentAuditTable'; 
const RecentAuditTrail = () => {
  return (
    <div className="bg-white border border-gray-3100 shadow-4xl 2xl:p-6 p-4 mt-4 rounded-lg">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-black-1600 font-inter font-semibold text-base leading-6 tracking-[-0.4px] flex items-center gap-2">
          <Image src="/images/clock-gray.svg" width={16} height={16} alt="Recent Audit" />
          Recent Audit Trail
        </h4>
        <Link
          href="#"
          className="inline-flex items-center text-blue1400 font-inter font-normal text-sm leading-5"
        >
          View full log
        </Link>
      </div>

      <div className="flex-1">
        <RecentAuditTable />
      </div>
    </div>
  );
};

export default RecentAuditTrail;