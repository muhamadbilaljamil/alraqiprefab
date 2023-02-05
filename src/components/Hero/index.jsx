import React from 'react';
import NavBar from "../Nav_Bar/NavBar";
import MainBanner from "../MainBanner";

const Hero = () => {
    return (
        <div className="hero">
            <div className="glass-layer"></div>
            <NavBar />
            <MainBanner />
        </div>
    );
}

export default Hero;