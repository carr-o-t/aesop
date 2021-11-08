import React from 'react'
import Image8 from '../images/img6.webp'
import Image9 from '../images/img7.webp'
import Card from './Card'

function BodyModuleOne() {
    const data = [
        {
            id: '1',
            image: Image8,
            head: "Fragnant formulations",
            desc: <p>Discover fragrant gifts of varied character, inspired by such far-flung locales as the Japanese forest, the alpine peak and the Moroccan souk. </p>
        },
        {
            id: '2',
            image: Image9,
            head: "Favourite formulations",
            desc: <p>A considered assortment of our most sought-after formulations—from signature hand washes to potent facial hydrators, to transportive aromas for the home.</p>
        },
    ]
    return (
        <>
            <section className="w-full h-[fit-content] px-5 pb-[35px]">
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
