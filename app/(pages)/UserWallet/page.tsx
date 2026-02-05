import Image from "next/image";
import Link from "next/link"
import UserWalletTable from "@/app/components/UserWalletTable"


const UserWalletsPage = () => {
      return (
            <div>
                  <div className="">
                        <form className="flex md:flex-row flex-col items-center gap-4">
                              <div className="relative flex-1 w-full">
                                    <input type="text" className='text-sm font-normal font-neulis-sans text-gray-1400 placeholder:text-gray-1400 px-4 pl-10 h-10 bg-white border border-gray1600 rounded-md w-full outline-0' placeholder='Search students, transactions...' />
                                    <div className='absolute top-1/2 -translate-y-1/2 left-3'>
                                          <Image
                                                src="../images/search-icon.svg"
                                                width='16'
                                                height='16'
                                                alt=""
                                          />
                                    </div>
                              </div>
                              <div className="flex items-center gap-4 sm:w-auto w-full md:flex-none flex-1">
                                    <div className="relative xl:w-45 md:w-34 w-full">
                                          <span className="flex items-center w-4 h-4 absolute top-1/2 -translate-y-1/2 left-3">
                                                <Image
                                                      src="../images/filter.svg"
                                                      width='16'
                                                      height='16'
                                                      alt=""
                                                />
                                          </span>
                                          <select className='appearance-none text-center text-sm font-normal leading-5 font-neulis-sans text-black13 px-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0'>
                                                <option>All Types</option>
                                          </select>
                                          <div className='w-4 h-4 opacity-50 flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-3'>
                                                <Image
                                                      src="../images/down-arrow.svg"
                                                      width='10'
                                                      height='10'
                                                      alt=""
                                                />
                                          </div>
                                    </div>
                              </div>
                        </form>
                  </div>
                  <div className="mt-6.25">
                        <UserWalletTable />
                  </div>
            </div>
      )
}

export default UserWalletsPage