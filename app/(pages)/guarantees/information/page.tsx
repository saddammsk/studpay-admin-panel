"use client";
import { useState } from 'react'
import Link from "next/link";
import Image from "next/image";
import {
     ArrowLeft,
     Mail,
     Phone,
     MapPin,
     FileText,
     Eye,
     Download,
     User,
     GraduationCap,
     File,
     Shield,
     AlertTriangle,
} from "lucide-react";
import GuranteeBar from '@/app/components/GuranteeBar';

const UsersStudentsPage = () => {
     const data = {
          id: "STU-2024-001",
          status: "Approved" as const,
          personal: {
               name: "Anna Müller",
               email: "anna.mueller@stud.tu-munich.de",
               phone: "+49 170 123 4567",
               address: "Munich, Germany",
          },
          academic: {
               university: "TU Munich",
               program: "M.Sc. Computer Science",
               semester: "Winter 2024",
               graduation: "March 2026",
          },
          guarantee: {
               type: "Rental",
               amount: "3.500 €",
               date: "January 15, 2024",
          },
          risk: {
               level: "Low" as "Low" | "Medium" | "High",
               creditScore: 720,
               incomeVerified: true,
               previous: 0,
          },
          documents: [
               { id: "1", name: "Passport Copy", uploadedAt: "Jan 15, 2024" },
               { id: "2", name: "University Enrollment", uploadedAt: "Jan 16, 2024" },
               { id: "3", name: "Bank Statement", uploadedAt: "Jan 17, 2024" },
               { id: "4", name: "Rental Agreement", uploadedAt: "Jan 18, 2024" },
          ],
          activities: [
               { id: "1", title: "Application submitted", time: "Jan 15, 2024 at 10:30 AM" },
               { id: "2", title: "Documents uploaded", time: "Jan 16, 2024 at 2:15 PM" },
               { id: "3", title: "Review started", time: "Jan 17, 2024 at 9:00 AM" },
          ],
     };
     return (
          <div className='xl:-mt-[123px] md:-mt-[110px]! -mt-24 bg-gray-6700 lg:-m-8 -m-4 '>
               <GuranteeBar></GuranteeBar>
               <div className='lg:p-8 p-4'>
                    <div className="flex items-center flex-wrap gap-5 justify-between mb-6">
                         <div className="flex items-center gap-3 cursor-pointer">
                              <ArrowLeft className="w-5 h-5 text-blue-1300" />
                              <div>
                                   <div className="flex items-center gap-3">
                                        <h1 className="text-2xl text-blue-1300 font-bold">{data.personal.name}</h1>
                                        <span className="px-3 py-0.5 text-xs rounded-full bg-green-1600/10 border border-green-1600/30 text-green-1600 font-bold">
                                             {data.status}
                                        </span>
                                   </div>
                                   <p className="text-sm leading-5 text-gray-1200">Application ID: {data.id}</p>
                              </div>
                         </div>

                         <div className="flex gap-3">
                              <button className="px-2.5 py-1.5 text-sm rounded-md text-blue-1300 border border-gray-1000 bg-gray-6600 hover:bg-gray-100">
                                   Reject
                              </button>
                              <button className="px-2.5 py-1.5 text-sm rounded-md bg-green-1600 text-white hover:bg-green-700">
                                   Approve Guarantee
                              </button>
                         </div>
                    </div>

                    {/* Main grid */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                         {/* Left Section */}
                         <div className="lg:col-span-2 space-y-6">
                              {/* Personal Information */}
                              <section className="bg-white border-gray-1000 shadow-4xl rounded-lg border p-6">
                                   <div className="flex items-center gap-2 mb-3">
                                        <User className="w-4 h-4 text-gray-400" />
                                        <h2 className="font-bold  text-base text-blue-1300 ">Personal Information</h2>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-1300">
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">Full Name</p>
                                             <p className="">{data.personal.name}</p>
                                        </div>
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">Email</p>
                                             <div className="flex items-center gap-2">
                                                  <Mail className="w-4 h-4 text-gray-400" />
                                                  <p className="">{data.personal.email}</p>
                                             </div>
                                        </div>
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">Phone</p>
                                             <div className="flex items-center gap-2">
                                                  <Phone className="w-4 h-4 text-gray-400" />
                                                  <p className="">{data.personal.phone}</p>
                                             </div>
                                        </div>
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">Address</p>
                                             <div className="flex items-center gap-2">
                                                  <MapPin className="w-4 h-4 text-gray-400" />
                                                  <p className="">{data.personal.address}</p>
                                             </div>
                                        </div>
                                   </div>
                              </section>

                              {/* Academic Information */}
                              <section className="bg-white border-gray-1000 shadow-4xl rounded-lg border p-6">
                                   <div className="flex items-center gap-2 mb-3">
                                        <GraduationCap className="w-4 h-4 text-gray-400" />
                                        <h2 className="font-bold  text-base text-blue-1300 ">Academic Information</h2>
                                   </div>
                                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-blue-1300">
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">University</p>
                                             <p >{data.academic.university}</p>
                                        </div>
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">Program</p>
                                             <p >{data.academic.program}</p>
                                        </div>
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">Semester</p>
                                             <p >{data.academic.semester}</p>
                                        </div>
                                        <div>
                                             <p className="text-gray-1200 text-xs leading-4 mb-1">Expected Graduation</p>
                                             <p >{data.academic.graduation}</p>
                                        </div>
                                   </div>
                              </section>

                              {/* Documents */}
                              <section className="bg-white border-gray-1000 shadow-4xl rounded-lg border p-6">
                                   <div className="flex items-center gap-2 mb-3">
                                        <File className="w-4 h-4 text-gray-400" />
                                        <h2 className="font-bold  text-base text-blue-1300 ">Documents</h2>
                                   </div>
                                   <p className="text-sm text-gray-1200 font-normal leading-5 mb-3">
                                        Required documents for guarantee approval
                                   </p>

                                   {data.documents.map((doc) => (
                                        <div
                                             key={doc.id}
                                             className="flex items-center justify-between  rounded-lg p-3 mb-2 bg-gray-1600/50 hover:bg-gray-50"
                                        >
                                             <div className="flex items-center gap-3">
                                                  <FileText className="w-4 h-4 text-green-500" />
                                                  <div>
                                                       <p className="text-sm font-normal text-blue-1300">{doc.name}</p>
                                                       <p className="text-xs text-gray-1200 leading-4">Uploaded {doc.uploadedAt}</p>
                                                  </div>
                                             </div>

                                             <div className="flex items-center gap-4 text-blue-1300">
                                                  <Eye className="w-4 h-4 cursor-pointer" />
                                                  <Download className="w-4 h-4 cursor-pointer" />
                                             </div>
                                        </div>
                                   ))}
                              </section>
                         </div>

                         {/* Right Section */}
                         <div className="space-y-6">
                              {/* Guarantee Details */}
                              <section className="bg-white border-gray-1000 shadow-4xl rounded-lg border p-6">
                                   <div className="flex items-center gap-2 mb-3">
                                        <Shield className="w-4 h-4 text-gray-400" />
                                        <h2 className="font-bold  text-base text-blue-1300 ">Guarantee</h2>
                                   </div>
                                   <div className="space-y-4 text-sm">
                                        <div className='border-b border-gray-1000 pb-4'>
                                             <p className="text-gray-1200 mb-1 text-xs leading-4">Type</p>
                                             <span className="px-3 py-1 text-xs rounded-full border border-gray-1000 text-blue-1300 font-bold leading-4">
                                                  {data.guarantee.type}
                                             </span>
                                        </div>
                                        <div className='border-b border-gray-1000 pb-4'>
                                             <p className="text-gray-1200 mb-1 text-xs leading-4">Coverage Amount</p>
                                             <p className="text-2xl font-bold leading-8 text-blue-600">{data.guarantee.amount}</p>
                                        </div>
                                        <div>
                                             <p className="text-gray-1200 mb-1 text-xs leading-4">Application Date</p>
                                             <p className="font-normal text-sm leading-5 text-blue-1300">{data.guarantee.date}</p>
                                        </div>
                                   </div>
                              </section>

                              {/* Risk Assessment */}
                              <section className="bg-white rounded-lg border border-green-1600/30 p-6">
                                   <div className="flex items-center gap-2 mb-3">
                                        <AlertTriangle className="w-4 h-4 text-gray-400" />
                                        <h2 className="font-bold  text-base text-blue-1300 ">Risk Assessment</h2>
                                   </div>
                                   <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                             <p className='text-gray-1200  text-sm leading-4'>Overall Score</p>
                                             <span className="px-3 py-1 text-sm rounded-full bg-green-1600 text-white">
                                                  {data.risk.level}
                                             </span>
                                        </div>
                                        <div className="flex justify-between">
                                             <p className='text-gray-1200  text-sm leading-4'>Credit Score</p>
                                             <p className="text-blue-1300">{data.risk.creditScore}</p>
                                        </div>
                                        <div className="flex justify-between">
                                             <p className='text-gray-1200  text-sm leading-4'>Income Verification</p>
                                             <p className="text-green-1600 font-medium">
                                                  {data.risk.incomeVerified ? "Verified" : "Not Verified"}
                                             </p>
                                        </div>
                                        <div className="flex justify-between">
                                             <p className='text-gray-1200  text-sm leading-4'>Previous Guarantees</p>
                                             <p className="text-blue-1300">{data.risk.previous}</p>
                                        </div>
                                   </div>
                              </section>

                              {/* Activity Log */}
                              <section className="bg-white rounded-lg border border-green-1600/30 p-6">
                                   <h2 className="font-bold mb-3 text-base text-blue-1300">Activity Log</h2>
                                   <ul className="space-y-4 text-sm">
                                        {data.activities.map((activity) => (
                                             <li key={activity.id} className="flex items-start gap-3">
                                                  <span
                                                       className={`w-2 h-2 mt-1 rounded-full block ${activity.title === "Review started" ? "bg-yellow-500" : "bg-blue-600"
                                                            }`}
                                                  ></span>
                                                  <div>
                                                       <p className="font-normal text-sm leading-5 text-blue-1300">{activity.title}</p>
                                                       <p className="text-gray-1200 text-xs leading-4">{activity.time}</p>
                                                  </div>
                                             </li>
                                        ))}
                                   </ul>
                              </section>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default UsersStudentsPage;
