import React from 'react'
import IgPic from '../images/ig.png';

function Footer() {
    return (
        <div>
            <div className=" text-color6 bg-color7">
                <div className="grid grid-cols-2 gap-5 text-[12px] px-5 py-[35px]">
                    <section className="flex flex-col">
                        <div className="text-sm medium">Location preferences</div>
                        <div className="border-b-color6 border-b w-full my-2"></div>
                        <div className="flex flex-row mb-2 ">
                            <span className="mr-1">Shipping:</span>
                            <a href="/" className="">Hong Kong(S.A.R)</a>
                        </div>
                        <div className="flex flex-row ">
                            <span className="mr-1">Language:</span>
                            <a href="/" className="">English</a>
                        </div>
                    </section>
                    <section className="flex flex-col">
                        <div className="text-sm medium">Sustainability</div>
                        <div className="border-b-color6 border-b w-full my-2"></div>
                        <p className="">All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. <a href="/">Learn more</a></p>
                    </section>
                </div>
                <section className="border-t-2 border-t-color6 p-5 items-center">
                    <div className="flex flex-row justify-between">
                        <div className="">©Aesop</div>
                        <div className="flex flex-row justify-between">
                            <img src={IgPic} alt="" className="w-7 h-7" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer
