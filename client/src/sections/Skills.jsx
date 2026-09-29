import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaAws,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPostman,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiVercel,
  SiRedux,
  SiCplusplus,
} from "react-icons/si";

import { Globe, Cpu, ShieldCheck, Accessibility } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";

/* ===== SKILLS DATA ===== */
const skills = [
  { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
  { name: "TypeScript", icon: SiTypescript, color: "#3b82f6" },
  { name: "React", icon: FaReact, color: "#22d3ee" },
  { name: "Firebase", icon: SiFirebase, color: "#fbbf24" },
  { name: "Node.js", icon: FaNodeJs, color: "#4ade80" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "MongoDB", icon: SiMongodb, color: "#22c55e" },

  { name: "MySQL", icon: SiMysql, color: "#38bdf8" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#60a5fa" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#5eead4" },
  { name: "Python", icon: FaPython, color: "#60a5fa" },
  { name: "C++", icon: SiCplusplus, color: "#818cf8" },
  { name: "Bootstrap", icon: FaBootstrap, color: "#ffffff" },
  { name: "CSS3", icon: FaCss3Alt, color: "#3b82f6" },
  { name: "HTML5", icon: FaHtml5, color: "#fb923c" },
  { name: "redux", icon: SiRedux, color: "#fbbf24" },
  // jwt

  { name: "Git", icon: FaGitAlt, color: "#fb7185" },
  { name: "GitHub", icon: FaGithub, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#fdba74" },
  { name: "REST APIs", icon: Globe, color: "#ffffff" },
  { name: "API Design", icon: Cpu, color: "#fbbf24" },
  { name: "AWS", icon: FaAws, color: "#fb923c" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

/* ===== SPLIT INTO ROWS (auto-chunks so adding skills never breaks this) ===== */
const ROWS_COUNT = 4;
const chunkSize = Math.ceil(skills.length / ROWS_COUNT);
const rows = Array.from({ length: ROWS_COUNT }, (_, i) =>
  skills.slice(i * chunkSize, i * chunkSize + chunkSize)
).filter((row) => row.length > 0);

const Skills = () => {
  return (
    <ScrollReveal delay={0.2}>
      <section
        id="skills"
        className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen w-screen overflow-hidden flex flex-col justify-evenly"
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
    </ScrollReveal>
  );
};

export default Skills;