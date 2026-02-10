import InputField from '@/app/components/InputField'
import Button from '@/app/components/ui/Button'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div className='grid md:grid-cols-2 gap-5 font-inter h-screen flex items-center justify-center bg-gray-1800'>
      <div className='bg-[url(/images/login-bg.png)]  hidden bg-cover bg-no-repeat lg:p-12 p-4 h-screen md:flex flex-col justify-between'>
        <div className='flex items-center gap-3'>
          <div className='bg-white/10 w-12 h-12 rounded-2xl flex items-center justify-center'>
            <img src="/images/shield-icon3.svg" alt="" /></div>
          <div>
            <h6 className='font-inter text-2xl font-bold leading-8 text-white'>StudPay</h6>
            <span className='block text-sm font-normal leading-5 text-white/60'>Admin Panel</span>
          </div>
        </div>
        <div className="text-center">
          <img src="/images/login-img.svg" className='inline-block' alt="" />
        </div>
        <div>
          <h6 className='text-white/80 text-sm font-inter leading-5 mb-4'>Enterprise-Grade Security</h6>
          <div className='flex items-center flex-wrap gap-3'>
            <div className='text-xs font-normal leading-4 text-white/80 py-1.5 px-3 rounded-full bg-white/10'>Multi-Factor Auth</div>
            <div className='text-xs font-normal leading-4 text-white/80 py-1.5 px-3 rounded-full bg-white/10'>Session Management</div>
            <div className='text-xs font-normal leading-4 text-white/80 py-1.5 px-3 rounded-full bg-white/10'>Encrypted Data</div>
          </div>
        </div>
      </div>
      <div className='h-screen overflow-auto scroll-hide pb-4'>
        <div className="flex md:min-h-[calc(100vh_-_40px)] min-h-[calc(100vh_-_80px)] items-center justify-center">
          <div className='max-w-[556px] px-4 w-full mx-auto'>
            <div className='bg-white my-6 rounded-2xl shadow-7xl md:p-8 p-4'>
              <div className='w-14 h-14 rounded-2xl mx-auto flex items-center justify-center bg-gray-2100'>
                <img src="/images/shield-icon4.svg" alt="" />
              </div>
              <form action="" className='mt-4'>
                <div className=''>
                  <div className="text-center">
                    <h4 className='text-2xl font-bold leading-8 text-black-1400 mb-2'>Welcome to the Team, <span className='text-gradient'>Sarah Ahmed</span>!</h4>
                    <p className="text-sm font-normal leading-5 text-gray-1200">Let's set up your secure account
                    </p>
                  </div>
                  <div className='mt-8 space-y-5'>
                    <div>
                      <label htmlFor="secure-session" className='text-xs mb-1.5 font-normal leading-4 text-gray-2300 block'>
                        Assigned Role
                      </label>
                      <div className='flex items-center justify-between bg-blue-1700/20 rounded-xl py-[14px] px-4'>
                        <div className='flex items-center gap-2.5 text-sm font-bold leading-5 text-blue-1600'>
                          <img src="/images/user-tick.svg" alt="" />
                          Finance Manager
                        </div>
                        <div className='text-[10px] font-normal leading-[15px] text-gray-2300 px-2 py-0.5 bg-white rounded-full'>Set by Super Admin</div>
                      </div>
                    </div>
                    <InputField
                      label="Set Secure Password" ClassName='bg-gray-2100 rounded-lg! h-11'
                      type="password"
                      placeholder="Minimum 12 characters"
                      passwordToggleIconSrc={{
                        show: "/images/eye-icon.svg",
                        hide: "/images/eye-icon.svg",
                      }}
                    />
                    <InputField
                      label="Confirm Password" ClassName='bg-gray-2100 rounded-lg! h-11'
                      type="password"
                      placeholder="Re-enter your password"
                      passwordToggleIconSrc={{
                        show: "/images/eye-icon.svg",
                        hide: "/images/eye-icon.svg",
                      }}
                    />
                    <InputField
                      label="Phone Number (for 2FA setup)" ClassName='bg-gray-2100 rounded-lg! h-11'
                      type="text"
                      placeholder="+92 300 1234567"
                      iconSrc='/images/phone-icon3.svg'
                    />
                  </div>
                  <div className='flex items-center gap-2 my-6'>
                    <input
                      type="radio"
                      id="secure-session"
                      name="session"
                      className='appearance-none cursor-pointer w-4 h-4 rounded-full bg-gray-2100 border border-gray-2200 checked:bg-blue-1400 checked:border-blue-1400'
                    />
                    <label htmlFor="secure-session" className='text-sm font-normal leading-5 text-gray-1900 block'>
                      I agree to the <Link href="/" className='text-blue-1600 underline'>internal data privacy</Link> and <Link href="/" className='text-blue-1600 underline'> audit policies</Link>
                    </label>
                  </div>
                  <div className='text-gray-2300 text-sm font-bold leading-5 flex items-center justify-center py-[14px] gap-2 bg-gray-2100 rounded-xl'><img src="/images/shield-icon5.svg" alt="" /> Activate Account & Login</div>
                  <p className='text-xs font-normal mt-6 text-center leading-4 txt-gray-2300'>This invitation link is unique to you and expires in 24 hours.</p>
                </div>
              </form>
            </div></div>
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
    </div>
  )
}

export default LoginPage