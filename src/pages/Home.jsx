import React, { useRef } from 'react'
import CarouselSlider from '../components/CarouselSlider'
import { Link } from 'react-router-dom'

const Home = () => {
    const videoRef = useRef(null);

    const handlePlay = () => {
        videoRef.current?.play();
    };
    return (
        <>

            {/* first section */}
            <section className="bg-black min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
                <CarouselSlider data={
                    [
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                        {
                            name: "Coming Soon",
                            image: "/question-mark.jpeg",
                            // rating: 5,
                            // subTitle: "Seller",
                        },
                    ]
                } />

                <h1 className="text-[2.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6.875rem] text-center uppercase font-extrabold bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-5 leading-tight">
                    Furious 5 Incoming...
                </h1>

                <p className="text-base sm:text-lg md:text-xl text-center font-medium text-[#adadad] max-w-[95%] md:max-w-[1200px] mx-auto pb-8 md:pb-10">
                    Within the first month, we’ll be selecting the Furious 5 — our top 5 earning athletes on the platform.
                    <br className="hidden sm:block" />
                    Being part of the Furious 5 comes with exclusive perks, special recognition, and opportunities to grow your brand even further.
                    <br className="hidden sm:block" />
                    Let’s see who earns their spot. It’s game time.
                </p>

                <p className="text-base sm:text-lg md:text-xl text-center font-medium text-[#adadad] max-w-[95%] md:max-w-[1200px] mx-auto pb-8 md:pb-10">
                    Our top 5 earning athletes, leading in NIL. Members gain exclusive access to brand partnerships, priority NIL opportunities, and elevated exposure across the
                    <br className="hidden sm:block" />
                    platform. Our team reviews earnings monthly to ensure the top performers hold their place among the Furious 5.
                </p>

                <h4 className="text-[1.8rem] sm:text-[2.5rem] md:text-[3.25rem] font-extrabold text-center bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent">
                    Athletes Partnered With
                </h4>

                <h2 className="text-[3.5rem] sm:text-[5rem] md:text-[8rem] font-semibold text-white text-center mb-8 sm:mb-12 mt-[-10px] sm:mt-[-30px]">
                    10,023
                </h2>

                <Link
                    to="explore-athletes"
                    className="bg-[#d4bc6d] font-extrabold px-6 py-3 text-base sm:text-lg rounded-xl mt-[-15px] sm:mt-[-25px] transition hover:bg-[#bcae5f]"
                >
                    View Athlete Marketplace
                </Link>
            </section>

            <section className="pt-10 sm:pt-[105px]">
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-[16px] justify-center items-center px-4 text-center">
                    {['YOUR STORY', 'YOUR BRAND', 'YOUR LEGACY'].map((text, idx) => (
                        <h2
                            key={idx}
                            className="text-4xl sm:text-[5.9rem] leading-tight font-extrabold bg-[url(/texture.png)] bg-no-repeat bg-center bg-cover bg-clip-text text-transparent mb-4 sm:mb-8"
                        >
                            {text}
                        </h2>
                    ))}
                </div>

                {/* If you want the image section visible, remove `hidden` and control via breakpoints */}
                {/* <div className="mt-8 sm:mt-[87.1px] px-4 sm:px-0">
                    <div className="bg-[url(/play-boy.png)] bg-no-repeat bg-center bg-cover h-[250px] sm:h-[400px] lg:h-[704px] w-full rounded-xl sm:rounded-3xl overflow-hidden relative">

                        Play Button
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <img
                                src="/play-button.svg"
                                alt="play button"
                                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[6.688rem] lg:h-[6.375rem]"
                            />
                        </div>

                        CTA Button
                        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-[38px] left-1/2 transform -translate-x-1/2">
                            <button
                                className="text-black text-sm sm:text-base lg:text-[1.125rem] font-extrabold bg-[#d4bc6d] rounded-lg sm:rounded-xl lg:rounded-[20px] px-5 sm:px-6 lg:px-[2.125rem] py-2.5 sm:py-3.5 lg:py-6"
                                type="button"
                            >
                                Join the Family
                            </button>
                        </div>
                    </div>
                </div> */}

            </section>

            <section className="pt-10 sm:pt-[195px] pb-10 sm:pb-[98px]">
                <div className="max-w-[95%] lg:max-w-[1284px] 2xl:max-w-[1764px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Text Section */}
                        <div className="px-4 lg:px-0">
                            <h2 className="text-3xl sm:text-5xl md:text-[4.588rem] leading-tight capitalize bg-[linear-gradient(to_right,#d4bc6d,#57430d)] bg-clip-text text-transparent mb-6 sm:mb-10">
                                Launching your brand has never been this easy.
                            </h2>

                            <p className="text-base sm:text-[1.125rem] text-white mb-6 sm:mb-10">
                                At Hometown Hero, we handle everything — from the graphics to the setup to your personal storefront — so you can stay focused on the grind. Whether it’s merch, supplements, or any other NIL service, you’ll have access to over 300+ products to build, sell, and profit from.
                                <br className="hidden sm:block" />
                                <br className="hidden sm:block" />
                                You bring the hustle. We’ll handle the rest.
                            </p>

                            <Link
                                to="/athlete-signup"
                                className="inline-block bg-[#d4bc6d] rounded-full px-6 sm:px-[38px] py-3 sm:py-[13px] text-black font-medium text-sm sm:text-[0.875rem]"
                            >
                                Join the Family
                            </Link>
                        </div>

                        {/* Video Section */}
                        <div className="px-4 lg:px-0">
                            <div className="relative h-[250px] sm:h-[350px] lg:h-[500px] w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center">
                                <video
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="max-h-full max-w-full object-contain"
                                >
                                    <source src="/video2.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* third section */}
            <section className="pt-[100px] sm:pt-[140px] pb-[60px] sm:pb-[98px] px-4 sm:px-8">
                <div className="2xl:max-w-[1764px] lg:max-w-[1284px] mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20 items-center">

                        {/* Left Text Content */}
                        <div>
                            <span className="inline-block bg-[#3b3b3b] text-[#d4bc6d] text-xs sm:text-sm font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-md sm:rounded-[8px] mb-5 sm:mb-9 tracking-wider uppercase">
                                About Us
                            </span>

                            <h2 className="text-[2rem] sm:text-[2.8rem] lg:text-[3.5rem] xl:text-[4.588rem] leading-tight capitalize bg-gradient-to-r from-[#d4bc6d] to-[#57430d] bg-clip-text text-transparent mb-6 sm:mb-10">
                                NIL Marketplace built for athletes, by athletes,
                            </h2>

                            <p className="text-sm sm:text-base text-white mb-6 sm:mb-10 leading-relaxed">
                                Hometown Hero is a platform built for athletes, by athletes, designed to empower players at every stage of their journey—whether they are building their brand for the future or actively monetizing their name, image, and likeness (NIL).
                                <br /><br />
                                For athletes currently earning through NIL, Hometown Hero offers a comprehensive, AI-powered platform that helps players monetize their talents, secure brand collaborations, and maximize their earning potential. With advanced tools for real-time earnings tracking, data-driven insights, and automated brand connections, we streamline the process of building and managing your NIL success. Whether it's selling products through your storefront, such as online courses, player cards, and merchandise, securing sponsorship deals, or monetizing content, our platform provides athletes with all the tools they need to grow their brand, expand their influence, and take full control of their financial future.
                            </p>

                            <Link
                                to="/our-team"
                                className="inline-block bg-[#d4bc6d] rounded-full px-6 sm:px-[38px] py-3 sm:py-[13px] text-black font-medium text-sm sm:text-[0.875rem]"
                            >
                                Learn More
                            </Link>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src="/alek.jpeg"
                                alt="about us"
                                className="w-full max-w-[500px] sm:max-w-[650px] h-auto object-cover rounded-xl sm:rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </section>


            <section className="w-full h-[100dvh] bg-black px-4 sm:px-8">
                <div className="flex items-center justify-center h-full w-full">
                    <div className="text-center max-w-[1200px] mx-auto">
                        <span className="inline-block bg-[#3b3b3b] text-[#d4bc6d] text-xs sm:text-sm font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-md mb-5 sm:mb-9 tracking-wider uppercase">
                            Why Join Us
                        </span>

                        <h2 className="text-[2.5rem] sm:text-[4rem] md:text-[5.5rem] lg:text-[7.5rem] leading-tight capitalize font-medium bg-gradient-to-r from-[#d4bc6d] to-[#57430d] bg-clip-text text-transparent mb-6 sm:mb-10">
                            Brand Marketplace <br className="hidden sm:block" />
                            coming soon
                        </h2>

                        <Link
                            to="/athlete-signup"
                            className="inline-block bg-[#d4bc6d] rounded-full px-6 sm:px-[38px] py-3 sm:py-[13px] text-black font-medium text-sm sm:text-[0.875rem]"
                        >
                            Join the Family
                        </Link>
                    </div>
                </div>
            </section>


            <section className="w-full h-[100dvh] relative hidden">
                <img src="/download-app.svg" alt="download" className="w-full h-full object-contain" />
                <div className="absolute right-[24px] bottom-[47px] z-10">
                    <a href="#" className="bg-black rounded-full px-[56px] inline-block py-[32px] text-[#d4bc6d] font-extrabold text-[1.25rem] mb-9">
                        Download the App
                    </a>
                </div>
            </section>



        </>
    )
}

export default Home