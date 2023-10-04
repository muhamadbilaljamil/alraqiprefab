import React from 'react';
import './Profile_Information.css';
import addwallet from '../../assets/images/addwallet.svg';
import addicon from '../../assets/images/addicon.svg';
import {useCtx} from "../../context/UseContext";


// console.log("Current Date: ", new Date().getFullYear());
// const getDay
const Profile_Information = ({menuOpen, setMenuOpen}) => {
    console.log("Profile_Information: ", menuOpen, setMenuOpen);

    const {setShowProfile, setUser, setIsToast, setToastData, user, showProfile} = useCtx();

    return (
        <div>
            <div className="profile-wrapper-web">
                <div className="profile-information-wrapper">
                    <div className="profile-block-1">
                        <div className="row-1">
                            {/* <button type="button">
                        <span className="">My Dashboard</span>
                    </button> */}
                            <img onClick={() => {
                                console.log("logout Data: ", window.localStorage.getItem('user_wallet'))
                                window.localStorage.removeItem('user_wallet');
                                setUser(null);
                                setShowProfile(false);
                                setToastData({
                                    title: 'Info',
                                    description: 'User logged out',
                                    setIsToast
                                });
                                setIsToast(true);

                            }}
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACIBAMAAACByb2xAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMAoO+AkCAQ33Awz79QQBA+D4AAAAFASURBVGje7di9TcNAAIZhB0eBIECegCLQ0ESIgjJCDICiNBR0TAALpKTMDiwQMUEEG8AGOIkI4uedgSbkbFPms2SL76l8zauT/HN3jszMzMzMzKz6XoYs3T+qmlcEi76m2e6ScaSJDsiaaqY6JOdB0dwh71sRbQCny+vWCFJFdBveV4MYForoHrytBi1AFH0No38e7TLVR3vM9dFm51gdDU4O9dEmJPLoBqRlREnU0RhI5TdqH0jU0QaQKqNhqsJomKog2p5QkKwfHVA0Wz86omha0eg1RXPBjRpTkFT0kfr78NfhNS3jg9IE0lp8pEtZTmLhwhecH0S6aNw5028mLpjVZINWn/0pUNmDxGZ2fduCD9Xh7O53oj3R4WyXvK9IYULOTXWP5sqfCMElwWc/Enkas3T7HJmZmZmZmVmN/ACgNs8qJxR9qgAAAABJRU5ErkJggg=="
                                 alt="avater"/>
                        </div>
                        <div
                            className="row-2">
                            <h4>Total Contribution</h4>
                            <h2><span>$</span> {user['balance'] ? user['balance'].total_balance.toFixed(4) : '0'} USDT
                            </h2></div>
                    </div>
                    {/* <div className="profile-block-2">
                <div className="date"><h3
                    className="text-center font-[600] font-[poppins] text-[30px] text-[#2075C2]">February 01, 2023</h3>
                </div>
                {/* <div className="content">
                    <div className="table">
                        <div className="row">
                            <div>
                                <div className="label">
                                    <img className="avatar"
                                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABsCAMAAABekWy7AAAAhFBMVEWz1LAAAACz1bGxzbGz1LCy07C01bGy07Bgot+QwMRMlupXneOz1bC40rFJlOt6ss+fyLmDuMpQmedOl+hUm+ZrqNhyrdRlpdxcoOFHk+z////R5Pvo8v1Smu261/h1rvH0+P6MvPSv0PdeoO9eoO6jyfbG3frd6/yAtfNqp+9pp/CYwvUms/QrAAAAGXRSTlNNAEULGzktJqZj6b0+E/R6WG/T3siQhZuxiqJcFwAABMpJREFUaN7Vmuly4jAMgEUc54BAuNuEcIWWcrz/+22OGiWNL6Uw0/1+7AzbGT5kyXJiGwbWMOZ6HnccKHEizn13PLDH0lRIIpAReS57non5HHRwKxmYo0GNTvZbE/MdsMPxGc1E9yAeI5roHoyrl2mMHoLLJZsYh354jGZyMSB6WBSTB7/BszaxCH6Hw+xMzAF4gQoINUdRjc0mF56DqzSh6EUqIIr6q4BYDP3LAgiieLlc9VeBvShICgKSSmYyd4Z1UkGKypObfNAxm9SmyYyi8mUmBjrCYfLNMOyXKjQ5RpFQTQmqCE12Y7dIGsx7jR9Yjd170mJEHz80eYb6Rqi1ztumMWh4Szq8EVRjNBnKYZZIiMlBgbGxhhOZaRJSgkITN9Y3Qp9WHE2aLE2FqMNiSgsKDIW37Crotc6FienqW8O7tUqYXJoICeLVOp5N7RoF6Ep8nVixWK4M5RHVJqZZKKwZxfqaqEy+ur4pzHVx+ZUp6isidENemphyodCz3d93m+xrc/7cW8zm0uSqFgot+/yQPjjsTt8q5dLvFiavR32fNukPCpf2KcMrTJF8odBxF/Hk2+RTuD61qqgwWS4UyPYsvjwrP2bi03mry9UAmOVCgaKvVLApP+NAfm01TxkMXGp9oyg9l5+LCFGlXo9d8K0WCiTHIviu7usuFeRVqqSN0AfPZqFAjo8c7Rsl/8jVRTmDPeCk+j5lQvSRNPgQ/33YqoLiEFFEWNOXHxMZa10RlAMOYaHAkDb1x0pS/nNLm0ENbUyLxCpLxyrAuspzjLXgnhTMZKYfaEU4d25lMGI+ZZ+N5rRRFzohpm0q+CgDFKY25fAtQQYhT5dUsC+9B6npgonSE76PKpSVhyV23XVM4k9T0GXKnLBdiiXWaRqCSh92PQRT6+fnjWl7FLWPzTB+hgkHCV3nFNnITRFwsglXWWRnNHHwaHlSuLZZe/Rmkg7rm02q5Gd1WQyx8ZXk8trzwbU2YTNqt/N64Tw0G9VEthIygunWmaIl8NZaim/yFZ7BgGDCH/512R8TYYqb1ZIp3nfwKUxjwq/LMUNIvUhnzYm7lj6FeXam6aTMO1YysmwN7E1eEB4+LZtMMGqM0eEkmQD4G0byp+WBpSluFnP2Q3XHJi/frGCliduZYN58ujscpeW/S+RrRoRvahamGJtBu0Ns8/YUW6ne1MZWJhHU9YB951LF0+iGV0WWgFWmQWRpCiftRtFZ3Y+qfR5nUJt8SxOs6qTg/EUTpm4FXVyxx2JrggCfWCuKVJ0eObqqX3aZMHFbE4xq1U58e57jS5t6i8fDHSoLE6rQhZyvCYo0O1QDbm2C4PH0sPkO57C5izYYaHfdFEHNW6IF/mE1xOeH/X5/xZeOyRqkuGjCoDpbOZKN/3Ck2NCZykWOacc3DB684RRRuuaxcccXgyIQBovW4AZT4ykK9D7jCtfBcl4wClZT0MBopw398bsnKBG8Akd2KuTAC2C0k67++KrTOxL00zvk2ePnMOIpa3/RHzg5fvJp+B854X+eyv1DNzFeeLvkBaqI/blbQK+62SSH9Q2LE29rYVj0mrM2IT1u1bG+NwU9ouc/uP1YYXmjkz3llqpBxn323928FYxdn/PIqdPicK+QoMXIP+56N+afMv4gAAAAAElFTkSuQmCC"
                                         alt=""/>
                                    <h5 className="text">Fornax</h5>
                                </div>
                            </div>
                            <h3 className="amount text"> 0</h3>
                        </div>
                        <div className="row">
                            <div>
                                <div className="label">
                                    <img className="avatar"
                                         src="data:image/png;base64,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"
                                         alt=""/>
                                    <h5 className="text ">Mr. Fornax NFT</h5>
                                </div>
                            </div>
                            <h3 className="amount text"> 0</h3></div>
                    </div>
                    <div className="button">
                        <button type="button" disabled
                                className="button">
                            <span className="">Claim FORNAX</span></button>
                    </div>
                </div>
            </div>*/}
                    <div className="profile-block-3">
                        <div className="table">
                            {/* <div className="row">
                        <p className="label">Claimed Tokens:</p>
                        <p className="value"> 0 FORNAX</p>
                    </div>
                    <div className="row">
                        <p className="label">Remaining Tokens:</p>
                        <p className="value "> 0 FORNAX</p>
                    </div> */}
                            <div className="row">
                                <p className="label"> Claim Date:</p>
                                <p className="value"> After Presale</p>
                            </div>
                            {/* <div className="row">
                        <p className="label">Add FORNAX</p>
                        <div
                            className="value-button flex justify- bg-[#0072BA] w-[53px] h-[26px] rounded-full p-1 space-x-1 items-center">
                            <img className="addwallet" src={addwallet} alt="" />
                            <img className="addicon" src={addicon} alt="" /></div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`profile-wrapper-mobile ${showProfile ? 'active' : ''}`}>
                <div className="profile-information-wrapper">
                    <div className="profile-block-1">
                        <div className="row-1">
                            {/* <button type="button">
                        <span className="">My Dashboard</span>
                    </button> */}
                            <img onClick={() => {
                                console.log("logout Data: ", window.localStorage.getItem('user_wallet'))
                                window.localStorage.removeItem('user_wallet');
                                setUser(null);
                                setMenuOpen(!menuOpen);
                                setShowProfile(false);
                                setToastData({
                                    title: 'Info',
                                    description: 'User logged out',
                                    setIsToast
                                });
                                setIsToast(true);

                            }}
                                 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACIBAMAAACByb2xAAAALVBMVEUAAAD///////////////////////////////////////////////////////+hSKubAAAADnRSTlMAoO+AkCAQ33Awz79QQBA+D4AAAAFASURBVGje7di9TcNAAIZhB0eBIECegCLQ0ESIgjJCDICiNBR0TAALpKTMDiwQMUEEG8AGOIkI4uedgSbkbFPms2SL76l8zauT/HN3jszMzMzMzKz6XoYs3T+qmlcEi76m2e6ScaSJDsiaaqY6JOdB0dwh71sRbQCny+vWCFJFdBveV4MYForoHrytBi1AFH0No38e7TLVR3vM9dFm51gdDU4O9dEmJPLoBqRlREnU0RhI5TdqH0jU0QaQKqNhqsJomKog2p5QkKwfHVA0Wz86omha0eg1RXPBjRpTkFT0kfr78NfhNS3jg9IE0lp8pEtZTmLhwhecH0S6aNw5028mLpjVZINWn/0pUNmDxGZ2fduCD9Xh7O53oj3R4WyXvK9IYULOTXWP5sqfCMElwWc/Enkas3T7HJmZmZmZmVmN/ACgNs8qJxR9qgAAAABJRU5ErkJggg=="
                                 alt="avater"/>
                        </div>
                        <div
                            className="row-2">
                            <h4>Total Contribution</h4>
                            <h2><span>$</span> {user['balance'] ? user['balance'].total_balance.toFixed(4) : '0'} USDT
                            </h2></div>
                    </div>
                    {/* <div className="profile-block-2">
                <div className="date"><h3
                    className="text-center font-[600] font-[poppins] text-[30px] text-[#2075C2]">February 01, 2023</h3>
                </div>
                {/* <div className="content">
                    <div className="table">
                        <div className="row">
                            <div>
                                <div className="label">
                                    <img className="avatar"
                                         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGkAAABsCAMAAABekWy7AAAAhFBMVEWz1LAAAACz1bGxzbGz1LCy07C01bGy07Bgot+QwMRMlupXneOz1bC40rFJlOt6ss+fyLmDuMpQmedOl+hUm+ZrqNhyrdRlpdxcoOFHk+z////R5Pvo8v1Smu261/h1rvH0+P6MvPSv0PdeoO9eoO6jyfbG3frd6/yAtfNqp+9pp/CYwvUms/QrAAAAGXRSTlNNAEULGzktJqZj6b0+E/R6WG/T3siQhZuxiqJcFwAABMpJREFUaN7Vmuly4jAMgEUc54BAuNuEcIWWcrz/+22OGiWNL6Uw0/1+7AzbGT5kyXJiGwbWMOZ6HnccKHEizn13PLDH0lRIIpAReS57non5HHRwKxmYo0GNTvZbE/MdsMPxGc1E9yAeI5roHoyrl2mMHoLLJZsYh354jGZyMSB6WBSTB7/BszaxCH6Hw+xMzAF4gQoINUdRjc0mF56DqzSh6EUqIIr6q4BYDP3LAgiieLlc9VeBvShICgKSSmYyd4Z1UkGKypObfNAxm9SmyYyi8mUmBjrCYfLNMOyXKjQ5RpFQTQmqCE12Y7dIGsx7jR9Yjd170mJEHz80eYb6Rqi1ztumMWh4Szq8EVRjNBnKYZZIiMlBgbGxhhOZaRJSgkITN9Y3Qp9WHE2aLE2FqMNiSgsKDIW37Crotc6FienqW8O7tUqYXJoICeLVOp5N7RoF6Ep8nVixWK4M5RHVJqZZKKwZxfqaqEy+ur4pzHVx+ZUp6isidENemphyodCz3d93m+xrc/7cW8zm0uSqFgot+/yQPjjsTt8q5dLvFiavR32fNukPCpf2KcMrTJF8odBxF/Hk2+RTuD61qqgwWS4UyPYsvjwrP2bi03mry9UAmOVCgaKvVLApP+NAfm01TxkMXGp9oyg9l5+LCFGlXo9d8K0WCiTHIviu7usuFeRVqqSN0AfPZqFAjo8c7Rsl/8jVRTmDPeCk+j5lQvSRNPgQ/33YqoLiEFFEWNOXHxMZa10RlAMOYaHAkDb1x0pS/nNLm0ENbUyLxCpLxyrAuspzjLXgnhTMZKYfaEU4d25lMGI+ZZ+N5rRRFzohpm0q+CgDFKY25fAtQQYhT5dUsC+9B6npgonSE76PKpSVhyV23XVM4k9T0GXKnLBdiiXWaRqCSh92PQRT6+fnjWl7FLWPzTB+hgkHCV3nFNnITRFwsglXWWRnNHHwaHlSuLZZe/Rmkg7rm02q5Gd1WQyx8ZXk8trzwbU2YTNqt/N64Tw0G9VEthIygunWmaIl8NZaim/yFZ7BgGDCH/512R8TYYqb1ZIp3nfwKUxjwq/LMUNIvUhnzYm7lj6FeXam6aTMO1YysmwN7E1eEB4+LZtMMGqM0eEkmQD4G0byp+WBpSluFnP2Q3XHJi/frGCliduZYN58ujscpeW/S+RrRoRvahamGJtBu0Ns8/YUW6ne1MZWJhHU9YB951LF0+iGV0WWgFWmQWRpCiftRtFZ3Y+qfR5nUJt8SxOs6qTg/EUTpm4FXVyxx2JrggCfWCuKVJ0eObqqX3aZMHFbE4xq1U58e57jS5t6i8fDHSoLE6rQhZyvCYo0O1QDbm2C4PH0sPkO57C5izYYaHfdFEHNW6IF/mE1xOeH/X5/xZeOyRqkuGjCoDpbOZKN/3Ck2NCZykWOacc3DB684RRRuuaxcccXgyIQBovW4AZT4ykK9D7jCtfBcl4wClZT0MBopw398bsnKBG8Akd2KuTAC2C0k67++KrTOxL00zvk2ePnMOIpa3/RHzg5fvJp+B854X+eyv1DNzFeeLvkBaqI/blbQK+62SSH9Q2LE29rYVj0mrM2IT1u1bG+NwU9ouc/uP1YYXmjkz3llqpBxn323928FYxdn/PIqdPicK+QoMXIP+56N+afMv4gAAAAAElFTkSuQmCC"
                                         alt=""/>
                                    <h5 className="text">Fornax</h5>
                                </div>
                            </div>
                            <h3 className="amount text"> 0</h3>
                        </div>
                        <div className="row">
                            <div>
                                <div className="label">
                                    <img className="avatar"
                                         src="data:image/png;base64,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"
                                         alt=""/>
                                    <h5 className="text ">Mr. Fornax NFT</h5>
                                </div>
                            </div>
                            <h3 className="amount text"> 0</h3></div>
                    </div>
                    <div className="button">
                        <button type="button" disabled
                                className="button">
                            <span className="">Claim FORNAX</span></button>
                    </div>
                </div>
            </div>*/}
                    <div className="profile-block-3">
                        <div className="table">
                            {/* <div className="row">
                        <p className="label">Claimed Tokens:</p>
                        <p className="value"> 0 FORNAX</p>
                    </div>
                    <div className="row">
                        <p className="label">Remaining Tokens:</p>
                        <p className="value "> 0 FORNAX</p>
                    </div> */}
                            <div className="row">
                                <p className="label"> Claim Date:</p>
                                <p className="value"> After Presale</p>
                            </div>
                            {/* <div className="row">
                        <p className="label">Add FORNAX</p>
                        <div
                            className="value-button flex justify- bg-[#0072BA] w-[53px] h-[26px] rounded-full p-1 space-x-1 items-center">
                            <img className="addwallet" src={addwallet} alt="" />
                            <img className="addicon" src={addicon} alt="" /></div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Profile_Information;