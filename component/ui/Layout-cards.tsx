import React from "react";

export const LayoutCards = ()=>{
    return <div className="bg-gray-100 min-h-screen">
            <div className="max-w-lg mx-auto flex flex-col gap-10 py-10">
                {cards.map((card,idx)=>(
                    <button
                    key={card.title}
                    className="flex justify-between p-4 rounded-lg bg-white cursor-pointer items-center border border-neutral-200"
                    >
                        <div className="flex gap-4 items-center">
                            <img 
                            src={card.src} 
                            alt={card.title}
                            className="rounded-lg aspect-square h-14 "
                            />
                            <div className="flex flex-col gap-2 items-start">
                            <h2 className="font-bold text-xs  text-black">{card.title}</h2>
                            <p className="text-[10px] text-neutral-500">{card.description}</p>
                            </div>
                        </div>
                        <div className="px-2 py-1 rounded-full text-white text-xs bg-green-400">
                            {card.ctaText}
                        </div>
                    </button>
                ))}
            </div>
    </div>
}

type card = {
    description: string;
    title: string;
    src: string;
    ctaText: string;
    content: () => React.ReactNode;
}

const cards : card[] = [
    {
        description:"Taylor swift",
        title: "Summarise sadness",
        src: "/taylorSwift.png",
        ctaText: "play",
        content: ()=>{
            return (
                <p className="text-[10px] text-neutral-500 ">
                    Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Known for her autobiographical songwriting, artistic versatility, and cultural impact, Swift is one of the world's best-selling music artists, the highest-grossing music performer, and the richest female musician—the first billionaire with music as their main income.
                </p>
            )
        }
    },
    {
        description:"Brad Paisley",
        title: "Bhojpuri Beats",
        src: "/bradpraisley.jpg",
        ctaText: "play",
        content: ()=>{
            return (
                <p className="text-[10px] text-neutral-500">
                    Brad Douglas Paisley (born October 28, 1972) is an American country music singer, songwriter, and guitarist. His first success came in 1997 as the writer of David Kersh's "Another You". After this, he signed with Arista Nashville in 1998, and released his debut album Who Needs Pictures in 1999. This was the first of 12 studio albums he released for the label before its closure in 2023, after which he transferred to EMI Nashville. His most commercially successful albums are Mud on the Tires (2003) and Time Well Wasted (2005), both certified double platinum by the Recording Industry Association of America
                </p>
            )
        }
    },
    {
        description:"Anonymous kumar",
        title: "Danelectro Silvertone",
         src: "/anonymous.jpg",
        ctaText: "play",
        content: ()=>{
            return (
                <p className="text-[10px] text-neutral-500">
                    He has stated that his love of country music stems from his maternal grandfather, Warren Jarvis, who gave him his first guitar, a Sears Danelectro Silvertone,[3] and taught him how to play at eight years old. In third grade, he performed for the first time in public by singing in his church. Initially, they were just going to have him play the song on the guitar instead of a piano, but then the adults heard him sing the tune and said, "Forget the choir, let's just have Brad do the whole thing
                </p>
            )
        }
    },
    {
        description:"Taylor swift",
        title: "Summarise sadness 2",
        src: "/taylorSwift.png",
        ctaText: "play",
        content: ()=>{
            return (
                <p className="text-[10px] text-neutral-500 ">
                    Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Known for her autobiographical songwriting, artistic versatility, and cultural impact, Swift is one of the world's best-selling music artists, the highest-grossing music performer, and the richest female musician—the first billionaire with music as their main income.
                </p>
            )
        }
    },
    {
        description:"Brad Paisley",
        title: "Bhojpuri Beats 2",
        src: "/bradpraisley.jpg",
        ctaText: "play",
        content: ()=>{
            return (
                <p className="text-[10px] text-neutral-500">
                    Brad Douglas Paisley (born October 28, 1972) is an American country music singer, songwriter, and guitarist. His first success came in 1997 as the writer of David Kersh's "Another You". After this, he signed with Arista Nashville in 1998, and released his debut album Who Needs Pictures in 1999. This was the first of 12 studio albums he released for the label before its closure in 2023, after which he transferred to EMI Nashville. His most commercially successful albums are Mud on the Tires (2003) and Time Well Wasted (2005), both certified double platinum by the Recording Industry Association of America
                </p>
            )
        }
    },
    {
        description:"Anonymous kumar",
        title: "Danelectro Silvertone 2",
         src: "/anonymous.jpg",
        ctaText: "play",
        content: ()=>{
            return (
                <p className="text-[10px] text-neutral-500">
                    He has stated that his love of country music stems from his maternal grandfather, Warren Jarvis, who gave him his first guitar, a Sears Danelectro Silvertone,[3] and taught him how to play at eight years old. In third grade, he performed for the first time in public by singing in his church. Initially, they were just going to have him play the song on the guitar instead of a piano, but then the adults heard him sing the tune and said, "Forget the choir, let's just have Brad do the whole thing
                </p>
            )
        }
    }
]