import React from 'react'
import BodyModuleOne from '../components/BodyModuleOne'
import BodyModuleThree from '../components/BodyModuleThree'
import BodyModuleTwo from '../components/BodyModuleTwo'
import BodySliderOne from '../components/BodySliderOne'
import BodySliderTwo from '../components/BodySliderTwo'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'

function Home() {
    return (
        <div style={{ width: 'calc(100vw)', overflowX: 'hidden' }}>
            <Navbar />
            <HeroSection />
            <BodySliderOne />
            <BodyModuleOne />
            <BodySliderTwo />
            <BodyModuleTwo />
            <BodyModuleThree />
            <Footer />
        </div>
    )
}

export default Home
