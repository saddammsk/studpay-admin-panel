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
          <div className='max-w-[448px] px-4 w-full mx-auto'>
            <h4 className='font-inter text-[30px] font-bold leading-9 mb-2 text-blue-1300'>Welcome Back</h4>
            <p className="text-base font-normal leading-6 text-gray-1900">Sign in to access your admin dashboard</p>
            <form action="" className='mt-8'>
              <div className='space-y-[27px]'>
                <InputField
                  label="Admin Email" ClassName='bg-white rounded-2xl! h-[59px] border-2'
                  type="text"
                  placeholder="admin@studpay.com"
                  iconSrc="/images/msg-icon.svg"
                />
                <InputField
                  label="Password" ClassName='bg-white rounded-2xl! h-[59px] border-2'
                  type="password"
                  placeholder="Enter your password"
                  iconSrc="/images/lock-icon.svg"
                  passwordToggleIconSrc={{
                    show: "/images/eye-icon.svg",
                    hide: "/images/eye-icon.svg",
                  }}
                />
              </div>
              <Link href="" className='text-sm font-normal leading-5 text-gray-1900 gap-3 flex items-center my-6 justify-center rounded-[16px] py-[14px] border-dotted border-2 border-gray-1000'><img src="/images/finger-print.svg" alt="" /> Use Biometric Authentication</Link>
              <div className='flex items-center justify-between mb-6'>
                <div className='flex items-center gap-2'>
                  <input
                    type="radio"
                    id="secure-session"
                    name="session"
                    className='appearance-none cursor-pointer w-4 h-4 rounded-full border border-blue-1400 checked:bg-blue-1400 checked:border-blue-1400'
                  />
                  <label htmlFor="secure-session" className='text-sm font-normal leading-5 text-gray-1900 block'>
                    Secure Session (24h)
                  </label>
                </div>

                <Link href="/" className="text-sm font-normal leading-5 text-blue-1400 block">Forgot Password?</Link>
              </div>
              <Button
                iconPosition="end"
                label="Sign In Securely"
                iconSrc="/images/right-arrow-white.svg"
                className="text-white w-full  justify-center bg-blue-1400 shadow-6xl"
              />
              <h6 className='text-sm font-normal leading-5 mt-8 text-center text-gray-1900'>Don't have an account? <Link href="/" className="text-blue-1400">Admin access is invite-only</Link></h6>
            </form>
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
    </div>
  )
}

export default LoginPage