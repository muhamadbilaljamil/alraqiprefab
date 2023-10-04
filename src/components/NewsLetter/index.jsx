import React, {useRef} from 'react';
import './NewsLetter.css'
import emailjs from "@emailjs/browser";
import {sendEmail} from "./SendEmail";
import {useCtx} from '../../context/UseContext';

const NewsLetter = () => {
    const {
       showToast,
        setLoading,
    } = useCtx();
    const form = useRef();

    const handleForm = (e) => {
        e.preventDefault();
        setLoading(true);
        sendEmail(emailjs, form).then((response) => {
            console.log("Email Response : ", response);
            if(response === 'OK'){
                setLoading(false);
                showToast("Info", "You have Subscribed our newsletter!");
               return e.target.reset();
            }
            else {
                setLoading(false);
                return showToast("Server Error", "Please try again later");
            }
        });
    }

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
                                <form ref={form} onSubmit={handleForm}>
                                    <input type="email" name="email" className="input-email"
                                           placeholder="Enter your email" required/>
                                    <button type="submit">SIGN UP</button>
                                </form>
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