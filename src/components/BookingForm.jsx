import React, { useState, useEffect } from "react";

const ROOM_TYPES = [
    { id: "double", label: "Double Room", price: 1000 },
    { id: "tripple", label: "Tripple Room", price: 2500 },
    { id: "delux", label: "Delux Room", price: 4500 },
    { id: "junior_suite", label: "Junior Suite", price: 10000 },
    { id: "family", label: "Family Room", price: 7500 },
];

const ADD_ONS = [
    { id: "breakfast", label: "Breakfast Included", price: 200 },
    { id: "airportPickup", label: "Airport Pickup", price: 500 },
    { id: "extraBed", label: "Extra Bed", price: 1000 },
];

const BookingForm = () => {
    const today = new Date().toISOString().split("T")[0];

    const [guests, setGuests] = useState({ adults: 1, children: 0 });
    const [roomType, setRoomType] = useState(ROOM_TYPES[0].id);
    const [addOns, setAddOns] = useState({});
    const [specialRequests, setSpecialRequests] = useState("");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [totalPrice, setTotalPrice] = useState(0);
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [nights, setNights] = useState(0);

    // calculate nights
    const calculateNights = () => {
        if (!checkIn || !checkOut) return 0;
        const diff = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
        return diff > 0 ? diff : 0;
    };

    // calculate total
    useEffect(() => {
        const nightCount = calculateNights();
        setNights(nightCount);

        if (nightCount <= 0) {
            setTotalPrice(0);
            return;
        }

        const room = ROOM_TYPES.find((r) => r.id === roomType);
        const basePrice = room ? room.price : 0;

        const addOnsPrice = Object.entries(addOns).reduce((sum, [key, selected]) => {
            if (selected) {
                const addOn = ADD_ONS.find((a) => a.id === key);
                return sum + (addOn ? addOn.price : 0);
            }
            return sum;
        }, 0);

        const totalGuests = guests.adults + guests.children;
        setTotalPrice((basePrice + addOnsPrice) * nightCount * totalGuests);
    }, [checkIn, checkOut, roomType, addOns, guests]);

    const toggleAddOn = (id) => {
        setAddOns((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!checkIn || !checkOut || nights <= 0) {
            setError("Please select valid check-in and check-out dates.");
            return;
        }

        setError("");
        const bookingData = { checkIn, checkOut, roomType, guests, addOns, specialRequests, totalPrice };
        console.log("Booking Confirmed:", bookingData);
        alert(`Booking Confirmed! Total Price: ₹${totalPrice.toLocaleString("en-IN")}`);
    };

    return (
        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-6xl bg-white mx-auto border border-[#45454524] grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center shadow-lg rounded-xl overflow-hidden">

                {/* Left Image */}
                <div className="w-full h-full overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200"
                        alt="Room"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Form */}
                <form className="rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col" onSubmit={handleSubmit}>
                    <h2 className="text-3xl lg:text-5xl font-charcoal font-regular mb-6">Book Your Stay</h2>
                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    {/* Dates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block text-sm text-primary mb-1">Check In Date</label>
                            <input
                                type="date"
                                min={today}
                                 placeholder="dd-mm-yyyy"
                                value={checkIn}
                                onChange={(e) => {
                                    setCheckIn(e.target.value);
                                    if (checkOut && new Date(e.target.value) >= new Date(checkOut)) setCheckOut("");
                                }}
                                className="w-full border border-icon rounded-full px-4 py-2 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-primary mb-1">Check Out Date</label>
                            <input
                                type="date"
                                min={checkIn || today}
                                placeholder="dd-mm-yyyy"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="w-full border border-icon rounded-full px-4 py-2 focus:outline-none"
                            />
                        </div>
                    </div>

                    {/* Room Type */}
                    <div className="relative w-full">
                        <select
                            value={roomType}
                            onChange={(e) => setRoomType(e.target.value)}
                            className="w-full border border-icon rounded-full px-4 py-2 pr-10 focus:outline-none appearance-none"
                        >
                            {ROOM_TYPES.map(({ id, label }) => (
                                <option key={id} value={id}>
                                    {label}
                                </option>
                            ))}
                        </select>

                        {/* Chevron */}
                        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                            <svg
                                className="w-4 h-4 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Guests */}
                    <div className="mb-6">
                        <label className="block text-sm text-primary mb-2">Guests</label>
                        <div className="space-y-3 sm:space-y-0 sm:flex sm:gap-4">
                            {["adults", "children"].map((type) => (
                                <div key={type} className="flex items-center justify-between">
                                    <span className="w-24">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                                    <div className="flex items-center gap-3">
                                        <button
                                            type="button"
                                            onClick={() => setGuests(prev => ({ ...prev, [type]: Math.max(type === "adults" ? 1 : 0, prev[type] - 1) }))}
                                            className="w-8 h-8 border border-icon rounded-full flex items-center justify-center hover:bg-gray-200"
                                        >-</button>
                                        <span className="w-6 text-center">{guests[type]}</span>
                                        <button
                                            type="button"
                                            onClick={() => setGuests(prev => ({ ...prev, [type]: prev[type] + 1 }))}
                                            className="w-8 h-8 border border-icon rounded-full flex items-center justify-center hover:bg-gray-200"
                                        >+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Add-ons */}
                    <div className="mb-6">
                        <label className="block text-sm text-primary mb-2">Add-ons / Extras</label>
                        <div className="flex flex-col gap-2">
                            {ADD_ONS.map(({ id, label, price }) => (
                                <label key={id} className="flex items-center gap-2 cursor-pointer">
                                    <input type="checkbox" checked={!!addOns[id]} onChange={() => toggleAddOn(id)} className="w-4 h-4" />
                                    <span>{label} (+₹{price})</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div className="mb-6">
                        <label className="block text-sm text-primary mb-2">Special Requests</label>
                        <textarea
                            value={specialRequests}
                            onChange={(e) => setSpecialRequests(e.target.value)}
                            placeholder="Late check-in, sea view, extra pillows..."
                            className="w-full border border-icon rounded-lg px-4 py-2 resize-none focus:outline-none"
                            rows={3}
                        ></textarea>
                    </div>

                    {/* Total & View Details */}
                    {nights > 0 && (
                        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between bg-gray-100 p-3 rounded-lg gap-2">
                            <span className="font-semibold text-lg text-center">Total: ₹{totalPrice.toLocaleString("en-IN")}</span>
                            <button type="button" onClick={() => setShowModal(true)} className="text-primary hover:underline text-sm">
                                View Details
                            </button>
                        </div>
                    )}

                    {/* Submit */}
                    <button type="submit" className="w-full bg-icon text-white py-3 rounded-full hover:bg-btn-hover transition">
                        Check Availability
                    </button>
                </form>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-auto">
                    <div className="bg-white rounded-lg shadow-lg max-w-full sm:max-w-4xl w-full overflow-auto">
                        <div className="flex justify-between items-center p-4 border-b">
                            <h3 className="text-lg font-semibold">Booking Details</h3>
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700 text-xl">&times;</button>
                        </div>
                        <div className="p-4 overflow-x-auto">
                            <table className="w-full border border-gray-200 text-sm min-w-[400px] sm:min-w-[600px]">
                                <thead>
                                    <tr className="bg-gray-100 text-center">
                                        <th className="px-2 py-1 border">Night</th>
                                        <th className="px-2 py-1 border">Room Price</th>
                                        <th className="px-2 py-1 border">Add-ons</th>
                                        <th className="px-2 py-1 border">Guests</th>
                                        <th className="px-2 py-1 border">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[...Array(nights)].map((_, i) => {
                                        const room = ROOM_TYPES.find(r => r.id === roomType);
                                        const basePrice = room ? room.price : 0;
                                        const selectedAddOns = ADD_ONS.filter(a => addOns[a.id]);
                                        const addOnsTotal = selectedAddOns.reduce((sum, a) => sum + a.price, 0);
                                        const totalGuests = guests.adults + guests.children;
                                        const nightTotal = (basePrice + addOnsTotal) * totalGuests;
                                        return (
                                            <tr key={i} className="text-center">
                                                <td className="border px-2 py-1">{i + 1}</td>
                                                <td className="border px-2 py-1">₹{basePrice.toLocaleString("en-IN")}</td>
                                                <td className="border px-2 py-1">{selectedAddOns.length ? selectedAddOns.map(a => a.label).join(", ") : "-"}<br />₹{addOnsTotal.toLocaleString("en-IN")}</td>
                                                <td className="border px-2 py-1">{totalGuests}</td>
                                                <td className="border px-2 py-1 font-semibold">₹{nightTotal.toLocaleString("en-IN")}</td>
                                            </tr>
                                        );
                                    })}
                                    <tr className="font-bold bg-gray-50 text-center">
                                        <td className="border px-2 py-1" colSpan={4}>Grand Total</td>
                                        <td className="border px-2 py-1">₹{totalPrice.toLocaleString("en-IN")}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default BookingForm;