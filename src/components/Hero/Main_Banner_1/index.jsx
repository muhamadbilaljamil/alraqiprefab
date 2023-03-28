import React, { useEffect } from 'react';
import './Main_Banner_1.css'
import banner_img from '../../../assets/images/main-banner-logo.svg'
import { animate } from "./Main_Banner_1";

function Main_Banner_1() {
    useEffect(() => {
        animate();
    }, []);


    return (
        <section className="main-banner">
            <canvas id="canvas1"></canvas>
            <div className="main-banner-content container-wrapper">
                <div className="main-banner-title">
                    <p className="main-banner-title-F >">F</p>
                    <div className="title-logo">
                        <img className="pointer main-banner-title-logo " src={banner_img}
                            alt="Main Banner Logo SVG" />
                    </div>
                    <p className="main-banner-title-RNAX ">RNAX</p>
                </div>
                <div className="main-banner-subtitle">
                    Innovate with Fornax: The Blockchain for Master Nodes, NFTs, Smart Contracts, and Lightning-Fast
                    Transactions. World’s first Layer1 Blockchain with its own Native Apps & Dex.
                </div>
                <a href="/static/doc/litepaper.pdf" target="_blank">LITE PAPER 1.0</a>
            </div>
        </section>
    );
}

export default Main_Banner_1;