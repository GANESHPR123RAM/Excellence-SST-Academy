import React from 'react';
import { Award, BookOpen, Heart, Sparkles, Map, School } from 'lucide-react';
import shashi from '../assets/shashi.jpeg'; 

const AboutFaculty = () => {
  const philosophies = [
    {
      title: "Storytelling, Not Rote",
      description: "History isn't a list of dates; it's an epic drama. Shashi weaves narratives that turn dry facts into unforgettable stories.",
      icon: <Sparkles className="text-amber-500" />,
      bg: "bg-amber-50"
    },
    {
      title: "Whiteboard Mind-Mapping",
      description: "No fancy gadgets needed—using just a marker and a board, he builds '3D' mental maps that help students visualize complex geography and political structures.",
      icon: <Map className="text-emerald-500" />,
      bg: "bg-emerald-50"
    },
    {
      title: "Academic Specialization",
      description: "Targeted expertise for Class 9-10 (SST) and specialized depth for Class 11-12 (History, Geography & Political Science).",
      icon: <School className="text-blue-500" />,
      bg: "bg-blue-50"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Image Side - Responsive adjustments */}
          <div className="w-full max-w-md lg:max-w-none lg:w-2/5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-4 md:border-8 border-slate-100 shadow-2xl">
              <img 
                src={shashi}
                alt="Shashi Prajapati" 
                // Changed h-[550px] to aspect ratio for better mobile behavior
                className="w-full aspect-[4/5] lg:h-[550px] object-cover"
              />
            </div>
            
            {/* Badge - Scaled for mobile */}
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-blue-600 text-white p-4 md:p-6 rounded-2xl shadow-xl z-20">
              <p className="text-2xl md:text-4xl font-bold">8+</p>
              <p className="text-xs md:text-sm opacity-90 leading-tight">Years of Teaching<br />Excellence</p>
            </div>
            
            {/* Decorative pattern hidden on smallest screens to prevent overflow */}
            <div className="hidden sm:block absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-32 md:h-32 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] bg-[length:16px_16px] z-0"></div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3">Meet Your Mentor</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Expert Guidance by <br className="md:hidden" />
              <span className="text-slate-700 underline decoration-blue-200">Shashi Prajapati</span>
            </h3>
            
            <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
              Mastering the Social Sciences requires more than a textbook. Shashi specializes in 
              bringing <span className='font-bold'>History, Geography, and Political Science</span> to life for <span className='font-bold'>Class 11 & 12</span>, 
              while providing a rock-solid foundation in <span className='font-bold'>SST for Class 9 & 10</span>. He believes 
              the best learning happens when students can "see" the world through logic and storytelling.
            </p>

            {/* Philosophy Cards - Left aligned even on mobile for readability */}
            <div className="grid gap-4 md:gap-6 text-left">
              {philosophies.map((item, index) => (
                <div key={index} className="flex flex-row gap-4 md:gap-5 p-4 md:p-5 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-md transition-all group">
                  <div className={`shrink-0 w-10 h-10 md:w-12 md:h-12 ${item.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {/* Resizing icons for mobile */}
                    {React.cloneElement(item.icon, { size: 20 })} 
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-base md:text-lg mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-xs md:text-sm lg:text-base leading-snug">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Qualifications / CTA - Centered on mobile, left on desktop */}
            <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3 md:gap-4">
              <div className="flex items-center gap-2 bg-slate-50 px-3 md:px-4 py-2 rounded-full border border-slate-200">
                <Award size={16} className="text-blue-600" />
                <span className="text-[10px] md:text-sm font-semibold text-slate-700">M.A. History, Polytechnic</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-3 md:px-4 py-2 rounded-full border border-slate-200">
                <BookOpen size={16} className="text-emerald-600" />
                <span className="text-[10px] md:text-sm font-semibold text-slate-700">Humanities Expert</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-3 md:px-4 py-2 rounded-full border border-slate-200">
                <Heart size={16} className="text-pink-500" />
                <span className="text-[10px] md:text-sm font-semibold text-slate-700">1000+ Success Stories</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFaculty;