// src/App.jsx
import React, { useEffect, useState } from "react";
import CanvasBackground from "./components/CanvasBackground";
import NavBar from "./components/NavBar";

// Import all your modular sections
// Ensure these files exist in your 'src/sections' folder
import Me from "./sections/Me";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";
import Loader from "./components/Loader";

export default function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative font-sans text-white selection:bg-purple-500 selection:text-white">
      <ScrollProgress />
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
      <Footer />
    </div>
  );
}
