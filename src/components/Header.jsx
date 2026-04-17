import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "../assets/logo_v1.png";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClasses = ({ isActive }) =>
        `font-regular ${isActive ? "text-btn-hover" : "text-light-gray"} hover:text-btn-hover`;

    return (
        <header
            className={`fixed w-full px-2  transition-all duration-300 z-99 ${scrolled ? "top-0" : "top-3"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between bg-white rounded-2xl px-4 py-2 shadow-sm">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link to="/">
                        <div className="h-10  sm:h-12 md:h-16">
                            <img src={Logo} alt="logo" className="h-full object-contain" />
                        </div>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <NavLink to="/" className={linkClasses}>Home</NavLink>
                    <NavLink to="/rooms" className={linkClasses}>Rooms</NavLink>
                    <NavLink to="/bars-and-lounges" className={linkClasses}>Bars & Lounges</NavLink>
                    <NavLink to="/about-us" className={linkClasses}>About Us</NavLink>
                    <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
                </nav>

                {/* Right Side */}
                <div className="flex items-center gap-2">
                    <NavLink to="/booking">
                        <span className="relative inline-flex overflow-hidden border border-transparent bg-btn text-white px-5 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ease-out group">
                            <span className="relative z-10 flex items-center gap-2 group-hover:text-charcoal transition-colors duration-300">
                                Book Now <ArrowUpRight size={18} className="hidden sm:block" />
                            </span>
                            <span className="absolute inset-0 bg-[#f3eae1] scale-y-0 origin-bottom transition-transform duration-300 ease-out group-hover:scale-y-100 rounded-full"></span>
                        </span>
                    </NavLink>

                    <button className="lg:hidden" onClick={() => setOpen(!open)}>
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="absolute top-full left-0 w-full lg:hidden z-50">
                    <div className="bg-white rounded-b-2xl shadow-lg p-4">
                        <nav className="flex flex-col gap-4 font-medium">
                            <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>Home</NavLink>
                            <NavLink to="/rooms" className={linkClasses} onClick={() => setOpen(false)}>Rooms</NavLink>
                            <NavLink to="/bars-and-lounges" className={linkClasses} onClick={() => setOpen(false)}>Bars & Lounges</NavLink>
                            <NavLink to="/about-us" className={linkClasses} onClick={() => setOpen(false)}>About Us</NavLink>
                            <NavLink to="/contact" className={linkClasses} onClick={() => setOpen(false)}>Contact</NavLink>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}