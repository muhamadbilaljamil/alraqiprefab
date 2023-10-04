import React, {useState} from "react";
import './Side_Icons_Menu.css'

import analysis from '../../../assets/images/Analytics.svg'
import arch from '../../../assets/images/Arch.svg'

const Side_Icons_Menu = (props) => {
    const {activeLink, handleActiveLink} = props;


    return (
        <ul className="list-items side-icons-menu-list-items">
            <div className="dots">
                <div className={`dot ${activeLink === 1 ? 'active' : ''}`} style={{'--clr': '#f44336'}}></div>
                <div className={`dot ${activeLink === 2 ? 'active' : ''}`} style={{'--clr': '#ffa117'}}></div>
            </div>
            <li className={`list ${activeLink === 1 ? 'active' : ''}`} onClick={() => handleActiveLink(1)}>
                <div style={{'--clr': '#f44336'}}>
                    <span className="icon"><img src={analysis} alt="analysis logo"/> </span>
                </div>
            </li>
            <li className={`list ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleActiveLink(2)}>
                <div style={{'--clr': '#ffa117'}}>
                    <span className="icon"><img src={arch} alt="analysis logo"/></span>
                </div>
            </li>
        </ul>


    );
}

export default Side_Icons_Menu;