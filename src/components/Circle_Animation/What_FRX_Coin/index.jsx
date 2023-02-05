import React from 'react';
import './What_FRX_Coin.css';
import anchor_node from '../../assets/images/Anchor Nodes.svg';
import medical_mobile_app from '../../assets/images/Medical Mobile App.svg';
import wallet from '../../assets/images/wallet.svg';
import neutral_trading from '../../assets/images/Neutral Trading.svg';
import online_store from '../../assets/images/Online Store.svg';
import slice from '../../assets/images/Slice.svg';
import frx_logo from '../../assets/images/main-banner-logo.svg';
const What_FRX_Coin = () => {
    return (
        <section className="what-frx-coin" id="what_is_fornax">
            <div className="container-wrapper">
                <div className="frx-coin-content">
                    <div className="header">
                        <h1 className="title">What is FRX Coin?</h1>
                        <p className="subtitle">The first Community which simplifies and standardizes data with
                            blockchain technology to incentives its community.</p>
                    </div>
                    <div className="frx-coin-content-description">
                        <div className="center-logo">
                            <img src={frx_logo} alt="frx-logo" />
                        </div>
                        <div className="second-circle active">
                            <li style={{ "--i": "0", "--clr": "#1877f2" }}>
                                <div className="icon">
                                    <img src={medical_mobile_app} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "1", "--clr": "#ff0000" }}>
                                <div className="icon">
                                    <img src={wallet} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "4", "--clr": "#ea4c89" }}>
                                <div className="icon">
                                    <img src={neutral_trading} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "5", "--clr": "#0a66c2" }}>
                                <div className="icon">
                                    <img src={anchor_node} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "6", "--clr": "#c32aa3" }}>
                                <div className="icon">
                                    <img src={online_store} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "9", "--clr": "#0a66c2" }}>
                                <div className="icon">
                                    <img src={slice} alt="anchor node" />
                                </div>
                            </li>
                        </div>
                        <div className="third-circle"></div>
                        <div className="links active">
                            <li style={{ "--i": "0", "--clr": "#1877f2" }}>
                                <div className="icon">
                                    <img src={medical_mobile_app} alt="anchor node" />
                                </div>
                                <div className='description des-1'>
                                    <div className="description-column">
                                        <h2>Fitforward App</h2>
                                        <p>Highly secure, allows instant transactions across geographies.</p>
                                    </div>
                                </div>
                            </li>
                            <li style={{ "--i": "1", "--clr": "#ff0000" }}>
                                <div className="icon">
                                    <img src={wallet} alt="anchor node" />
                                </div>
                                <div className='description des-2'>
                                    <div className="description-column">
                                        <h2>Fornax Wallet</h2>
                                        <p>Highly secure, allows instant transactions across geographies.</p>

                                    </div>
                                </div>
                            </li>
                            <li style={{ "--i": "2", "--clr": "#25d366" }}>
                                <div className="icon">
                                    <img src={anchor_node} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "3", "--clr": "#1da1f2" }}>
                                <div className="icon">
                                    <img src={anchor_node} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "4", "--clr": "#ea4c89" }}>
                                <div className="icon">
                                    <img src={neutral_trading} alt="anchor node" />
                                </div>
                                <div className='description des-3'>
                                    <div className="description-column">
                                        <h2>Fornax Dapps</h2>
                                        <p>Highly secure, allows instant transactions across geographies.</p>

                                    </div>
                                </div>
                            </li>
                            <li style={{ "--i": "5", "--clr": "#0a66c2" }}>
                                <div className="icon">
                                    <img src={anchor_node} alt="anchor node" />
                                </div>
                                <div className='description des-4'>
                                    <div className="description-column">
                                        <h2>Fornax Nodes</h2>
                                        <p>Highly secure, allows instant transactions across geographies.</p>

                                    </div>
                                </div>
                            </li>
                            <li style={{ "--i": "6", "--clr": "#c32aa3" }}>
                                <div className="icon">
                                    <img src={online_store} alt="anchor node" />
                                </div>
                                <div className='description des-5'>
                                    <div className="description-column ">
                                        <h2>NFT Marketplace</h2>
                                        <p>Highly secure, allows instant transactions across geographies.</p>
                                    </div>
                                </div>
                            </li>
                            <li style={{ "--i": "7", "--clr": "#1da1f2" }}>
                                <div className="icon">
                                    <img src={anchor_node} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "8", "--clr": "#ea4c89" }}>
                                <div className="icon">
                                    <img src={anchor_node} alt="anchor node" />
                                </div>
                            </li>
                            <li style={{ "--i": "9", "--clr": "#0a66c2" }}>
                                <div className="icon">
                                    <img src={slice} alt="anchor node" />
                                </div>
                                <div className='description des-6'>
                                    <div className="description-column">
                                        <h2>Fornax Staking Pools</h2>
                                        <p>Highly secure, allows instant transactions across geographies.</p>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}


export default What_FRX_Coin;