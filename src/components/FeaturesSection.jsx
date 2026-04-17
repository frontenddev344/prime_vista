import ReadMoreButton from "./ReadMoreButton";
import Avtar1 from '../assets/avtar_img1.png'
import Avtar2 from '../assets/avtar_img2.png'
import Avtar3 from '../assets/avtar_img3.png'
import Avtar4 from '../assets/avtar_img4.png'
import FeaturedImage1 from '../assets/featured_image1.jpg'
import FeaturedImage2 from '../assets/featured_image2.jpg'

export default function HotelHero() {

    const iconColor = "#b2876b";
    return (
        <section className="bg-background py-16 sm:py-20 ">
            <div className="container mx-auto space-y-16">

                {/* Row 1 */}
                <div className="grid lg:grid-cols-[2fr_1fr] gap-10 items-center mb-6 sm:mb-8 lg:mb-16">

                    <div>
                        <p className="text-lg tracking-wide text-icon mb-4">
                            Browse Your Hotel & Resort
                        </p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif leading-tight text-black">
                            Experience Comfort <br />
                            Convenience Your Perfect <br />
                            Accommodation Awaits
                        </h1>
                    </div>
                    <div className="bg-white rounded-2xl p-8 relative shadow-sm">
                        <span className="absolute top-6 right-6 text-6xl lg:text-7xl xl:text-8xl text-gray-300">
                            01
                        </span>

                        <div className="mb-6">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z" fill="none" stroke="#b2876b" stroke-miterlimit="10" stroke-width="32"></path><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z" fill="none" stroke="#b2876b" stroke-miterlimit="10" stroke-width="32"></path><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" fill="none" stroke="#b2876b" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"></path><path fill="none" stroke="#b2876b" stroke-miterlimit="10" stroke-width="32" d="M256 48v416M464 256H48"></path></svg>
                            </div>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-serif mb-6 pt-10">
                            Flexible Search
                        </h3>

                        <p className="text-black leading-relaxed mb-6">
                            Travel is the ultimate way to explore the world, embrace new
                            cultures, and create unforgettable memories.
                        </p>

                        <ReadMoreButton text="EXPLORE NOW" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="grid lg:grid-cols-3 gap-6 items-center">


                    <div>
                        <div className="flex -space-x-3 mb-6">
                            <img src={Avtar1} className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src={Avtar2} className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src={Avtar3} className="w-10 h-10 rounded-full border-2 border-white" />
                            <img src={Avtar4} className="w-10 h-10 rounded-full border-2 border-white" />
                        </div>

                        <h2 className="text-xl sm:text-2xl !font-body  leading-[1.5] text-black">
                            Unleash Your Inner Explorer. <br />
                            Discover Your Next Destination. <br />
                            Your Next Adventure
                        </h2>
                    </div>



                    <div className="bg-[#b2876b] text-white rounded-2xl p-6 sm:p-8 relative shadow-sm">
                        <span className="absolute top-4 right-6 text-5xl sm:text-6xl lg:text-7xl text-white/40">
                            02
                        </span>

                        <div className="mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                                <svg aria-hidden="true" class="e-font-icon-svg e-far-building" viewBox="0 0 448 512" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M128 148v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12zm140 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-128 96h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm128 0h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm-76 84v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm76 12h40c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12zm180 124v36H0v-36c0-6.6 5.4-12 12-12h19.5V24c0-13.3 10.7-24 24-24h337c13.3 0 24 10.7 24 24v440H436c6.6 0 12 5.4 12 12zM79.5 463H192v-67c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v67h112.5V49L80 48l-.5 415z"></path></svg>
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 pt-6">
                            Trusted Listings
                        </h3>

                        <p className="text-sm sm:text-base leading-relaxed mb-6 text-white/90">
                            Hotels and resorts across countless destinations wherever you travel,
                            we’re already there it’s a story.
                        </p>

                        <ReadMoreButton text="READ MORE" />
                    </div>



                    <div className="flex justify-center">
                        <div className="relative w-80 h-80 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">

                            <div className="absolute inset-0 rounded-full border border-dashed border-[#b2876b]" />

                            <img
                                src={FeaturedImage1}
                                alt="Hotel Experience"
                                className="w-full h-full object-cover rounded-full p-2"
                            />
                        </div>
                    </div>

                </div>

                {/* Row 3 */}
                <div className="grid lg:grid-cols-3 gap-6 items-center">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 relative shadow-sm">
                        <span className="absolute top-4 right-6 text-5xl sm:text-6xl lg:text-7xl text-gray-300">
                            03
                        </span>

                        <div className="mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <svg aria-hidden="true" class="e-font-icon-svg e-fas-images" fill={iconColor} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80h336zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48zM256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-96 144l55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160v-48z"></path></svg>
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 pt-6">
                            Beautiful View
                        </h3>

                        <p className="text-sm sm:text-base leading-relaxed mb-6 text-black/80">
                            Wake up to breathtaking scenery every morning. Our hotels and resorts
                            are located in some of the world’s most stunning destinations.
                        </p>

                        <ReadMoreButton text="READ MORE" />
                    </div>

                    <div className="flex justify-center">
                        <div className="relative w-80 h-80 sm:w-72 sm:h-72 md:w-80 md:h-80 xl:w-96 xl:h-96">

                            <div className="absolute inset-0 rounded-full border border-dashed border-[#b2876b]" />
                            <img
                                src={FeaturedImage2}
                                alt="Beautiful View"
                                className="w-full h-full object-cover rounded-full p-2"
                            />
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl p-6 sm:p-8 relative shadow-sm">
                        <span className="absolute top-4 right-6 text-5xl sm:text-6xl lg:text-7xl text-gray-300">
                            04
                        </span>

                        <div className="mb-6">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
                            <svg aria-hidden="true" class="e-font-icon-svg e-fas-dog" fill={iconColor} viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg"><path d="M298.06,224,448,277.55V496a16,16,0,0,1-16,16H368a16,16,0,0,1-16-16V384H192V496a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V282.09C58.84,268.84,32,233.66,32,192a32,32,0,0,1,64,0,32.06,32.06,0,0,0,32,32ZM544,112v32a64,64,0,0,1-64,64H448v35.58L320,197.87V48c0-14.25,17.22-21.39,27.31-11.31L374.59,64h53.63c10.91,0,23.75,7.92,28.62,17.69L464,96h64A16,16,0,0,1,544,112Zm-112,0a16,16,0,1,0-16,16A16,16,0,0,0,432,112Z"></path></svg>
                            </div>
                        </div>

                        <h3 className="text-xl sm:text-2xl md:text-3xl font-serif mb-4 pt-6">
                            Pet Friendly Hotels
                        </h3>

                        <p className="text-sm sm:text-base leading-relaxed mb-6 text-black/80">
                            Our pet-friendly hotels are designed to welcome every member of your
                            family, including your beloved pets.
                        </p>

                        <ReadMoreButton text="READ MORE" />
                    </div>

                </div>

            </div>
        </section>
    );
}