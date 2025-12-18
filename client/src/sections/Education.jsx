import React from "react";

const educationData = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institute: "XYZ University, Mumbai",
    duration: "2021 – 2025",
    highlights: [
      "Strong foundation in computer science fundamentals",
      "Hands-on experience with software development and problem-solving",
      "Actively involved in technical and academic projects",
    ],
  },
  {
    degree: "Higher Secondary Education",
    field: "Science Stream",
    institute: "ABC Junior College",
    duration: "2019 – 2021",
    highlights: [
      "Focused on Mathematics, Physics, and Computer Science",
      "Built analytical thinking and logical problem-solving skills",
    ],
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen w-full flex flex-col items-center px-6 py-24"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-white mb-16 text-center">
        Education
        <p className="text-sm text-purple-300 mt-2 font-normal">
          Academic background and learning journey
        </p>
      </h2>

      {/* Timeline Wrapper */}
      <div className="relative max-w-4xl w-full">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-purple-100" />

        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-16 mb-16">
            {/* Timeline Dot */}
            <span className="absolute left-[6px] top-7 w-4 h-4 rounded-full bg-[#030014] border-4 border-purple-100" />

            {/* Glass Card */}
            <div className="bg-white/5 border border-white/15 backdrop-blur-xl rounded-2xl p-8 shadow-xl">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                <h3 className="text-2xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <span className="text-sm text-gray-300 mt-1 md:mt-0">
                  {edu.duration}
                </span>
              </div>

              <p className="text-purple-400 font-medium mb-1">
                {edu.field}
              </p>

              <p className="text-gray-300 mb-4">
                {edu.institute}
              </p>

              {/* Bullet Points */}
              <ul className="space-y-3 text-gray-300">
                {edu.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-purple-400 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
