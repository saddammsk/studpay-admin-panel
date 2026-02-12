import InputField from '@/app/components/InputField'
import Button from '@/app/components/ui/Button'
import Link from 'next/link'



const LoginPage = () => {


     return (
          <div className='h-screen overflow-auto scroll-hide pb-4'>
               <div className="flex md:min-h-[calc(100vh_-_40px)] min-h-[calc(100vh_-_80px)] items-center justify-center">
                    <div className='max-w-[448px] px-4 w-full mx-auto'>
                         <div className="text-center">
                              <img src="/images/logo-2.svg" className='inline-block' alt="" />
                              <p className="text-base font-normal leading-6 text-gray-1900">Admin Portal</p>
                         </div>
                         <div className='bg-white my-6 rounded-2xl shadow-7xl p-8'>
                              <ul className='flex items-center justify-center gap-2 mb-8'>
                                   <li className='bg-blue-1500 w-2 h-2 rounded-full block'></li>
                                   <li className='bg-gray-2000 w-8 h-0.5 rounded-full block'></li>
                                   <li className='bg-gray-2000 w-2 h-2 rounded-full block'></li>
                                   <li className='bg-gray-2000 w-8 h-0.5 rounded-full block'></li>
                                   <li className='bg-gray-2000 w-2 h-2 rounded-full block'></li>
                                   <li className='bg-gray-2000 w-8 h-0.5 rounded-full block'></li>
                                   <li className='bg-gray-2000 w-2 h-2 rounded-full block'></li>
                              </ul>

                              <form action="" className='mt-8'>
                                   <div className=''>
                                        <div className="text-center">
                                             <h4 className='text-xl font-medium leading-7 text-black-1300 mb-2'>Reset your password</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-1200">Enter your email address and we'll send you a verification
                                                  code</p>
                                        </div>
                                        <div className=' mb-5'>
                                             <InputField
                                                  label="Email address" ClassName='bg-white rounded-lg! h-12'
                                                  type="text"
                                                  placeholder="you@company.com"
                                                  iconSrc="/images/msg-icon.svg"
                                             />
                                        </div>
                                        <Button
                                             label="Send verification code"
                                             className="text-white w-full  justify-center bg-blue-1500"
                                        />
                                   </div>
                                   <div className='hidden'>
                                        <div className="text-center">
                                             <h4 className='text-xl font-medium leading-7 text-black-1300 mb-2'>Reset your password</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-1200">Enter your email address and we'll send you a verification
                                                  code</p>
                                        </div>
                                        <div className='mb-5'>
                                             <InputField
                                                  label="Verification Code" ClassName='bg-white rounded-lg! h-12'
                                                  type="text"
                                                  placeholder="6  7  8  9  6  4"
                                                  iconSrc="/images/msg-icon.svg"
                                             />
                                        </div>
                                        <Button
                                             label="Next"
                                             className="text-white w-full  justify-center bg-blue-1500"
                                        />
                                   </div>
                                   <div className='hidden'>
                                        <div className="text-center">
                                             <h4 className='text-xl font-medium leading-7 text-black-1300 mb-2'>Reset your password</h4>
                                             <p className="text-sm font-normal leading-5 text-gray-1200">Enter your email address and we'll send you a verification
                                                  code</p>
                                        </div>
                                        <div className='mb-5'>
                                             <InputField
                                                  label="New Password" ClassName='bg-white rounded-lg! h-12'
                                                  type="text"
                                                  placeholder="6  7  8  9  6  4"
                                                  iconSrc="/images/msg-icon.svg"
                                             />
                                        </div>
                                        <div className='mb-5'>
                                             <InputField
                                                  label="Confirm Password" ClassName='bg-white rounded-lg! h-12'
                                                  type="text"
                                                  placeholder="usman@@xxx"
                                                  iconSrc="/images/msg-icon.svg"
                                             />
                                        </div>
                                        <Button
                                             label="Next"
                                             className="text-white w-full  justify-center bg-blue-1500"
                                        />
                                   </div>
                                   <div className='hidden'>
                                        <div className="text-center">
                                             <img src="/images/star-img.svg" className='mb-7 inline-block' alt="" />
                                             <h4 className='text-[30px] font-medium leading-9 text-blue-1300 mb-7'>You're all set!</h4>
                                             <p className='text-sm font-normal mb-7 leading-6 text-gray-1900'>Your Password is Change. Start managing your properties with ease.</p>
                                        </div>
                                        <Button
                                             label="Go to Login"
                                             className="text-white w-full  justify-center bg-blue-1000"
                                        />
                                   </div>
                                   <Link href="" className='text-sm font-normal leading-5 mt-6 text-center text-gray-1900 flex items-center justify-center gap-2'><img src="/images/left-arrow4.svg" alt="" /> Back to sign in </Link>
                              </form>
                         </div>
                         <div className='bg-white rounded-lg flex items-center mb-6 justify-center py-[15px] gap-3 text-xs font-normal leading-5 text-gray-1200'>
                              <img src="/images/shield-blue.svg" alt="" />Your connection is secured with 256-bit SSL encryption.
                         </div>
                         <h6 className='text-sm font-normal leading-5 mt-8 text-center text-gray-1900'>Need help? <Link href="/" className="text-blue-1400">Contact support</Link></h6>
                    </div>
               </div>
               <div className='flex items-center flex-wrap justify-center xl:gap-[52px] gap-4'>
                    <div className='flex items-center gap-1.5'>
                         <img src="/images/globe-icon2.svg" alt="" />
                         <h6 className='text-xs font-normal leading-4 text-gray-1900'>Your IP (192.168.1.45) is being logged for security purposes</h6>
                    </div>
                    <div className='flex items-center gap-1.5'>
                         <img src="/images/sheild-block.svg" alt="" />
                         <h6 className='text-xs font-normal leading-4 text-gray-1900'>256-bit SSL Encrypted</h6>
                    </div>
               </div>
          </div>
     )
}

export default LoginPage