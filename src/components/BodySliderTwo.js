import React, { useEffect } from 'react'
import Img10 from '../images/img1.webp'
import Img11 from '../images/img2.webp'
import Img12 from '../images/img3.webp'
import Img13 from '../images/img4.webp'
import Slide from './Slide'
import AOS from "aos";
import "aos/dist/aos.css";


function BodySliderOne() {
    useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);useEffect(() => {
  AOS.init({
    duration : 2000
  });
}, []);
    const data = [
        { id: '1', image: Img10, head: 'Geranium Leaf Duet', subhead: 'A gentle cleanser and aromatic balm' },
        { id: '2', image: Img11, head: 'Resurrection Duet', subhead: 'Cleanse and nourish the hands' },
        { id: '3', image: Img12, head: 'Reverence Duet', subhead: 'A sumptuous pairing for hands' },
        { id: '4', image: Img13, head: 'Resurrection Hand Purifying Duet', subhead: 'A citrus, woody, herbaceous duo' },
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
