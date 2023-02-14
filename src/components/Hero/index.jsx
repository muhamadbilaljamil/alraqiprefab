import React, {useEffect} from 'react';
import './Hero.css';
import Nav_Bar from "./Nav_Bar";
import Main_Banner_1 from "./Main_Banner_1";
import {scrollController} from "../scrollController";

const Hero = () => {
    useEffect(() => {
        scrollController();
    }, []);

    return (
        <div className="hero">
            <div className="glass-layer"></div>
            <Nav_Bar/>
            <Main_Banner_1/>
        </div>
    );
}

export default Hero;