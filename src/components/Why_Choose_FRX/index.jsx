import React from 'react';
import './Why_Choose_FRX.css';
import mobile_payment from '../../assets/images/Mobile Payment.svg';
import no_hidden_fee from '../../assets/images/No Hidden Fees.svg';
import protect from '../../assets/images/Protect.svg';
import transaction from '../../assets/images/Transaction.svg';
const Whu_Choose_FRX = () => {
    return (
        <section className="why-choose-frx" id="why_frx_token">
            <div className="container-wrapper">
                <div className="why-choose-frx-wrapper">
                    <div className="bg-layer"></div>
                    <div className="main-content">
                        <div className="header">
                            <h2>Why Choose our coin?</h2>
                            <p>The first Community which simplifies and standardizes data with blockchain technology to
                                incentives its community.</p>
                        </div>
                        <div className="cards-list">
                            <div className="card">
                                <div className="icon">
                                    <img src={mobile_payment} alt="Payment logo" />
                                </div>
                                <div className="card-title">Highest APY</div>
                                <div className="card-description">~15%</div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={no_hidden_fee} alt="Payment logo" />
                                </div>
                                <div className="card-title">Lowest Fee</div>
                                <div className="card-description">~ $0.000005</div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={protect} alt="Payment logo" />
                                </div>
                                <div className="card-title">Highest Security</div>
                                <div className="card-description">99.99%</div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={transaction} alt="Payment logo" />
                                </div>
                                <div className="card-title">Fast Transaction </div>
                                <div className="card-description">We talk about nano seconds</div>
                            </div>
                        </div>
                        <div className="gradient-border"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whu_Choose_FRX;
