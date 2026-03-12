import FactorRow from '@/app/components/UsersStudent/Kyc/FactorRow';
import Image from "next/image";
const RiskScoringCard = () => {
      return (
            <>
                  <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 font-bold text-sm leading-5 text-blue-1300">
                              <div className="w-5 h-5 flex items-center justify-center">
                                    <Image
                                          src="/icons/engine.svg"
                                          width="16"
                                          height="16"
                                          alt=""
                                    />
                              </div>
                              <span>Risk Scoring Engine</span>
                        </div>
                        <span className="px-2.5 h-5.5 inline-flex items-center justify-center text-xs leading-4 uppercase rounded-full bg-orange-100 text-yellow-1100 border border-solid border-yellow-1100/20 font-semibold">
                              MEDIUM RISK
                        </span>
                  </div>
                  <div className="">
                        <div className="relative h-3 bg-linear-to-r from-green53 from-0% via-yellow-1100 via-50% to-red-1300 to-100% w-full rounded-full overflow-hidden flex">
                              <div className="absolute left-[58%] -top-1 h-5 w-1 bg-black" />
                        </div>

                        <div className="flex justify-between mt-1.5 text-[10px] font-normal text-gray-1900">
                              <span className='flex items-center'>LOW</span>
                              <span className='flex items-center'>MEDIUM</span>
                              <span className='flex items-center'>HIGH</span>
                        </div>
                  </div>
                  <div className="text-center space-y-1 mt-6 border-b border-solid border-gray-3600 pb-4">
                        <div className="text-[36px] leading-10 font-bold text-yellow-1100">
                              58<span className="text-sm leading-5 text-gray-1900 font-normal">/100</span>
                        </div>
                        <p className="text-gray-1900 text-xs leading-4 font-normal">Composite Risk Score</p>
                  </div>
                  <div className="pt-4">
                        <p className="text-xs leading-4 tracking-[0.3px] uppercase text-gray-1900 font-normal">
                              CONTRIBUTING FACTORS
                        </p>

                        <div className="mt-2">
                              <FactorRow label="Country Risk" value="Nigeria" color="bg-yellow-1100" icon="/icons/location-icon.svg" />
                              <FactorRow label="Profession Risk" value="Tech" color="bg-green53" icon="/icons/bag-icon.svg" />
                              <FactorRow label="Transaction Volume" value="₦2.4M/mo" color="bg-yellow-1100" icon="/icons/price-Volume.svg" />
                              <FactorRow label="Account Age" value="12 days" color="bg-red-1300" icon="/icons/account-arrow.svg" />
                        </div>
                  </div>
            </>
      )
}

export default RiskScoringCard