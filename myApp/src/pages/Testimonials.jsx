import React, { useState, useEffect } from 'react';
import { Star, Quote, Trophy, Users, CheckCircle } from 'lucide-react';


const Testimonials = () => {
    const [topToppers, setTopToppers] = useState([]);
    const [topers, setTopers] = useState([]);
    const [activeYear, setActiveYear] = useState("All");
    const [activeCategory, setActiveCategory] = useState("All");
    const [loading, setLoading] = useState(true);

    const fetchTopers = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/admin/GetTopers");
            const data = await res.json();
            setTopers(data.fetchTopers);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    const fetchTopersReview = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/admin/GetTopersReview");
            const data = await res.json();
            setTopToppers(data.fetchTopersReview);

        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTopers();
        fetchTopersReview();
    }, []);

    // Filters
    const filteredByCategory =
        activeCategory === "All"
            ? topers
            : topers.filter(s => s.Class === activeCategory);

    const filteredScorers =
        activeYear === "All"
            ? filteredByCategory
            : filteredByCategory.filter(s => s.Year === activeYear);

    // Dynamic filter options from DB
    const years = ["All", ...new Set(topers.map(t => t.Year))];
    const categories = ["All", ...new Set(topers.map(t => t.Class))];

    return (
        <>
            <section className="py-12 md:py-20 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3">Wall of Fame</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 px-2">Our Pride: Top Results</h3>
                    </div>


                    {/* Filter Tabs - Flex Wrap for Mobile */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 md:px-8 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${activeCategory === category
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                        {years.map((year) => (
                            <button
                                key={year}
                                onClick={() => setActiveYear(year)}
                                className={`px-5 md:px-8 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${activeYear === year
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                                    }`}
                            >
                                {year}
                            </button>
                        ))}
                    </div>
                    {/* Grid: 2 columns on mobile, 3 on tablets, 4 on desktop */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
                        {filteredScorers.map((student, i) => (
                            <div key={i} className="bg-white p-4 md:p-6 rounded-2xl shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
                                <div className="w-20 h-20 md:w-32 md:h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={`http://localhost:3000/${student.path}`}
                                        alt={student.name} className="w-full h-full object-cover" />
                                </div>
                                <h4 className="font-bold text-slate-800 text-sm md:text-base leading-tight h-10 flex items-center justify-center">{student.name}</h4>
                                <p className="font-black text-xl md:text-2xl text-blue-600 my-1">{student.Marks}/100</p>
                                <p className="text-[10px] md:text-xs text-slate-500 font-semibold uppercase tracking-tighter">Result: {student.Year}</p>
                                <p className="text-[10px] md:text-xs text-slate-400 mt-2">{student.Class}</p>
                            </div>
                        ))}
                    </div>

                    {/* Founder Quote - Adjusted padding and text size */}
                    <div className="max-w-4xl mx-auto bg-blue-600 rounded-2xl md:rounded-3xl p-6 md:p-10 text-white relative overflow-hidden shadow-xl">
                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 md:gap-8">
                            <Quote size={80} className="absolute -top-6 -left-6 opacity-10 md:size-[120px]" />
                            <div className="text-center md:text-left">
                                <p className="text-lg md:text-2xl italic leading-relaxed mb-6">
                                    "Our goal is to build a bright future through experienced and dedicated teaching.
                                    Seeing students score 100/100 in Board Exams is our greatest achievement."
                                </p>
                                <div className="flex items-center justify-center md:justify-start gap-4">
                                    <div className="h-px w-8 md:w-12 bg-blue-300"></div>
                                    <p className="font-bold text-base md:text-lg">Shashi Prajapati, Founder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Topper Testimonials - Grid 1 col mobile, 3 col desktop */}
            <section className="py-12 md:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                        {topToppers.map((student, i) => (
                            <div key={i} className="bg-slate-50 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-transparent hover:border-blue-200 transition-all">
                                <div className="flex gap-1 text-amber-500 mb-4 md:mb-6">
                                    {[...Array(5)].map((_, starI) => <Star key={starI} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-slate-700 text-sm md:text-base italic mb-6 md:mb-8 leading-relaxed">"{student.message}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {student.Name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm md:text-base">{student.Name}</h4>
                                        <p className="text-xs font-bold text-blue-600">Marks: {student.Marks}</p>
                                        <p className="text-[10px] text-slate-400">Class {student.Class} Result {student.Year}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Final Stats - Adjusted spacing for mobile wrap */}
                    <div className="mt-12 md:mt-20 pt-10 border-t border-slate-100 flex flex-wrap justify-around md:justify-center gap-8 md:gap-24">
                        <div className="flex items-center gap-3 md:gap-4">
                            <CheckCircle className="text-emerald-500 w-6 h-6 md:w-8 md:h-8" />
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-slate-800">100/100</p>
                                <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase">Top Results</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4">
                            <Users className="text-blue-500 w-6 h-6 md:w-8 md:h-8" />
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-slate-800">90+</p>
                                <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase">Marks Count</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 md:gap-4">
                            <Trophy className="text-amber-500 w-6 h-6 md:w-8 md:h-8" />
                            <div>
                                <p className="text-xl md:text-2xl font-bold text-slate-800">Excellence</p>
                                <p className="text-[10px] md:text-sm text-slate-500 font-medium uppercase">Board Performance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;