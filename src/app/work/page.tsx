"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PROJECTS } from "@/consts/projects";
import { Tooltip, TooltipProvider } from "@/components/ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import "swiper/css";
import WorkSliderButtons from "@/components/WorkSliderButtons";

export default function Work() {
  const [project, setProject] = useState(PROJECTS[0]);
  
  function handleSlideChange(swiper: any) {
    setProject(PROJECTS[swiper.activeIndex]);
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="h-[50%] flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-300 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60 max-w-[540px]">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-4 max-w-[540px]">
                {project.stack.map((item, index) => (
                  <li 
                    key={index}
                    className="text-xl text-accent"
                  >
                    {item.name}{index < project.stack.length - 1 && ','} 
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex gap-4 items-center">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center bg-white/5 rounded-full group">
                        <BsArrowUpRight className="text-white text-2xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] flex items-center justify-center bg-white/5 rounded-full group">
                        <BsGithub className="text-white text-2xl group-hover:text-accent"/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              className="xl:h-[520px] mb-12"
              spaceBetween={30} 
              slidesPerView={1} 
              onSlideChange={handleSlideChange}    
            >
              {PROJECTS.map((project, index) => (
                <SwiperSlide 
                  key={index}
                  className="w-full"
                >
                  <div className="h-[460px] relative group flex items-center justify-center bg-gray_dark">
                    <div className="absolute top-0 bottom-0 w-full bg-primary/10 z-10">
                      
                    </div>
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        fill 
                        objectFit="cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons 
                conteinerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                buttonStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all delay-75 duration-300"
                iconStyles="text-primary"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
