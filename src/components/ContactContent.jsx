import React from "react";

const ContactContent = () => {
    return (
        <div className="bg-[#f4f4f4] py-20 ">
            <div className="container">
  {/* Top Cards */}
  <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">


<div className="bg-btn text-white rounded-2xl shadow-lg p-6 flex flex-col items-start sm:items-center gap-6 w-full ">
    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt=""
            className="w-full h-full object-cover"
        />
    </div>
    <div>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
            Reception Always Open
        </h3>
        <p className="text-sm sm:text-base  text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
        </p>
    </div>
</div>

<div className="bg-btn text-white rounded-2xl shadow-lg p-6 flex flex-col sm: items-start sm:items-center gap-6 w-full">
    <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
        <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt=""
            className="w-full h-full object-cover"
        />
    </div>
    <div>
        <h3 className="text-2xl lg:text-3xl font-semibold mb-6">
            Online Reservations
        </h3>
        <p className="text-sm sm:text-base  text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
        </p>
    </div>
</div>

</div>

{/* Contact Section */}
<div className="grid md:grid-cols-2 gap-12 items-start">

{/* Left Content */}
<div>
    <p className="uppercase text-sm tracking-widest text-gray-600 mb-3">
        Contact Us
    </p>
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading text-[#3b2a1e] mb-6">
        Get In Touch
    </h2>
    <p className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
        porttitor tellus vel mauris scelerisque accumsan. Maecenas quis nunc
        sed sapien dignissim pulvinar.
    </p>

    <button className="bg-icon text-white px-6 py-3 rounded-full hover:bg-btn-hover transition duration-300">
        View Prices
    </button>
</div>

{/* Form */}
<form className="space-y-4">
    <input
        type="text"
        placeholder="Name"
        className="w-full border border-gray-300 rounded-lg py-3 pl-6 pr-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#a67c5b]"
    />
    <input
        type="email"
        placeholder="Email"
        className="w-full border border-gray-300 rounded-lg py-3 pl-6 pr-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#a67c5b]"
    />
    <textarea
        placeholder="Message"
        rows="5"
        className="w-full border border-gray-300 rounded-lg py-3 pl-6 pr-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#a67c5b]"
    ></textarea>

    <button
        type="submit"
        className="w-full bg-icon text-white px-6 py-3 rounded-full hover:bg-btn-hover transition duration-300"
    >
        SEND
    </button>
</form>

</div>
            </div>
          
        </div>
    );
};

export default ContactContent;