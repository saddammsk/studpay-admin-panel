"use client";
import { useState } from "react";
import ColorSelect from '@/app/components/ColorSelect';
import ColorPicker from '@/app/components/ColorPicker';
import InputField from '@/app/components/InputField';
import Button from '@/app/components/ui/Button';
import ToggleSwitch from '@/app/components/ui/ToggleSwitch';
import NotificationTable from "@/app/components/NotifactionTable";

export default function FinanceAnalytics() {

    const [switch1, setSwitch1] = useState(false)
    const [switch2, setSwitch2] = useState(false)
    const [switch3, setSwitch3] = useState(false)
    const [switch4, setSwitch4] = useState(false)
    return (
        <div className="font-inter bg-gradient md:-m-8 -m-4 md:p-6 p-4">
            <div className='flex items-center gap-2'>
                <span className='w-1 h-4 bg-blue-1400 rounded-full'></span>
                <h6 className='text-sm font-normal leading-5 text-gray-3800'>Visual Identity & Branding</h6>
            </div>
            <div className='bg-white border my-6 border-gray-3100 shadow-11xl rounded-[12px] p-6'>
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center">
                        <img src="/images/building-icon3.svg" alt="" />
                    </div>
                    <div className="flex-1">
                        <h6 className="text-sm font-bold leading-5 text-black-2000">Brand Assets</h6>
                        <h6 className="text-sm font-normal leading-5 text-gray-3800">Upload your logo, favicon and app icon</h6>
                    </div>
                </div>
                <div className='max-w-[1054px] grid md:grid-cols-4 gap-4'>
                    <div className='border-2 border-dotted border-gray-3900 rounded-xl min-h-[251px] flex flex-col justify-center items-center flex-col gap-3'>
                        <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1600'>
                            <img src="/images/sun-icon.svg" alt="" />
                        </div>
                        <div>
                            <h6 className='text-sm font-normal text-black-2000'>Main Logo</h6>
                            <span className="text-xs font-normal leading-4 text-gray-3800">Light Mode</span>
                        </div>
                    </div>
                    <div className='border-2 border-dotted border-gray-3900 rounded-xl min-h-[251px] flex flex-col justify-center items-center flex-col gap-3'>
                        <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1600'>
                            <img src="/images/moon-icon.svg" alt="" />
                        </div>
                        <div>
                            <h6 className='text-sm font-normal text-black-2000'>Main Logo</h6>
                            <span className="text-xs font-normal leading-4 text-gray-3800">Dark Mode</span>
                        </div>
                    </div>
                    <div className='border-2 border-dotted border-gray-3900 rounded-xl min-h-[251px] flex flex-col justify-center items-center flex-col gap-3'>
                        <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1600'>
                            <img src="/images/globe-icon2.svg" alt="" />
                        </div>
                        <div>
                            <h6 className='text-sm font-normal text-black-2000'>Favicon</h6>
                            <span className="text-xs font-normal leading-4 text-gray-3800">32×32 px</span>
                        </div>
                    </div>
                    <div className='border-2 border-dotted border-gray-3900 rounded-xl min-h-[251px] flex flex-col justify-center items-center flex-col gap-3'>
                        <div className='w-12 h-12 rounded-xl flex items-center justify-center bg-gray-1600'>
                            <img src="/images/app-icon.svg" alt="" />
                        </div>
                        <div>
                            <h6 className='text-sm font-normal text-black-2000'>App Icon</h6>
                            <span className="text-xs font-normal leading-4 text-gray-3800">Push Notifications</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white border my-6 border-gray-3100 shadow-11xl rounded-[12px] p-6'>
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center">
                        <img src="/images/color-pattle.svg" alt="" />
                    </div>
                    <div className="flex-1">
                        <h6 className="text-sm font-bold leading-5 text-black-2000">Global Color Palette</h6>
                        <h6 className="text-sm font-normal leading-5 text-gray-3800">Set your primary brand color</h6>
                    </div>
                </div>
                <div className='flex items-center md:flex-nowrap flex-wrap gap-5'>
                    <div className='md:w-9/12 w-full'>
                        <ColorSelect></ColorSelect>
                        <div className='mt-4 w-full'>
                            <ColorPicker></ColorPicker>
                        </div>
                    </div>
                    <div className='md:w-3/12 w-full'>
                        <div className="text-center">
                            <div className='flex items-center gap-2'>
                                <img alt="" className='w-4 h-4' src="/images/app-icon.svg" />
                                <h6 className='text-xs font-normal leading-5 text-gray-3800'>Live Preview</h6>
                            </div>
                            <img src="/images/phone-img.png" className='inline-block -mb-14' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <span className='w-1 h-4 bg-blue-1400 rounded-full'></span>
                <h6 className='text-sm font-normal leading-5 text-gray-3800'>Personal Account & Security</h6>
            </div>
            <div className='bg-white border my-6 border-gray-3100 shadow-11xl rounded-[12px] p-6'>
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center">
                        <img src="/images/shield-blue.svg" className='w-5 h-5' alt="" />
                    </div>
                    <div className="flex-1">
                        <h6 className="text-sm font-bold leading-5 text-black-2000">My Security</h6>
                        <h6 className="text-sm font-normal leading-5 text-gray-3800">Manage your account security settings</h6>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className=''>
                        <h6 className='text-sm font-bold text-black-2000'>Change Password</h6>
                        <div className='space-y-4 mt-4'>
                            <InputField
                                label="Current Password"
                                type="password"
                                placeholder="Enter current password"
                                ClassName='rounded-[10px]! pl-3! bg-green-2100!'
                                passwordToggleIconSrc={{
                                    show: '/images/eye-icon.svg',
                                    hide: '/images/eye-icon.svg',
                                }}
                            />
                            <InputField
                                label="New Password"
                                type="password"
                                placeholder="Enter new password"
                                ClassName='rounded-[10px]! pl-3! bg-green-2100!'
                                passwordToggleIconSrc={{
                                    show: '/images/eye-icon.svg',
                                    hide: '/images/eye-icon.svg',
                                }}
                            />
                            <InputField
                                label="Confirm Password"
                                type="password"
                                placeholder="Confirm new password"
                                ClassName='rounded-[10px]! pl-3! bg-green-2100!'

                            />
                            <Button
                                label="Update Password"
                                className="text-white gap-4 px-4 w-full opacity-50 justify-center bg-blue-1500"
                            />
                        </div>
                    </div>
                    <div className=''>
                        <h6 className='text-sm mb-4 font-bold text-black-2000'>Two-Factor Authentication</h6>
                        <div className="border mb-4 border-gray-3900 rounded-xl p-5">
                            <div className='flex items-center gap-4 max-w-[469px]'>
                                <div className='w-12 h-12 flex items-center justify-center bg-green-1500/10 rounded-xl'>
                                    <img src="/images/fingerprint.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className='flex items-center justify-between'>
                                        <h6 className="text-base font-normal leading-6 text-black-2000">Biometric / 2FA</h6>
                                        <ToggleSwitch enabled={switch1} setEnabled={setSwitch1} />
                                    </div>
                                    <p className="text-sm font-normal text-gray-3800">Your account is protected with two-factor authentication</p>
                                </div>
                            </div>
                            <div className="border-t space-y-2 border-gray-3900 mt-4 pt-4">
                                <div className="flex items-center gap-2">
                                    <img src="/images/tick-green.svg" alt="" />
                                    <p className="text-sm font-normal leading-5 text-green-1500">Authenticator app configured</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <img src="/images/tick-green.svg" alt="" />
                                    <p className="text-sm font-normal leading-5 text-green-1500">Recovery codes generated</p>
                                </div>
                            </div>
                        </div>
                        <div className="border mb-4 border-gray-3900 rounded-xl p-5">
                            <h6 className="text-xs font-normal text-gray-3800">Last Login</h6>
                            <h6 className="text-sm font-normal text-black-2000">Today at 09:42 AM</h6>
                            <h6 className="text-xs font-normal text-gray-3800">Chrome on macOS • London, UK</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-2 mb-4'>
                <span className='w-1 h-4 bg-blue-1400 rounded-full'></span>
                <h6 className='text-sm font-normal leading-5 text-gray-3800'>General System Configuration</h6>
            </div>
            <div className='bg-white border  border-gray-3100 shadow-11xl rounded-[12px] p-6'>
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center">
                        <img src="/images/syestem-icon.svg" className='w-5 h-5' alt="" />
                    </div>
                    <div className="flex-1">
                        <h6 className="text-sm font-bold leading-5 text-black-2000">System Configuration</h6>
                        <h6 className="text-sm font-normal leading-5 text-gray-3800">Operational status and regional defaults</h6>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-8'>
                    <div className=''>
                        <h6 className='text-sm mb-4 font-bold text-black-2000'>Operational Status</h6>
                        <div className="border mb-4 border-gray-3900 rounded-xl p-5">
                            <div className='flex items-center gap-4 max-w-[469px]'>
                                <div className=''>
                                    <img src="/images/power-off.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h6 className="text-base font-normal leading-6 text-black-2000">Maintenance Mode</h6>
                                            <p className="text-xs font-normal text-gray-3800">Take app offline temporarily</p>
                                        </div>
                                        <ToggleSwitch enabled={switch2} setEnabled={setSwitch2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border mb-4 border-gray-3900 rounded-xl p-5">
                            <div className='flex items-center gap-4 max-w-[469px]'>
                                <div className=''>
                                    <img src="/images/user-plus.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h6 className="text-base font-normal leading-6 text-black-2000">New Registrations</h6>
                                            <p className="text-xs font-normal text-gray-3800">Allow new user sign-ups</p>
                                        </div>
                                        <ToggleSwitch enabled={switch3} setEnabled={setSwitch3} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-gray-3900 rounded-xl p-5">
                            <div className='flex items-center gap-4 max-w-[469px]'>
                                <div className=''>
                                    <img src="/images/file-tick.svg" alt="" />
                                </div>
                                <div className="flex-1">
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <h6 className="text-base font-normal leading-6 text-black-2000">Auto-KYC Approval</h6>
                                            <p className="text-xs font-normal text-gray-3800">Automatically approve verified KYC</p>
                                        </div>
                                        <ToggleSwitch enabled={switch4} setEnabled={setSwitch4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <h6 className='text-sm font-bold text-black-2000'>Regional Defaults</h6>
                        <div className='space-y-4 mt-4'>
                            <div className="border  border-gray-3900 rounded-xl p-5">
                                <InputField
                                    label="Default Currency"
                                    type="password"
                                    placeholder="EUR - Euro (€)"
                                    ClassName='rounded-[10px]! pl-3! bg-green-2100!'
                                  
                                />
                            </div>
                              <div className="border  border-gray-3900 rounded-xl p-5">
                                <InputField
                                    label="Timezone"
                                    type="password"
                                    placeholder="Europe/London (GMT+0)"
                                    ClassName='rounded-[10px]! pl-3! bg-green-2100!'
                                  
                                />
                            </div>
                              <div className="border  border-gray-3900 rounded-xl p-5">
                                <InputField
                                    label="Default Language"
                                    type="English"
                                    placeholder="EUR - Euro (€)"
                                    ClassName='rounded-[10px]! pl-3! bg-green-2100!'
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
             <div className='flex items-center gap-2 mb-4 mt-6'>
                <span className='w-1 h-4 bg-blue-1400 rounded-full'></span>
                <h6 className='text-sm font-normal leading-5 text-gray-3800'>Communication & Notifications</h6>
            </div>
            <div className='bg-white border  border-gray-3100 shadow-11xl rounded-[12px] p-6'>
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-blue-1700/10 rounded-xl w-10 h-10 flex items-center justify-center">
                        <img src="/images/bell-icon-blue.svg" className='w-5 h-5' alt="" />
                    </div>
                    <div className="flex-1">
                        <h6 className="text-sm font-bold leading-5 text-black-2000">Communication & Notifications</h6>
                        <h6 className="text-sm font-normal leading-5 text-gray-3800">Configure system email and notification settings</h6>
                    </div>
                </div>
              <NotificationTable></NotificationTable>
            </div>
            
        </div>
    );
}
