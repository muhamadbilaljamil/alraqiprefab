import React from 'react';
import './Hero.css';
import Nav_Bar from "./Nav_Bar";
import Main_Banner_1 from "./Main_Banner_1";

const Hero = (props) => {




    return (
        <div className="hero">
            <div className="glass-layer"></div>
            <Nav_Bar props={props} />
            <Main_Banner_1 />
        </div>
    );
}

export default Hero;