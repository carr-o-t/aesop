import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid'

function Navbar() {
    const [active, setActive] = useState(false)
    const [sticky, setSticky] = useState(false);

    const stickyNav = () => {
        if (window.scrollY >= 50) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    window.addEventListener("scroll", stickyNav);
    return (
        <>
            <nav style={{width: 'calc(100vw)'}} className={`max-w-full bg-transparent z-[99999] top-0 fixed w-full ${active ? 'bg-color3' : ''} ${sticky ? 'bg-color6 border-b border-b-color2': ''} `}>
                <div className="nav-container px-5 pt-[5px] flex flex-row justify-between items-center ">
                    <div className="nav-list-left py-5">
                        <span className="font-OpenSans font-semibold text-[23px] tracking-wide ">Aēsop</span>
                    </div>
                    <div className="nav-list-right flex justify-between flex-row py-5 items-center">
                        <span className={`font-OpenSans mr-5 tracking-tight text-[14px] ${active ? 'mr-10' : ''}`}>Cart</span>
                        {!active ? <div className={`${active ? 'relative' : ''}`}>
                            <MenuIcon className={`h-3 w-5 ${active ? 'right-full hidden trasnition-all opacity-100' : 'left-0'}`} onClick={() => setActive(!active)} />
                        </div>
                        :
                    <span className="h-5 w-5 absolute right-5 top-[33px] cursor-pointer" onClick={() => setActive(!active)}>
                        <XIcon className="h-full w-full text-color1" />
                    </span>}
                    </div>
                </div>
                <Sidebar active={active} onClick={() => setActive(false)} />
            </nav>
        </>
    )
}

function Sidebar({ active, onClick }) {
    const sideMenu = [
        { id: 1, item: 'Skin Care' },
        { id: 2, item: 'Hair' },
        { id: 3, item: 'Body & Hand' },
        { id: 4, item: 'Fragnace' },
        { id: 5, item: 'Kits & Travel' },
        { id: 6, item: 'Gifts' },
    ]
    return (
        <>

            <div style={{width: 'calc(100vw)'}} className={`absolute h-[calc(100vh-79px)] z-[100] bg-color3 w-full top-[79px] bottom-0 transition-all duration-300 ${active ? 'opacity-100 visible' : ' opacity-0 invisible'}`}>
                <div className="container mx-auto px-5 mt-5">
                    {
                        sideMenu.map(menuItem => {
                            return <div key={menuItem.id} className={`text-color1 tracking-tighter text-xl py-1 user-select-none transition-all duration-300 relative ${active ? 'right-0' : 'right-1/2'}`} style={{ transitionDelay: `${(menuItem.id * 25)}ms` }}>{menuItem.item}
                            </div>
                        })
                    }
                </div>
                <div className="mid-panel mt-5 max-w-full max-h-[fit-content]">
                    <div className="panel-content p-5 flex flex-col justify-between">
                        <a href="/" className={`text-sm text-color4 tracking-tight transition-all duration-300 delay-[175ms] ${active ? 'right-0' : 'right-1/2'}`}>
                            Read
                        </a>
                        <a href="/" className={`text-sm text-color4 tracking-tight transition-all duration-300 delay-[200ms] ${active ? 'right-0' : 'right-1/2'}`}>
                            Stores
                        </a>
                    </div>
                </div>
                <div className={`pannel-bottom bottom-0 z-50 fixed w-full max-h-[fit-content] transition-all duration-300 delay-200 ${active ? 'translate-y-0' : 'translate-y-full'}`}>
                    <div className="pannel-bottom-content flex flex-row justify-between px-5 py-[27px] bg-color5">
                        <a href="/" className="">
                            <span className="text-color4 text-sm">Login</span>
                        </a>
                        <a href="/" className="">
                            <span className="text-color4 text-sm">Search</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar