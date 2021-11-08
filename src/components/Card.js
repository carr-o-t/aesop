import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ image, head, desc }) {
    useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);
    return (
        <>
            <div className="" data-aos="fade-up">
                <div className="w-full h-[fit-content]">
                    <img src={image} alt="" className="w-full h-full" />
                </div>
                <div className="flex flex-col justify-between mb-[45px] mt-5 w-full h-[fit-content]">
                    <h3 className="mb-5 text-base font-semibold">{head} </h3>
                    <span className="text-sm text-color1">{desc}</span>
                </div>
            </div>
        </>
    )
}

export default Card
