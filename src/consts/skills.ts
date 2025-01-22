import { FaHtml5, FaCss3, FaReact, FaFigma, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiJavascript, SiNestjs, 
         SiMysql, SiPostgresql, SiMongodb, SiStyledcomponents, SiPostman } from "react-icons/si";

export const SKILLS = {
    title: 'My Skills',
    description: 'I have experience working with a variety of technologies and tools, including HTML, CSS, JavaScript, React, Node.js, and more. I am always eager to learn new things and take on new challenges.',
    items: [
      { name: 'HTML', icon: FaHtml5 },
      { name: 'CSS', icon: FaCss3 },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Native', icon: FaReact },
      { name: 'Styled Components', icon: SiStyledcomponents },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Figma', icon: FaFigma },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'Nest.js', icon: SiNestjs },
      { name: 'Postman', icon: SiPostman },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Postgre SQL', icon: SiPostgresql },
      { name: 'Mongo DB', icon: SiMongodb },
    ]
  }