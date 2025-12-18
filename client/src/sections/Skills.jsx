import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiNextdotjs,
  SiFirebase,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

import { Globe, Cpu, ShieldCheck, Accessibility } from "lucide-react";

/* ===== SKILLS DATA ===== */
const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
  { name: "React", icon: FaReact, color: "#22d3ee" },
  { name: "Firebase", icon: SiFirebase, color: "#fbbf24" },
  { name: "Node.js", icon: FaNodeJs, color: "#4ade80" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#22c55e" },

  { name: "MySQL", icon: SiMysql, color: "#38bdf8" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#5eead4" },
  { name: "Python", icon: FaPython, color: "#60a5fa" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#ffffff" },
  { name: "CSS3", icon: FaCss3Alt, color: "#3b82f6" },
  { name: "HTML5", icon: FaHtml5, color: "#fb923c" },
  

  { name: "Git", icon: FaGitAlt, color: "#fb7185" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#fdba74" },
  { name: "REST APIs", icon: Globe, color: "#ffffff" },
  { name: "API Design", icon: Cpu, color: "#fbbf24" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

/* ===== SPLIT INTO 4 ROWS ===== */
const rows = [skills.slice(0, 6), skills.slice(6, 12), skills.slice(12, 18)];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-screen -ml-[calc((100vw-100%)/2)]
                 h-screen flex flex-col justify-evenly overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-white text-center">Skills</h2>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="overflow-hidden w-full">
          <div
            className={`skills-marquee ${
              rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
            }`}
          >
            {[...row, ...row, ...row].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div
                  key={i}
                  className="skill-pill"
                  style={{ "--skill-color": skill.color }}
                >
                  <Icon size={16} className="skill-icon" />
                  <span className="skill-text">{skill.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
