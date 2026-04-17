import React from "react";
import BarFeature1 from '../assets/bar_feature1.jpg'
import BarFeature2 from '../assets/bar_feature2.jpg'
import BarFeature3 from '../assets/bar_feature3.jpg'


const features = [
    {
        title: "SIGNATURE DRINKS",
        description:
            "Crafted cocktails and premium beverages that perfectly complement your mood and elevate every moment.",
        image:BarFeature1,
            
    },
    {
        title: "EXQUISITE CUISINE",
        description:
            "A diverse menu featuring rich flavors, fresh ingredients, and dishes designed to satisfy every craving.",
        image:        BarFeature2,
    },
    {
        title: "UNFORGETTABLE AMBIENCE",
        description:
            "A stylish setting with warm lighting and elegant interiors, creating the perfect atmosphere for every occasion.",
        image:BarFeature3,
        
    },
];

const DiscoverBars = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4">
                    Discover <span className="text-icon"> Prime Vista</span>
                </h2>
                <p className="text-sm font-semibold tracking-wide mb-6">
                    Elegance • Taste • Experience
                </p>

                {/* Description */}
                <p className="text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                    At <span className="font-semibold">Prime Vista</span>, we bring together refined flavors,
                    warm hospitality, and a vibrant atmosphere. Whether you're here for a
                    relaxed evening or a special celebration, every detail is designed to
                    elevate your experience. From handcrafted dishes to thoughtfully curated
                    spaces, we redefine modern dining with style and comfort.
                </p>

                {/* Cards */}
                <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm border border-[#02010124] p-6 hover:shadow-md transition overflow-hidden"
                        >
                            <div className="overflow-hidden rounded-2xl mb-6"> 
                                <img
                                src={item.image}
                                alt={item.title}
                                className=" h-80 w-full object-cover hover:scale-105 transition transform duration-500"
                            />
                            </div>

                            <h3 className="font-semibold text-2xl md:text-3xl lg:text-2xl tracking-wide mb-3">
                                {item.title}
                            </h3>
                            <p className="text-black/800 text-sm sm:text-base leading-relaxed font-regular">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiscoverBars;