import React from 'react';

const About = () => {
  return (
    <section id="About" className="min-h-[80vh] flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-purple-500 pb-2">About Me</h2>
      
      <div className="max-w-3xl bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-md shadow-2xl">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">My Tech Vision</h3>
        
        <p className="text-gray-300 leading-relaxed text-lg mb-6">
          I don't just write code; I build bridges between complex problems and simple solutions. 
          My vision is to use technology not just as a tool, but as a medium to create 
          <span className="text-white font-semibold"> accessible, scalable, and impactful digital experiences</span>.
        </p>

        <p className="text-gray-300 leading-relaxed text-lg">
          Whether it's optimizing a backend architecture or crafting a pixel-perfect UI, 
          I am driven by the belief that good software should feel invisible—it just works.
        </p>
      </div>
    </section>
  );
};

export default About;