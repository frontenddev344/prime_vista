import { NavLink } from "react-router-dom";
import barsImage from '../assets/barsImage.jpg'

const BarsImage = () => {
  return (
    <section className="relative h-[70vh] w-full">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url(${barsImage})`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-4">
        <div className="max-w-3xl text-white">

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight tracking-wide">
            WHERE FRIENDS MEET <br /> & MEMORIES BEGIN
          </h1>

          <p className="mt-4 text-sm md:text-base text-gray-200 leading-relaxed">
            Gather your people and experience moments that matter. <br />
            At Prime Vista, every visit is filled with energy, connection, and unforgettable nights.
          </p>

          <NavLink
            to="/booking"
            className="inline-block mt-6 bg-btn-hover hover:bg-icon  text-white px-6 py-2 rounded transition duration-300"
          >
            Book Now
          </NavLink>

        </div>
      </div>
    </section>
  );
};

export default BarsImage;