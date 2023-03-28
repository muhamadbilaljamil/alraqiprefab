import React, { useState, useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
// import { authentication, cases } from '../../api/api';
import { useCtx } from '../../context/UseContext';
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {

    const [user_name, setUser_name] = useState('');
    const [password, setPassword] = useState('');
    const [agree, setAgree] = useState(null);


    const {
        showToast,
        setLoading,
    } = useCtx()


    const resetForm = () => {
        setUser_name('');
        setPassword('');
        setAgree(false);
    }




    const handleSubmit = async () => {

        // console.log("handle submit");

        // const data = {
        //     first_name,
        //     last_name,
        //     email,
        //     phone,
        //     zip,
        //     case_type,
        //     case_des,
        //     status: 1,
        // }
        // try {
        //     setLoading(true);
        //     const response = await authentication();
        //     console.log('response: ', response);
        //     if (response?.api_status == 1) {
        //         const token = response['data']['access_token'];
        //         console.log("access Token: ", token);
        //         const contact_response = await cases(token, data);
        //         console.log("contact response: ", contact_response);
        //         if (response['api_status'] == 1) {
        //             resetForm();
        //             setLoading(false)
        //             return showToast('Application', 'Your application is submitted');
        //         }
        //     } else {
        //         setLoading(false);
        //         return showToast('Error', 'Network error please try agin later');
        //     }
        // } catch (error) {
        //     setLoading(false);
        //     return showToast('Error', 'Network error please try agin later');
        // }

    }


    return (
        <div className='login-section'>
            <div className='bg-layer'></div>
            <div className="login-form">
                <h1 className="title-1">Login</h1>
                {/* <h2 className="title-2">Know Your Rights, Right Away, FREE! </h2> */}
                <p className="description">Please Login to your account</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (agree != null) return handleSubmit()
                    showToast('Info', "Please complete all field of forms!");
                }}>
                    <ul className="form-list">
                        <li className="row">
                            <h4 className="label">Username</h4>
                            <input type="text" value={user_name} onChange={(e) => setUser_name(e.target.value)} placeholder="Enter Username" className="form-control" required />
                        </li>
                        <li className="row">
                            <h4 className="label">Password</h4>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="form-control" required />
                        </li>
                        <li className='forgot-password'>
                            <Link to={'/signup'}>
                               <p className='forgot-text'>Forgot Your Password?</p>
                            </Link>
                        </li>
                        <li className="row">
                            <div className="check-agree">
                                {/* <ReCAPTCHA
                                  
                                    sitekey="6LciDQQlAAAAADeLq-UztGWSdkoraCgyOzy1_HU1"
                                    onChange={(value) => setAgree(value)}
                                /> */}
                            </div>
                        </li>
                        <li className='row' ><button className='submit-btn' type='submit'>CONTINUE</button></li>
                    </ul>
                </form>
                <div className='have-account'>Don't have an account?<Link to={'/signup'}><span>Register Here!</span></Link> </div>
            </div>
        </div>
    );
}

export default Login;


