"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative">
       <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1, duration: 0.5, ease: "easeIn" } }}
       >
            <motion.div 
                className="absolute w-[290px] h-[290px] xl:w-[436px] xl:h-[436px] rounded-full mix-blend-lighten"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.5, ease: "easeIn" } }}
            >
                <Image 
                    src="/assets/photo.png" 
                    className="object-contain"
                    priority 
                    quality={100} 
                    fill 
                    alt="" 
                />
            </motion.div>

            <motion.svg 
              className="w-[300px] xl:w-[446px] h-[300px] xl:h-[446px] "
              fill="transparent"
              viewBox={`0 0 506 506`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle 
                cx="253" 
                cy="253" 
                r="250" 
                stroke="#00ff99" 
                strokeWidth={4} 
                strokeLinecap={"round"}
                strokeLinejoin={"round"}
                initial={{ strokeDasharray: "24 10 0 0"}}
                animate={{ 
                  strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"], 
                  rotate: [120, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
              />
            </motion.svg>
        </motion.div> 
    </div>
  )
}
