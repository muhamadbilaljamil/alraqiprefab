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
                    return <li className="card">
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
                        </div>

                    </li>
                })
            }
        </ul>
    )
}

export default Block_Chain_List;