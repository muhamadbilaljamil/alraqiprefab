import React, {useState} from "react";
import './Side_Icons_Menu.css'

import forward_arrow from '../../assets/images/forword_arrow.svg'
import analysis from '../../assets/images/Analytics.svg'
import arch from '../../assets/images/Arch.svg'
import timer from '../../assets/images/Timer.svg'

const Side_Icons_Menu = () => {

    const [activeLink, setActiveLink] =  useState(1);
    const handleToggleMenu = () => {
        console.log("toggle");
        const navigation = document.querySelector('.navigation');
        navigation.classList.toggle('active');
    }

    const handleActiveLink = (value) => {
        setActiveLink(value);
    }


    return (
        <section className='side-icons-menu'>
            <div className='navigation'>
                <div className='menu-toggle' onClick={handleToggleMenu}></div>
                <ul className="list-items">
                    <li className={`list ${activeLink === 1 ? 'active' : ''}`}  onClick={() => handleActiveLink(1)}>
                        <a href="#" style={{'--clr': '#f44336'}}>
                            <span className="icon"><img src={analysis } alt="analysis logo" /> </span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                    <li className={`list ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleActiveLink(2)}>
                        <a href="#" style={{'--clr': '#ffa117'}}>
                            <span className="icon"><img src={analysis } alt="analysis logo" /></span>
                            <span className="text">About</span>
                        </a>
                    </li>
                    <li className={`list ${activeLink === 3 ? 'active' : ''}`} onClick={() => handleActiveLink(3)}>
                        <a href="#" style={{'--clr': '#0fc70f'}}>
                            <span className="icon"><img src={analysis } alt="analysis logo" /></span>
                            <span className="text">Message</span>
                        </a>
                    </li>
                    <li className={`list ${activeLink === 4 ? 'active' : ''}`} onClick={() => handleActiveLink(4)}>
                        <a href="#" style={{'--clr': '#2196f3'}}>
                            <span className="icon"><img src={analysis } alt="analysis logo" /></span>
                            <span className="text">Photos</span>
                        </a>
                    </li>
                    <li className={`list ${activeLink === 5 ? 'active' : ''}`} onClick={() => handleActiveLink(5)}>
                        <a href="#" style={{'--clr': '#b145e9'}}>
                            <span className="icon"><img src={analysis } alt="analysis logo" /></span>
                            <span className="text">Home</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Side_Icons_Menu;