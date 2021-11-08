import React, { useEffect } from 'react'
import Image6 from '../images/img6.webp'
import Image7 from '../images/img7.webp'
import Card from './Card'
import AOS from "aos";
import "aos/dist/aos.css";

function BodyModuleOne() {
    useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);
    const data = [
        {
            id: '1',
            image: Image6,
            head: "Body & Hand Care Gifts",
            desc: <p>Considered assortments of hand and body care, formulated to cleanse, nourish and invigorate the skin and senses.</p>
        },
        {
            id: '2',
            image: Image7,
            head: "Skin Care Gifts",
            desc: <p>Selections of cherished skin care—some for the novice with empty bathroom cabinets, others for the well-stocked expert.</p>
        },
    ]
    return (
        <>
            <section className="w-full h-[fit-content] px-5 pb-[35px]" data-aos="fade-up">
                {data.map((item) => {
                    return (
                        <Card image={item.image} head={item.head} desc={item.desc} />
                    )
                })}
            </section>
        </>
    )
}

export default BodyModuleOne
