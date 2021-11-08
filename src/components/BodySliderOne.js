import React, { useEffect } from 'react'
import Img1 from '../images/img1.webp'
import Img2 from '../images/img2.webp'
import Img3 from '../images/img3.webp'
import Img4 from '../images/img4.webp'
import Slide from './Slide'
import AOS from "aos";
import "aos/dist/aos.css";

function BodySliderOne() {
    useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);
    const data = [
        { id: '1', image: Img1, head: 'The Listener', subhead: 'Cleanser, balm, scrub' },
        { id: '2', image: Img2, head: 'The Forager', subhead: 'Two invigorating body care staples' },
        { id: '3', image: Img3, head: 'The Advocate', subhead: 'Four hand and body care staples' },
        { id: '4', image: Img4, head: 'The Protector', subhead: 'for mantaining  aromatic balance at home' },
    ]
    return (
        <>
            <div className="pb-20" data-aos="fade-up">
                <Slide sliderData={data} />
            </div>
        </>
    )
}

export default BodySliderOne
