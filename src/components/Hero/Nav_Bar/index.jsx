import React, {useState, useEffect} from 'react';
import './Nav_Bar.css'
import {Link, useLocation} from "react-router-dom";
import img from '../../assets/images/top-menu-logo.svg'
import wallet from '../../assets/images/wallet1.svg'
import down_arrow from '../../assets/images/Expand Arrow.svg'


function Nav_Bar(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    console.log("Location: " + location.pathname);
    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        location.pathname === '/presentation' ? handleClickScroll('presentation') : location.pathname === '/white-paper' ? handleClickScroll('white-paper') : '/'
    }, [location])
    const handleClickScroll = (footer) => {
        const element = document.getElementById(footer);
        setMenuOpen(false);
        if (element) {
            // 👇 Will scroll smoothly to the top of the next section
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <header>
            <div className="container-wrapper">
                <div className="top-menu-container">
                    <Link to={"/"}> <img className="pointer" src={img} alt="Main Logo SVG"/></Link>
                    <div className="menu-list">
                        <div className="menu pointer" onClick={() => handleClickScroll('what_is_fornax')}>What is FRX
                        </div>
                        <div className="menu pointer" onClick={() => handleClickScroll('why_frx_token')}>Why Token</div>
                        <div className="menu pointer" onClick={() => handleClickScroll('token_sale')}>Token Sale</div>
                        <div className="menu pointer" onClick={() => handleClickScroll('roadmap')}>Roadmap</div>
                        <div className="menu pointer" onClick={() => handleClickScroll('team')}>Team</div>
                    </div>
                    <div className="left-side-buttons">
                        <div className="wallet btn"><img src={wallet} alt={"wallet image"}/>
                            <button>WALLET</button>
                        </div>
                        <div className="language btn">
                            <button>ENGLISH</button>
                            <img src={down_arrow} alt={"down_arrow image"}/></div>
                    </div>
                    <div className="mobile-menu">
                        <div className={`hamburger ${menuOpen ? ' open' : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Nav_Bar;