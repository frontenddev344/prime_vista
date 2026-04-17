import { BedDouble, Users, Bath } from "lucide-react";
import { NavLink } from "react-router-dom";

function RoomCard({ title, price, image, className = "", showButton = false }) {
    return (
        <div className={`relative group overflow-hidden ${className}`}>
            {/* Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 ease-out"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-300"></div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col p-4 text-white">
                <div className="relative mt-auto">
                    {/* Title + Price */}
                    <div className="transition-all duration-500 group-hover:-translate-y-16 ">
                        <h3 className="text-xl md:text-2xl font-semibold">{title}</h3>
                        <p className="text-sm">{price} / Night</p>
                    </div>

                    {/* Hover Content */}
                    {showButton && (
                        <div
                            className="absolute left-0 right-0 bottom-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-between"
                        >

                            <NavLink to="/booking" className="bg-icon inline-flex hover:bg-btn-hover transition duration-500 px-4 py-2 text-sm rounded-full">
                                Book Now
                            </NavLink>

                            <div className="flex gap-3">
                                <Users size={18} />
                                <BedDouble size={18} />
                                <Bath size={18} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default RoomCard;