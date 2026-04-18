import React from 'react';
import { Map, Landmark, BookOpen, History as HistoryIcon, Globe, Users } from 'lucide-react';

const Courses = () => {
  const secondarySubjects = [
    { 
      title: "Class 9 & 10 SST", 
      desc: "Complete coverage of History, Geography, Civics, and Economics with focus on Board patterns.", 
      icon: <Users className="text-blue-600" /> 
    },
    { 
      title: "History", 
      desc: "From the French Revolution to Modern India—explained through immersive whiteboard storytelling.", 
      icon: <HistoryIcon className="text-orange-600" /> 
    },
    { 
      title: "Geography", 
      desc: "Mastering complex topography and climate through Shashi's signature 'Mind-Mapping' technique.", 
      icon: <Globe className="text-emerald-600" /> 
    },
    { 
      title: "Political Science", 
      desc: "Deep diving into the Indian Constitution and Global Politics through logical analysis and debates.", 
      icon: <Landmark className="text-purple-600" /> 
    }
  ];

  return (
    <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3">Academic Programs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">Expertise in Humanities</h3>
          <p className="mt-4 text-slate-600 text-sm md:text-base max-w-2xl mx-auto">
            Providing a specialized learning path for Senior Secondary students and a solid 
            foundation for Secondary classes using logic-based teaching.
          </p>
        </div>
        
        {/* Grade Highlights - Adjusted for mobile centering */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mb-12 md:mb-20">
          <div className="w-full sm:w-auto flex items-center gap-3 bg-white px-6 md:px-8 py-4 rounded-2xl shadow-sm border border-blue-100">
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-full flex items-center justify-center font-bold text-blue-600 text-sm md:text-base">9-10</div>
            <div>
              <p className="font-bold text-slate-800 text-sm md:text-base">Foundation</p>
              <p className="text-[10px] md:text-xs text-slate-500">Comprehensive SST</p>
            </div>
          </div>
          <div className="w-full sm:w-auto flex items-center gap-3 bg-white px-6 md:px-8 py-4 rounded-2xl shadow-sm border border-blue-100">
            <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 bg-emerald-50 rounded-full flex items-center justify-center font-bold text-emerald-600 text-sm md:text-base">11-12</div>
            <div>
              <p className="font-bold text-slate-800 text-sm md:text-base">Specialization</p>
              <p className="text-[10px] md:text-xs text-slate-500">Hist, Geo & Pol Science</p>
            </div>
          </div>
        </div>

        {/* Subject Cards Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {secondarySubjects.map((sub, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-md border-b-4 border-transparent hover:border-blue-500 lg:hover:-translate-y-2 transition-all duration-300 group">
              <div className="mb-4 md:mb-6 p-3 bg-slate-50 w-fit rounded-xl group-hover:bg-blue-50 transition-colors">
                {/* Clone icon to handle responsive sizing */}
                {React.cloneElement(sub.icon, { size: 24 })}
              </div>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-slate-800">{sub.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {sub.desc}
              </p>
              {/* <div className="flex items-center gap-2 text-blue-600 font-semibold text-[10px] md:text-xs uppercase tracking-wider">
                <span>View Syllabus</span>
                <div className="h-px w-6 md:w-8 bg-blue-200"></div>
              </div> */}
            </div>
          ))}
        </div>

        {/* Teaching Style Note - Adjusted for mobile stacking */}
        <div className="mt-16 md:mt-24 bg-blue-900 rounded-3xl p-8 md:p-12 text-white flex flex-col lg:flex-row items-start lg:items-center gap-8 shadow-2xl overflow-hidden relative">
          <div className="relative z-10">
            <h4 className="text-xl md:text-2xl font-bold mb-4">The Shashi Prajapati Method</h4>
            <p className="text-blue-100 text-sm md:text-base leading-relaxed max-w-2xl">
              "I don't use digital projectors to show 3D maps. I use the whiteboard to build '3D Mind Maps' 
              that live in the student's memory forever. We connect every historical event to a story 
              and every geographical location to a concept."
            </p>
          </div>
          <div className="flex shrink-0 relative z-10 w-full lg:w-auto">
            <div className="w-full lg:w-auto text-center px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl font-mono text-xs md:text-sm">
              #Storytelling #Logic #NoRote
            </div>
          </div>
          {/* Decorative Circle - Scaled down for mobile */}
          <div className="absolute -right-10 -bottom-10 md:-right-20 md:-bottom-20 w-48 h-48 md:w-64 md:h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Courses;