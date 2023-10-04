import React, { useRef } from 'react';
import './Intro_Video.css'

const Intro_Vidow = () => {

    return (
        <div className="fornax-intro-wrapper">
            <div className="container-wrapper">
                <div className="fornax-intro-container">
                    <div className="bg-layer"></div>
                    <div className="fornax-intro">
                        <h2 className='title'> Fornax Blockchain Intro</h2>
                        <div className="video-frame">
                            <iframe className='intro-video' src="https://www.youtube-nocookie.com/embed/1jL6FgHEWqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro_Vidow;