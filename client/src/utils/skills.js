import {
    FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub,
    FaHtml5, FaCss3Alt, FaBootstrap
  } from "react-icons/fa";
  
  import {
    SiJavascript, SiMongodb, SiMysql, SiPostman,
    SiTailwindcss, SiExpress, SiNextdotjs,
    SiFirebase, SiVercel, SiNetlify
  } from "react-icons/si";
  
  import { Globe, Cpu, ShieldCheck, Accessibility } from "lucide-react";
  
  export const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: FaReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
    { name: "Python", icon: FaPython },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: FaBootstrap },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Postman", icon: SiPostman },
    { name: "REST APIs", icon: Globe },
    { name: "API Design", icon: Cpu },
    { name: "CI / CD", icon: ShieldCheck },
    { name: "Firebase", icon: SiFirebase },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "Accessibility", icon: Accessibility },
  ];
  