"use client";

import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { ABOUT } from "@/consts/about";
import { EXPERIENCE } from "@/consts/experience";
import { EDUCATION } from "@/consts/education";
import { SKILLS } from "@/consts/skills";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1, 
        transition: { delay: 1.2, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex justify-center items-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          className="flex flex-col gap-[60px] xl:flex-row pb-24"
          defaultValue="experience"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent 
              value="experience"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {EXPERIENCE.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {EXPERIENCE.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {EXPERIENCE.items.map((item, index) => (
                      <li 
                        key={index}
                        className="bg-gray_dark flex flex-col justify-start items-center lg:items-start gap-1 py-6 px-10 rounded-xl"
                      >
                        <span className="text-accent">{item.period}</span>
                        <p className="text-xl text-center lg:text-left max-w-[260px] min-h-[60px] text-white/70">
                          {item.position} at <span className="text-white font-bold">{item.company}</span>
                        </p>
                        <div className="flex items-start gap-3 pt-4">
                          <span className="bg-accent w-[6px] h-full rounded-full"></span>
                          <p className="text-white/60">
                            {item.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent 
              value="education"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {EDUCATION.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {EDUCATION.description}
                </p>
                <ScrollArea className="h-[480px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {EDUCATION.items.map((item, index) => (
                      <li 
                        key={index}
                        className="bg-gray_dark h-[184px] flex flex-col justify-center items-center lg:items-start gap-1 py-6 px-10 rounded-xl"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left max-w-[260px] min-h-[60px]">{item.institution}</h3>
                        <div className="flex items-center gap-3">
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">
                            {item.course}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            <TabsContent 
              value="skills"
              className="w-full"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col text-center xl:text-left gap-[30px] ">
                  <h3 className="text-4xl font-bold">
                    {SKILLS.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {SKILLS.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 xl:gap-[30px]">
                  {SKILLS.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[140px] bg-gray_dark rounded-xl flex justify-center items-center group">
                            <div className="text-4xl group-hover:text-accent transition-all duration-300">
                              {<item.icon />}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent 
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px] ">
                  <h3 className="text-4xl font-bold">
                    {ABOUT.title}
                  </h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {ABOUT.description}
                  </p>
                  <ul className="max-w-[620px] grid grid-cols-1 xl:grid-cols-2 gap-y-4 mx-auto xl:mx-0">
                  {ABOUT.info.map((item, index) => (
                    <li 
                      key={index}
                      className="flex justify-start items-center gap-4 xl:justify-start xl:mx-0"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-white">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
