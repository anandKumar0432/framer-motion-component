"use client"
import { motion } from "motion/react";
import { useState } from "react"
import {  ChartBar, ChevronLeft, ChevronRight,  Home,  Settings, User } from "tabler-icons-react"


export const Sidebar = ()=>{
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = ()=>{
        setIsOpen(!isOpen);
    }
    const links = [
        {
            name:"Home",
            href:"/",
            icon:<Home/>
        },
        {
            name:"Analytics",
            href:"/analytics",
            icon:<ChartBar/>
        },
        {
            name:"Users",
            href:"/users",
            icon:<User/>
        },
        {
            name:"Setting",
            href:"/setting",
            icon:<Settings/>
        },
    ]

    const sidebarVariant = {
        open: {
            width: "14rem"
        },
        closed: {
            width: "4.5rem"
        },
    }

    const childVariant = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y:-10
        },
    }

    const parentVariant = {
        open: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
    }
    return (
           <motion.div 
            initial={false}
            animate={isOpen? "open" : "closed"}
            
            transition={{
                duration: 0.3,
            }}
            exit="closed"
           className="border-r border-neutral-100 h-full">
               <motion.nav
                variants={sidebarVariant}
                className="bg-white shadow-md h-full">
                <div className="p-4 flex justify-between items-center">
                  <h2 className={`text-xl font-semibold ${!isOpen && "sr-only"}`}>
                    Dashboard
                  </h2>
                  <button
                  onClick={toggleSidebar}
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                  aria-label={isOpen ? "close sidebar" : "open sidebar"}
                  >
                    {isOpen ? <ChevronLeft/> : <ChevronRight/>}
                  </button>
                </div>
                <div className="relative">
                    <nav className="p-4">
                        <motion.ul variants={parentVariant} className="space-y-2">
                          {links.map((link) => (
                            <motion.li variants={childVariant} key={link.name}>
                                <a
                                  href={link.href}
                                  title={isOpen? link.name : ""} 
                                  className="flex items-center text-gray-700 rounded hover:bg-gray-100 p-2 text-sm"
                                >
                                  {link.icon}
                                  {isOpen && <span className="ml-3">{link.name}</span>}  
                                </a>
                            </motion.li>
                          ))}
                        </motion.ul>
                    </nav>
                </div>
               </motion.nav>
           </motion.div>
    )
}