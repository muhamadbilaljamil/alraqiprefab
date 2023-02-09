import React, {useEffect} from 'react';
import './Mobile_Menu.css';
import img from "../../assets/images/top-menu-logo.svg";
import {Link, useLocation} from "react-router-dom";
import Profile_Information from "../Profile_Information";
import {useCtx} from '../../context/UseContext'
import wallet from "../../assets/images/wallet1.svg";


const Wallet_Button = ({label, click_function}) => {
    return (<div onClick={click_function} className="mobile-wallet-button">
        <button><img src={wallet} alt={"wallet image"}/>{label}</button>
    </div>)
}

const MobileMenu = () => {

    const {
        menuOpen,
        setMenuOpen,
        user,
        showProfile,
        setShowProfile,
        setIsModal,
        handleClickScroll
    } = useCtx();

    const location = useLocation();

    useEffect(() => {

        // console.log("Location: ", location['pathname'].substring(1))
        handleClickScroll(location['pathname'].substring(1))
        // location.pathname === '/presentation' ? handleClickScroll('presentation') : location.pathname === '/white-paper' ? handleClickScroll('white-paper') : '/'
    }, [location])

    return <div className="mobile-menu-wrapper">
        {/*<div className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}></div>*/}
        <div className={`mobile-menu-list ${menuOpen ? 'open' : ''}`}>
            <Link to={"/"}>
                <div className="nav-bar-logo logo">
                    <img className="pointer" src={img} alt="Main Logo SVG"/>
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
                            }}/>
                        : <Wallet_Button label="Connect Wallet" click_function={() => {
                            setIsModal(true);
                            setMenuOpen(!menuOpen)
                        }}/>

                }
                {showProfile &&
                    <Profile_Information menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>}
            </div>
            <ul>
                <Link to={"/what_is_fornax"}><li>What is FRX</li></Link>
                <Link to={"/why_frx_token"}><li>Why FRX</li></Link>
                <Link to={"/token_sale"}><li>Coin Sale</li></Link>
                <Link to={"/roadmap"}><li>Roadmap</li></Link>
                <Link to={"/blogs"}><li className="menu pointer">Blogs</li></Link>
                <a href={"https://watchfornax.com/"} target={"_blank"}>
                    <li className="menu pointer">Fornax Explorer</li>
                </a>

                {/* <li onClick={() => handleClickScroll('team')}>Team</li> */}
            </ul>
            <button onClick={() => setMenuOpen(!menuOpen)}>Back</button>
        </div>
    </div>
}

export default MobileMenu;