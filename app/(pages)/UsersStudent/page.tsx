import Image from "next/image";
import Link from "next/link"
import UserStudentTable from "@/app/components/UserStudentTable"


const UsersStudentsPage = () => {
      return (
            <div>
                  <div>
                        <h4 className="text-black12 font-bold md:text-[30px] text-2xl leading-9 mb-2">User Management</h4>
                        <p className="text-gray-1100 font-normal md:text-base text-sm leading-6">Manage student accounts and their verification status</p>
                  </div>
                  <div className="bg-white mt-6 md:p-6.25 p-4 rounded-xl border border-solid border-gray-1600 shadow-4xl">
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
                              <div className="flex sm:flex-row flex-col items-center gap-4 md:w-auto w-full">
                                    <div className="flex items-center gap-4 sm:w-auto w-full md:flex-none flex-1">
                                          <div className="relative xl:w-48 md:w-34 w-full">
                                                <select className='appearance-none text-sm font-normal leading-5 font-neulis-sans text-black13 xl:pr-11 pr-8 pl-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0'>
                                                      <option>All Countries</option>
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
                                          <div className="relative xl:w-48 md:w-34 w-full">
                                                <select className='appearance-none text-sm font-normal leading-5 font-neulis-sans text-black13 xl:pr-11 pr-8 pl-4 h-10 bg-white border border-gray1600 rounded-md w-full outline-0'>
                                                      <option>All Status</option>
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
                                    <Link href={"#"} className="sm:w-auto w-full inline-flex items-center justify-center px-4.25 text-black13 font-medium text-sm leading-5 gap-2 border border-gray1600 rounded-md h-10">
                                          <Image
                                                src="../images/filter.svg"
                                                width='16'
                                                height='16'
                                                alt=""
                                          />
                                          Clear
                                    </Link>
                              </div>
                        </form>
                  </div>
                  <div className="mt-6.25">
                        <UserStudentTable />
                  </div>
            </div>
      )
}

export default UsersStudentsPage