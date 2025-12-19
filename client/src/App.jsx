// src/App.jsx
import React from "react";
import CanvasBackground from "./components/CanvasBackground";
import NavBar from "./components/NavBar";

// Import all your modular sections
// Ensure these files exist in your 'src/sections' folder
import Me from "./sections/Me";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-white selection:bg-purple-500 selection:text-white">
      
      <CanvasBackground />

      {/* Navbar (DO NOT wrap in header/sticky) */}
      <NavBar />

      <main className="relative z-10">
        <Me />

        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32">
          <About />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  );
}

