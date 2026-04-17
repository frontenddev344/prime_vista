import React from "react";
import SubBanner from "../components/SubBanner";
import OfferBanner from "../assets/about_banner.jpg"

const OffersPromotions = () => {

  const Section = ({ title, subtitle, items }) => (
    <div className="py-6 border-b border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 mb-3">{subtitle}</p>
      )}
      {items && (
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );

  return (
    <>
      <SubBanner
        title="Offers & Promotions"
        backgroundImage={OfferBanner}
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "Offers & Promotions" },
        ]}
      />
      <div className="bg-gray-50 min-h-screen py-16 px-4">
        <div className="max-w-7xl mx-auto bg-white  rounded-lg px-4">

          <div className="pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold text-gray-900 mb-3">
              Exclusive Offers & Promotions
            </h1>
            <p className="text-gray-600">
              At <span className="font-semibold">[PRIME VISTA]</span>, we believe every stay should be memorable—and even more rewarding.
              Explore our latest offers and enjoy exclusive benefits designed to make your experience exceptional.
            </p>
          </div>


          <Section
            title="Special Deals Just for You"
            subtitle="Whether you're planning a relaxing getaway, a business trip, or a family vacation, our curated offers ensure you get the best value with unmatched comfort."
          />


          <Section
            title="Limited Time Offers"
            subtitle="Enjoy exclusive discounts on room bookings for a limited period."
            items={[
              "Up to 20% OFF on direct bookings",
              "Complimentary breakfast on selected rooms",
              "Early check-in & late check-out (subject to availability)",
            ]}
          />


          <Section
            title="Weekend Getaway Package"
            subtitle="Escape the routine and unwind in comfort."
            items={[
              "Discounted weekend rates",
              "Welcome drink on arrival",
              "Access to all hotel amenities",
            ]}
          />


          <Section
            title="Business Traveler Special"
            subtitle="Designed for professionals on the go."
            items={[
              "High-speed Wi-Fi",
              "Flexible check-in/check-out",
              "Work-friendly rooms",
            ]}
          />


          <Section
            title="Family & Group Offers"
            subtitle="Make memories with your loved ones."
            items={[
              "Special pricing for group bookings",
              "Extra bed at discounted rates",
              "Kid-friendly services",
            ]}
          />


          <Section
            title="Festive & Seasonal Offers"
            subtitle="Celebrate special moments with us."
            items={[
              "Exclusive deals during festivals & holidays",
              "Customized packages for events & celebrations",
            ]}
          />


          <Section
            title="Why Book Direct With Us?"
            subtitle="Booking directly through our website gives you:"
            items={[
              "Best price guarantee",
              "Exclusive member-only offers",
              "Priority room allocation",
              "Hassle-free booking experience",
            ]}
          />

          <div className="pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Book Your Stay Today
            </h2>
            <p className="text-gray-600 mb-4">
              Don’t miss out on these amazing deals!
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>📧 Email: your@email.com</li>
              <li>📞 Phone: +1 234 567 890</li>
              <li>📍 Address: Hotel Address</li>
            </ul>
          </div>

        </div>
      </div>
    </>

  );
};

export default OffersPromotions;