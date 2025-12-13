// src/components/NavBar.jsx
import React from "react";

const links = [
  { id: "me", label: "Me" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="bg-white/6 backdrop-blur rounded-2xl py-3 px-4 shadow-lg border border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white/90" />
          <div className="text-white font-medium">Aarab Nishchal</div>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white/90">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:underline">
              {l.label}
            </a>
          ))}
          <a href="/resume.pdf" className="ml-4 px-4 py-2 bg-black/70 rounded-lg text-white">
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
