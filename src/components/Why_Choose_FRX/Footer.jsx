import React from 'react';
import facebook from '../../assets/images/Facebook.svg'
import instagram from '../../assets/images/Instagram.svg'
import twitter from '../../assets/images/Twitter.svg'
import youtube from '../../assets/images/Youtube.svg'

function Footer(props) {
    return (
        <>
            <div className="web-footer" id="web-footer">
                <div className="social-links">
                    <div className="title">Social Platform</div>
                    <div className="icons">
                        <a href="https://www.facebook.com/fornaxcoin" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook"/></a>
                        <a href="https://www.instagram.com/fornaxcoin/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"/></a>
                        <a href="https://twitter.com/fornaxcoin" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter"/></a>
                        <a href="https://www.youtube.com/channel/UC90lYJEjW4_y9s3AbyR7Qeg" target="_blank" rel="noreferrer"><img src={youtube} alt="Youtube"/></a>
                    </div>
                </div>
                <div className="copyright">Copyright © 2017-2022 Fornax Network Limited. | All rights reserved</div>
                <div className="links">
                    {/*Support <br/>*/}
                    {/*Privacy Policy <br/>*/}
                    {/*FAQ <br/>*/}
                    {/*Whistleblower Notice <br/>*/}
                    Contact Us <br/>
                    press@fornax.network
                    service@fornax.network
                </div>
            </div>
            <div className="mobile-footer" id="mobile-footer">
                <div className="footer-top">
                    <div className="social-links">
                        <div className="title">Social Platform</div>
                        <div className="icons">
                            <a href="https://www.facebook.com/fornaxcoin" target="_blank" rel="noreferrer"><img src={facebook} alt="Facebook"/></a>
                            <a href="https://www.instagram.com/fornaxcoin/" target="_blank" rel="noreferrer"><img src={instagram} alt="Instagram"/></a>
                            <a href="https://twitter.com/fornaxcoin" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter"/></a>
                            <a href="https://www.youtube.com/channel/UC90lYJEjW4_y9s3AbyR7Qeg" target="_blank" rel="noreferrer"><img src={youtube} alt="Youtube"/></a>
                        </div>
                    </div>
                    <div className="links">
                        <div className="other-links">
                            {/*Support <br/>*/}
                            {/*Privacy Policy <br/>*/}
                            {/*FAQ <br/>*/}
                            {/*Whistleblower Notice <br/>*/}
                            Contact Us <br/>
                        </div>

                        <div className="emails">
                            press@fornax.network <br/>
                            service@fornax.network
                        </div>

                    </div>
                </div>
                <div className="copyright">Copyright © 2017-2022 Fornax Network Limited. | All rights reserved</div>
            </div>
        </>
    );
}

export default Footer;