import React from 'react';

// --- Skill Bar Component ---
const SkillBar = ({ skillName, percentage }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1">{skillName}</h3>
      <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
        {/* Filled Bar */}
        <div 
          className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full transition-all duration-500" 
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Skill Circle */}
        <div 
          className="absolute w-4 h-4 bg-white dark:bg-gray-900 border-2 border-orange-500 rounded-full shadow-md transition-all duration-500"
          style={{ 
            left: `calc(${percentage}% - 8px)`, 
            top: '50%',
            transform: 'translateY(-50%)'
          }} 
        ></div>
      </div>
    </div>
  );
};

// --- Main About Me Section ---
const AboutMeHybridSection = () => {
  const IMAGE_URL = "/images/profile.png"; 

  return (
    <section
      id="aboutme"
      className="scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 font-['Poppins'] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: IMAGE FRAME */}
        <div className="relative flex flex-col items-center justify-center min-h-[670px]">
          
          {/* Orange Badge/Overlay */}
          <div 
            className="absolute top-[50px] lg:top-[50px] left-1/2 -translate-x-[60%] w-[200px] h-[40px] bg-orange-500/60 rounded-sm z-50 animate-glow-pulse"
          ></div>

          {/* Gradient Border Frame */}
          <div className="relative w-96 h-96 rounded-[60%] z-10"> 
            <div 
              className="w-full h-full rounded-[60%] p-[6px]" 
              style={{ background: "conic-gradient(from 140deg, rgba(255, 102, 0, 0.6), rgba(181, 168, 160, 0.6), rgba(176, 205, 179, 0.95))" }}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 relative overflow-visible"> 
                <img 
                  src={IMAGE_URL} 
                  alt="Muhammad Umair, UI/UX Designer" 
                  className="absolute h-auto object-contain rounded-full z-10 scale-125"
                  style={{ width: '800px', top: '-187px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: ABOUT + SKILLS */}
        <div className="text-left order-first lg:order-last">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra.
          </p>

          <div className="space-y-4">
            <SkillBar skillName="UX" percentage={85} /> 
            <SkillBar skillName="Website Design" percentage={90} />
            <SkillBar skillName="App Design" percentage={95} />
            <SkillBar skillName="Graphic Design" percentage={80} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeHybridSection;
