import React, { useState } from 'react';
import logo from '../../assets/images/main-banner-logo.svg';
import './Buying_FRX_Tokens.css';






const Buying_FRX_Tokens = () => {

    const [slideShow, setSlideShow] = useState(1)

    const handleSlideBlock = (slide_no) => {
        setSlideShow(slide_no)
        // startPayment()
    }
    return (
        <section className="buying-frx-token" id="token_sale">
            <div className="container-wrapper">
                <div className="buy-frx-token">
                    <div className="title"><h2>BUYING THE FRX COIN</h2></div>
                    <div className="slide-blocks">
                        <div className="slide-block " onClick={() => handleSlideBlock(1)}>
                            <div className="slide-title">
                                <img width={30} src={logo} alt="logo image" />
                                <h1>BUY <span>FRX </span> WITH USDT</h1>
                            </div>
                        </div>
                        <div className={`slide-description ${slideShow === 1 ? 'active' : 'hidden'}`}>
                            <div className="bg-layer"></div>
                            <div className="slide-description-content">
                                <h2>BUY FRX WITH USDT</h2>

                                <h3>Step 1
                                    Connect your Wallet</h3>
                                <p>Use Metamask to connect your wallet in seconds.</p>
                                <h3>Step 2
                                    Confirm Transaction</h3>
                                <p>The minimum is $50.</p>
                                <h3>Step 3
                                    Claim Tokens</h3>
                                <p>Congratulations! You can claim your FRX after the presale ends.</p>

                            </div>
                        </div>
                        <div className="slide-block" onClick={() => handleSlideBlock(2)}>
                            <div className="slide-title">
                                <img width={30} src={logo} alt="logo image" />
                                <h1>BUY <span>FRX</span> WITH ETHEREUM</h1>
                            </div>
                        </div>
                        <div className={`slide-description ${slideShow === 2 ? 'active' : 'hidden'}`}>
                            <div className="bg-layer"></div>
                            <div className="slide-description-content">
                                <h2>BUY FRX WITH ETHEREUM</h2>

                                <h3>Step 1
                                    Connect your Wallet</h3>
                                <p>Use Metamask to connect your wallet in seconds.</p>
                                <h3>Step 2
                                    Confirm Transaction</h3>
                                <p>The minimum is 0.03 ETH</p>
                                <h3>Step 3
                                    Claim Tokens</h3>
                                <p>Congratulations! You can claim your FRX after the presale ends.</p>

                            </div>
                        </div>
                        {/* <div className="slide-block" onClick={() => handleSlideBlock(3)}>
                            <div className="slide-title">
                                <img width={30} height={30} src={logo} alt="logo image" />
                                <h1>BUY <span>FRX</span> WITH WITH BNB</h1>
                            </div>
                        </div>
                        <div className={`slide-description ${slideShow === 3 ? 'active' : 'hidden'}`}>
                            <div className="bg-layer"></div>
                            <div className="slide-description-content">

                                <h2>BUY FRX WITH BNB</h2>

                                <h3>Step 1
                                    Connect your Wallet</h3>
                                <p>Use Metamask to connect your wallet in seconds.</p>
                                <h3>Step 2
                                    Confirm Transaction</h3>
                                <p>The minimum is 0.15 BNB.</p>
                                <h3>Step 3
                                    Claim Tokens</h3>
                                <p>Congratulations! You can claim your FRX after the presale ends.</p>

                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Buying_FRX_Tokens;