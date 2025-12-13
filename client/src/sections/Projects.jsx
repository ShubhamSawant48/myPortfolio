import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Ensure your Node server is running on port 5000
    axios.get('http://localhost:5000/api/projects')
      .then(res => setProjects(res.data))
      .catch(err => console.log("Backend offline, using placeholders"));
  }, []);

  return (
    <section id="Projects" className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
      <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-purple-500 pb-2">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.length > 0 ? projects.map((project) => (
          <div key={project._id} className="group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4 h-20 overflow-hidden">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map(tech => (
                <span key={tech} className="text-[10px] uppercase font-bold tracking-wider bg-purple-500/20 text-purple-200 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-sm font-bold text-white border-b border-purple-500 pb-1 hover:text-purple-400">
              View Project →
            </a>
          </div>
        )) : (
          <div className="col-span-full text-center text-gray-500 py-10">
            Start your backend to see your projects here.
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;