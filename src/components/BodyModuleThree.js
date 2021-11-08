import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ArrowSmRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Img14 from '../images/img14.jpg';
import Img15 from '../images/img15.webp';
import Img16 from '../images/img16.jpg';
import AOS from "aos";
import "aos/dist/aos.css";

const sliderData = [
    { id: '1', image: Img14, sub: 'Aesop K11 Musea' },
    { id: '2', image: Img15, sub: 'Aesop New Town Plaza' },
    { id: '3', image: Img16, sub: 'Aesop Hollywood Road' },
]


function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !left-[0] z-[2]`}
            style={{ ...style }}
            onClick={onClick}
        >
            <button className="absolute prevBtn z-[2] bg-color7 !left-0 p-3 ">
                <ChevronLeftIcon className="h-7 w-7 text-color6" />
            </button>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !right-[0] z-[2]`}
            style={{ ...style }}
            onClick={onClick}
        >
            <button className="absolute nextBtn z-[2] bg-color7 !right-0 p-3 ">
                <ChevronRightIcon className="h-7 w-7 text-color6" />
            </button>
        </div>
    );
}


function BodyModuleThree() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        customPaging: (i) => <div className="absolute w-full top-[-10px]"></div>,
        cssEase: "linear",
        // appendDots: dots => {
        //     return (
        //         <div style={{ padding: '20px' }}>
        //             <ul style={{ padding: '0' }}>
        //                 {dots.map((index) => {
        //                     return (
        //                         <li key={index} style={{ width: `calc(100% / ${sliderData.length})` }}></li>
        //                     );
        //                 })}
        //             </ul>
        //         </div>
        //     )
        // },


    };
    useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);

    return (
        <>
            <div className="flex flex-col pb-20" data-aos="fade-up">
                <div className="mb-[30px] px-5 text-color7">
                    <div className="mb-[30px] text-[25px] font-semibold">Store Locator</div>
                    <div className="text-base">Our consultants are available to host you in-store and provide tailored guidance on gift purchases.</div>
                    <div className="flex flex-row justify-between px-[23px] py-[19px] mt-[30px] mb-2 border-[1px] border-color2 hover:bg-color7 hover:text-color6 hover:transition-all hover:ease-out-expo hover:duration-[.2s] cursor-pointer">
                        <div className="text-sm">Find a nearby store</div>
                        <ArrowSmRightIcon className="h6 w-6" />
                    </div>
                </div>
                <div className="z-0 right-0 pl-5" >
                    <Slider {...settings} dotsClass="slick-dots line-indicator" style={{ zIndex: '0' }}>
                        {sliderData.map((item) => {
                            return (
                                <div key={item.id}>
                                    <div className="flex flex-col">
                                        <div className="w-full h-[fit-content]">
                                            <img src={item.image} alt="" className="w-full h-full" />
                                        </div>
                                    </div>
                                    <div className="text-sm text-color8 mt-3 ">{item.sub}</div>
                                </div>
                            )
                        })}

                    </Slider>
                </div>
            </div>

        </>
    );
}

export default BodyModuleThree
