import React from "react";
import starImage from '../assets/star_image.png'
import bannerImage from '../assets/banner_image.jpg'

const Hero = () => {
  return (
    <section className="bg-background pt-24 overflow-hidden">
      <div className="container max-w-7xl mx-auto">

        {/* TOP HEADING */}
        <h1 className="text-charcoal text-[clamp(40px,10vw,180px)] mx-auto text-center max-w-7xl leading-tight mb-16">
          From{" "}
          <span className="[-webkit-text-stroke:2px_#bc967e] text-transparent">
            City
          </span>{" "}
          Lights to Luxury Nights
        </h1>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left max-w-md mx-auto lg:mx-0">
            <div className="mb-6 flex justify-center">
              <div className="w-auto h-20 flex items-center justify-center text-[#bc967e]">
                <img src={starImage} alt="star" />
              </div>
            </div>

            <p className="text-2xl sm:text-3xl lg:text-4xl max-w-[400px] text-center text-charcoal leading-relaxed font-second">
              Discover premium hotels and vibrant bar experiences across the
              finest destinations.
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <button className="text-xl tracking-wide text-charcoal">
                GET A FREE QUOTE
              </button>

              <button className="w-10 h-10 rounded-full border border-charcoal flex items-center justify-center">
                ↗
              </button>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center z-9">
            <div className="w-full  h-[450px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-[150px] overflow-hidden shadow-md">
              <img
                src={bannerImage}
                alt="Hotel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#f3ebe3] p-6 rounded-2xl leading-none max-w-md mx-auto w-full shadow-sm">
            <h2 className="text-3xl text-center mb-6 text-charcoal">
              Reserve Your Accommodations
            </h2>

            <div className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500">CHECK-IN *</label>
                  <input type="date" className="w-full mt-1 p-2 rounded-lg bg-white text-sm" />
                </div>

                <div>
                  <label className="text-xs text-gray-500">CHECK-OUT *</label>
                  <input type="date" className="w-full mt-1 p-2 rounded-lg bg-white text-sm" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-500">ADULTS</label>
                  <select className="w-full mt-1 p-2 rounded-lg bg-white text-sm">
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500">CHILDREN</label>
                  <select className="w-full mt-1 p-2 rounded-lg bg-white text-sm">
                    {[0, 1, 2, 3].map((n) => (
                      <option key={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <button className="w-full bg-[#bc967e] text-white py-3 mt-4 hover:bg-[#a67c5b] transition rounded-full">
                CHECK AVAILABILITY
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] -mt-16 bg-[#4b2e1e] py-16 overflow-hidden">

        {/* Gradient edges (premium look) */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#4b2e1e] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#4b2e1e] to-transparent z-10" />

        <div className="flex whitespace-nowrap animate-marquee">
          <h2
            className="mx-12 text-[clamp(46px,8vw,90px)] 5xl font-serif tracking-wide text-transparent"
            style={{ WebkitTextStroke: "1px #c8a27a" }}
          >
            Discover Himachal’s Finest Stays & Scenic Nights
          </h2>

          <h2
            className="mx-12 text-[clamp(46px,8vw,90px)] font-serif tracking-wide text-transparent"
            style={{ WebkitTextStroke: "1px #c8a27a" }}
          >
            Discover Himachal’s Finest Stays & Scenic Nights
          </h2>

        </div>
      </div>
    </section>
  );
};

export default Hero;