import React from 'react';
import './Experts_Investor_Board.css';
import ceo from '../../assets/images/ceo.jpg';
import mm from '../../assets/images/mm.jpg';
import cd from '../../assets/images/cd.jpg';
import pd from '../../assets/images/pd.jpg';
import pm from '../../assets/images/pm.png';
import bc from '../../assets/images/bc.png';
import fd from '../../assets/images/fd.png';
import dv from '../../assets/images/dv.png';

import sm from '../../assets/images/sm.png';
import cm from '../../assets/images/cm.png';
import as from '../../assets/images/as.png';


import twitter from '../../assets/images/Twitter.svg';
import linkIn from '../../assets/images/LinkedIn.svg';
import facebook from '../../assets/images/Facebook F.svg';

const Experts_Investor_Board = () => {
    return (
        <section className="experts-investor-board" id="team">
            <div className="container-wrapper">
                <div className="experts-investor-board-wrapper">
                    <div className="bg-layer"></div>
                    <div className="main-content">
                        <div className="header">
                            <h2>Meet our Experts</h2>
                        </div>
                        <div className="cards-list">
                            <div className="card">
                                <div className="icon">
                                    <img src={ceo} alt="Payment logo" />
                                </div>
                                <div className="card-title">Naveed Hussain</div>
                                <div className="card-subtitle">CEO</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p> */}
                                {/* <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={mm} className="mm" alt="Payment logo" />
                                </div>
                                <div className="card-title">Junaid Kazmi</div>
                                <div className="card-subtitle">Social media executive</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={cm} className="cm" alt="Payment logo" />
                                </div>
                                <div className="card-title">Emily Brown </div>
                                <div className="card-subtitle">Community Manager</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={pm} className="pm" alt="Payment logo" />
                                </div>
                                <div className="card-title">Abdulah Ahmed </div>
                                <div className="card-subtitle">Project Manager</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={as} alt="Payment logo" />
                                </div>
                                <div className="card-title">Alex Stoia </div>
                                <div className="card-subtitle">Teamlead Infra</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={bc} alt="Payment logo" />
                                </div>
                                <div className="card-title">Qasim Raheem</div>
                                <div className="card-subtitle">Sr. Blockchain Developer</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={fd} className="fd" alt="Payment logo" />
                                </div>
                                <div className="card-title">Aafaq Rajput</div>
                                <div className="card-subtitle">UI/UX Developer</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img className="cd" src={sm} alt="Payment logo" />
                                </div>
                                <div className="card-title">Samuel Broad</div>
                                <div className="card-subtitle">Lead Designer</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img className="cd" src={cd} alt="Payment logo" />
                                </div>
                                <div className="card-title">Syed Maratab Nazir</div>
                                <div className="card-subtitle">Creative Designer</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={pd} alt="Payment logo" />
                                </div>
                                <div className="card-title">Saqib Hussain</div>
                                <div className="card-subtitle">Sr. Developer</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>













                            <div className="card">
                                <div className="icon">
                                    <img src={dv} className="dv" alt="Payment logo" />
                                </div>
                                <div className="card-title">Hammad Hassan</div>
                                <div className="card-subtitle">Sr. Devops Engg</div>
                                {/* <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                    {/* <div className="main-content">
                        <div className="header">
                            <h2>Investor Board</h2>
                        </div>
                        <div className="cards-list">
                            <div className="card">
                                <div className="icon">
                                    <img src={cristiano} alt="Payment logo" />
                                </div>
                                <div className="card-title">Cristiano</div>
                                <div className="card-subtitle">CEO &COO</div>
                                <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={cristiano} alt="Payment logo" />
                                </div>
                                <div className="card-title">Cristiano</div>
                                <div className="card-subtitle">CEO &COO</div>
                                <p className="card-description">
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore .
                                </p>
                                <ul className="social-links">
                                    <li><img src={twitter} alt="Payment logo" /></li>
                                    <li><img src={linkIn} alt="Payment logo" /></li>
                                    <li><img src={facebook} alt="Payment logo" /></li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default Experts_Investor_Board;
