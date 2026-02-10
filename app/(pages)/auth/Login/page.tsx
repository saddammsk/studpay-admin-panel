import React from 'react'

const LoginPage = () => {
  return (
    <div className='grid grid-cols-2 gap-5 font-inter bg-gray-1800'>
      <div className='bg-[url(/images/login-bg.png)] bg-cover bg-no-repeat p-12 h-screen flex flex-col justify-between'>
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
          <div className='flex items-center gap-3'>
            <div className='text-xs font-normal leading-4 text-white/80 py-1.5 px-3 rounded-full bg-white/10'>Multi-Factor Auth</div>
            <div className='text-xs font-normal leading-4 text-white/80 py-1.5 px-3 rounded-full bg-white/10'>Session Management</div>
            <div className='text-xs font-normal leading-4 text-white/80 py-1.5 px-3 rounded-full bg-white/10'>Encrypted Data</div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className='max-w-[448px] w-full mx-auto'>
          <h4 className='font-inter text-[30px] font-bold leading-9 mb-2 text-blue-1300'>Welcome Back</h4>
          <p className="text-base font-normal leading-6 text-gray-1900">Sign in to access your admin dashboard</p>
          <form action="" className='mt-8'>
            <div className='text-2xl'></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage