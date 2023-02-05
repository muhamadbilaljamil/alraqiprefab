import React from 'react';
import logo from '../../assets/images/main-banner-logo.svg';
import Day_Counter from "../Day_Counter";

const FornaxCoin = () => {
    return (
        <section className="fornax-coin">
            <div className="container-wrapper">
                <div className="content">
                    <div className="title">
                        <p>Fornax Coin</p>
                    </div>
                    <div className="info-timer">
                        <div className="info">
                            <ul>
                                <li>
                                    <div className="circle"></div>
                                    <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                    <div className="info-text">
                                        <h3>Start</h3>
                                        <h5>Feb 8, 2022 (9:00 AM GMT)</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                    <div className="info-text">
                                        <h3>End</h3>
                                        <h5>Feb 8, 2022 (9:00 AM GMT)</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                    <div className="info-text">
                                        <h3>Acceptable</h3>
                                        <h5>Feb 8, 2022 (9:00 AM GMT)</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                    <div className="info-text">
                                        <h3>Number of token for sale</h3>
                                        <h5>Feb 8, 2022 (9:00 AM GMT)</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                    <div className="info-text">
                                        <h3>Tokens exchange rate</h3>
                                        <h5>Feb 8, 2022 (9:00 AM GMT)</h5>
                                    </div>
                                </li>
                                <li>
                                    <div className="circle"></div>
                                    <div className="logo"><img width={68} src={logo} alt="logo"/></div>
                                    <div className="info-text">
                                        <h3>Minimal Transaction</h3>
                                        <h5>Feb 8, 2022 (9:00 AM GMT)</h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="timer">
                            <h3>Token Sale ends in :</h3>
                            <div className="counter">
                                <Day_Counter/>
                            </div>
                        </div>
                    </div>
                    <div className="slider-button">
                        <div className="slider">
                            <div className="white-bar">
                                <div className="golden-bar">
                                    <div className="circle"></div>
                                </div>
                                <div className="slider-partition">
                                    <div className="parts">
                                        <div></div>
                                        <p>Pre-sale</p>
                                    </div>
                                    <div className="parts">
                                        <div></div>
                                        <p>Soft Cap</p>
                                    </div>
                                    <div className="parts">
                                        <div></div>
                                        <p>Bonus</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="button">
                            <button>BUY NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FornaxCoin;