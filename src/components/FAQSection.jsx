import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FAQSection({
  title = "Frequently Asked Questions",
  faqs = [],
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={`bg-white py-12 md:py-16 lg:py-20 px-6 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-serif text-center text-[#3b2a1d] mb-12">
          {title}
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="border border-[#3b2a1d]/40 rounded-xl overflow-hidden"
              >               
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-3 sm:py-5 bg-background text-left"
                >
                  <span className=" font-semibold font-heading text-lg sm:text-xl md:text-2xl  text-gray">
                    {item.question}
                  </span>

                  {isOpen ? (
                    <Minus className="w-5 h-5 text-[#3b2a1d]" />
                  ) : (
                    <Plus className="w-5 h-5 text-[#3b2a1d]" />
                  )}
                </button>

                {/* Content */}
                <div
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-60 py-4 bg-white" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}