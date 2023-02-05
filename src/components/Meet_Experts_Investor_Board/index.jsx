import React from 'react';
import './Why_Choose_FRX.css';
import mobile_payment from '../../assets/images/Mobile Payment.svg';
import no_hidden_fee from '../../assets/images/No Hidden Fees.svg';
import protect from '../../assets/images/Protect.svg';
import transaction from '../../assets/images/Transaction.svg';
const Whu_Choose_FRX = () => {
    return (
        <section className="why-choose-frx">
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
                                <div className="card-title">Easy Mobile Payment</div>
                                <div className="card-description">You can use a Mobile device to with simple steps</div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={no_hidden_fee} alt="Payment logo" />
                                </div>
                                <div className="card-title">Easy Mobile Payment</div>
                                <div className="card-description">You can use a Mobile device to with simple steps</div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={protect} alt="Payment logo" />
                                </div>
                                <div className="card-title">Easy Mobile Payment</div>
                                <div className="card-description">You can use a Mobile device to with simple steps</div>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={transaction} alt="Payment logo" />
                                </div>
                                <div className="card-title">Easy Mobile Payment</div>
                                <div className="card-description">You can use a Mobile device to with simple steps</div>
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
