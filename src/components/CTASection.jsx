import React from "react";

export default function CTASection({
  title = "Plan Your Stay With Us",
  description = "Whether you’re traveling for business, leisure, or a special occasion, we’re here to make your visit exceptional.",
  buttonText = "Book Now",
  onClick,
  className = "",
}) {
  return (
    <section className={`bg-background py-20 px-6 text-center ${className}`}>
      <div className="max-w-3xl mx-auto">        
        <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">
          {title}
        </h2>       
        <p className="text-gray-800 text-base md:text-lg mb-8">
          {description}
        </p>      
        <button
          onClick={onClick}
          className="bg-icon text-white px-8 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-btn-hover"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}