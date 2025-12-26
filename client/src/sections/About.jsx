import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "../components/ScrollReveal";

const About = () => {
  return (
    <ScrollReveal>
      <section
        id="about"
        className="min-h-[80vh] flex flex-col justify-center items-center px-6"
      >
        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-white mb-12 border-b-2 border-purple-500 pb-2"
        >
          About Me
        </motion.h2>

        {/* CARD */}
        <motion.div
          initial={{ opacity: 0, y: 140 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl bg-white/5 border border-white/10
                     p-10 rounded-3xl backdrop-blur-md shadow-2xl"
        >
          <h3 className="text-2xl font-bold text-purple-300 mb-4">
            My Tech Vision
          </h3>

          <p
            className="text-gray-300 leading-relaxed text-lg mb-6 transition-transform duration-200"
          >
            Hi, I'm a student developer who likes breaking things just to figure
            out how to fix them usually with JavaScript and snacks. I build web
            apps that try their best to work on the first try (no promises
            though).
          </p>

          <p className="text-gray-300 leading-relaxed text-lg mb-6 transition-transform duration-200">
            React and Tailwind are my daily tools, and I'm currently exploring
            the mysterious land of backend development where bugs go to
            multiply. Full-stack dreams, coffee-fueled nights, and lots of
            console.log.
          </p>

          <p className="text-gray-300 leading-relaxed text-lg transition-transform duration-200">
            When I'm not coding, I'm either daydreaming startup ideas, lurking
            on GitHub, or explaining to my friends why 'it works on my machine'
            is totally valid. I love creating stuff that’s fun, functional, and
            maybe a little chaotic.
          </p>
        </motion.div>
      </section>
    </ScrollReveal>
  );
};

export default About;
