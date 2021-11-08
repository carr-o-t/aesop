import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import './slick.css';
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !left-[-53px] z-[2]`}
            style={{ ...style }}
            onClick={onClick}
        >
            <button className="absolute prevBtn z-[2] bg-color7 !left-0 p-3 translate-x-[52px] transition-all ease-in-expo  ">
                <ChevronLeftIcon className="h-7 w-7 text-color6" />
            </button>
        </div>
    );
}

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} !right-[-53px] z-[2]`}
            style={{ ...style }}
            onClick={onClick}
        >
            <button className="absolute nextBtn z-[2] bg-color7 !right-0 p-3 translate-x-[-52px] transition-all ease-in-expo  ">
                <ChevronRightIcon className="h-7 w-7 text-color6" />
            </button>
        </div>
    );
}





function Slide({ sliderData }) {
    // const slider_data = props;
    const [oldSlide, setOldSlide] = useState(0)
    const [activeSlide, setActiveSlide] = useState(0)
    const [activeSlide2, setActiveSlide2] = useState(0)

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        beforeChange: (current, next) => {
            setOldSlide(current)
            setActiveSlide(next)
            console.log("before oldslide", oldSlide);
            console.log("before activelide", activeSlide);
        },
        afterChange: current => {
            setActiveSlide2(current)
            console.log("after", activeSlide2);
        },
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        customPaging: (i) => <div className="absolute w-full top-[-10px]"></div>,
        // appendDots: dots => {
        //     return (
        //         <div style={{ padding: '20px' }}>
        //             <ul>
        //                 {dots.map((index) => {
        //                     return (
        //                         <li></li>
        //                     );
        //                 })}
        //             </ul>
        //         </div>
        //     )
        // },


    };

    return (
        <div className="z-0">
            <Slider {...settings} dotsClass="slick-dots line-indicator" style={{ zIndex: '0' }}>
                {sliderData.map((item) => {
                    return (
                        <div key={item.id}>
                            <div className="flex flex-col text-center">
                                <div className="w-full h-[fit-content]">
                                    <img src={item.image} alt="" className="w-full h-full" />
                                </div>
                                <h5 className="font-medium text-sm my-[10px]">{item.head}</h5>
                                <div className="text-sm">{item.subhead}</div>
                            </div>
                        </div>
                    )
                })}

            </Slider>
        </div>
    );
}

export default Slide;




