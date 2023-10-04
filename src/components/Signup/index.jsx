import React, { useState, useEffect, useLayoutEffect } from 'react';
import './Signup.css';
// import { authentication, cases } from '../../api/api';
import { useCtx } from '../../context/UseContext';
import { Country, State, City } from 'country-state-city';
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {

    const [sponsorId, setSponsorId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [contact, setContact] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [team, setTeam] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState(null);
    const [countries, setCountries] = useState('');



    useEffect(() => {
        setCountries(Country.getAllCountries());
    }, [])

    const {
        showToast,
        setLoading,
    } = useCtx()




    const resetForm = () => {
        setSponsorId('');
        setFirstName('');
        setLastName('');
        setEmail('');
        setUsername('');
        setDateOfBirth('');
        setContact('');
        setCountry('');
        setCity('');
        setAddress('');
        setTeam('');
        setPassword('');
        setConfirmPassword('');
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
        <div className='signup-section'>
            <div className='bg-layer'></div>
            <div className="signup-form">
                <h1 className="title-1">Sign Up</h1>
                <p className="description">Please create a new account</p>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    if (agree != null) return handleSubmit()
                    showToast('Info', "Please complete all field of forms!");
                }}>
                    <ul className="form-list">

                        <li className="row">
                            <div className="input-label">
                                <label>Sponsor ID</label>
                                <input type="text" id='sponsorId' value={sponsorId} onChange={(e) => setSponsorId(e.target.value)} placeholder="Sponsor ID" className="form-control" required />
                            </div>
                        </li>


                        <li className="row two-inputs">
                            <div className='input-label'>
                                <label>First Name</label>
                                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter First Name" className="form-control" required />
                            </div>

                            <div className="input-label">
                                <label>Last Name</label>
                                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter Last Name" className="form-control" required />

                            </div>
                        </li>


                        <li className="row two-inputs">
                            <div className="input-label">
                                <label>Email</label>
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="form-control" required />
                            </div>
                            <div className="input-label">
                                <label>Username</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username" className="form-control" required />
                            </div>
                        </li>


                        <li className="row two-inputs">
                            <div className="input-label">
                                <label>Date Of Birth</label>
                                <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} placeholder="Enter Date Of birth" className="form-control" required />

                            </div>
                            <div className="input-label">
                                <label>Contact</label>
                                <input type="number" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="Enter Contact" className="form-control" required />

                            </div>
                        </li>

                        <li className="row two-inputs">
                            <div className="input-label">
                                <label>Country</label>
                                <select className="form-control" value={country} onChange={(e) => setCountry(e.target.value)} required>
                                    <option value=""> Choose Country </option>
                                    {
                                        countries &&
                                        countries.map((country, index) => {
                                            return <option className='option' value={`${country.flag + country.name}`}>{`${country.flag + "\n  " + country.name}`} </option>
                                        })
                                    }
                                </select>

                            </div>
                            <div className="input-label">
                                <label>City</label>
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" className="form-control" required />

                            </div>

                        </li>

                        <li className="row">
                            <div className="input-label">
                                <label>Address</label>
                                <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Enter Address" className="form-control" required />

                            </div>
                            <div className="input-label">
                                <label>Team</label>
                                <select className="form-control" value={team} onChange={(e) => setTeam(e.target.value)} required >
                                    <option value="right">Right</option>
                                    <option value="left">Left</option>
                                </select>
                            </div>

                        </li>


                        <li className="row two-inputs">
                            <div className="input-label">
                                <label>Password</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" className="form-control" required />

                            </div>
                            <div className="input-label">
                                <label className='c-pass'>Confirm Password</label>
                                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Re-enter Password" className="form-control" required />

                            </div>
                        </li>
                        {/* <li className="row">
                            <div className="check-agree">
                                <ReCAPTCHA
                                    sitekey="6LciDQQlAAAAADeLq-UztGWSdkoraCgyOzy1_HU1"
                                    onChange={(value) => setAgree(value)}
                                />
                            </div>
                        </li> */}
                        <li className='row check-agree'>
                            <input type="checkbox" onChange={(value) => setAgree(value)} />
                            <p className='check-text'>I agree to Fornax Privacy Policy & Terms.</p>
                        </li>
                        <li className='row' ><button className='submit-btn' type='submit'>SUBMIT</button></li>
                    </ul>
                </form>


            </div>

        </div>

    );
}

export default Signup;


