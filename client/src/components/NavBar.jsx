// src/components/NavBar.jsx
import React, { useEffect, useRef, useState } from "react";

const links = [
  { id: "me", label: "Me" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // scrolling DOWN
        setShow(false);
      } else {
        // scrolling UP
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-4 left-1/2 -translate-x-1/2
        z-50 w-[90vw] max-w-7xl
        bg-white/6 backdrop-blur
        rounded-2xl py-3 px-4
        shadow-lg border border-white/10
        transition-transform duration-300 ease-out
        ${show ? "translate-y-0" : "-translate-y-24"}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="text-white font-medium pl-3">
          Shubham Sawant
        </div>

        <div className="hidden md:flex items-center gap-6 text-white/90">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="hover:underline">
              {l.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 bg-black/70 rounded-lg text-white"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
