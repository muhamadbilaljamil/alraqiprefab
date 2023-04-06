import React from 'react';
import './Block_Chain_List.css';

const Block_Chain_List = ({list, activeLink}) => {

    const titles = [
        {},
        {
            heading_1: 'Staking',
            heading_2: 'Staking & Validator Node',
            color: '#f44336'
        },
        {
            heading_1: 'Infrastructure',
            heading_2: 'Staking & Validator Node',
            color: '#ffa117'
        },
        {
            heading_1: 'Market Cap',
            heading_2: '',
            color: '#ffa117'
        },
        {
            heading_1: '0% Fee',
            heading_2: '',
            color: '#ffa117'
        },
        {
            heading_1: 'Staking Only',
            heading_2: '',
            color: '#ffa117'
        },
        {
            heading_1: 'Hardware Wallet',
            heading_2: '',
            color: '#ffa117'
        },
    ]

    return (
        <ul className="block-chain-detail-cards mobile-block-chain-list">
            <div className="active-group-title" style={{'--clr': `${activeLink < 7 ? titles[activeLink].color : ""}`}}>
                <h2 className="heading_1">{activeLink < 7 ? titles[activeLink].heading_1 : "Hello Testing"}</h2>
                <h4 className="heading_2">{activeLink < 7 ? titles[activeLink].heading_2 : "Hello Testing"}</h4>
            </div>
            {
                list.map((item, index) => {
                    return <li className="card" key={index}>
                        <div className="card-logo">
                            <div className="logo">
                                <img src={item?.icon} alt="button_logo_1"/>
                            </div>

                        </div>

                        <div className="card-body">
                            <div className="card-text">
                                <h2 className="heading_1">{item?.title}</h2>
                                <h4 className="heading_2">{item?.subtitle}</h4>
                            </div>
                            <p className="paragraph"></p>
                            <div className="market-cap">
                                <div className="left-col">
                                    <div className="amount">0.20% to 0.25%</div>
                                    <div className="label">Shared Staking Pools</div>
                                    <div className="label"> (Daily APY)</div>
                                </div>
                                <div className="divider"></div>
                                <div className="right-col">
                                    <div className="amount">216% to 270%</div>
                                    <div className="label">IN 3 YEARS</div>
                                </div>
                            </div>
                        </div>

                    </li>
                })
            }
        </ul>
    )
}

export default Block_Chain_List;