import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { Trophy, ChevronLeft, ChevronRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';

// Assuming your images are in the assets folder
import result2025 from '../assets/WhatsApp Image 2026-04-14 at 12.01.47 PM.jpeg';
import result2026_blue from '../assets/WhatsApp Image 2026-04-14 at 12.01.46 PM.jpeg';
import result2025_sst from '../assets/WhatsApp Image 2026-04-14 at 12.01.45 PM.jpeg';

const ResultsSlider = () => {
  const slides = [
    { img: result2025, title: "2025 Perfect Scorers" },
    { img: result2026_blue, title: "20th Class Result 2026" },
    { img: result2025_sst, title: "Social Science (SST) 2025" },
  ];

  return (
    <section className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-500 mb-4 border border-amber-500/20">
            <Trophy size={20} />
            <span className="font-bold uppercase tracking-widest text-sm">Official Records</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Our <span className="text-blue-500">Academic</span> Legacy
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Browse through our official result posters highlighting the hard work 
            of our students and the guidance of Shashi Sir.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative group">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            navigation={{
              prevEl: '.prev-btn',
              nextEl: '.next-btn',
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Autoplay, Pagination, Navigation, EffectCoverflow]}
            className="w-full py-12"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="w-[300px] md:w-[500px] lg:w-[600px]">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-800">
                  <img 
                    src={slide.img} 
                    alt={slide.title}
                    className="w-full h-auto object-contain bg-white"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <p className="text-white font-bold text-xl">{slide.title}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-all -ml-6 opacity-0 group-hover:opacity-100">
            <ChevronLeft size={24} />
          </button>
          <button className="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-all -mr-6 opacity-0 group-hover:opacity-100">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium">Want to see your name here next year?</p>
          <button className="mt-4 px-8 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/20">
            Join Excellence Classes Today
          </button>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
    </section>
  );
};

export default ResultsSlider;