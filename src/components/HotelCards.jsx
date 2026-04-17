import { Heart, BedDouble, User } from "lucide-react";
import CardImage1 from '../assets/hotel_card1.png'
import CardImage2 from '../assets/hotel_card2.png'
import CardImage3 from '../assets/hotel_card3.png'
import CardImage4 from '../assets/hotel_card4.png'
import CardImage5 from '../assets/hotel_card5.png'
import CardImage6 from '../assets/hotel_card6.png'
import { Link } from "react-router-dom";

export default function HotelCards() {
  const hotels = [
    {
      title: "Himalayan Golden Retreat",
      price: 250,
      image: CardImage1,
      desc: "Luxury stay in Manali with panoramic views of the Himalayas and private balcony.",
    },
    {
      title: "Snowpeak Mountain Lodge",
      price: 180,
      image: CardImage2,
      desc: "Cozy alpine lodge in Solang Valley, ideal for skiing and winter adventures.",
    },
    {
      title: "Kasol Riverside Inn",
      price: 120,
      image: CardImage3,
      desc: "Charming riverside stay in Kasol with access to local cafes and nature trails.",
    },
    {
      title: "Spiti Serenity Resort",
      price: 300,
      image: CardImage4,
      desc: "Boutique resort in Spiti Valley, blending modern comforts with raw mountain beauty.",
    },
    {
      title: "Shimla Heritage Hotel",
      price: 220,
      image: CardImage5,
      desc: "Colonial-style heritage hotel in Shimla, steps from the famous Mall Road.",
    },
    {
      title: "Dharamshala Peace Retreat",
      price: 150,
      image: CardImage6,
      desc: "Tranquil retreat with Himalayan views and yoga sessions in Dharamshala.",
    },
  ];



  const iconColor = "#b2876b";
  return (
    <section className=" py-20 px-6">
      <div className="container mx-auto text-center">

        {/* TOP TEXT */}
        <p className="text-icon text-lg mb-2">
          Browse Your Hotel & Resort
        </p>

        <h2 className="text-5xl font-serif text-black mb-24">
          Comfortable Spaces For You
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <div
              key={index}
              className="bg-white border border-[#F3EAE2B8] rounded-3xl p-5 flex flex-col gap-4 shadow-sm hover:shadow-lg transition  transform hover:shadow-lg hover:-translate-y-1"
            >
              {/* TOP INFO */}
              <div className="flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <BedDouble size={16} color={iconColor} />
                    <span>Double</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <User size={16} color={iconColor} />
                    <span>2 Person</span>
                  </div>
                </div>

                {/* HEART */}
                <button className="bg-[#a67c5b] text-white p-2 rounded-md">
                  <Heart size={16} />
                </button>
              </div>

              {/* PRICE */}
              <p className="text-gray-700 text-left">
                From <span className="text-black font-semibold">${hotel.price}</span> per night
              </p>

              {/* IMAGE */}
              <div className="w-full h-52 rounded-xl overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BOTTOM CONTENT */}
              <div className=" rounded-2xl p-5 flex flex-col gap-3 text-left"
                style={{
                  backgroundColor: "transparent",
                  backgroundImage: "linear-gradient(180deg, #FAF5F1 0%, #FBEDE2 100%)",
                }}>
                <h3 className="text-2xl font-serif text-black">
                  {hotel.title}
                </h3>

                <p className="text-sm text-gray-700">
                  {hotel.desc}
                </p>
                
                <Link
                  to="/rooms"
                  className="flex items-center gap-2 text-sm font-medium text-black hover:underline"
                >
                  EXPLORE NOW →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}