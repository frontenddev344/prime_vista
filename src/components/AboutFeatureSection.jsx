import React from "react";

export default function AboutFeatureSection({
  title = "Why Choose Us",
  items = [],
  className = "",
}) {
  return (
    <section className={`bg-white py-20 px-6 ${className}`}>
      <div className="container text-center">
        {/* Title */}
        {title && (
          <h2 className="text-4xl md:text-5xl font-serif text-[#3b2a1d] mb-20">
            {title}
          </h2>
        )}

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <FeatureCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center">     
      <div className="bg-btn p-5 rounded-xl mb-5 transition-transform hover:scale-105 text-btn-hover">
        {icon}
      </div>   
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#3b2a1d] mb-2">
        {title}
      </h3>     
      <p className="text-gray-600 text-sm  sm:text-base font-body leading-relaxed ">
        {description}
      </p>
    </div>
  );
}