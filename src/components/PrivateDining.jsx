import React from "react";
import PrivateDiningImg1 from "../assets/bars_grid_image1.jpg"
import PrivateDiningImg2 from "../assets/bars_grid_image2.jpg"
import PrivateDiningImg3 from "../assets/bars_grid_image3.jpg"
import PrivateDiningImg4 from "../assets/bars_grid_image4.jpg"


const PrivateDining = () => {
  return (
    <section className="bg-[#efefef] md:px-12 lg:px-20 py-16">
        <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div className="grid grid-cols-2 gap-4">
  <img
    src={PrivateDiningImg1}
    alt="Friends dining"
    className="w-full aspect-square object-cover"
  />
  <img
    src={PrivateDiningImg2}
    alt="Wine glasses"
    className="w-full aspect-square object-cover"
  />
  <img
    src={PrivateDiningImg3}
    alt="Pouring beer"
    className="w-full aspect-square object-cover"
  />
  <img
    src={PrivateDiningImg4}
    alt="People enjoying drinks"
    className="w-full aspect-square object-cover"
  />
</div>


<div className="space-y-6 text-center lg:text-left">
  <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black">
    Private Dining & Events
  </h2>

  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
    Prime Vista offers a selection of elegant private spaces, perfect for
    intimate dinners, celebrations, and corporate gatherings. Whether it’s
    a lunch, evening event, or special occasion, our venue is designed to
    adapt to your needs. The entire space is also available for exclusive
    bookings.
  </p>

  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
    At Prime Vista, every event is elevated with style and attention to
    detail. Our thoughtfully designed private spaces offer the perfect
    backdrop for celebrations, business meetings, and special occasions.
    From curated menus to personalized service, we create an experience
    that is both refined and unforgettable. Exclusive venue hire is also
    available for larger gatherings.
  </p>

  <button className="bg-btn-hover hover:btn-icon text-white px-6 py-3 rounded-full hover:opacity-90 transition">
    Book Now
  </button>
</div>

</div>
        </div>
     
    </section>
  );
};

export default PrivateDining;