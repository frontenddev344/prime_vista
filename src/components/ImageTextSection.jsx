
import React from "react";

const ImageTextSection = ({
  title,
  paragraphs = [],
  button,
  image,
  imageAlt = "section image",
  imageLeft = false,
}) => {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 px-6 md:px-16">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          imageLeft ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-12`}
      >
        {/* Text */}
        <div className="flex-1 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-gray-900 leading-[1.2] mb-6">
            {title}
          </h2>

          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={`text-gray-600 leading-relaxed ${
                para.className || "mb-4"
              }`}
            >
              {para.text}
            </p>
          ))}

          {button?.text && (
            <button
              onClick={button.onClick}
              className ="bg-icon inline-flex hover:bg-btn-hover transition duration-500 px-6 py-3 text-sm sm:text-lg rounded-full text-white"
            >
              {button.text}
            </button>
          )}
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-[420px] object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageTextSection;