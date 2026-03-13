
'use client'
import TopBar from "@/app/components/common/TopBar";
import Link from "next/link";
import Modal from "@/app/components/Modal";
import CustomSelect from "@/app/components/CustomSelect";
import InputField from "@/app/components/InputField";
import { Clock, Megaphone, Users, Gift } from "lucide-react";
import { useState } from "react";
import CashbackStatsCard from "@/app/components/CashbackStatsCard";
import CampaignTable from "@/app/components/CampaignTable";
import Image from "next/image";
import RewardTransaction from "@/app/components/RewardTransaction";
function page() {
     const [isOpen, setIsOpen] = useState(false); /**** MODAL ***/
     const [isOpen2, setIsOpen2] = useState(false); /**** MODAL ***/
     const [name, setName] = useState(''); // input Field
     const [date1, setdate1] = useState(''); // input Field
     const [date2, setdate2] = useState(''); // input Field
     const [rewardType, setRewardType] = useState<"percentage" | "fixed">("percentage")

     const CashbackIcon = () => (
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
               <path d="M6.6665 11.668C9.42793 11.668 11.6665 9.42939 11.6665 6.66797C11.6665 3.90654 9.42793 1.66797 6.6665 1.66797C3.90508 1.66797 1.6665 3.90654 1.6665 6.66797C1.6665 9.42939 3.90508 11.668 6.6665 11.668Z" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M15.075 8.64062C15.8628 8.93432 16.5638 9.4219 17.1132 10.0583C17.6625 10.6947 18.0426 11.4593 18.2182 12.2815C18.3937 13.1037 18.3591 13.9569 18.1176 14.7622C17.876 15.5674 17.4353 16.2988 16.8362 16.8886C16.2371 17.4785 15.499 17.9077 14.69 18.1366C13.8811 18.3656 13.0275 18.3869 12.2081 18.1985C11.3888 18.0101 10.6301 17.6182 10.0024 17.059C9.37465 16.4997 8.89806 15.7912 8.6167 14.999" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M5.8335 5H6.66683V8.33333" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M13.9249 11.5664L14.5082 12.1581L12.1582 14.5081" stroke="#0D8CFF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
     );

     const users = [
          {
               name: "Sarah Chen",
               role: "Finance Manager",
               time: "Now",
               value: 47,
               status: "online",
          },
          {
               name: "Ahmed Hassan",
               role: "Security Lead",
               time: "2m ago",
               value: 32,
               status: "away",
          },
          {
               name: "Maria Rodriguez",
               role: "System Admin",
               time: "15m ago",
               value: 28,
               status: "online",
          },
          {
               name: "James Wilson",
               role: "Compliance Officer",
               time: "5m ago",
               value: 19,
               status: "offline",
          },
          {
               name: "Priya Sharma",
               role: "Operations",
               time: "1h ago",
               value: 12,
               status: "online",
          },
     ];

     return (
          <div>
               <div className="bg-[url(/images/body-bg.png)] bg-cover p-4 bg-no-repeat xl:-mt-11.25 -mt-8.75 xl:-m-8 -m-4 font-inter">
                    <TopBar></TopBar>
                    <div>
                         <div className="flex mb-6 itesm-center flex-wrap gap-4 justify-between">
                              <div className="flex items-start gap-3">
                                   <div className="flex items-center justify-center bg-blue-2800/10 rounded-lg w-11 h-11">
                                        <Gift className="w-5 h-5 text-blue-2800" />
                                   </div>
                                   <div>
                                        <h1 className="text-[22px] font-bold leading-7 text-black-2000">
                                             Cashback & Rewards
                                        </h1>
                                        <p className="text-xs leading-4 font-normal text-gray-6400">
                                             Manage Rewards, Cashback, Permotion
                                        </p>
                                   </div>
                              </div>
                              <Link onClick={() => setIsOpen(true)} href={'#'} className='inline-flex items-center justify-center gap-2 text-white font-inter font-normal text-sm leading-5  rounded-md bg-blue-1000 h-10 px-4 hover:bg-yellow2000/90 transition-all duration-500 ease-in-out'>
                                   <Gift className="w-5 h-5 text-white" />
                                   Manual Credit
                              </Link>
                         </div>
                         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                              <CashbackStatsCard
                                   title="Total Cashback Paid"
                                   value="€47,892.50"
                                   subtitle="+12.3%"
                                   subtitleColor="text-lightgreen17"
                                   icon={<CashbackIcon />}
                                   iconBg="bg-blue-1700/20 text-blue-1700"
                              />

                              <CashbackStatsCard
                                   title="Pending Approvals"
                                   value="34"
                                   subtitleColor="text-blue-1000"
                                   subtitle="5 urgent"
                                   icon={<Clock size={18} />}
                                   iconBg="bg-blue-1700/10 text-blue-1700"
                              />

                              <CashbackStatsCard
                                   title="Active Campaigns"
                                   value="12"
                                   subtitleColor="text-gray-1200"
                                   subtitle="3 ending soon"
                                   icon={<Megaphone size={18} />}
                                   iconBg="bg-gray-7400/10 text-gray-7400"
                              />

                              <CashbackStatsCard
                                   title="Referrals Converted"
                                   value="1,248"
                                   subtitleColor="text-lightgreen17"
                                   subtitle="+8.7%"
                                   icon={<Users size={18} />}
                                   iconBg="bg-lightgreen17/10 text-lightgreen17"
                              />
                         </div>
                         <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                              <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
                                   <div className="flex py-7 px-5 items-center justify-between">
                                        <div className="flex items-center gap-2">
                                             <div className="flex items-center justify-center bg-blue-1700/20 rounded-lg w-7 h-7">
                                                  <img src="/images/mic-icon.svg" alt="" />
                                             </div>
                                             <h6 className="text-lg font-bold text-blue-2900">Reward Campaigns</h6>
                                        </div>
                                        <Link onClick={() => setIsOpen2(true)} href={'#'} className='inline-flex items-center justify-center gap-2 text-white font-inter font-normal text-sm leading-5  rounded-md bg-blue-1000 h-10 px-4 hover:bg-gray-3600 transition-all duration-500 ease-in-out'>
                                             New Campaign
                                        </Link>
                                   </div>
                                   <CampaignTable></CampaignTable>
                              </div>
                              <div className="border border-gray-7100/50 mt-6 bg-white rounded-lg">
                                   <div className="flex py-7 px-5 items-center justify-between">
                                        <div className="flex items-center gap-2">
                                             <div className="flex items-center justify-center bg-gray-7400/10 rounded-lg w-7 h-7">
                                                  <img src="/images/transaction-slip.svg" alt="" />
                                             </div>
                                             <h6 className="text-lg font-bold text-blue-2900">Reward Transactions</h6>
                                        </div>
                                        <div className="relative max-w-48 w-full">
                                             <input type="text" className='text-sm font-normal text-gray-1200 placeholder:text-gray-1200 px-4 pl-10 h-10 bg-gray-1600 border border-gray-1000 rounded-md w-full outline-0' placeholder='Search...' />
                                             <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                                  <Image
                                                       src="../images/search-icon.svg"
                                                       width='16'
                                                       height='16'
                                                       alt=""
                                                  />
                                             </div>
                                        </div>
                                   </div>
                                   <RewardTransaction></RewardTransaction>
                              </div>
                         </div>
                    </div>
               </div>

               {/****** Activity Log Modal *******/}
               <Modal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    panelClassName="max-w-[480px]  border-gray-3100! rounded-[10px]! bg-gray-1500! relative"
               >
                    <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-full opacity-70 w-4 h-4 absolute top-4 right-4">
                         <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
                    </Link>
                    <div className='flex items-center gap-3 border-b border-solid border-gray-3100 bg-linear-to-r from-green63/5 to-green63/0 px-6 pt-6 pb-4'>
                         <span className="flex items-center justify-center bg-blue-1700/20 rounded-[10px] w-10 h-10">
                              <Image
                                   src="/icons/Reward-icon.svg"
                                   alt="avatar"
                                   width={20}
                                   height={20}
                              />
                         </span>
                         <div className="">
                              <h4 className="text-blue-1300 font-bold tracking-[-0.45px] text-lg leading-7">Manual Reward Credit</h4>
                              <p className="text-gray-5000 font-normal text-sm leading-5">Credit a student account with cashback or points</p>
                         </div>
                    </div>
                    <div className="px-6 py-5">
                         <div className=''>
                              <label className='text-blue-1300 flex items-center gap-2 mb-2 font-normal text-sm leading-5'>
                                   <Image
                                        src="/images/user-icon2.svg"
                                        alt=""
                                        width={14}
                                        height={14}
                                   />
                                   Student
                              </label>
                              <CustomSelect
                                   className='shadow-57xl text-gray-5000'
                                   options={[
                                        { label: 'Search by name, email or ID...', value: 'Search by name, email or ID...' },
                                        { label: '2000', value: '2000' }
                                   ]}
                              />
                         </div>
                         <div className="grid grid-cols-2 gap-4 mt-5">
                              <div className=''>
                                   <label className='text-blue-1300 flex items-center gap-2 mb-2 font-normal text-sm leading-5'>
                                        Reward Type
                                   </label>
                                   <CustomSelect
                                        className='text-gray-5000'
                                        options={[
                                             { label: 'Select type', value: 'Select type' },
                                             { label: '2000', value: '2000' }
                                        ]}
                                   />
                              </div>
                              <div className=''>
                                   <label className='text-blue-1300 block mb-1.5 font-normal text-[13.5px] leading-5'>Amount</label>
                                   <InputField
                                        ClassName="bg-gray-1500 text-gray-3800 rounded-md! h-10!"
                                        type="name"
                                        placeholder="0.00"
                                        value={name}
                                        iconSrc="/icons/euro-icon.jpg"
                                        onChange={(e: any) => setName(e.target.value)}
                                   />
                              </div>
                         </div>
                         <div className='mt-5'>
                              <label className='text-blue-1300 flex items-center gap-2 mb-2 font-normal text-sm leading-5'>
                                   Reason
                              </label>
                              <CustomSelect
                                   className='text-gray-5000'
                                   options={[
                                        { label: 'Select a reason for this credit...', value: 'Select a reason for this credit...' },
                                        { label: '2000', value: '2000' }
                                   ]}
                              />
                         </div>
                         <div className="mt-5 flex items-center gap-2 border border-solid border-gray-3100/50 rounded-[10px] bg-gray-7800/30 py-2.5 px-3">
                              <Image
                                   src="/images/shield-dark.svg"
                                   alt="avatar"
                                   width={16}
                                   height={16}
                              />
                              <p className=" text-gray-5000 text-xs leading-4 font-normal">This action will be logged under <span className="text-black-1600 font-bold text-[10.96px]"> Admin ID:</span> </p>
                         </div>
                    </div>

                    <div className="px-5 py-4 flex items-center justify-between bg-gray-7900/30 border-t border-solid border-gray-3100">
                         <button className="inline-flex items-center px-4 hover:bg-green-4200 hover:text-white h-10 text-gray-5000 text-sm leading-5 rounded-lg">
                              Reset
                         </button>
                         <ul className="flex items-center gap-3">
                              <li>
                                   <button className="w-20 bg-white h-10 text-black-1600 text-sm leading-5 border border-solid border-gray-3100 rounded-lg hover:bg-green67  hover:text-white">
                                        Cancel
                                   </button>
                              </li>
                              <li>
                                   <button className="inline-flex items-center px-6 bg-blue-1000 h-10 text-white text-sm leading-5 rounded-lg hover:bg-green67 hover:text-white opacity-50">
                                        Confirm Credit
                                   </button>
                              </li>
                         </ul>

                    </div>
               </Modal>

               {/****** Creatr Reward Modal *******/}
               <Modal
                    isOpen={isOpen2}
                    onClose={() => setIsOpen2(false)}
                    panelClassName="max-w-[1152px]  border-gray-3100! rounded-[10px]! bg-white h-full overflow-y-auto relative"
               >
                    <Link onClick={() => setIsOpen(false)} href={"#"} className="flex items-center justify-center rounded-full opacity-70 w-4 h-4 absolute top-4 right-4">
                         <Image src="/images/cross-gray.svg" width={16} height={16} alt="" />
                    </Link>
                    <div className="sm:p-6 p-4">
                         <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg bg-blue-1700/20 flex items-center justify-center">
                                   <Image src="/images/reward-star.svg" width={24} height={24} alt="" />
                              </div>
                              <div>
                                   <h1 className="text-black-1600 font-bold sm:text-2xl text-lg leading-8">Create Rewards Campaign</h1>
                                   <p className="text-gray-5000 text-sm leading-5 font-normal">Set up a new reward campaign for students</p>
                              </div>
                         </div>

                         <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-8">
                              <div className="lg:col-span-2 col-span-1 space-y-6">
                                   <div className="border border-solid border-gray-3100 rounded-[10px] p-6">
                                        <div>
                                             <h2 className="text-black-1600 font-bold text-lg leading-7 mb-1 tracking-[-0.45px] flex items-center gap-2"> <Image src="/images/Campaign-icon.svg" width={16} height={16} alt="" />Campaign Basics</h2>
                                             <p className="text-gray-5000 text-sm leading-5 font-normal">Define the core details of your campaign</p>
                                        </div>
                                        <div>
                                             <div className="mt-4">
                                                  <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Campaign Name</label>
                                                  <input className="w-full border border-solid border-gray-3100 bg-gray-1500/50! rounded-lg px-3 h-10 text-sm font-normal text-gray-5000 placeholder:text-gray-5000 leading-4"
                                                       placeholder="e.g., Christmas 5% Cashback on Rent"
                                                  />
                                             </div>

                                             <div className="mt-4">
                                                  <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Description</label>
                                                  <textarea
                                                       className="w-full border border-solid border-gray-3100 bg-gray-1500/50! rounded-lg px-3 py-2.5 h-25 text-sm font-normal text-gray-5000 placeholder:text-gray-5000 leading-4"
                                                       placeholder="Describe the campaign benefits and terms..."
                                                  />
                                             </div>
                                             <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5.5">
                                                  <div>
                                                       <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Start Date</label>
                                                       <InputField
                                                            ClassName="bg-gray-1500/50! text-gray-5000 placeholder:text-gray-5000 rounded-lg! h-10!"
                                                            type="name"
                                                            placeholder="Pick a date"
                                                            value={date1}
                                                            iconSrc="../icons/date-icon2.svg"
                                                            onChange={(e: any) => setdate1(e.target.value)}
                                                       />
                                                  </div>

                                                  <div>
                                                       <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">End Date</label>
                                                       <InputField
                                                            ClassName="bg-gray-1500/50! text-gray-5000 placeholder:text-gray-5000 rounded-lg! h-10!"
                                                            type="name"
                                                            placeholder="Pick a date"
                                                            value={date2}
                                                            iconSrc="../icons/date-icon2.svg"
                                                            onChange={(e: any) => setdate2(e.target.value)}
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   <div className="border border-solid border-gray-3100 rounded-[10px] p-6">
                                        <div>
                                             <h2 className="text-black-1600 font-bold text-lg leading-7 mb-1 tracking-[-0.45px] flex items-center gap-2"> <Image src="/images/user-blue.svg" width={16} height={16} alt="" />Eligibility Rules</h2>
                                             <p className="text-gray-5000 text-sm leading-5 font-normal">Define who can participate in this campaign</p>
                                        </div>
                                        <div className="mt-4">
                                             <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Target Category</label>
                                             <CustomSelect
                                                  className='border-gray-3100! bg-gray-1500/50!'
                                                  options={[
                                                       { label: 'Select target audience', value: 'Select target audience' },
                                                       { label: '2000', value: '2000' }
                                                  ]}
                                             />
                                        </div>
                                        <div className="mt-4">
                                             <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Start Date</label>
                                             <InputField
                                                  ClassName="bg-gray-1500/50! text-gray-5000 placeholder:text-gray-5000 rounded-lg! h-10!"
                                                  type="name"
                                                  placeholder="e.g., TU Berlin Partnership, Semester Deal"
                                                  value={date1}
                                                  iconSrc="/images/building-icon4.svg"
                                                  onChange={(e: any) => setdate1(e.target.value)}
                                             />
                                        </div>
                                   </div>
                                   <div className="border border-solid border-gray-3100 rounded-[10px] p-6">
                                        <div>
                                             <h2 className="text-black-1600 font-bold text-lg leading-7 mb-1 tracking-[-0.45px] flex items-center gap-2"> <Image src="/icons/gift-icon.svg" width={16} height={16} alt="" />Reward Logic</h2>
                                             <p className="text-gray-5000 text-sm leading-5 font-normal">Configure the reward structure and triggers</p>
                                        </div>
                                        <div className="mt-4">
                                             <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Reward Type</label>
                                             <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                                  <button
                                                       onClick={() => setRewardType("percentage")}
                                                       className={`flex items-center justify-center gap-2 rounded-[10px] h-14 text-black-1600 font-normal text-sm leading-3.5 border ${rewardType === "percentage"
                                                            ? "border-blue-1000 bg-blue-1700/20"
                                                            : "border-gray-7900 bg-gray-1500/50"
                                                            }`}
                                                  >
                                                       <Image
                                                            src="/icons/Percentage.svg"
                                                            width="20"
                                                            height="20"
                                                            alt=""
                                                       />
                                                       Percentage
                                                  </button>

                                                  <button
                                                       onClick={() => setRewardType("fixed")}
                                                       className={`flex items-center justify-center gap-2 rounded-[10px] h-14 text-black-1600 font-normal text-sm leading-3.5 border ${rewardType === "fixed"
                                                            ? "border-blue-1000 bg-blue-1700/20"
                                                            : "border-gray-7900 bg-gray-1500/50"
                                                            }`}
                                                  >
                                                       <Image
                                                            src="/icons/amount-icon.svg"
                                                            width="20"
                                                            height="20"
                                                            alt=""
                                                       />
                                                       Fixed Amount
                                                  </button>
                                             </div>
                                        </div>
                                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5.5">
                                             <div>
                                                  <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Percentage (%)</label>
                                                  <InputField
                                                       ClassName="bg-gray-1500/50! text-gray-5000 placeholder:text-gray-5000 rounded-lg! h-10!"
                                                       type="name"
                                                       placeholder="5"
                                                       value={date1}
                                                       iconSrc="../icons/Percentage-gary.svg"
                                                       onChange={(e: any) => setdate1(e.target.value)}
                                                  />
                                             </div>

                                             <div>
                                                  <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Max Cap per User (EUR)</label>
                                                  <InputField
                                                       ClassName="bg-gray-1500/50! text-gray-5000 placeholder:text-gray-5000 rounded-lg! h-10!"
                                                       type="name"
                                                       placeholder="50.00"
                                                       value={date2}
                                                       iconSrc="../icons/amount-gray.svg"
                                                       onChange={(e: any) => setdate2(e.target.value)}
                                                  />
                                             </div>
                                        </div>
                                        <div className="mt-6">
                                             <label className="text-black-1600 mb-3 text-sm font-normal leading-4 block">Trigger Event</label>
                                             <div className="relative">
                                                  <CustomSelect
                                                       className='border-gray-3100! bg-gray-1500/50! text-center sm:text-sm text-[10px]'
                                                       options={[
                                                            { label: 'When should the reward be triggered?', value: 'When should the reward be triggered?' },
                                                            { label: '2000', value: '2000' }
                                                       ]}
                                                  />
                                                  <span className="flex items-center justify-center w-4 h-5 absolute top-1/2 -translate-y-1/2 left-3"> <Image src="/images/clock-gray.svg" width={16} height={16} alt="" /></span>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                                        <button className="flex items-center justify-center cursor-pointer text-black-1600 text-sm leading-5 h-10 rounded-lg font-normal bg-gray-1500 border border-solid border-gray-3100 hover:bg-green67 hover:border-green67 hover:text-white">
                                             Save as Draft
                                        </button>

                                        <button className="flex items-center justify-center cursor-pointer text-white text-sm leading-5 gap-2 h-10 rounded-lg font-normal bg-blue-1000 border border-solid border-blue-1000 hover:bg-green67 hover:border-green67 hover:text-white">
                                             <Image src="/images/Launch-icon.svg" width={16} height={16} alt="" />
                                             Launch Campaign
                                        </button>
                                   </div>
                              </div>

                              <div className="space-y-6">
                                   <div className="border border-solid border-gray-3100 rounded-[10px] p-6">
                                        <div>
                                             <h2 className="text-black-1600 font-bold text-lg leading-7 mb-1 tracking-[-0.45px] flex items-center gap-2"> <Image src="/images/eyes-blue.svg" width={16} height={16} alt="" />Student App Preview</h2>
                                             <p className="text-gray-5000 text-sm leading-5 font-normal">How students will see this offer</p>
                                        </div>

                                        <div className="bg-gray-7900/30 mt-4 border border-solid border-gray-3100/50 rounded-2xl py-4 px-2">
                                             <div className="preview-box rounded-xl p-4">
                                                  <span className="text-blue-1000 mb-3 rounded-full bg-blue-1000/20 border border-solid border-blue-1000/10 text-sm leading-4 font-bold inline-flex items-center h-5.5 px-2.5">
                                                       New Offer
                                                  </span>

                                                  <h3 className="ttext-black-1600 text-lg leading-7 font-bold">Campaign Name</h3>
                                                  <p className="text-gray-5000 text-sm leading-5 font-normal mt-1">Add a description to see how it lookshere...</p>

                                                  <p className="text-xl leading-7 font-bold text-blue-1000 mt-5">0% <span className="text-sm  leading-5 font-normal text-gray-5000">Cashback</span> </p>

                                                  <button className="w-full bg-blue-600 text-white text-sm leading-5 font-normal h-9 mt-3 rounded-lg flex items-center justify-center">
                                                       View Details
                                                  </button>
                                             </div>
                                        </div>

                                        <p className="text-gray-5000 text-xs leading-4 text-center mt-4">
                                             This is how the campaign will appear in the StudPay Student App
                                        </p>
                                   </div>

                                   <div className="border border-solid border-gray-3100 rounded-[10px] p-6">
                                        <h3 className="text-black-1600 mb-3 text-sm leading-5 font-normal">Campaign Summary</h3>

                                        <div className="space-y-2">
                                             <div className="flex justify-between">
                                                  <span className="text-gray-5000 text-sm leading-5 font-normal">Duration</span>
                                                  <span className="text-black-1600 text-sm leading-5 font-normal">--</span>
                                             </div>

                                              <div className="flex justify-between">
                                                  <span className="text-gray-5000 text-sm leading-5 font-normal">Reward Type</span>
                                                  <span className="text-black-1600 text-sm leading-5 font-normal">percentage</span>
                                             </div>

                                              <div className="flex justify-between">
                                                  <span className="text-gray-5000 text-sm leading-5 font-normal">Target</span>
                                                  <span className="text-black-1600 text-sm leading-5 font-normal">--</span>
                                             </div>
                                        </div>
                                   </div>

                              </div>
                         </div>



                    </div>
               </Modal>
          </div>
     )
}

export default page
