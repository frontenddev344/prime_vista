import React from "react";
import RoomCard from './RoomCard'
import Room1 from "../assets/roomCard1.jpg";
import Room2 from "../assets/roomCard2.jpg";
import Room3 from "../assets/roomCard3.jpg";
import Room4 from "../assets/roomCard4.jpg";
import Room5 from "../assets/roomCard5.jpg";

function RoomsGrid() {
    return (
        <section className=" py-10">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]">

                    <RoomCard title="Double Room" price={1000} image={Room1}   showButton/>
                    <RoomCard
                        title="Tripple Room"
                        price={2500}
                        image={Room2}
                        showButton
                        className="lg:col-span-2"
                    />
                    <RoomCard
                        title="Delux Room"
                        price={4500}
                        image={Room3}
                        showButton
                    />           
                    <RoomCard
                        title="Junior Suite"
                        price={10000}
                        image={Room4}
                        showButton
                        className="lg:col-span-2"
                    />                
                    <RoomCard
                        title="Family Room"
                        price={7500}
                        image={Room5}
                        showButton
                        className="lg:col-span-2"
                    />
                </div>
            </div>

        </section>
    );
}

export default RoomsGrid;