"use client"

import { easeInOut, motion, useMotionTemplate, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { Rocket } from "tabler-icons-react";

export const MotionHooks = ()=>{
    const containerRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })
    const backrgrounds = ["#3D2B1F","#003262","#36454F"];
    const [background, setBackground] = useState(backrgrounds[0]);
    useMotionValueEvent(scrollYProgress,"change", (latest)=>{
        const finalValue = backrgrounds[Math.floor(latest*backrgrounds.length)];
        setBackground(finalValue);
    })
    return (
        <motion.div 
        ref={containerRef}
        animate={{
            background,
        }}
        transition={{
            duration:1,
            ease: easeInOut,
        }}
        className="min-h-screen bg-neutral-900 flex justify-center items-center text-white ">
           <div className="mx-auto flex max-w-4xl flex-col gap-10 py-40 ">
            {features.map((feature, idx) => (
                 <Card key={feature.title} feature={feature}></Card>
            ))}
           </div>
        </motion.div>
    )
}

type Feature = {
        icon: React.ReactNode;
        title: string;
        description: string;
        content: React.ReactNode;
};

const Card = ({feature} : {feature : Feature})=>{
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const translateContent = useSpring(
        useTransform(scrollYProgress, [0,1], [200,-300]),
        {
            stiffness: 100,
            damping: 20,
            mass: 1,
        },
    );
    const opacityContent = useTransform(scrollYProgress, [0,0.5,1],[0,1,0]);
    const blur = useTransform(scrollYProgress, [0.5,1], [0,5]);
    const scale = useTransform(scrollYProgress,[0.5,1], [1,0.8])

    useMotionValueEvent(scrollYProgress, "change", (latest)=>{
        console.log("changed values", "latest");
    });

    return (
        <div
            ref={ref}
            key={feature.title}
            className="grid grid-cols-2 items-center gap-20 py-40 "
            >
                <motion.div
                style={{
                    filter: useMotionTemplate`blur(${blur}px)`,
                    scale,
                }} 
                className="flex flex-col gap-5 ">
                    {feature.icon}
                    <h2 className="text-4xl font-bold">{feature.title}</h2>
                    <p className="text-neutral-400 text-lg">{feature.description}</p>
                </motion.div>
                <motion.div
                style={{
                    y:translateContent,
                    opacity: opacityContent,
                }}
                >{feature.content}</motion.div>
            </div> 
    )
}

const features : Feature [] = [
    {
        icon: <Rocket className="h-8 w-8 text-neutral-200"></Rocket> ,
        title: "generate ultra realistics images in a second",
        description: "with our state of the Art , you can generate ultra realistics images in as second",
        content: (
            <div>
               <Image
               src= "/defenderpic.png"
               alt= "car"
               height= "500"
               width= "500"
               className="rounded-lg"
               />
            </div>
        )
    },
    {
        icon: <Rocket className="h-8 w-8 text-neutral-200"></Rocket> ,
        title: "generate ultra realistics images in a hour",
        description: "with our state of the Art , you can generate ultra realistics images in as second",
        content: (
            <div>
               <Image
               src= "/horses.jpeg"
               alt= "car"
               height= "500"
               width= "500"
               className="rounded-lg"
               />
            </div>
        )
    },
    {
        icon: <Rocket className="h-8 w-8 text-neutral-200"></Rocket> ,
        title: "generate ultra realistics images in a minute",
        description: "with our state of the Art , you can generate ultra realistics images in as second",
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