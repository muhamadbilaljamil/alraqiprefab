import React from 'react';
import './Background_Animation.css'

const Background_Animation = () => {
    return (<div className="background-animation">
        <div className="right-side">
            <div className="content">
                {/*<div className="title">STAKING</div>*/}
                {/*<div className="line"></div>*/}
                <div className="block_1 blocks">
                    <div className="loader">
                        <span className="active" style={{"--i":"10"}}></span>
                        <span className="active" style={{"--i":"9"}}></span>
                        <span className="active" style={{"--i":"8"}}></span>
                        <span className="active" style={{"--i":"7"}}></span>
                    </div>
                </div>
                <div className="block_2 blocks">
                    <div className="loader">
                        <span className="active" style={{"--i":"10"}}></span>
                        <span className="active" style={{"--i":"9"}}></span>
                        <span className="active" style={{"--i":"8"}}></span>
                        <span className="active" style={{"--i":"7"}}></span>
                    </div>
                </div>
                <div className="block_3 blocks">
                    <div className="loader">
                        <span className="active" style={{"--i":"10"}}></span>
                        <span className="active" style={{"--i":"9"}}></span>
                        <span className="active" style={{"--i":"8"}}></span>
                        <span className="active" style={{"--i":"7"}}></span>
                    </div>
                </div>
            </div>

        </div>
    </div>);
}

export default Background_Animation;

