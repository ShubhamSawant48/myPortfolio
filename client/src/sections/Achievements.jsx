import React from 'react';

const Achievements = () => {
  return (
    <section id="Achievements" className="min-h-[60vh] flex flex-col justify-center items-center px-6">
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Achievements & Badges</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {/* Card 1 */}
        <div className="flex items-start p-6 bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-colors">
          <div className="text-4xl mr-4">🏆</div>
          <div>
            <h3 className="text-xl font-bold text-white">Hackathon Winner</h3>
            <p className="text-purple-300 text-sm mb-2">Smart India Hackathon 2024</p>
            <p className="text-gray-400 text-sm">Led a team of 4 to build an AI-based solution for rural healthcare.</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex items-start p-6 bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-purple-500/50 transition-colors">
          <div className="text-4xl mr-4">📜</div>
          <div>
            <h3 className="text-xl font-bold text-white">Certified MERN Dev</h3>
            <p className="text-purple-300 text-sm mb-2">Udemy / Coursera</p>
            <p className="text-gray-400 text-sm">Completed advanced full-stack specialization with distinction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;