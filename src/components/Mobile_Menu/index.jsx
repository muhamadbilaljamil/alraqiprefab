import React from 'react';
import './Mobile_Menu.css';
import img from "../../assets/images/top-menu-logo.svg";
import { Link } from "react-router-dom";
import Profile_Information from "../Profile_Information";
import { useCtx } from '../../context/UseContext'
import wallet from "../../assets/images/wallet1.svg";

const Wallet_Button = ({ label, click_function }) => {
    return (<div onClick={click_function} className="mobile-wallet-button">
        <button><img src={wallet} alt={"wallet image"} />{label}</button>
    </div>)
}

const MobileMenu = ({ menuOpen, setMenuOpen, handleClickScroll }) => {

    const {
        user,
        showProfile,
        setShowProfile,
        setIsModal,
    } = useCtx();

    return <div className="mobile-menu-wrapper">
        {/*<div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}></div>*/}
        <div className={`mobile-menu-list ${menuOpen ? 'open' : ''}`}>
            <Link to={"/"}>
                <div className="nav-bar-logo logo">
                    <img className="pointer" src={img} alt="Main Logo SVG" />
                    <h2>FORNAX</h2>
                </div>
            </Link>
            <div className="wallet-button-wrapper">
                {
                    user
                        ? <Wallet_Button
                            label={`${user['wallet_address'].slice(0, 5)} ... ${user['wallet_address'].slice(user['wallet_address'].length - 5)}`}
                            click_function={() => {
                                setShowProfile(!showProfile)
                            }} />
                        : <Wallet_Button label="Connect Wallet" click_function={() => {
                            setIsModal(true);
                            setMenuOpen(!menuOpen)
                        }} />

                }
                {showProfile &&
                    <Profile_Information menuOpen={menuOpen} setMenuOpen={setMenuOpen} />}
            </div>
            <ul>
                <li onClick={() => handleClickScroll('what_is_fornax')}>What is FRX</li>
                <li onClick={() => handleClickScroll('why_frx_token')}>Why FRX</li>
                <li onClick={() => handleClickScroll('token_sale')}>Coin Sale</li>
                <li onClick={() => handleClickScroll('roadmap')}>Roadmap</li>

                {/* <li onClick={() => handleClickScroll('team')}>Team</li> */}
            </ul>
            <button onClick={() => setMenuOpen(!menuOpen)}>Back</button>
        </div>
    </div>
}

export default MobileMenu;