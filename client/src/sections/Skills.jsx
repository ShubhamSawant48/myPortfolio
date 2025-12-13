import React from 'react';

const Skills = () => {
  const skills = [
    "JavaScript (ES6+)", "React.js", "Node.js", "Express", "MongoDB", 
    "Tailwind CSS", "Python", "Git & GitHub", "REST APIs"
  ];

  return (
    <section id="Skills" className="min-h-[60vh] flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-bold text-white mb-12 border-b-2 border-purple-500 pb-2">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
        {skills.map((skill, index) => (
          <div key={index} className="px-6 py-3 bg-black/40 border border-white/10 backdrop-blur-md shadow-xl  rounded-xl text-gray-200 font-medium hover:bg-purple-600 hover:text-white hover:border-purple-500 transition-all duration-300 cursor-default">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;