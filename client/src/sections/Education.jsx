import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institute: "XYZ University, Mumbai",
    duration: "2021 – 2025",
    highlights: [
      "Strong foundation in computer science fundamentals",
      "Hands-on software development experience",
      "Actively involved in academic and technical projects",
    ],
  },
  {
    degree: "Higher Secondary Education",
    field: "Science Stream",
    institute: "ABC Junior College",
    duration: "2019 – 2021",
    highlights: [
      "Focused on Mathematics, Physics, and Computer Science",
      "Built strong analytical and logical thinking",
    ],
  },
];

const Education = () => {
  return (
    <ScrollReveal>
      <section
        id="education"
        className="relative min-h-screen w-full flex flex-col items-center px-6 py-24"
      >
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          Education
        </motion.h2>

        {/* TIMELINE */}
        <div className="relative max-w-4xl w-full">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-purple-300/40" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -180 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative pl-16 mb-16"
            >
              {/* DOT */}
              <span className="absolute left-1.5 top-8 w-4 h-4 rounded-full
                               bg-[#030014] border-4 border-purple-300" />

              {/* CARD */}
              <div className="bg-white/5 border border-white/15 backdrop-blur-xl
                              rounded-2xl p-8 shadow-xl">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-2xl font-semibold text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-sm text-gray-300">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-purple-400 font-medium mb-1">
                  {edu.field}
                </p>
                <p className="text-gray-300 mb-4">
                  {edu.institute}
                </p>

                <ul className="space-y-3 text-gray-300">
                  {edu.highlights.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-2 w-2 h-2 rounded-full bg-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Education;
