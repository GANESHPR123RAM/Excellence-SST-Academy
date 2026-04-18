import React, { useEffect } from 'react';
import { BookOpen, ArrowRight, PlayCircle } from 'lucide-react';
import imgUrl from '../assets/img.png';
import { NavLink } from "react-router-dom";


const students = ["Amit", "Riya", "Karan", "Neha"];
const HeroSection = () => {
  const [DemoLink, setDemoLink] = React.useState([]);

  const fetchDemoLink = async () => {
    try {
      const res = await fetch("https://excellence-sst-academy.onrender.com/api/admin/GetDemoLink");
      const data = await res.json();
      setDemoLink(data.fetchDemoLink);

    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDemoLink();
  }, []);
  return (
    <div className="relative bg-slate-50 overflow-hidden">
      {/* Decorative Blur - Hidden on mobile for performance */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 hidden lg:block">
        <div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 pb-20 md:pt-16 md:pb-24 lg:flex lg:items-center lg:gap-12">

        {/* Left Content Column */}
        <div className="lg:w-1/2 text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">
            <BookOpen size={16} />
            <span>Top Rated SST Coaching</span>
          </div>

          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.15] md:leading-tight">
            Mastering the <span className="text-blue-600">Past</span>, <br className="hidden sm:block" />
            Mapping the <span className="text-emerald-600">Future.</span>
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Making History, Geography and Political Science more than just dates and data.
            Join our interactive classes for Classes 9-12 and turn complex concepts into
            compelling stories.
          </p>

          {/* Buttons - Stack on small mobile, row on larger devices */}
          <div className="mt-10 flex flex-col items-center sm:flex-row gap-4 justify-center lg:justify-start">
            <NavLink
              to="/contact">
              <button
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 text-sm md:text-base">
                Book a Free Demo
                <ArrowRight size={20} />
              </button>
            </NavLink>

            <NavLink
              to={DemoLink[0]?.link || "#"}
              target="_blank"
            >
              <button className="flex items-center justify-center gap-2 bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold transition-all text-sm md:text-base">
                <PlayCircle size={20} className="text-blue-600" />
                Watch Sample Class
              </button>
            </NavLink>
          </div>

          {/* Social Proof */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-sm text-slate-500 font-medium">
            <div className="flex -space-x-2">
              {students.map((name, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold border-2 border-white"
                >
                  {name[0]}
                </div>
              ))}
            </div>
            <p>Trusted by 500+ Students this year</p>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 relative px-4 md:px-0">
          <div className="relative z-10 w-full aspect-square sm:aspect-video lg:aspect-auto lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl md:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src={imgUrl}
              alt="SST Coaching Class"
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay for text readability on images */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
          </div>

          {/* Stats Badge - Adjusted positioning for mobile */}
          <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 z-20 bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-slate-100 scale-90 md:scale-100">
            <p className="text-2xl md:text-3xl font-bold text-blue-600">100%</p>
            <p className="text-slate-500 text-[10px] md:text-sm font-semibold uppercase tracking-wide">Success Rate</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;