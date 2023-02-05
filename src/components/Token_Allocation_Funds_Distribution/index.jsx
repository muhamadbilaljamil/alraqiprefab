import React, { useState } from 'react';
import './Token_Allocation_Funds_Distribution.css';
import { blockchains } from "./database";
import mobile_package_tracking from '../../assets/images/Mobile Package Tracking.svg'
import people from '../../assets/images/People.svg'
import trophy from '../../assets/images/Trophy.svg'
import project_manager from '../../assets/images/Project Manager.svg'
import sankey from '../../assets/images/Sankey.svg'
import sale from '../../assets/images/Sale.svg'
import tokend from '../../assets/images/tokend.png'
import tokendm from '../../assets/images/tokendm.png'


const Token_Allocation_Funds_Distribution = () => {
    const [showCards, setShowCards] = useState(0);

    const handleOnMouseEnter = (value) => {
        setShowCards(value);

    }

    return (
        <section className="token-allocation">
            <div className="container-wrapper">
                <div className="token-allocation-wrapper">
                    <div className="main-column">
                        <h2 className="title">Tokenomics</h2>
                    </div>
                    <img src={tokend} alt="icon_image" className="tokenomics web" />
                    <img src={tokendm} alt="icon_image" className="tokenomics mobile" />
                    <div className="token-allocation-list-column">


                        <div className="token-allocation-first-row">
                            tokend
                            <ul className="status-bars-list">
                                <li style={{ '--color': '#CC0000', '--height': '152px', '--mobile-height': '85px' }} onMouseEnter={() => handleOnMouseEnter(1)} onMouseLeave={() => setShowCards(0)}>
                                    <h4>10%</h4>
                                    <div className="icon"><img src={mobile_package_tracking} alt="icon_image" /></div>
                                </li>
                                <li style={{ '--color': '#E76126', '--height': '386px', '--mobile-height': '185px' }} onMouseEnter={() => handleOnMouseEnter(2)} onMouseLeave={() => setShowCards(0)}>
                                    <h4>25%</h4>
                                    <div className="icon"><img src={people} alt="icon_image" /></div>
                                </li>
                                <li style={{ '--color': '#3C551C', '--height': '175px', '--mobile-height': '93px' }} onMouseEnter={() => handleOnMouseEnter(3)} onMouseLeave={() => setShowCards(0)}>
                                    <h4>13%</h4>
                                    <div className="icon"><img src={trophy} alt="icon_image" /></div>
                                </li>
                                <li style={{ '--color': '#806BEC', '--height': '240px', '--mobile-height': '135px' }} onMouseEnter={() => handleOnMouseEnter(4)} onMouseLeave={() => setShowCards(0)}>
                                    <h4>17%</h4>
                                    <div className="icon"><img src={project_manager} alt="icon_image" /></div>
                                </li>
                                <li style={{ '--color': '#215292', '--height': '187px', '--mobile-height': '115px' }} onMouseEnter={() => handleOnMouseEnter(5)} onMouseLeave={() => setShowCards(0)}>
                                    <h4>15%</h4>
                                    <div className="icon"><img src={sankey} alt="icon_image" /></div>
                                </li>
                                <li style={{ '--color': '#00ADAB', '--height': '320px', '--mobile-height': '160px' }} onMouseEnter={() => handleOnMouseEnter(6)} onMouseLeave={() => setShowCards(0)}>
                                    <h4>20%</h4>
                                    <div className="icon"><img src={sale} alt="icon_image" /></div>
                                </li>
                            </ul>
                        </div>
                        <div className="token-allocation-second-row">
                            <ul className="row-1">
                                <li className={showCards === 1 ? 'active' : ''} style={{ '--color': '#CC0000' }}>
                                    <div className="dot"></div>
                                    <h4>Mobile ad Platform</h4></li>
                                <li className={showCards === 2 ? 'active' : ''} style={{ '--color': '#E76126' }}>
                                    <div className="dot"></div>
                                    <h4>Team and advisor</h4></li>
                                <li className={showCards === 3 ? 'active' : ''} style={{ '--color': '#3C551C' }}>
                                    <div className="dot"></div>
                                    <h4>Reward Program</h4></li>
                            </ul>
                            <ul className="row-2">
                                <li className={showCards === 4 ? 'active' : ''} style={{ '--color': '#806BEC' }}>
                                    <div className="dot"></div>
                                    <h4>Promotion Marketing</h4></li>
                                <li className={showCards === 5 ? 'active' : ''} style={{ '--color': '#215292' }}>
                                    <div className="dot"></div>
                                    <h4>Marketing & General</h4></li>
                                <li className={showCards === 6 ? 'active' : ''} style={{ '--color': '#00ADAB' }}>
                                    <div className="dot"></div>
                                    <h4>Private/Pre-sale</h4></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Token_Allocation_Funds_Distribution;