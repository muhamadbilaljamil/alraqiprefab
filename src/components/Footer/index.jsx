import React from 'react';
import './Footer.css'
// import Facebook from '../../assets/images/Facebook'
import facebook from '../../assets/images/Facebook.svg'
import instagram from '../../assets/images/Instagram.svg'
import twitter from '../../assets/images/twit.svg'
import youtube from '../../assets/images/Youtube.svg'
import teleg from '../../assets/images/teleg.svg'
import disc from '../../assets/images/disc.svg'

const Footer = () => {
    return (
        <>

            <div className="frx-footer">
                <div className="container-wrapper">
                    <div className="frx-footer-wrapper">
                        <div className="social-links">

                            <div className="icons">
                                <a href="https://www.facebook.com/profile.php?id=100086479823837&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook" /></a>
                                <a href="https://www.instagram.com/fornaxcoin_/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram" /></a>
                                <a href="https://twitter.com/fornaxcoin_" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter" /></a>
                                <a href="https://www.youtube.com/channel/UC90lYJEjW4_y9s3AbyR7Qeg" target="_blank" rel="noreferrer"><img src={youtube} alt="Youtube" /></a>
                                <a href="https://t.me/+UDuQBC6H0Yg2NTY0" target="_blank" rel="noreferrer"><img src={teleg} alt="Telegram" /></a>
                                <a href="https://discord.gg/fH8HxkYD" target="_blank" rel="noreferrer"><img src={disc} alt="Discord" /></a>
                            </div>
                        </div>
                        {/* <div>
                        <a href="https://www.facebook.com/fornaxcoin"><Image src={Facebook} alt="Facebook" /></a>
                        <a href="https://twitter.com/fornaxcoin"><Image src={Twitter} alt="Twitter" /></a>
                        <a href="https://www.instagram.com/fornaxcoin/"><Image src={Instagram} alt="Instagram" /></a>
                    </div> */}
                        <p>Copyright © 2017-2023 Fornax Coin Limited. | All rights reserved</p>
                        <ul>
                            {/* <li>Contact Us</li> */}

                            <li>press@fornaxcoin.com</li>
                            <li>service@fornaxcoin.com</li>


                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;