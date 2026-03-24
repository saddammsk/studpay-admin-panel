/* eslint-disable react-hooks/static-components */
'use client';
import Image from "next/image";
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import Button from "@/app/components/ui/Button";
import {
  usePartnershipStore,
  PartnerType,
  PartnerStatus,
  Partner,
  Campaign,
  ActivityItem,
} from "@/app/store/zustand/Usepartnershipstore";
import PartnerTable from "@/app/components/PartnershipTable";


const statusStyle: Record<PartnerStatus, string> = {
  Verified: "bg-green-1500/10 border-green-1500/20 text-green-1500",
  Pending: "bg-yellow-1100/10 border-yellow-1100/30 text-yellow-1100",
  Suspended: "bg-red-1300/10 border-red-1300/30 text-red-1300",
};




export default function PartnershipPage() {
  const {
    selectedPartner, filteredPartners,
    totalActiveStudents, avgConversion,
     copyReferralCode, copiedCode,
    partners,
  } = usePartnershipStore();

  const partner: Partner | undefined = selectedPartner();
  const filtered = filteredPartners();

  return (
    <div className="bg-[url(/images/body-bg.png)] bg-cover bg-no-repeat xl:-m-8 -m-4 font-inter">
      <TopBar />

      <div className="grid bg-gray-1500 p-4 2xl:grid-cols-4 md:grid-cols-2 gap-4 border-b border-gray-3600">
        <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
          <div>
            <h6 className="text-xs font-medium leading-4 text-gray-1900">Total Partner Referrals</h6>
            <span className="text-2xl font-bold my-1 leading-8 text-black-1600 block">{partners.reduce((s, p) => s + p.referralUsage, 0).toLocaleString()}</span>
            <h6 className="text-xs font-medium leading-4 text-gray-1900"><span className="text-green-1500">+12.3%</span> This month</h6>
          </div>
          <div className="bg-gray-7400/10 rounded-lg w-9 h-9 flex items-center justify-center"><img src="/images/user-black.svg" alt="" /></div>
        </div>
        <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
          <div>
            <h6 className="text-xs font-medium leading-4 text-gray-1900">Direct vs Partner Revenue</h6>
            <span className="text-2xl font-bold my-1 leading-8 text-black-1600 block">34% / 66%</span>
            <h6 className="text-xs font-medium leading-4 text-gray-1900"><span className="text-green-1500">+8.2%</span> Partner-led growth</h6>
          </div>
          <div className="bg-gray-7400/10 rounded-lg w-9 h-9 flex items-center justify-center"><img src="/images/trend-up5.svg" alt="" /></div>
        </div>
        <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
          <div>
            <h6 className="text-xs font-medium leading-4 text-gray-1900">Top Performing University</h6>
            <span className="text-2xl font-bold my-1 leading-8 text-black-1600 block">TU Berlin</span>
            <h6 className="text-xs font-medium leading-4 text-gray-1900"><span className="text-green-1500">847 leads</span> This quarter</h6>
          </div>
          <div className="bg-gray-7400/10 rounded-lg w-9 h-9 flex items-center justify-center"><img src="/images/building-icon2.svg" alt="" /></div>
        </div>
        <div className="bg-white border border-gray-3600 shadow-13xl rounded-lg 4xl:p-4 p-2 flex items-start justify-between">
          <div>
            <h6 className="text-xs font-medium leading-4 text-gray-1900">Pending Onboarding</h6>
            <span className="text-2xl font-bold my-1 leading-8 text-black-1600 block">{partners.filter((p) => p.status === "Pending").length}</span>
            <h6 className="text-xs font-medium leading-4 text-gray-1900">
              <span className="font-medium">{partners.filter((p) => p.status === "Pending").length} urgent</span> Awaiting verification
            </h6>
          </div>
          <div className="bg-gray-7400/10 rounded-lg w-9 h-9 flex items-center justify-center"><img src="/images/timer-icon4.svg" alt="" /></div>
        </div>
      </div>

      <div className="xl:flex">
        <div className="xl:w-[calc(100%_-_304px)]">
          <div className="p-4 bg-gray-1500 flex items-center justify-between gap-4 4xl:flex-nowrap flex-wrap">
        
          
          </div>

          <PartnerTable />

          <div className="flex items-center px-4 py-3 justify-between flex-wrap gap-2">
            <h6 className="text-sm font-normal leading-5 text-gray-1900">Showing {filtered.length} of {partners.length} partners</h6>
            <div className="flex items-center gap-4">
              <h6 className="text-sm font-normal leading-5 text-gray-1900">
                Total Active Students: <span className="font-bold text-black-1600">{totalActiveStudents().toLocaleString()}</span>
              </h6>
              <h6 className="text-sm font-normal leading-5 text-gray-1900">
                Avg Conversion: <span className="font-bold text-green-1500">{avgConversion()}</span>
              </h6>
            </div>
          </div>
        </div>

        <div className="xl:max-w-[304px] max-w-full xl:px-0 px-4 w-full">
          {partner && (
            <>
              <div className="border-l border-b border-gray-3600 bg-gray-1500 p-4">
                <div className="flex items-start justify-between border-b border-gray-3600 pb-4 mb-4">
                  <div>
                    <h6 className="text-lg font-bold leading-7 text-black-1600">{partner.name}</h6>
                    <span className="text-sm font-normal leading-5 text-gray-1900 block">{partner.id}</span>
                    <div className="flex items-start gap-3 mt-3">
                      <div className="flex items-center gap-2 flex-1">
                        <img src="/images/location-gray.svg" alt="" />
                        <p className="text-sm font-normal leading-5 text-gray-1900">{partner.country} •</p>
                        <div className="py-0.5 px-2.5 border border-gray-3600 rounded-full inline-block text-xs font-normal text-black-1600">{partner.type}</div>
                      </div>
                    </div>
                  </div>
                  <div className={`px-3 h-5.5 rounded-full text-xs border inline-flex items-center justify-center ${statusStyle[partner.status]}`}>
                    {partner.status}
                  </div>
                </div>

                <div className="bg-gray-7400/5 mb-4 border border-gray-7400/20 py-3 px-2 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/images/gift-icon2.svg" alt="" />
                    <h6 className="text-sm font-medium leading-5 text-black-1600">Referral Code</h6>
                  </div>
                  <div className="my-2 bg-gray-1500 border border-gray-3600 rounded-md flex items-center justify-between py-2 px-4">
                    <h6 className="text-sm font-bold leading-5 text-gray-7400">{partner.referralCode}</h6>
                    <button onClick={() => copyReferralCode(partner.referralCode)} className="hover:opacity-70 transition-opacity">
                      {copiedCode === partner.referralCode ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8L6.5 11.5L13 5" stroke="#16A249" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : (
                        <img src="/images/copy-icon.svg" alt="" />
                      )}
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <h6 className="text-sm font-normal leading-5 text-gray-1900">Total Usage</h6>
                    <h6 className="text-sm font-bold leading-5 text-black-1600">{partner.referralUsage.toLocaleString()}</h6>
                  </div>
                </div>

                <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/images/grapgh-icon2.svg" alt="" />
                    <h6 className="text-sm font-medium leading-5 text-black-1600">Performance Stats</h6>
                  </div>
                  <div className="grid grid-cols-2 mt-2 gap-4 p-2">
                    <div>
                      <h6 className="text-xs font-normal leading-4 text-gray-1900">Active Students</h6>
                      <span className="text-lg font-bold leading-7 text-black-1600 block">{partner.activeStudents.toLocaleString()}</span>
                    </div>
                    <div>
                      <h6 className="text-xs font-normal leading-4 text-gray-1900">Conversion Rate</h6>
                      <span className="text-lg font-bold leading-7 text-green-1500 block">{partner.conversionRate > 0 ? `${partner.conversionRate}%` : "—"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h6 className="text-xs font-normal leading-4 text-gray-1900">Commission Rate</h6>
                    <span className="text-base font-bold leading-7 text-black-1600">{partner.commissionRate}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <h6 className="text-xs font-normal leading-4 text-gray-1900">Est. Monthly Payout</h6>
                    <span className="text-base font-bold leading-7 text-green-1500">{partner.monthlyPayout > 0 ? `€${partner.monthlyPayout.toLocaleString()}` : "—"}</span>
                  </div>
                </div>

                {partner.campaigns.length > 0 && (
                  <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <img src="/images/trend-up4.svg" className="w-4 h-4" alt="" />
                      <h6 className="text-sm font-medium leading-5 text-black-1600">Active Campaigns</h6>
                    </div>
                    {partner.campaigns.map((c: Campaign, i: number) => (
                      <div key={i} className="flex items-center justify-between p-2 border-b border-gray1700/30 last:border-0">
                        <div>
                          <h6 className="text-sm font-medium leading-5 text-black-1600">{c.name}</h6>
                          <p className="text-xs font-normal leading-4 text-gray-1900">{c.leads} leads · {c.conversion}% conv.</p>
                        </div>
                        <div className={`text-xs font-bold leading-4 py-0.5 px-2.5 rounded-full border ${c.status === "Active" ? "text-green-1500 border-green-1500/30" : "text-gray-1900 border-gray-3600"}`}>
                          {c.status}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <img src="/images/calendar.svg" className="w-4 h-4" alt="" />
                    <h6 className="text-sm font-medium leading-5 text-black-1600">Recent Activity</h6>
                  </div>
                  <div className="space-y-3">
                    {partner.activity.map((a: ActivityItem, i: number) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="bg-gray-7400 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" />
                        <div>
                          <h6 className="text-sm font-medium leading-5 text-black-1600">{a.title}</h6>
                          <p className="text-xs font-normal leading-4 text-gray-1900">{a.description} · {a.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white border mb-4 border-gray-3600 py-3 px-2 rounded-lg">
                  <h6 className="text-sm font-medium leading-5 text-black-1600 mb-2">Contact Information</h6>
                  <div className="space-y-2">
                    <Link href={`mailto:${partner.email}`} className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-1900">
                      <img src="/images/mail-icon.svg" alt="" />{partner.email}
                    </Link>
                    <Link href={`tel:${partner.phone}`} className="flex items-center gap-2 text-sm font-normal leading-5 text-gray-1900">
                      <img src="/images/phone-gray.svg" alt="" />{partner.phone}
                    </Link>
                  </div>
                </div>
              </div>

              <ul className="flex items-center py-3 gap-2 px-4 xl:px-0">
                <li>
                  <Link href="/" className="text-black-1600 text-sm font-medium leading-5 flex items-center gap-2 px-2.5 py-1.5 bg-gray-1500 border border-gray-3600 rounded-md">
                    <img src="/images/file-icon3.svg" alt="" /> View Contract
                  </Link>
                </li>
                <li>
                  <Button label="Partner Portal" className="text-white text-sm! bg-gray-7400 justify-center h-9 px-3 rounded-md! hover:opacity-90 font-neulis-sans" iconSrc="/images/export-icon3.svg" />
                </li>
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}