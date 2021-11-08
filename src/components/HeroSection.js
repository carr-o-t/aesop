import { ArrowSmRightIcon } from '@heroicons/react/solid';
import React from 'react'
import BgImg from '../images/bg1.webp';

function HeroSection() {

    return (
        <>
            <section className="top-0 w-full">
                <div className="">
                    <img src={BgImg} alt="" className="max-w-full max-h-full" />
                </div>
                <div className="hero bg-whitesmoke">
                    <div className="hero-body px-5 py-10">
                        <div className="hero-header">
                            <h2 className="mb-5 text-sm">
                                Anatomy of Generosity
                            </h2>
                            <h1 className="mb-1 text-2xl font-meduim tracking-[0.015em]">
                                Five conscionable Gift Kits
                            </h1>
                        </div>
                        <div className="hero-content mt-4">
                            <div className="mb-[30px]">
                                <p className="tracking-[-0.015em] text-base">
                                    Our new collection of Gift Kits is designed to recognise everyday acts of kindness, and reverberate beyond the first exchange.
                                </p>
                            </div>
                            <div className="max-w-full max-h-[fit-content]">
                                <div className="px-[23px] py-[19px] mb-[10px] flex flex-row justify-between items-center max-w-full border-color2 border-[1px] hover:bg-color7 hover:text-color6 hover:transition-all hover:ease-out-expo hover:duration-[.2s] cursor-pointer">
                                    <a href="/" className="text-sm tracking-tighter">
                                        Explore seasonal Gift Kits
                                    </a>
                                    <ArrowSmRightIcon className="h-5 w-5" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}



export default HeroSection
