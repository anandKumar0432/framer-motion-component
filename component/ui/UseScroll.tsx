"use client"

import { easeInOut, motion, useMotionTemplate, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import Image from "next/image"
import { useRef, useState } from "react";

type Feature = {
    content: React.ReactNode;
    title: string;
    description: string;
}

const features : Feature[]  = [
    {
        title: "Create beatiful animations in less than minute",
        description: "this is not the ai generated template it's a handmade design",
        content: (
            <div>
                <Image
                src= "/mithila.jpeg"
                alt= "car"
                height= "500"
                width= "500"
                className="rounded-lg"
                />
            </div>
        )
    },
    {
        title: "Create beatiful animations in less than minute",
        description: "this is not the ai generated template it's a handmade design",
        content: (
            <div>
                <Image
                src= "/mithila.jpeg"
                alt= "car"
                height= "500"
                width= "500"
                className="rounded-lg"
                />
            </div>
        )
    },
    {
        title: "Create beatiful animations in less than minute",
        description: "this is not the ai generated template it's a handmade design",
       content: (
            <div>
                <Image
                src= "/mithila.jpeg"
                alt= "car"
                height= "500"
                width= "500"
                className="rounded-lg"
                />
            </div>
        ) 
    }
]

const backgrouds = ["#2A3439","#414A4C","#013220"];

export const UseScroll = ()=>{
const [background, setBackground] = useState("#2A3439");
const containerRef = useRef(null);
const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
})
useMotionValueEvent(scrollYProgress, "change" , (latest)=>{
    setBackground(backgrouds[Math.floor(latest*backgrouds.length)])
})
    return <motion.div
            ref={containerRef}
            animate= {{
                background,
            }}
            transition={{
                duration: 1,
                ease: easeInOut
            }}
            className="max-w-screen h-auto text-3xl  flex justify-center items-center text-white bg-neutral-900">
                    <div>
                        {features.map((feature, idx)=>(
                            <Card feature={feature}/>
                    ))}
                    </div>
    </motion.div>
}

const Card = ({feature}: {feature: Feature})=>{
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });
    const translateContent = useTransform(scrollYProgress, [0,1], [200,-200]);
    const opacityContent = useTransform(scrollYProgress, [0,0.5,1],[0,1,0])
    const blurContent = useTransform(scrollYProgress, [0,0.5,1],[5,0,5])
    return <div
            ref={ref}
            className="w-2xl py-20"
            >
                <div className="grid grid-cols-2 items-center gap-20">
                    <motion.div
                    style={{
                        filter: useMotionTemplate`blur(${blurContent}px)`
                    }}
                    className="flex flex-col gap-5"
                    >
                        <p className="font-bold">{feature.title}</p>
                        <p className="text-neutral-300 text-lg">{feature.description}</p>
                    </motion.div>
                    <div>
                        {<motion.div
                        style={{
                            y: translateContent,
                            opacity: opacityContent,
                        }}
                        className="rounded-2xl py-30"
                        >
                            {feature.content}
                        </motion.div>} 
                    </div>
                </div> 
    </div>
}