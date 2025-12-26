import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const [showLoveBtn, setShowLobeBtn] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        document.documentElement.classList.toggle(
          "pause-marquee",
          entry.isIntersecting
        );
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative z-10 bg-black/40 backdrop-blur-xl border-t border-white/10"
    >
      {/* rest of your footer unchanged */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-gray-300">
          {/* ABOUT */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4 text-center">
              About Me
            </h3>
            <p className="text-sm leading-relaxed text-gray-400 pl-6">
              A passionate developer focused on creating innovative solutions
              and meaningful user experiences.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#me" className="hover:text-purple-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-purple-400">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SKILLS */}
          {/* <div>
            <h3 className="text-white text-lg font-semibold mb-4">Skills</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Full Stack Development</li>
              <li>AI & Machine Learning</li>
              <li>UI / UX Design</li>
              <li>Project Management</li>
            </ul>
          </div> */}

          {/* CONNECT */}
          <div className="text-center justify-items-center">
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/ShubhamSawant48"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-600
                           flex items-center justify-center transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/shubham-sawant-145477319/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-600
                           flex items-center justify-center transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/sawant_shub_48"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-600
                           flex items-center justify-center transition hover:scale-110"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col text-center justify-center text-sm text-gray-400">
          <p>
            If this made you smile, tap the{" "}
            <button onClick={() => setShowLobeBtn((prev) => !prev)}>
              {!showLoveBtn ? "♡" : "❤️"}
            </button>
            {"  "}— Shubham Sawant
          </p>
          <p>© 2025 Shubham Sawant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
