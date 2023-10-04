import React from "react";
import './Naveed_Hussain.css';
import naveed_hussain from "../../assets/images/card.png";
import instagram from "../../assets/images/instagram.png";
import whatsapp from "../../assets/images/whatsapp.png";
import facebook from "../../assets/images/facebook.png";
import telegram from "../../assets/images/telegram.png";
import twitter from "../../assets/images/twitter.png";

const Naveed_Hussain = () => {
    return (
        <div className="naveed-hussain-card">
            <ul className="social-links">

                <a href="https://api.whatsapp.com/send/?phone=%2B971585979780&text&type=phone_number&app_absent=0" target="_blank"><img src={whatsapp} alt="whatsapp link" className="social-link-item"/></a>
                <a href="https://www.instagram.com/its.naveedqureshi/" target="_blank"><img src={instagram} alt="whatsapp link" className="social-link-item"/></a>
                <a href="https://www.facebook.com/Naveed.KingsMaker" target="_blank"><img src={facebook} alt="whatsapp link" className="social-link-item"/></a>
                <a href="https://twitter.com/fornaxnaveed" target="_blank"><img src={twitter} alt="whatsapp link" className="social-link-item"/></a>
                <a href="https://t.me/fornaxchain" target="_blank"><img src={telegram} alt="whatsapp link" className="social-link-item"/></a>
            </ul>
            <img src={naveed_hussain} alt={"Naveed hussain"}/>
        </div>
    );
}

export default Naveed_Hussain;