import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className="news-letter-wrapper">
            <div className="container-wrapper">
                <div className="news-letter-container">
                    <div className="bg-layer"></div>
                    <div className="news-letter-content">
                        <div className="sign-up-form">
                            <div className="title">
                                OUR NEWSLETTER
                            </div>
                            <div className="description-1">
                                Signup our newsletter for latest update about FORNAX!
                            </div>
                            <div className="input-field">
                                <input type="email" className="input-email" placeholder="Enter your email"/>
                                <button>SIGN UP</button>
                            </div>
                            <div className="description-2">
                                By clicking Sign Up you're confirming that you agree with our Terms & Conditions
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter;