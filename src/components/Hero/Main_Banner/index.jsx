import React, {useEffect} from 'react';
import './Main_Banner.css'
import logo from '../../../assets/images/main-banner-logo.svg'
import Background_Animation from "../Background_Animation";

function Main_Banner() {
    useEffect(() => {

    }, []);


    return (
        <section className="main-banner">
            <div className="container-wrapper main-banner-content">
                <div className="left-side">
                    <div className="bg-layer"></div>
                    <Background_Animation />
                    <div className="top-side">
                        <div className="title">
                            <span className="fornax">FORNAX</span>
                            <span className="underline"></span>
                        </div>
                        <div className="subtitle">
                            <p>Embrace the power of blockchain </p>
                        </div>
                        <div className="subtitle_2">
                            <p>Transform your world in ways you never thought possible. </p>
                        </div>
                        <button>WHITE PAPER</button>
                    </div>
                </div>
                <div className="right-side">
                    <div className="content">
                        <div className="title">STAKING</div>
                        <div className="line"></div>
                        <div className="block_1 blocks">
                            <div className="loader">
                                <span className="active" style={{"--i":"10"}}></span>
                                <span className="active" style={{"--i":"9"}}></span>
                                <span className="active" style={{"--i":"8"}}></span>
                                <span className="active" style={{"--i":"7"}}></span>
                            </div>
                        </div>
                        <div className="block_2 blocks">
                            <div className="loader">
                                <span className="active" style={{"--i":"10"}}></span>
                                <span className="active" style={{"--i":"9"}}></span>
                                <span className="active" style={{"--i":"8"}}></span>
                                <span className="active" style={{"--i":"7"}}></span>
                            </div>
                        </div>
                        <div className="block_3 blocks">
                            <div className="loader">
                                <span className="active" style={{"--i":"10"}}></span>
                                <span className="active" style={{"--i":"9"}}></span>
                                <span className="active" style={{"--i":"8"}}></span>
                                <span className="active" style={{"--i":"7"}}></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Main_Banner;