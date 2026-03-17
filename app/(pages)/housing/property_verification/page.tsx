"use client";

import { useState } from "react";
import PropertyActionBar from "@/app/components/PropertyActionBar"
import {
     ArrowLeft,
     ArrowRight,
     Clock,
     User,
     Mail,
     Phone,
     Building2,
     Calendar,
     Star,
     MapPin,
     Wifi,
     RefreshCw,
     CalendarDays,
     Car,
     Sofa,
     Ban,
     PawPrint,
     Users, 
     ExternalLink, 
     GraduationCap,
     Shield, 
     File
} from "lucide-react";
import Link from "next/link";

const documents = [
     { name: "Government ID (Passport)", status: "verified" },
     { name: "Proof of Ownership", status: "pending" },
     { name: "Property Registration", status: "pending" },
     { name: "Tax Certificate", status: "verified" },
];

const amenities = [
     { icon: Wifi, label: "Wifi Included" },
     { icon: Car, label: "Parking" },
     { icon: Sofa, label: "Furnished" },
];

const houseRules = [
     { icon: Ban, label: "No smoking" },
     { icon: PawPrint, label: "No pets allowed" },
     { icon: Users, label: "Max 2 occupants" },
];

const historyItems = [
     { label: "ID Verified", by: "Sarah M.", date: "Jan 28, 2026", color: "bg-green-500" },
     { label: "Tax Certificate Uploaded", by: "Landlord", date: "Jan 27, 2026", color: "bg-green-500" },
     { label: "Property Submitted", by: "Landlord", date: "Jan 25, 2026", color: "bg-blue-500" },
];

const images = [
     "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
     "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
     "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
     "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
];

const DocRow = ({ name, status }: { name: string; status: string }) => (
     <div className="flex items-center justify-between p-3 rounded-lg bg-gray-1600/30 2xl:flex-nowrap flex-wrap gap-4 mb-3 border border-gray-1000">
          <div className="flex items-start gap-3">
               <div className="w-10 h-10 rounded-lg bg-yellow-3000  flex items-center justify-center flex-shrink-0 mt-0.5">
                    <File size={20} className="text-green-1600" />
               </div>
               <div>
                    <p className="text-sm font-semibold text-slate-800">{name}</p>
                    <button className="flex items-center gap-1 text-xs text-blue-3000 hover:text-blue-700 mt-0.5 transition-colors">
                         View Document <ExternalLink size={10} />
                    </button>
               </div>
          </div>
          {status === "verified" ? (
               <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-green-1600 text-white">
                    Verified
               </span>
          ) : (
               <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-1600 text-blue-1300 ">Pending</span>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-green-1600 text-xs font-semibold text-green-1600 hover:bg-slate-50 transition-colors">
                        <img src="/images/verify-icon.svg" />
                         Verify
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors">
                        <img src="/images/file-cross.svg" />
                         Invalid
                    </button>
               </div>
          )}
     </div>
);

export default function PropertyVerification() {
     const [currentImage, setCurrentImage] = useState(0);

     const prev = () => setCurrentImage((p) => (p === 0 ? images.length - 1 : p - 1));
     const next = () => setCurrentImage((p) => (p === images.length - 1 ? 0 : p + 1));

     return (
          <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:mt-[-45px] mt-[-53px] xl:-m-8 -m-4 font-inter">
               <div className='bg-white/80 border-b border-solid border-gray1600/50 backdrop-blur-md fixed w-full z-50 top-0 right-0  xl:pl-72 lg:pl-62.5'>
                    <div className='flex items-center justify-between md:gap-0 gap-4 py-4.5 xl:px-8 px-4 bg-white border-b border-gray-1000'>
                         <div className="flex-1 md:block hidden">
                              <h1 className="xl:text-[22px] text-lg font-bold text-slate-900 tracking-tight">
                                   Housing Master Dashboard
                              </h1>
                              <p className="text-sm text-slate-500 mt-0.5">
                                   Manage listings, track bookings, and monitor campaign performance
                              </p>
                         </div>
                         <div className="flex items-center  gap-3">
                              <div className="flex items-center gap-2 text-xs text-slate-500 bg-white  rounded-lg px-3 py-2">
                                   <CalendarDays size={13} className="text-slate-400" />
                                   Last updated: Today, 14:32 IST
                              </div>
                              <button className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-lg px-3 py-2 shadow-sm hover:bg-slate-50 transition-colors">
                                   <RefreshCw size={13} />
                                   Refresh
                              </button>
                         </div>
                    </div>
               </div>
               <div className="bg-white py-6 md:px-8 px-4">
                    <div className="flex items-start gap-3 mb-6">
                         <Link href={"/housing"} className="mt-1 w-8 h-8 flex items-center justify-center  transition-colors flex-shrink-0">
                              <ArrowLeft size={15} className="text-slate-600" />
                         </Link>
                         <div className="flex-1 min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                   <h1 className="text-xl md:text-2xl font-bold text-blue-1300 tracking-tight">
                                        Property Verification
                                   </h1>
                                   <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-1600 text-blue-1300 border border-gray-1600">
                                        <Clock size={11} />
                                        Pending Review
                                   </span>
                              </div>
                              <p className="text-base text-gray-1200 mt-0.5">
                                   Alexanderstraße 45, Berlin • Submitted Jan 25, 2026
                              </p>
                         </div>
                    </div>

                    <div className="grid xl:grid-cols-2 gap-5">
                         <div className="space-y-5">
                              <div className="bg-white rounded-xl 4xl:px-16 md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
                                   <div className="flex items-center justify-between mb-4">
                                        <p className="text-lg font-bold text-blue-1300">Property Images</p>
                                        <span className="text-xs text-blue-1300 font-medium border border-gray-1000 rounded-full py-0.5 px-2.5">4 Photos</span>
                                   </div>
                                   <div className="relative">
                                        <img
                                             src={images[currentImage]}
                                             alt="Property"
                                             className="w-full h-[260px] rounded-lg md:h-[340px] object-cover"
                                        />
                                        <button
                                             onClick={prev}
                                             className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-1500 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors"
                                        >
                                             <ArrowLeft size={16} className="text-slate-700" />
                                        </button>
                                        <button
                                             onClick={next}
                                             className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-1500 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors"
                                        >
                                             <ArrowRight size={16} className="text-slate-700" />
                                        </button>
                                        <button className="absolute cursor-pointer top-3 right-3 w-8 h-8 rounded-md bg-gray-1500/80  backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors">
                                           <img src="/images/expand-icon2.svg" alt="" />
                                        </button>
                                        <div className="absolute bottom-3 left-3 px-2 py-1 rounded bg-gray-1500/80 backdrop-blur-sm text-blue-1300 text-xs font-semibold mono">
                                             {currentImage + 1} / {images.length}
                                        </div>
                                   </div>
                              </div>

                              <div className="bg-white rounded-xl 4xl:px-16 md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
                                   <div className="flex items-center gap-2 mb-3">
                                        <MapPin size={16} className="text-blue-500" />
                                        <p className="text-lg leading-7 font-semibold text-blue-1300">Location Verification</p>
                                   </div>
                                   <div className="relative  bg-slate-100 overflow-hidden">
                                        <img
                                             src="/images/map.png"
                                             alt="Map"
                                             className="w-full rounded-lg h-full object-cover opacity-80"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                             <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-3000 text-white text-sm font-semibold shadow-lg">
                                                  📍 Alexanderplatz, Berlin
                                             </div>
                                        </div>
                                   </div>
                                   <div className="flex items-center mt-3 gap-2 ">
                                        <MapPin size={13} className="text-slate-400 flex-shrink-0" />
                                        <p className="text-sm text-gray-1200">Alexanderstraße 45, 10178 Berlin, Germany</p>
                                   </div>
                              </div>

                              <div className="bg-white rounded-xl md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
                                   <div className="flex items-center mb-3 gap-2">
                                        <Building2 size={15} className="text-blue-3000" />
                                        <p className="text-lg font-semibold text-blue-1300">Property Details</p>
                                   </div>
                                   <div className="">
                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                             <div className="p-4 rounded-lg bg-gray-1600/50">
                                                  <p className="text-xs font-semibold text-gray-1200 uppercase tracking-wide mb-1">
                                                       Monthly Rent
                                                  </p>
                                                  <p className="text-2xl font-bold text-blue-1300">€850</p>
                                                  <p className="text-xs text-gray-1200 mt-0.5">+ €150 utilities</p>
                                             </div>
                                             <div className="p-4 rounded-lg bg-gray-1600/50">
                                                  <p className="text-xs font-semibold text-gray-1200 uppercase tracking-wide mb-1">
                                                       Size
                                                  </p>
                                                  <p className="text-2xl font-bold text-blue-1300">
                                                       45 m<sup className="text-sm">2</sup>
                                                  </p>
                                                  <p className="text-xs text-gray-1200 mt-0.5">1 Bedroom</p>
                                             </div>
                                        </div>
                                        <div className="mb-4">
                                             <p className="text-sm font-bold text-blue-1300 mb-2.5">Amenities</p>
                                             <div className="flex flex-wrap gap-2">
                                                  {amenities.map(({ icon: Icon, label }) => (
                                                       <span
                                                            key={label}
                                                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-gray-1600 text-xs font-medium text-blue-1300"
                                                       >
                                                            <Icon size={12} className="text-slate-500" />
                                                            {label}
                                                       </span>
                                                  ))}
                                             </div>
                                        </div>
                                        <div className="mb-5">
                                             <p className="text-sm font-bold text-slate-800 mb-2.5">House Rules</p>
                                             <div className="space-y-2">
                                                  {houseRules.map(({ icon: Icon, label }) => (
                                                       <div key={label} className="flex items-center gap-2">
                                                            <Icon size={14} className="text-red-400 flex-shrink-0" />
                                                            <span className="text-sm text-slate-600">{label}</span>
                                                       </div>
                                                  ))}
                                             </div>
                                        </div>

                                        <div className="pt-4 border-t border-slate-100 gap-2">
                                             <div className="mb-2 flex items-center justify-between">
                                                  <p className="text-xs text-slate-400">Available From</p>
                                                  <p className="text-sm font-semibold text-slate-700">March 1, 2026</p>
                                             </div>
                                             <div className="sm:text-right flex items-center justify-between">
                                                  <p className="text-xs text-slate-400">Minimum Stay</p>
                                                  <p className="text-sm font-semibold text-slate-700">6 months</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="space-y-5">
                              <div className="bg-white rounded-xl md:px-6 px-4 py-6 border border-gray-1000 shadow-sm overflow-hidden">
                                   <div className="flex items-center gap-2  pb-3">
                                        <User size={15} className="text-blue-500" />
                                        <p className="text-lg font-semibold text-slate-800">Landlord Profile</p>
                                   </div>
                                   <div className="">
                                        <div className="flex items-center gap-3 mb-4">
                                             <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-violet-700 flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                                                  MK
                                             </div>
                                             <div>
                                                  <p className="text-base font-bold text-slate-900">Marcus Keller</p>
                                                  <div className="flex items-center gap-1 mt-0.5">
                                                       {[1, 2, 3, 4].map((s) => (
                                                            <Star key={s} size={12} className="text-amber-400 fill-amber-400" />
                                                       ))}
                                                       <Star size={12} className="text-slate-200 fill-slate-200" />
                                                       <span className="text-xs text-slate-500 ml-1">4.2 (28 reviews)</span>
                                                  </div>
                                                  <div className="flex items-center gap-3 mt-1.5">
                                                       <span className="flex items-center gap-1 px-2.5 border border-gray-1000 rounded-full py-0.5 text-xs text-blue-1300">
                                                            <Building2 size={11} />
                                                            12 Properties
                                                       </span>
                                                       <span className="flex items-center gap-1 px-2.5 border border-gray-1000 rounded-full py-0.5 text-xs text-blue-1300">
                                                            <Calendar size={11} />
                                                            Since 2021
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="space-y-2 pt-3 border-t border-slate-100">
                                             <div className="flex items-center gap-2.5">
                                                  <Mail size={13} className="text-slate-400 flex-shrink-0" />
                                                  <span className="text-sm text-slate-700">m.keller@immobilien-berlin.de</span>
                                             </div>
                                             <div className="flex items-center gap-2.5">
                                                  <Phone size={13} className="text-slate-400 flex-shrink-0" />
                                                  <span className="text-sm text-slate-E5E7EB">+49 30 1234 5678</span>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="bg-white rounded-xl border md:p-6 p-3 border-gray-1000 shadow-sm overflow-hidden">
                                   <div className="flex items-center justify-between pb-3">
                                        <div className="flex items-center gap-2">
                                             <Shield size={15} className="text-blue-500" />
                                             <p className="text-lg font-semibold text-slate-800">Document Verification</p>
                                        </div>
                                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-gray-1600 text-blue-1300 ">
                                             2/4 Verified
                                        </span>
                                   </div>
                                   <div className="">
                                        {documents.map((doc) => (
                                             <DocRow key={doc.name} name={doc.name} status={doc.status} />
                                        ))}
                                   </div>
                              </div>

                              <div className="bg-yellow-3000 rounded-xl md:p-6 p-3 border border-amber-200 shadow-sm overflow-hidden">
                                   <div className="flex items-center gap-2 pb-5">
                                        <GraduationCap size={15} className="text-brown-1300" />
                                        <p className="text-lg font-bold text-brown-1300">Campaign Source</p>
                                   </div>
                                   <div className="">
                                        <div className="flex items-center gap-3 mb-4">
                                             <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                                                  <GraduationCap size={16} className="text-blue-600" />
                                             </div>
                                             <div>
                                                  <p className="text-base font-bold text-slate-900">TU Berlin Partnership</p>
                                                  <p className="text-sm text-slate-500">University Housing Program 2026</p>
                                             </div>
                                        </div>
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 pt-3 ">
                                             <div className="bg-white/60 rounded-lg p-3">
                                                  <p className="text-sm text-slate-400 mb-0.5">Campaign ID</p>
                                                  <p className="text-sm font-semibold text-slate-800 mono">TUB-2026-Q1-045</p>
                                             </div>
                                        <div className="bg-white/60 rounded-lg p-3">
                                                  <p className="text-sm text-slate-400 mb-0.5">Joined Via</p>
                                                  <p className="text-sm font-semibold text-slate-800">Partner Referral</p>
                                             </div>
                                           <div className="bg-white/60 rounded-lg p-3">
                                                  <p className="text-sm text-slate-400 mb-0.5">Commission Rate</p>
                                                  <p className="text-sm font-semibold text-slate-800">8%</p>
                                             </div>
                                           <div className="bg-white/60 rounded-lg p-3">
                                                  <p className="text-sm text-slate-400 mb-0.5">Priority Listing</p>
                                                  <p className="text-sm font-semibold text-green-600">Active</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              <div className="bg-white rounded-xl md:p-6 p-3 border border-slate-200/80 shadow-sm overflow-hidden">
                                   <div className="flex items-center mb-3 gap-2">
                                        <p className="text-sm font-bold text-slate-800">Verification History</p>
                                   </div>
                                   <div className="space-y-3">
                                        {historyItems.map((item, i) => (
                                             <div key={i} className="flex items-center flex-wrap gap-4 justify-between gap-3">
                                                  <div className="flex items-center gap-2.5">
                                                       <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.color}`} />
                                                       <span className="text-sm text-slate-700 font-medium">{item.label}</span>
                                                       <span className="text-sm text-slate-400">by {item.by}</span>
                                                  </div>
                                                  <span className="text-sm text-slate-400 flex-shrink-0">{item.date}</span>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
                     <PropertyActionBar
        price="€850/month"
        listingId="BER-2026-9847"
      />
               </div>
          </div>
     );
}