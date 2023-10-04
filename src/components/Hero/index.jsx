import React, { useEffect } from 'react';
import './Hero.css';
import { useLocation } from 'react-router-dom';
import Nav_Bar from "./Nav_Bar";
import Main_Banner_1 from './Main_Banner_1';
import { scrollController } from "../scrollController";

const Hero = () => {
const location = useLocation();

    useEffect(() => {
        scrollController();
    }, [window.location.pathname]);

    return (
        <div className="hero">
            <div className="glass-layer"></div>
            <Nav_Bar />
            {
                 location.pathname === '/login' || location.pathname === '/signup' ?  " " :  <Main_Banner_1 />
            }
        </div>
    );
}

export default Hero;