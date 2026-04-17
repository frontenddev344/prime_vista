import React from "react";
import BarVideo1 from "../assets/bars_video1.mp4"
import BarVideo2 from "../assets/bars_video2.mp4"
import BarVideoImage from "../assets/bars_mid_image.jpg"

const FoodSection = () => {
  return (
    <section className="bg-[#2b1b12] text-white  py-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

          <div className="flex flex-col items-start justify-start  space-y-6">

            <div className="w-full h-48 md:h-60 rounded-2xl overflow-hidden">
              <video
                src={BarVideo1}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl md:text-3xl font-semibold">
              Foodies club
            </h2>

            <p className="text-sm md:text-base text-[#d6cfc7] leading-relaxed max-w-md">
              Felis feugiat pulvinar gravida sem neque eros. Cubilia per imperdiet
              convallis convallis eget. Taciti senectus facilisi nostra ut
              penatibus justo congue dictumst neque.
            </p>

            <button className="bg-btn-hover hover:btn-icon px-6 py-3 rounded-full hover:opacity-90 transition capitalize">
              Reserve your table
            </button>
          </div>
          <div className="w-full h-[350px] md:h-[450px] lg:h-[520px] rounded-2xl overflow-hidden">
            <img
              src={BarVideoImage}
              alt="Chef preparing fresh food"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col items-start justify-start gap-8">

            <div className="space-y-4 ">
              <h3 className="text-2xl md:text-3xl font-semibold">
                Chefs special
              </h3>

              <p className="text-sm md:text-base text-[#d6cfc7] leading-relaxed">
                Nestled amidst scenic hills and tranquil landscapes, every
                experience feels refreshing and unhurried. The beauty of nature
                blends perfectly with a warm and relaxing atmosphere.
              </p>

              <button className="bg-btn-hover hover:btn-icon px-6 py-3 rounded-full hover:opacity-90 transition capitalize">
                see what’s special
              </button>
            </div>

            <div className="w-full h-48 md:h-60 rounded-2xl overflow-hidden">
              <video
                src={BarVideo2}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

export default FoodSection;