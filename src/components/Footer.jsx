import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiSend } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Logo from "../assets/logo_white.png";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#2c1a0f] to-[#4b2e1a] text-white px-6 py-16">

            <div className="w-screen relative left-1/2 right-1/2 -mx-[50vw] -mt-16 bg-transparent py-10 border-b border-primary overflow-hidden">                {/* Gradient edges (premium look) */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#4b2e1e] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#4b2e1e] to-transparent z-10" />

                <div className="flex whitespace-nowrap animate-marquee">
                    <h2
                        className="mx-12 text-[clamp(30px,8vw,50px)] 5xl font-serif tracking-wide text-transparent"
                        style={{ WebkitTextStroke: "1px #c8a27a" }}
                    >
                        Discover Himachal’s Finest Stays & Scenic Nights
                    </h2>

                    <h2
                        className="mx-12 text-[clamp(30px,8vw,50px)] font-serif tracking-wide text-transparent"
                        style={{ WebkitTextStroke: "1px #c8a27a" }}
                    >
                        Discover Himachal’s Finest Stays & Scenic Nights
                    </h2>

                </div>
            </div>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 pt-16">

                    {/* Logo + Description */}
                    <div className="md:col-span-3 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <Link to="/">
                                <div className="h-14">
                                    <img src={Logo} alt="logo" className="h-full object-contain" />
                                </div>
                            </Link>
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed mb-6">
                            Our hotel reservations offer top-rated stays, secure payments,
                            flexible options, and instant confirmation worldwide.
                        </p>

                        <div>
                            <p className="mb-3 text-sm">Follow Us On:</p>
                            <div className="flex gap-3">

                                <div className="bg-[#c89b6d] p-2 rounded-md cursor-pointer">
                                    <FaFacebookF />
                                </div>
                                <div className="bg-[#c89b6d] p-2 rounded-md cursor-pointer">
                                    <FaXTwitter />
                                </div>
                                <div className="bg-[#c89b6d] p-2 rounded-md cursor-pointer">
                                    <FaYoutube />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Support</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="hover:text-white cursor-pointer">Offers & Promotions</li>
                            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3">
                                <IoGlobeOutline /> www.example.com
                            </li>
                            <li className="flex items-center gap-3">
                                <FiPhone /> +41 22 345 77 89
                            </li>
                            <li className="flex items-center gap-3">
                                <FiSend /> Himachal Pradesh, India
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6">Subscribe Newsletter</h3>

                        <div className="flex items-center border border-[#c89b6d] rounded-full px-4 py-3 mb-4">
                            <HiOutlineMail className="mr-3 text-[#c89b6d]" />
                            <input
                                type="email"
                                placeholder="Enter Your Mail Address"
                                className="bg-transparent outline-none text-sm w-full placeholder-gray-400"
                            />
                        </div>

                        <button className="w-full flex items-center justify-between bg-[#c89b6d] text-white pl-6 pr-2 py-2 rounded-full hover:bg-[#b8865c] transition">
                            <span className="text-sm">SUBSCRIBE NOW</span>
                            <span className="bg-white text-black w-10 h-10 flex items-center justify-center rounded-full">
                                →
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}