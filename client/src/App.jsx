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
      
      {/* The Animated Background */}
      <CanvasBackground />

      {/* Sticky Navbar */}
      <header className="sticky top-4 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <NavBar />
        </div>
      </header>

      <main className="relative z-10">
        
        {/* 1. Me Section (Hero) - Full Height */}
        {/* We render Me directly because it has its own internal layout */}
        <Me />

        {/* 2. Scrollable Sections Container */}
        {/* Using your max-w-6xl to keep content centered and space-y-24 for separation */}
        <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col gap-32">
          
          <About />
          
          <Projects />
          
          <Skills />
          
          <Achievements />
          
          <Education />
          
          <Contact />
          
        </div>
      </main>
    </div>
  );
}