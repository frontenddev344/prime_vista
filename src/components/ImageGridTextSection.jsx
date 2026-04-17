// components/ImageGridTextSection.jsx
import React from "react";

const ImageGridTextSection = ({
    title,
    paragraphs = [],
    button,
    images = [],
}) => {
    return (
        <section className="w-full bg-[#d9cfc6] py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">             
                <div className="flex-1 flex items-center">
                    <div className="grid grid-cols-2 gap-6 w-full justify-items-center">

                        <div className="flex flex-col gap-6 translate-y-10 justify-center">
                            {images[0] && (
                                <img
                                    src={images[0]}
                                    alt=""
                                    className="w-full max-w-[150px] aspect-[2/2] object-cover rounded-2xl ml-auto"
                                />
                            )}

                            {images[2] && (
                                <img
                                    src={images[2]}
                                    alt=""
                                    className="w-full aspect-[5/3] object-cover rounded-2xl"
                                />
                            )}
                        </div>

                    
                        <div className="flex flex-col gap-6">
                            {images[1] && (
                                <img
                                    src={images[1]}
                                    alt=""
                                    className="w-full aspect-[3/4] object-cover rounded-2xl"
                                />
                            )}

                            {images[3] && (
                                <img
                                    src={images[3]}
                                    alt=""
                                    className="w-3/5 aspect-[5/3] object-cover rounded-2xl mr-auto"
                                />
                            )}
                        </div>

                    </div>
                </div>              
                <div className="flex-1 max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-serif text-[#3b2617] leading-tight mb-6">
                        {title}
                    </h2>

                    {paragraphs.map((para, i) => (
                        <p key={i} className="text-gray-700 mb-4 leading-relaxed">
                            {para.text}
                        </p>
                    ))}
                    {button?.text && (
                        <button
                            onClick={button.onClick}
                            className={`mt-6 bg-[#3b2617] text-white px-6 py-3 rounded-full hover:bg-[#2a1b10] transition ${button.className || ""
                                }`}
                        >
                            {button.text}
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ImageGridTextSection;