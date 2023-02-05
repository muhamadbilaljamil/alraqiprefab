import React, { useEffect, useState } from 'react';
import './Supported_Block_Chain.css';
import { blockchains } from "./database";
import down_arrow from '../../assets/images/Down Arrow.svg'
import forward_arrow from '../../assets/images/forword_arrow.svg'
import analysis from '../../assets/images/Analytics.svg'
import arch from '../../assets/images/Arch.svg'
import Side_Icons_Menu from './Side_Icons_Menu';
import timer from '../../assets/images/Timer.svg'
import eth_logo from '../../assets/images/ethereum-logo-EC6CDBA45B-seeklogo 1.svg'
import solana from '../../assets/images/Solana_logo 1.svg'
import chain_link from '../../assets/images/chainlink-link-logo 1.svg'
import Block_Chain_List from "./Block_Chain_List";

const Supported_Block_Chain = () => {
    const [showCards, setShowCards] = useState(1);
    const [list, setList] = useState([])


    useEffect(() => {
        const searchData = handleButtonOption(showCards);
        console.log("Parameter: ", searchData);
        listFilter(searchData)
    }, []);

    const listFilter = (value) => {
        const filterData = blockchains.filter((item, index) => {
            console.log("new data", item['category'].toString().toLowerCase());
            const bigString = item['category'].toString().toLowerCase();
            return bigString.includes(value)
        })
        console.log('Staking: ', filterData)
        setList(filterData);
        // return filterData;
    }

    const handleButtonOption = (value) => {
        switch (value) {
            case 1:
                return 'staking';
            case 2:
                return 'infrastructure';
            case 3:
                return 'market cap';
            case 4:
                return '0% fees';
            case 5:
                return 'staking only';
            case 6:
                return 'hardware wallet';
        }


    }


    const handleButtonClick = (value) => {
        setShowCards(value);
        const searchData = handleButtonOption(value);
        console.log("Parameter: ", searchData);
        listFilter(searchData);
    }
    return (
        <section className="supported-block-chain">
            <div className="container-wrapper">
                <div className="supported-block-chain-wrapper">
                    <div className="main-column">
                        <h2 className="title">Fornax Staking Options </h2>
                        <p className="subtitle">Choose to Stake, Host or Monitor to get started</p>
                        <ul className="buttons-row">
                            <li className={`${showCards === 3 ? 'active' : ''}`} onClick={() => handleButtonClick(3)}>
                                <button>Sort by Market cap</button>
                                <img src={down_arrow} alt="down arrow" />
                            </li>
                            <li className={`${showCards === 4 ? 'active' : ''}`} onClick={() => handleButtonClick(4)}>
                                <button>0% fees</button>
                            </li>
                            <li className={`${showCards === 5 ? 'active' : ''}`} onClick={() => handleButtonClick(5)}>
                                <button>Staking only</button>
                            </li>
                            <li className={`${showCards === 6 ? 'active' : ''}`} onClick={() => handleButtonClick(6)}>
                                <button>Hardware Wallet</button>
                            </li>
                        </ul>
                    </div>
                    <div className="block-chain-list-row">
                        <div className="block-chain-left-side">
                            <ul className="col-list web">
                                <li className={`${showCards === 1 ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(1)}>
                                    <div className="icon"><img src={analysis} alt="button_logo_1" /></div>
                                    <div className="button-text">
                                        <h2 className="heading_1">Staking</h2>
                                        <h4 className="heading_2">Staking & Validator Node</h4>
                                    </div>
                                    {showCards === 1 ? <img src={forward_arrow} alt="button_log_2" /> : ''}
                                </li>
                                <li className={`${showCards === 2 ? 'active' : ''}`}
                                    onClick={() => handleButtonClick(2)}>
                                    <div className="icon"><img src={arch} alt="button_logo_1" /></div>
                                    <div className="button-text">
                                        <h2 className="heading_1">Infrastructure</h2>
                                        <h4 className="heading_2">Staking & Validator Node</h4>
                                    </div>
                                    {showCards === 2 ? <img src={forward_arrow} alt="button_log_2" /> : ''}

                                </li>
                            </ul>
                            <Side_Icons_Menu activeLink={showCards} handleActiveLink={handleButtonClick} />
                        </div>
                        <div className="block-chain-right-side">
                            <ul className="block-chain-detail-cards web">
                                {
                                    list.map((item, index) => {
                                        return <li key={index} className="card">
                                            <div className="card-title">
                                                <img src={item?.icon} alt="button_logo_1" />
                                                <div className="card-text">
                                                    <h2 className="heading_1">{item?.title}</h2>
                                                    <h4 className="heading_2">{item?.subtitle}</h4>
                                                </div>
                                            </div>

                                            <div className="market-cap">
                                                {/* <div className="left-col">
                                                    <div className="amount">{item?.amount_1}</div>
                                                    <div className="label">{item?.label_1}</div>
                                                </div>
                                                <div className="divider"></div>
                                                <div className="right-col">
                                                    <div className="amount">{item?.amount_2}</div>
                                                    <div className="label">{item?.label_2}</div>
                                                </div> */}
                                                Coming Soon
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>

                            <Block_Chain_List list={list} activeLink={showCards} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Supported_Block_Chain;