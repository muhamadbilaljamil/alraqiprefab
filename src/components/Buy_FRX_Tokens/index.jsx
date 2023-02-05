import React, {useState} from 'react';
import logo from '../../assets/images/main-banner-logo.svg';
import './Buying_FRX_Tokens.css';

const Buying_FRX_Tokens = () => {

    const [slideShow, setSlideShow] = useState(1)

    const handleSlideBlock = (slide_no) => {

        setSlideShow(slide_no)
    }
    return (
        <section className="buying-frx-token">
            <div className="container-wrapper">
                <div className="buy-frx-token">
                    <div className="title"><h2>BUYING THE FRX TOKEN</h2></div>
                    <div className="slide-blocks">
                        <div className="slide-block " onClick={() => handleSlideBlock(1)}>
                            <div className="slide-title">
                                <img width={60} src={logo} alt="logo image"/>
                                <h1>BUY <span>ETH </span> WITH CREDIT CARD</h1>
                            </div>
                        </div>
                        <div className={`slide-description ${slideShow === 1 ? 'active' : 'hidden'}`}>
                            <div className="bg-layer"></div>
                            <div className="slide-description-content">
                                <h2>BUY ETH WITH CREDIT CARD</h2>
                                <p>Click the “Buy ETH with Card” button to use Transak if you need to purchase ETH using
                                    your credit card, then swap the ETH for $FGHT. Make sure you have enough ETH left
                                    over
                                    to cover gas fees.</p>
                            </div>
                        </div>
                        <div className="slide-block" onClick={() => handleSlideBlock(2)}>
                            <div className="slide-title">
                                <img width={60} src={logo} alt="logo image"/>
                                <h1>BUY <span>FRX</span> WITH ETHEREUM</h1>
                            </div>
                        </div>
                        <div className={`slide-description ${slideShow === 2 ? 'active' : 'hidden'}`}>
                            <div className="bg-layer"></div>
                            <div className="slide-description-content">
                                <h2>BUY ETH WITH CREDIT CARD</h2>
                                <p>Click the “Buy ETH with Card” button to use Transak if you need to purchase ETH using
                                    your credit card, then swap the ETH for $FGHT. Make sure you have enough ETH left
                                    over
                                    to cover gas fees.</p>
                            </div>
                        </div>
                        <div className="slide-block" onClick={() => handleSlideBlock(3)}>
                            <div className="slide-title">
                                <img width={60} src={logo} alt="logo image"/>
                                <h1>BUY <span> FRX</span> WITH BITCOIN</h1>
                            </div>
                        </div>
                        <div className={`slide-description ${slideShow === 3 ? 'active' : 'hidden'}`}>
                            <div className="bg-layer"></div>
                            <div className="slide-description-content">

                                <h2>BUY ETH WITH CREDIT CARD</h2>
                                <p>Click the “Buy ETH with Card” button to use Transak if you need to purchase ETH using
                                    your credit card, then swap the ETH for $FGHT. Make sure you have enough ETH left
                                    over
                                    to cover gas fees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Buying_FRX_Tokens;