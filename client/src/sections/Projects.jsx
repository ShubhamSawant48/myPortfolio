import React, { useEffect, useState } from "react";
import axios from "axios";
import { Github, ExternalLink, Code } from "lucide-react"; // Using lucide-react for modern icons
import { BASE_URL } from "../utils/constants";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch data from your backend
    axios
      .get(BASE_URL + "/api/projects")
      .then((res) => {
        setProjects(res.data);
      })
      .catch((err) => console.log("Backend offline"));
  }, []);

  return (
    <section
      id="Projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-bold text-white mb-16 tracking-tight">
        Featured <span className="text-purple-400">Projects</span>
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.length > 0 ? (
          projects.map((project) => (
            /* --- THE CARD --- */
            <div
              key={project._id}
              className="group flex flex-col h-full bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm"
            >
              {/* 1. Title & Icon */}
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <Code
                  className="text-gray-500 group-hover:text-purple-400 transition-colors"
                  size={24}
                />
              </div>

              {/* 2. Description */}
              <p className="text-gray-400 leading-relaxed mb-6 grow">
                {project.description}
              </p>

              {/* 3. Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium text-purple-200 bg-purple-500/10 border border-purple-500/20 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* 4. Action Buttons (Bottom) */}
              <div className="flex gap-4 mt-auto">
                {/* Code Button (Outlined) */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 text-white font-medium hover:bg-white/10 transition-all"
                >
                  <Github size={18} /> Code
                </a>

                {/* Demo Button (Gradient Fill) */}
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-linear-to-r from-purple-600 to-indigo-600 text-white font-medium hover:opacity-90 transition-all shadow-lg shadow-purple-500/20"
                >
                  <ExternalLink size={18} /> Demo
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            Loading projects from database...
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
