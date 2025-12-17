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

const skills = [
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

// split skills into 4 rows
const rows = [
  skills.slice(0, 6),
  skills.slice(6, 12),
  skills.slice(12, 18),
  skills.slice(18, 24),
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center gap-10 py-24"
    >
      <h2 className="text-4xl font-bold text-white text-center mb-6">
        Skills
      </h2>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="overflow-hidden w-full">
          <div
            className={`skills-marquee ${
              rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
            }`}
          >
            {[...row, ...row].map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={i} className="skill-pill">
                  <Icon size={16} />
                  <span>{skill.name}</span>
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
