"use client";

import CountUp from "react-countup";

const STATS = [
    { num: 20, text:  "Years of Experience" },
    { num: 12, text:  "Projects Completed" },
    { num: 10, text:  "Technologies mastered" },
    { num: 5000, text:  "Cups of coffee" },
]

export default function Status() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-8">
        <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                {STATS.map((item, index) => (
                    <div 
                        key={index}
                        className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                        <CountUp 
                            className="text-4xl xl:text-6xl font-extrabold"
                            end={item.num} 
                            duration={5} 
                            delay={1}
                        />
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

