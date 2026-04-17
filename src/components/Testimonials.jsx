import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialBg from '../assets/testimonialBg.jpg'

import Avtar1 from "../assets/avtar_img1.png";
import Avtar2 from "../assets/avtar_img2.png";
import Avtar3 from "../assets/avtar_img3.png";
import Avtar4 from "../assets/avtar_img4.png";

const testimonials = [
  { name: "Lucas Moore", image: Avtar1, text: "Our recent trip was flawless, thanks to Safar. Their expert planning and personalized service unforgettable!" },
  { name: "Olivia Brown", image: Avtar2, text: "Our recent trip was flawless, thanks to Safar. Their expert planning and personalized service unforgettable!" },
  { name: "James Mitchel", image: Avtar3, text: "Our recent trip was flawless, thanks to Safar. Their expert planning and personalized service unforgettable!" },
  { name: "Sophia Lee", image: Avtar4, text: "Our recent trip was flawless, thanks to Safar. Their expert planning and personalized service unforgettable!" },
];

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  // 👉 BUTTON SCROLL
  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 2;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // 👉 AUTO SCROLL
  const startAutoScroll = () => {
    const container = sliderRef.current;
    if (!container) return;

    const speed = 0.5;

    const step = () => {
      container.scrollLeft += speed;

      const halfWidth = container.scrollWidth / 2;

      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);
  };

  const stopAutoScroll = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, []);

  return (
    <section
      className="relative py-20 px-3 sm:px-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${TestimonialBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative container mx-auto">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <p className="text-primary uppercase tracking-widest text-lg mb-4">
             TESTIMONIALS
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-white">
             What Our Customers Say
            </h2>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 bg-white/80 p-2 rounded-full">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 flex items-center justify-center hover:bg-[#4b2e1e] hover:text-white rounded-full border hover:border-[#4b2e1e] cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 flex items-center justify-center hover:bg-[#4b2e1e] hover:text-white rounded-full border hover:border-[#4b2e1e] cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
            key={index}
            className="
              flex-[0_0_100%] 
              md:flex-[0_0_calc((100%-1.5rem)/2)] 
              lg:flex-[0_0_calc((100%-3rem)/3)] 
              xl:flex-[0_0_calc((100%-4.5rem)/4)]
              bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-md
            "
          >
              {/* Avatar */}
              <img
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full mb-4"
              />

              {/* Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                "{item.text}"
              </p>

              {/* Stars */}
              <div className="flex text-[#b2876b] mb-3">
                {Array(5).fill().map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Name */}
              <h4 className="text-gray-900 font-medium">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}