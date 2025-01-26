"use client";

import CountUp from "react-countup";

const STATS = [
    { num: 20, text:  "Years of Experience" },
    { num: 18, text:  "Projects Completed" },
    { num: 16, text:  "Technologies mastered" },
    { num: 35000, text:  "Hours of coding" },
]

export default function Status() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-8">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-4 max-w-[80vw] mx-auto xl:max-w-none">
                {STATS.map((item, index) => (
                    <div 
                        key={index}
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                    >
                        <div className="flex items-center">
                            <CountUp 
                                className="text-4xl xl:text-6xl font-extrabold"
                                end={item.num > 1000 ? item.num / 1000 : item.num} 
                                duration={5} 
                                delay={1}
                            />
                            {item.num > 1000 && <span className="font-bold text-3xl xl:text-5xl text-white/90">k</span>}
                            <p className="text-2xl xl:text-4xl text-white/60">+</p>
                        </div>
                        <p className={`${item.text.length > 15 ? 'max-w-[150px]' : 'max-w-[100px]'} leading-snug text-white/80`}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

