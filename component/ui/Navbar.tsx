"use client"

import { UserCircleIcon, UserIcon } from "@heroicons/react/24/solid"

export const Navbar = ()=>{
    return <div className="w-full h-[4rem] bg-white shadow-sm border-gray-300 flex justify-between items-center">
        <div className="pl-3 font-bold text-2xl text-neutral-900">
        Overview
        </div>
        <div className="pr-3 w-[4rem] h-[4rem] pt-1 text-gray-800">
            <UserCircleIcon/>
        </div>
    </div>
}