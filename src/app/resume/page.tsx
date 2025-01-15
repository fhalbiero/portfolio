"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs, FaPaperPlane } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ABOUT = {
  title: 'About Me',
  description: 'I am a full stack developer with a passion for creating beautiful and functional websites. I have experience working with a variety of technologies and tools, including HTML, CSS, JavaScript, React, Node.js, and more. I am always eager to learn new things and take on new challenges.',
  info: [
    { fieldName: 'Name', fieldValue: 'Fabio Albiero' },
    { fieldName: 'Email', fieldValue: 'fhalbiero@gmail.com' },
    { fieldName: 'Phone', fieldValue: '+55 11 99999-9999' },
    { fieldName: 'Languages', fieldValue: 'Portuguese, English' },
    { fieldName: 'Experience', fieldValue: '16+ years' },
    { fieldName: 'Nationality', fieldValue: 'Brazilian' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
  ]
};

const EXPERIENCE = {
  icon: FaPaperPlane,
  title: 'My experience',
  description: 'I have over 16 years of experience working as a full stack developer. I have worked on a wide range of projects, from small websites to large web applications. I am always looking for new challenges and opportunities to learn and grow.', 
  items: [
    { company: 'Kartera', 
      position: 'Senior Frontend Engineer', 
      period: '2022 - Present', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    { company: 'Trvllar', 
      position: 'Full Stack Developer', 
      period: '2010 - 2015', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    { company: 'Rivian', 
      position: 'Full Stack Developer', 
      period: '2010 - 2015', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    { company: 'Glc Consultoria', 
      position: 'Full Stack Developer', 
      period: '2010 - 2015', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
  ]
};

const EDUCATION = {
  icon: FaPaperPlane,
  title: 'My education',
  description: 'I have a degree in Computer Science from the University of São Paulo. I have always been passionate about technology and computers, and I am constantly learning and improving my skills.',
  items: [
    { 
      institution: 'Online Course Platform', 
      course: 'Full Stack Web Development Bootcamp', 
      duration: '2023', 
    },
    { 
      institution: 'Rocket Seat Euducation', 
      course: 'Computer Science', 
      duration: '2006 - 2010', 
    },
    { 
      institution: 'University of São Paulo', 
      course: 'Computer Science', 
      duration: '2006 - 2010', 
    },
    { 
      institution: 'University of São Paulo', 
      course: 'Computer Science', 
      duration: '2006 - 2010', 
    },
  ]
}

const SKILLS = {
  icon: FaPaperPlane,
  title: 'My Skills',
  description: 'I have experience working with a variety of technologies and tools, including HTML, CSS, JavaScript, React, Node.js, and more. I am always eager to learn new things and take on new challenges.',
  items: [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <FaReact /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
  ]
}

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
          className="flex flex-col gap-[60px] xl:flex-row"
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
                        className="bg-gray_dark h-[184px] flex flex-col justify-center items-center lg:items-start gap-1 py-6 px-10 rounded-xl"
                      >
                        <span className="text-accent">{item.period}</span>
                        <h3 className="text-xl text-center lg:text-left max-w-[260px] min-h-[60px]">{item.position}</h3>
                        <div className="flex items-center gap-3">
                          <span className="bg-accent w-[6px] h-[6px] rounded-full"></span>
                          <p className="text-white/60">
                            {item.company}
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
                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 xl:gap-[30px]">
                  {SKILLS.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-gray_dark rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
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
