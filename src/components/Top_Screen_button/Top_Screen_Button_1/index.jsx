import React from 'react';
import './Top_Screen_Button_1.css';
import {useCtx} from '../../../context/UseContext'

const Top_Screen_Button_1 = () => {

    const handleScrollTop = () => {
        console.log("Handle Scroll");
        window.scroll({
            top: 0,
            // left: 0,
            behavior: 'smooth'
        })
    }

    const {
        scroll
    } = useCtx();
    return (
        <div className={`top-screen-button-wrapper ${scroll > 150 ? 'active' : ''}`}>
            <button onClick={handleScrollTop}>T</button>
        </div>
    );
}

export default Top_Screen_Button_1;