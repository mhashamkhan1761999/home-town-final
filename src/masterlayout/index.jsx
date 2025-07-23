import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const MasterLayout = () => {
    return (
        <>
            <div className="p-4 flex bg-black h-[100dvh] overflow-y-auto">
                <div className="w-[7.375rem] h-full flex flex-col bg-black card-gradient !border-[1.5px] rounded-3xl">
                    <img src="/admin-logo.svg" alt="Logo" className="w-[4.438rem] h-auto mt-6 mx-auto" />
                    <div className="mb-[2.75rem] mt-[3.125rem]">
                        <img src="/line.svg" alt="line" className='h-[1px] w-full' />
                    </div>
                    <div className="flex flex-col items-center gap-6">
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-[#CAB265] font-bold text-base' : 'text-[#6A6A69] font-bold text-base'}
                            to="/athlete/dashboard">
                            Home
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-[#CAB265] font-bold text-base' : 'text-[#6A6A69] font-bold text-base'}
                            to="/athlete/nil-service">
                            Nil Service
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-[#CAB265] font-bold text-base' : 'text-[#6A6A69] font-bold text-base'}
                            to="/athlete/graphic">
                            Graphic
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-[#CAB265] font-bold text-base' : 'text-[#6A6A69] font-bold text-base'}
                            to="/athlete/subscription">
                            Subscription
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-[#CAB265] font-bold text-base' : 'text-[#6A6A69] font-bold text-base'}
                            to="/athlete/reviews">
                            Reviews
                        </NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-[#CAB265] font-bold text-base' : 'text-[#6A6A69] font-bold text-base'}
                            to="/athlete/settings">
                            Settings
                        </NavLink>
                    </div>
                    <div className="mb-[2.75rem] mt-[3.125rem]">
                        <img src="/line.svg" alt="line" className='h-[1px] w-full' />
                    </div>
                    <div className="flex flex-col mt-auto items-center gap-6 mb-11">
                        <p className='text-[#6A6A69] font-bold text-base'>
                            Log Out
                        </p>
                    </div>
                </div>
                <div className="grow">
                    <div className="w-full p-4 flex items-center">
                        <div className="">
                            <img src="/hometown-logo.svg" alt="Header" className="w-[23.188rem] h-auto" />
                        </div>
                        <div className="flex justify-end grow">
                            <div className="w-[4.563rem] h-[4.563rem] rounded-full overflow-hidden">
                                <img src="/leader.svg" alt="Admin Avatar" className="w-full h-full object-cover object-center" />
                            </div>
                        </div>
                    </div>
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MasterLayout