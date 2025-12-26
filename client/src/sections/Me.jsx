import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaInstagram,
} from "react-icons/fa";
import profileImg from "../assets/profile.png";
import { motion } from "framer-motion";

const Me = () => {
  return (
    <section id="me" className="min-h-screen flex items-center px-6">
      <div
        className="max-w-5xl mx-auto w-full
                   grid md:grid-cols-[260px_1fr]
                   gap-8 items-center"
      >
        {/* LEFT — PHOTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex justify-center md:justify-start"
        >
          <div
            className="w-56 h-64 rounded-3xl overflow-hidden
                       border border-white/20
                       shadow-[0_0_35px_rgba(168,85,247,0.35)]
                       bg-white/5 backdrop-blur"
          >
            <img
              src={profileImg}
              alt="Shubham Sawant"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT — CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Shubham <span className="text-purple-400">Sawant</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-purple-200 font-medium mb-3">
            Full Stack Developer
          </h2>

          <div className="flex items-center justify-center md:justify-start gap-2 text-gray-100 mb-8">
            <FaMapMarkerAlt className="text-white" />
            <span>Mumbai, India</span>
          </div>

          {/* CTA + SOCIALS */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center
                         px-8 py-3 bg-white text-black font-semibold rounded-full
                         hover:bg-purple-100 hover:scale-105 transition shadow-lg"
            >
              Resume
            </a>

            <div className="flex gap-6 justify-center md:justify-start">
              <a
                href="https://github.com/ShubhamSawant48"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-white transition hover:scale-110"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-sawant-145477319/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-400 transition hover:scale-110"
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href="https://x.com/sawant_shub_48"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-100 hover:text-blue-300 transition hover:scale-110"
              >
                <FaTwitter size={26} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Me;
