import React from 'react'
import CarouselSlider2 from '../components/CarouselSlider2'
// import CarouselSlider2 from '../components/flipcarousel'

const OurTeam = () => {
    return (
        <>
            <section className="py-16 bg-black px-4 sm:px-6 lg:px-8">
                <h1 className="text-[clamp(2.5rem,10vw,10rem)] mt-10 mb-4 text-center capitalize font-bold bg-gradient-to-r from-[#d4bc6d] to-[#57430d] bg-clip-text text-transparent">
                    Our Leaders
                </h1>

           


                <CarouselSlider2
                    data={[
                        {
                            name: 'Saif Khan',
                            image: '/team5.jpg',
                            rating: 0,
                            subTitle: 'Chief Technology Officer (CTO)',
                            sport: 'Soccer',
                            homeTown: ['Karachi', 'Pakistan'],
                            backheading: "Saif Khan",
                            about: "Role at Hometown Hero: As CTO, Saif leads technology, platform development, and automation, aligning product innovation with business growth and scalable infrastructure.\n\nResume of Accomplishments: Saif’s discipline as a soccer player and 5+ years in sales, marketing, and digital strategy help him build intelligent systems that merge creativity, technology, and automation for great customer experiences."

                        },
                        {
                            name: 'Thomas Jenkins',
                            image: '/team3.jpeg',
                            rating: 0,
                            subTitle: 'Vice President',
                            sport: 'Wrestling, Rugby',
                            homeTown: ['Bridgewater', 'Virginia'],
                            backheading: "Thomas Jenkins",
                            about: "Role at Hometown Hero: As Vice President, Thomas drives growth strategy and operational infrastructure, refining processes and building scalable systems for long-term success.\n\nResume of Accomplishments: Thomas has launched sales programs for global companies, worked at Bloomberg, and sold products internationally. His mix of corporate expertise and entrepreneurial experience helps major brands implement high-impact sales systems."

                        
                        },
                        {
                            name: 'Alek Giotopoulos Moore',
                            image: '/team1.jpeg',
                            rating: 0,
                            subTitle: 'CEO',
                            sport: 'Basketball',
                            homeTown: ['Sydney', 'Australia'],
                            backheading: "Alek Giotopoulos Moore",
                            about: "Role at Hometown Hero: As CEO, Alek leads management, operations, sales, and client support, ensuring every athlete receives personalized guidance and top-tier service.\n\nResume of Accomplishments: Alek played for Prolific Prep with future NBA stars. His leadership and management expertise have helped scale Hometown Hero into a leading NIL marketplace, delivering value to athletes, brands, and teams."

                        
                        },
                        {
                            name: 'Benjamin Jenkins',
                            image: '/team2.jpeg',
                            rating: 0,
                            subTitle: 'Founder',
                            sport: 'Basketball',
                            homeTown: ['Tokyo', 'Japan'],
                            backheading: "Benjamin Jenkins",
                            about: "Role at Hometown Hero: Founder Benjamin leads strategic vision and global growth, tackling complex challenges from international partnerships to innovation and new revenue streams.\n\nResume of Accomplishments: Benjamin played for a top-ranked prep basketball team alongside future NBA stars. Inspired by gaps in athlete support, he founded Hometown Hero to empower athletes with branding, mentorship, and NIL resources."
                        
                        },
                        {
                            name: 'Coming Soon',
                            image: '/question-mark.jpeg',
                            backheading: "Coming Soon",
                            about: "Coming Soon"
                        
                        },
                    ]}
                />

                <h1 className="text-[clamp(2rem,6vw,5rem)] mt-16 mb-4 text-center capitalize font-medium bg-gradient-to-r from-[#d4bc6d] to-[#57430d] bg-clip-text text-transparent">
                    About Project
                </h1>

                <p className="text-sm sm:text-base text-center font-medium text-[#adadad] max-w-5xl mx-auto mt-6 leading-relaxed px-2 sm:px-0">
                    Hometown Hero was created by former athletes who know what it’s like to chase the dream.
                    We’ve lived the grind, the sacrifice, and the uncertainty — and we built this platform to change
                    the game for athletes everywhere. Now, it’s bigger than us. Hometown Hero is on a mission to
                    become the world’s largest NIL ecosystem, giving athletes in every continent, country, and city
                    access to the tools and technology they need to grow their brand and get paid for the value they
                    bring. For too long, athletes haven’t earned what they deserve — but that era is over. We’re
                    here to help you take full advantage of this golden age of opportunity and finally take ownership
                    of your name, image, and likeness. This is your moment. Your story, your brand, your legacy —
                    in your control. And we’re here to help you own every part of it. Welcome to the future of sports.
                    Welcome to Hometown Hero.
                </p>
            </section>

            {/* Hidden for now */}
            <section className="py-16 hidden">
                <h1 className="text-[clamp(2rem,6vw,5rem)] mt-12 mb-6 text-center capitalize font-medium bg-gradient-to-r from-[#d4bc6d] to-[#57430d] bg-clip-text text-transparent">
                    Our Staff
                </h1>

                <div className="flex flex-wrap justify-center gap-3 sm:gap-5 px-4 mb-10">
                    {['Country Agent', 'Advisors', 'Operations', 'Graphic Designers', 'Video Editors'].map((label) => (
                        <button
                            key={label}
                            className="bg-gray-800 text-[#D4BC6D] text-sm font-medium py-3 px-6 sm:px-8 rounded-full shadow-lg transition-colors duration-300 ease-in-out hover:text-black hover:bg-[#D4BC6D]"
                            type="button"
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <CarouselSlider2
                    data={[
                        {
                            name: 'HARRY FROTH',
                            image: '/agents.svg',
                            rating: 0,
                            subTitle: 'Founder & CEO',
                        },
                        {
                            name: 'HARRY FROTH',
                            image: '/agents.svg',
                            rating: 0,
                            subTitle: 'Founder & CEO',
                        },
                        {
                            name: 'HARRY FROTH',
                            image: '/agents.svg',
                            rating: 0,
                            subTitle: 'Founder & CEO',
                        },
                        {
                            name: 'HARRY FROTH',
                            image: '/agents.svg',
                            rating: 0,
                            subTitle: 'Founder & CEO',
                        },
                        {
                            name: 'HARRY FROTH',
                            image: '/agents.svg',
                            rating: 0,
                            subTitle: 'Founder & CEO',
                        },
                    ]}
                />
            </section>
        </>
    )
}

export default OurTeam
