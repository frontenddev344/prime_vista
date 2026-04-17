import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Divider from "../assets/hero_shape_bottom.png";
import Shimla from "../assets/shimla.jpg";
import Dharamshala from "../assets/Dharamshala.jpg";
import Manali from "../assets/Manali.png";
import Kasol from "../assets/kasol.png";
import Spiti from "../assets/Spiti.png";

const categories = [
  { title: "Kasol", desc: "Backpacker vibe & riverside bars", image: Kasol },
  { title: "Spiti Valley", desc: "Raw beauty & boutique stays", image: Spiti },
  { title: "Manali", desc: "Snowy escapes & riverside stays", image: Manali },
  { title: "Shimla", desc: "Colonial charm & luxury hotels", image: Shimla },
  { title: "Dharamshala", desc: "Peaceful retreats & cafés", image: Dharamshala },
];

export default function PopularCategories() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null);


  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / 5;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };


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
    <>
      <section className="bg-background py-20 sm:py-24 lg:py-36 px-6">
        <div className="container mx-auto">


          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between mb-12">
            <h2 className="text-3xl sm:text-4xl  lg:text-5xl font-serif text-black">
              Browse Popular Categories
            </h2>


            <div className="flex items-center gap-2 bg-white/60 p-2 rounded-full">
              <button
                onClick={() => scroll("left")}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#4b2e1e] hover:text-white rounded-full border hover:border-[#4b2e1e] cursor-pointer "
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={() => scroll("right")}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#4b2e1e] hover:text-white rounded-full border hover:border-[#4b2e1e] cursor-pointer"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>


          <div
            ref={sliderRef}
            onMouseEnter={stopAutoScroll}
            onMouseLeave={startAutoScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
          >

            {[...categories, ...categories].map((item, index) => (
              <div
                key={index}
                className="
             flex-[0_0_calc((100%-1rem))] 
             sm:flex-[0_0_calc((100%-2rem)/2)]
             md:flex-[0_0_calc((100%-3rem)/3)]
             lg:flex-[0_0_calc((100%-4rem)/4)]
             xl:flex-[0_0_calc((100%-5rem)/5)]
             bg-[#ffffff4f] border border-[#ddd] rounded-2xl p-4 
             flex flex-col gap-3 hover:shadow-md transition
           "
              >
                {/* IMAGE */}
                <div className="w-full h-50 sm:h-60 rounded-xl overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold text-[#3b2a1f]">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 leading-snug">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full -mt-10">
        <img
          src={Divider}
          alt="divider"
          className="w-full h-full object-cover opacity-80"
        />
      </div>
    </>
  );
}