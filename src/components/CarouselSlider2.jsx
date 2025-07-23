import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';


import { EffectCoverflow } from 'swiper/modules';
import { StarIcon } from 'lucide-react';

const CarouselSlider2 = ({ data }) => {

    return (
        <div className="w-full py-10 infinite-slider2">
            <Swiper
                dir='ltr'
                direction='horizontal'
                effect='coverflow'
                centeredSlides={true}
                grabCursor={true}
                slidesPerView={"auto"}

                slideToClickedSlide={true}
                initialSlide={2} // Center the third athlete initially
                // side click to change the slide
                // slide start from 3 slide

                onSlideChange={(swiper) => {
                    console.log('Slide changed to index:', swiper.activeIndex);
                    if (swiper.activeIndex === 0) {
                        swiper.slideTo(2); // Go to the third slide
                    }
                }}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -10,
                    depth: 200,
                    modifier: 2.5,
                    slideShadows: false,
                }}
                spaceBetween={20}
                modules={[EffectCoverflow]}
                // breakpoints={{
                //     640: {
                //         slidesPerView: 2,
                //         spaceBetween: 20,
                //     },
                //     1024: {
                //         slidesPerView: 5,
                //         spaceBetween: 0,
                //     },
                // }}
                className="swiper-container"
            >
                {data?.map((props, index) => (
                    <SwiperSlide key={index} className="group">
                        <Card {...props} />
                    </SwiperSlide>
                ))
                }
            </Swiper>
        </div >
    );
}

export default CarouselSlider2



const Card = ({ name, image, rating, subTitle, isTrending = false, sport = '', homeTown = [] }) => (
    <div
        className={`w-full h-full p-3 bg-[rgba(255,255,255,0.05)] backdrop-sepia-40 border border-[#2f2f2f] rounded-2xl bg-no-repeat bg-cover bg-center relative overflow-hidden`}
        style={{
            backgroundImage: `url(${image})`,
        }}
    >
        {isTrending && (
            <div className="absolute top-1 right-1 z-10">
                <img src="/advance-star.svg" alt="new start" className="w-[6.25rem] h-[6.25rem] object-contain" />
            </div>
        )}

        {!isTrending && (
            <div className="absolute top-[23px] right-[11px] z-10 flex gap-0">
                {Array(rating).fill().map((_, i) => (
                    <img src="/star.svg" alt="rating" className="w-[18px] h-[16px] object-contain" />
                ))}
            </div>
        )}

        <div className="absolute bottom-3 left-0 w-full">
            <div className="bg-[rgba(255,255,255,0.1)] backdrop-sepia-15  backdrop-blur-md border border-[#2f2f2f] rounded-2xl py-3 px-6 mx-3">
                <div className="flex items-center justify-between">
                    <div>
                        <h6 className="text-base font-bold text-[#d4bc6d] mb-2.5">
                            {subTitle}
                        </h6>
                        <h2 className="text-xl font-extrabold text-white">
                            {name}
                        </h2>
                    </div>
                    <div>
                        <h6 className="text-sm font-bold text-end text-white mb-2.5">
                            {sport}
                        </h6>
                        <h6 className="text-sm font-bold text-end text-white">
                            {homeTown?.length > 0 && homeTown?.join(', ')}
                        </h6>
                    </div>
                </div>
            </div>
        </div>
    </div >
);