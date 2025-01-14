"use client";

import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs, FaPaperPlane } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const EDUCATINAL = {
  icon: FaPaperPlane,
  title: 'My education',
  description: 'I have a degree in Computer Science from the University of São Paulo. I have always been passionate about technology and computers, and I am constantly learning and improving my skills.',
  items: [
    { institution: 'Online Course Platform', 
      course: 'Full Stack Web Development Bootcamp', 
      period: '2023', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    { institution: 'Rocket Seat Euducation', 
      course: 'Computer Science', 
      period: '2006 - 2010', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    { institution: 'University of São Paulo', 
      course: 'Computer Science', 
      period: '2006 - 2010', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
    { institution: 'University of São Paulo', 
      course: 'Computer Science', 
      period: '2006 - 2010', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' 
    },
  ]
}

const SKILLS = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaReact /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Figma', icon: <FaFigma /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
];

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
          <TabsList>
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
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume
