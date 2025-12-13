import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const [loveCount, setLoveCount] = useState(0);

  // Fetch initial love count from DB
  useEffect(() => {
    axios.get('http://localhost:5000/api/love')
      .then(res => setLoveCount(res.data.count))
      .catch(() => console.log("Backend offline"));
  }, []);

  // Update love count in DB
  const handleLove = () => {
    axios.post('http://localhost:5000/api/love/add')
      .then(res => setLoveCount(res.data.count))
      .catch(() => setLoveCount(prev => prev + 1)); // Optimistic update if offline
  };

  return (
    <section id="Contact" className="min-h-[80vh] flex flex-col justify-center items-center px-6 pb-20">
      <h2 className="text-5xl font-bold text-white mb-8">Get In Touch</h2>
      
      {/* Curiosity Quote */}
      <blockquote className="text-xl text-gray-400 italic mb-10 text-center max-w-lg">
        "Curiosity didn't kill the cat; it made it a <span className="text-purple-400 not-italic font-bold">Developer</span>."
      </blockquote>

      {/* Social Links */}
      <div className="flex flex-wrap justify-center gap-6 mb-16">
        <a href="mailto:your@email.com" className="flex items-center gap-3 px-6 py-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all border border-white/5">
          <FaEnvelope /> Send Email
        </a>
        <a href="#" className="flex items-center gap-3 px-6 py-3 bg-[#0A66C2] rounded-full text-white hover:opacity-90 transition-all shadow-lg shadow-blue-500/20">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="#" className="flex items-center gap-3 px-6 py-3 bg-[#333] rounded-full text-white hover:bg-[#444] transition-all border border-white/10">
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Love Count Feature */}
      <div className="flex flex-col items-center">
        <button 
          onClick={handleLove}
          className="group relative flex items-center justify-center w-20 h-20 bg-linear-to-br from-gray-800 to-black rounded-full border border-gray-700 shadow-2xl hover:border-red-500/50 transition-all active:scale-95"
        >
          <FaHeart className="text-3xl text-gray-500 group-hover:text-red-500 transition-colors duration-300 group-active:scale-125" />
          <div className="absolute -bottom-8 text-sm font-mono text-gray-500 group-hover:text-white transition-colors">
            {loveCount}
          </div>
        </button>
        <p className="mt-10 text-xs text-gray-600 uppercase tracking-widest">
          Made with Love & MERN
        </p>
      </div>
    </section>
  );
};

export default Contact;