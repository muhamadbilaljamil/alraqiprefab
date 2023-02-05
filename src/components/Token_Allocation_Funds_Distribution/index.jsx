import React, {useState} from 'react';
import './Supported_Block_Chain.css';
import {blockchains} from "./database";
import down_arrow from '../../assets/images/Down Arrow.svg'
import forward_arrow from '../../assets/images/forword_arrow.svg'
import analysis from '../../assets/images/Analytics.svg'
import arch from '../../assets/images/Arch.svg'
import timer from '../../assets/images/Timer.svg'
import eth_logo from '../../assets/images/ethereum-logo-EC6CDBA45B-seeklogo 1.svg'
import solana from '../../assets/images/Solana_logo 1.svg'
import chain_link from '../../assets/images/chainlink-link-logo 1.svg'

const Supported_Block_Chain = () => {
    const [showCards, setShowCards] = useState(1);
    const [list, setList] = useState(blockchains.slice(0, 3))
    console.log('list: ', list);
    const handleButtonClick = (value) => {
        setShowCards(value);
        switch (value) {
            case 1:
                setList(blockchains.slice(0, 3))
                break;
            case 2:
                setList(blockchains.slice(3, 6))
                break;
        }
    }
    return (
        <section className="supported-block-chain">
            <div className="container-wrapper">
                <div className="supported-block-chain-wrapper">
                    <div className="main-column">
                        <h2 className="title">Supported Blockchains</h2>
                        <p className="subtitle">Choose an asset to Stake, Host or Monitor to get started</p>
                        <ul className="buttons-row">
                            <li>
                                <button>Sort by Market cap</button>
                                <img src={down_arrow} alt="down arrow"/>
                            </li>
                            <li>
                                <button>0% fees</button>
                            </li>
                            <li>
                                <button>Staking only</button>
                            </li>
                            <li>
                                <button>Hardware Wallet</button>
                            </li>
                        </ul>
                    </div>
                    <div className="block-chain-list-row">
                        <div className="block-chain-left-side">
                            <ul className="col-list">
                                <li className={`${showCards === 1 ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(1)}>
                                    <div className="icon"><img src={analysis} alt="button_logo_1"/></div>
                                    <div className="button-text">
                                        <h2 className="heading_1">Staking</h2>
                                        <h4 className="heading_2">Staking & Validator Node</h4>
                                    </div>
                                    {showCards === 1 ? <img src={forward_arrow} alt="button_log_2"/> : ''}
                                </li>
                                <li className={`${showCards === 2 ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(2)}>
                                    <div className="icon"><img src={arch} alt="button_logo_1"/></div>
                                    <div className="button-text">
                                        <h2 className="heading_1">Infrastructure</h2>
                                        <h4 className="heading_2">Staking & Validator Node</h4>
                                    </div>
                                    {showCards === 2 ? <img src={forward_arrow} alt="button_log_2"/> : ''}

                                </li>
                                {/*<li className={`${showCards === 3 ? 'active' : ''}`} onClick={()=> handleButtonClick(3)}>
                                    <div className="icon"><img src={timer} alt="button_logo_1"/></div>
                                    <div className="button-text">
                                        <h2 className="heading_1">Coming soon</h2>
                                        <h4 className="heading_2">Staking & Validator Node</h4>
                                    </div>
                                    {showCards === 3 ? <img src={forward_arrow} alt="button_log_2"/> : ''}
                                </li>*/}
                            </ul>
                        </div>
                        <div className="block-chain-right-side">
                            <ul className="block-chain-detail-cards">
                                {
                                    list.map((item, index) => {
                                        return <li className="card">
                                            <img src={item?.icon} alt="button_logo_1"/>
                                            <div className="card-text">
                                                <h2 className="heading_1">{item?.title}</h2>
                                                <h4 className="heading_2">{item?.subtitle}</h4>
                                            </div>
                                            <div className="market-cap">
                                                <div className="left-col">
                                                    <div className="amount">{item?.amount_1}</div>
                                                    <div className="label">{item?.label_1}</div>
                                                </div>
                                                <div className="divider"></div>
                                                <div className="right-col">
                                                    <div className="amount">{item?.amount_2}</div>
                                                    <div className="label">{item?.label_2}</div>
                                                </div>
                                            </div>
                                        </li>
                                    })
                                }

                                {/*<li className="card">*/}
                                {/*    <img src={solana} alt="button_logo_1"/>*/}
                                {/*    <div className="card-text">*/}
                                {/*        <h2 className="heading_1">Solana 2.0</h2>*/}
                                {/*        <h4 className="heading_2">Validator Node</h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="market-cap">*/}
                                {/*        <div className="left-col">*/}
                                {/*            <div className="amount">$193B</div>*/}
                                {/*            <div className="label">Market cap</div>*/}
                                {/*        </div>*/}
                                {/*        <div className="divider"></div>*/}
                                {/*        <div className="right-col">*/}
                                {/*            <div className="amount">5.46%</div>*/}
                                {/*            <div className="label">APR</div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                                {/*<li className="card">*/}
                                {/*    <img src={chain_link} alt="button_logo_1"/>*/}
                                {/*    <div className="card-text">*/}
                                {/*        <h2 className="heading_1">Chainlink</h2>*/}
                                {/*        <h4 className="heading_2">Validator Node</h4>*/}
                                {/*    </div>*/}
                                {/*    <div className="market-cap">*/}
                                {/*        <div className="left-col">*/}
                                {/*            <div className="amount">$193B</div>*/}
                                {/*            <div className="label">Market cap</div>*/}
                                {/*        </div>*/}
                                {/*        <div className="divider"></div>*/}
                                {/*        <div className="right-col">*/}
                                {/*            <div className="amount">5.46%</div>*/}
                                {/*            <div className="label">APR</div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</li>*/}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Supported_Block_Chain;