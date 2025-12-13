// src/components/Me.jsx
import React from "react";

export default function Me() {
  return (
    <div>
      <h1 className="text-6xl md:text-7xl leading-tight font-[cursive] text-white readable">
        Aarab Nishchal
      </h1>

      <p className="mt-6 max-w-xl text-lg text-white/90 readable">
        I'm a student developer passionate about crafting digital experiences —
        building intuitive web apps, exploring new technologies and turning creative
        ideas into accessible tools.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="/resume.pdf" className="bg-white/90 text-black px-6 py-3 rounded-lg shadow-xl">
          View Resume
        </a>
        <a href="#projects" className="border border-white/20 text-white px-6 py-3 rounded-lg">
          Projects
        </a>
      </div>
    </div>
  );
}
