import React from 'react';
import './Nav_Bar.css'
import img from '../../../assets/images/top-menu-logo.svg'
import wallet from '../../../assets/images/wallet1.svg'

import Profile_Information from "../../Profile_Information";
import {Link} from "react-router-dom";
import {useCtx} from "../../../context/UseContext";
import {Toast_Message} from "../../Toast";
import Wallets_Modal from "../../Modals/Wallets_Modal";

const Wallet_Button = ({label, click_function}) => {
    return (<div onClick={click_function} className="wallet btn"><img src={wallet} alt={"wallet image"}/>
        <button>{label}</button>
    </div>)
}

const Nav_Bar = () => {
    const {
        menuOpen,
        setMenuOpen,
        handleClickScroll,
        user,
        showProfile,
        setShowProfile,
        setIsModal,
        isToast,
        isModal,
        toastData,
    } = useCtx();


    return (
        <header>
            <div className="container-wrapper">
                <div className="top-menu-container">
                    <Link to={"/"}>
                        <div className="nav-bar-logo">
                            <img className="pointer" src={img} alt="Main Logo SVG"/>
                            <h2>FORNAX</h2>
                        </div>
                    </Link>
                    <div className="menu-list">
                        <Link to={"/what_is_fornax"}>
                            <div className="menu pointer">What is FRX</div>
                        </Link>
                        <Link to={"/why_frx_token"}>
                            <div className="menu pointer">Why FRX</div>
                        </Link>
                        <Link to={"/token_sale"}>
                            <div className="menu pointer">Coin Sale</div>
                        </Link>
                        <Link to={"/roadmap"}>
                            <div className="menu pointer">Roadmap</div>
                        </Link>
                        <Link to={"/blogs"}>
                            <div className="menu pointer">Blogs</div>
                        </Link>


                        <a href={"https://watchfornax.com/"} target={"_blank"}>
                            <div className="menu pointer">Fornax Explorer</div>
                        </a>
                        {/* <div className="menu pointer" onClick={() => handleClickScroll('team')}>Team</div> */}
                    </div>
                    <div className="left-side-buttons">
                        {
                            // ${userAccount['wallet_address'].toString().slice(0, 5)}
                            user
                                ? <Wallet_Button
                                    label={`${user['wallet_address'].slice(0, 5)} ... ${user['wallet_address'].slice(user['wallet_address'].length - 5)}`}
                                    click_function={() => {
                                        setShowProfile(!showProfile)
                                    }}/>
                                : <Wallet_Button label="Connect Wallet" click_function={() => setIsModal(true)}/>
                            // : <Wallet_Button label="Connect Wallet" click_function={handleWalletConnect}/>

                        }
                        {showProfile &&
                            <Profile_Information/>}
                        {/* <div className="language btn">
                            <button>ENGLISH</button>
                            <img src={down_arrow} alt={"down_arrow image"}/></div> */}
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
           {/* {isToast && <Toast_Message data={toastData}/>}
            {isModal && <Wallets_Modal/>}*/}
        </header>
    );
}

export default Nav_Bar;


// afsarmianpk@yahoo.com