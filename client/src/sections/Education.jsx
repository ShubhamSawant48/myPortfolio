import React from 'react';

const Education = () => {
  return (
    <section id="Education" className="min-h-[50vh] flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-bold text-white mb-12">Education</h2>
      
      <div className="relative border-l-2 border-purple-500/30 ml-3 md:ml-0 pl-8 md:pl-10 py-2 max-w-2xl w-full">
        {/* Item 1 */}
        <div className="mb-10 relative">
          <span className="absolute -left-10.75 top-1 w-6 h-6 bg-[#030014] border-4 border-purple-500 rounded-full"></span>
          <h3 className="text-2xl font-bold text-white">Bachelor of Technology</h3>
          <p className="text-purple-400 font-medium">Computer Science Engineering</p>
          <div className="flex justify-between items-center mt-1 text-gray-400 text-sm">
            <span>XYZ University, Mumbai</span>
            <span>2021 - 2025</span>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative">
          <span className="absolute -left-10.75 top-1 w-6 h-6 bg-[#030014] border-4 border-gray-600 rounded-full"></span>
          <h3 className="text-xl font-bold text-gray-300">Higher Secondary</h3>
          <p className="text-gray-500">Science Stream</p>
          <div className="flex justify-between items-center mt-1 text-gray-500 text-sm">
            <span>ABC Junior College</span>
            <span>2019 - 2021</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;