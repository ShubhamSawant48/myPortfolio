import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Me = () => {
  return (
    <section
      id="me"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-1.5 -mt-1.5"
    >
      {/* 1. Profile Image */}
      <div className="mb-8 relative">
        <div className="w-40 h-50 rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
          {/* Replace this src with your actual photo path or URL */}
          <img
            // src={profileImg} 
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* 2. Info */}
      <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-tight text-white">
        Anand <span className="text-purple-400">Nishchal</span>
      </h1>

      <h2 className="text-2xl text-purple-200 font-medium mb-2">
        Software Developer
      </h2>

      <div className="flex items-center gap-2 text-gray-400 mb-8">
        <FaMapMarkerAlt className="text-purple-500" />
        <span>Mumbai, India</span>
      </div>

      {/* 3. Resume & Socials */}
      <div className="flex flex-col items-center gap-6">
        <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-purple-50 hover:scale-105 transition-all shadow-lg">
          Download Resume
        </button>

        <div className="flex gap-6">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition transform hover:scale-110"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 transition transform hover:scale-110"
          >
            <FaLinkedin size={28} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-300 transition transform hover:scale-110"
          >
            <FaTwitter size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Me;
