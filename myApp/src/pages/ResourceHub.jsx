import React from 'react';
import { FileText, Download, MapPin, HelpCircle } from 'lucide-react';

const ResourceHub = () => {

  const [showPopup, setShowPopup] = React.useState(false);


  const resources = [
    { type: "Free Notes", label: "Chapter Summaries (PDF)", icon: <FileText size={24} /> },
    { type: "Map Gallery", label: "Geography Marking Guides", icon: <MapPin size={24} /> },
    { type: "PYQs", label: "Solved Board Papers", icon: <HelpCircle size={24} /> }
  ];

  return (
    <>
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-blue-900 rounded-2xl md:rounded-3xl p-6 md:p-12 text-white overflow-hidden relative">

            <div className="relative z-10">
              {/* Header Content */}
              <div className="text-center md:text-left mb-8 md:mb-12">
                <h2 className="text-2xl md:text-4xl font-bold mb-4">Student Resource Center</h2>
                <p className="text-blue-200 text-sm md:text-base mb-0 max-w-md mx-auto md:mx-0">
                  Access all your study material in one place. Updated weekly for the 2026 Board Exams.
                </p>
              </div>

              {/* Responsive Grid: 1 column on mobile, 3 on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {resources.map((res, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer group flex flex-col items-center md:items-start text-center md:text-left"
                  >
                    <div className="mb-4 text-blue-300 group-hover:scale-110 transition-transform">
                      {res.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-1">{res.type}</h4>
                    <p className="text-sm text-blue-100 mb-6">{res.label}</p>

                    {/* Action Button - Adjusted for easier mobile clicking */}
                    {/* <button className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300 group-hover:text-white border border-blue-300/30 md:border-none px-4 py-2 md:p-0 rounded-full md:rounded-none">
                      <Download size={16} /> Download Now
                    </button> */}
                    <button
                      onClick={() => setShowPopup(true)}
                      className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300 group-hover:text-white border border-blue-300/30 md:border-none px-4 py-2 md:p-0 rounded-full md:rounded-none">
                      <Download size={16} /> Download Now
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Blur Circle - Hidden on small screens to reduce visual clutter */}
            <div className="absolute -bottom-20 -right-20 w-48 h-48 md:w-80 md:h-80 bg-blue-500 rounded-full blur-3xl opacity-30 md:opacity-20 pointer-events-none"></div>
          </div>
        </div>
      </section>
      {
        showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center shadow-xl">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Resources Coming Soon!
              </h2>
              <p className="text-slate-600 mb-6">
                We are preparing high-quality resources for you. Stay tuned!
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        )
      }
    </>
  );
};

export default ResourceHub;