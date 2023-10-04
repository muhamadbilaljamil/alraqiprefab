import React from 'react';
import './FRX_Less_1270px.css';
import frx_logo from "../../../assets/images/main-banner-logo.svg";
import medical_mobile_app from "../../../assets/images/Medical Mobile App.svg";
import wallet from "../../../assets/images/wallet.svg";
import neutral_trading from "../../../assets/images/Neutral Trading.svg";
import anchor_node from "../../../assets/images/Anchor Nodes.svg";
import online_store from "../../../assets/images/Online Store.svg";
import slice from "../../../assets/images/Slice.svg";
import pos from "../../../assets/images/pos.png";
import posm from "../../../assets/images/posm.png";

const FRX_Coin_Less_1270px = () => {

    return (<div className="frx-coin-less-1270px">
        <div className="bg-layer"></div>
        <div className="frx-coin-less-1270px-content">
            <div className="header">
                <h1 className="title">What is FRX?</h1>
                <p className="subtitle">Empower Your Future with Fornax Blockchain: Lowest Fees, Highest
                    Security, Unlimited Potential for Smart Contract Development, Powered by Cutting-Edge
                    Technology, Transforming the Landscape of Decentralization.</p>
            </div>

            <div className="links">
                <ul className="left-side-col">
                    <li style={{"--i": "0", "--clr": "#1877f2"}}>
                        <div className="icon">
                            <img src={medical_mobile_app} alt="anchor node"/>
                        </div>
                        <div className="description-column">
                            <h2>FornaxSwap</h2>
                            <p>With FornaxSwap, trade confidently knowing that your digital assets are secure on the high-performance Fornax Blockchain. Take advantage of customizable liquidity pools and the ability to launch your own tokens to create a truly personalized trading experience.</p>
                        </div>
                    </li>
                    <li style={{"--i": "1", "--clr": "#ff0000"}}>
                        <div className="icon">
                            <img src={wallet} alt="anchor node"/>
                        </div>
                        <div className="description-column">
                            <h2>Fornax Wallet</h2>
                            <p>Fornax wallet is easy to use, highly secured and allows instant transactions across the
                                globe. Fornax wallet is a platform where you can securely and reliably stake, buy and
                                sell FRX Coin.</p>
                        </div>
                    </li>
                    <li style={{"--i": "4", "--clr": "#ea4c89"}}>
                        <div className="icon">
                            <img src={neutral_trading} alt="anchor node"/>
                        </div>
                        <div className="description-column">
                            <h2>Fornax Dapps</h2>
                            <p>With Dapps Support Fornax blockchian will unfold the endless world of building
                                application on top of fornax blockchain.</p>
                        </div>
                    </li>
                </ul>
                <ul className="right-side-col">
                    <li style={{"--i": "5", "--clr": "#0a66c2"}}>
                        <div className="icon">
                            <img src={anchor_node} alt="anchor node"/>
                        </div>
                        <div className="description-column">
                            <h2>Fornax Nodes</h2>
                            <p>Fornax Proof-of-stake will be investors first choice for passive income and healthiest
                                APY.</p>
                        </div>
                    </li>
                    <li style={{"--i": "6", "--clr": "#c32aa3"}}>
                        <div className="icon">
                            <img src={online_store} alt="anchor node"/>
                        </div>
                        <div className="description-column ">
                            <h2>NFT Marketplace</h2>
                            <p>Fornax blockchain NFT Market Place is unique for it's members to buy and sell
                                non-fungible token (NFT) and utilize the in fornax Metaverse</p>
                        </div>
                    </li>
                    <li style={{"--i": "9", "--clr": "#0a66c2"}}>
                        <div className="icon">
                            <img src={slice} alt="anchor node"/>
                        </div>
                        <div className="description-column">
                            <h2>Fornax Staking Pools</h2>
                            <p>Fornax shared Stacking pools will unleash the potential of investment for small
                                investor.</p>
                        </div>
                    </li>
                </ul>

            </div>
            <img src={pos} className="pos web2"/>
            <img src={posm} className="pos mobile"/>
        </div>

    </div>)
}

export default FRX_Coin_Less_1270px;