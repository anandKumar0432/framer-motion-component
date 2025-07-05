"use client"
import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { XMarkIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import { AnimatePresence, easeInOut, motion } from "motion/react"
import { useState } from "react"

export const ExitCard = ()=>{

    const [open, setOpen] = useState(true);
    return <>
    <AnimatePresence>
    {open && (
    <motion.div
    initial = {{
        opacity:0,
        scale: 0.98,
        filter: "blur(10px)"
    }}
    animate = {{
        opacity: 1,
        scale: 0.98,
        filter: "blur(0px)"
    }}
    exit = {{
        opacity:1,
        scale: 1,
        filter: "blur(10px)"
    }}
    transition={{
        duration: 0.3,
        ease: easeInOut,
    }}
    className="w-72 min-h-[27rem] h-[27rem] rounded-xl bg-white
    shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]
    p-6 flex flex-col"> 
        <h2 className="font-bold text-[10px]">Aceternity UI component</h2>
        <p className="text-neutral-500 text-[10px]">
            A collection of beautiful UI components, let's get on with it.
        </p>
        <div className="flex items-center justify-center ">
            <button onClick={()=>{setOpen(false)}} className="flex items-center justify-center gap-1 text-[10px]
            shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] rounded-md px-2 py-1">
                <Image className="h-4 w-4
                "
                 height={50} width={50} alt="logo" src="/logo.webp" 
                 />
                Aceternity 
                 <XMarkIcon className="h-3 w-3 text-neutral-400"/>
            </button>
        </div>
        <div className="bg-gray-100 flex-1 mt-4 rounded-lg border border-dashed border-neutral-200 relative">
        <motion.div
        initial={{
            opacity:0,
            scale: 0.98,
            filter: "blur(10px)"
        }}
        whileHover={{
            opacity: 1,
            scale: 1.05,
            filter: 'blur(0px)'
        }}
        transition={{
            duration:0.3,
            ease: "easeInOut"
        }}
         className="absolute inset-0 w-full h-full border border-neutral-200 bg-white rounded-lg divide-y divide-neutral-200">
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[8px] font-bold">
                            Acertinity UI component
                        </p>
                        <p className="text-[8px] text-neutral mt-1">
                            A collection of UI component
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[8px] font-bold">
                            Acertinity UI component
                        </p>
                        <p className="text-[8px] text-neutral mt-1">
                            A collection of UI component
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[8px] font-bold">
                            Acertinity UI component
                        </p>
                        <p className="text-[8px] text-neutral mt-1">
                            A collection of UI component
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 p-4">
                    <div className="h-7 w-7 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                        </svg>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[8px] font-bold">
                            Acertinity UI component
                        </p>
                        <p className="text-[8px] text-neutral mt-1">
                            A collection of UI component
                        </p>
                    </div>
                </div>
                <div className="flex gap-2 p-4 justify-center items-center">
                    <div className="h-5 w-5 flex-shrink-0 bg-gradient-to-br shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] bg-white rounded-md flex items-center justify-center">
                        <PlusCircleIcon/>
                    </div>
                    <div className="flex flex-col ">
                        <p className="text-[8px] text-neutral">
                            Add component
                        </p>
                    </div>
                </div>
            </motion.div>
            
        </div> 
    </motion.div>)}
    </AnimatePresence>
    </>
}