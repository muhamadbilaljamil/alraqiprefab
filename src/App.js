import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, useLocation,} from "react-router-dom";
import './App.css';

import Hero from "./components/Hero";
import Fornax_Coin from "./components/Fornax_Coin";
import Buying_FRX_Tokens from "./components/Buy_FRX_Tokens";
import What_FRX_Coin from "./components/What_FRX_Coin";
import Supported_Block_Chain from "./components/Supported_Block_Chain";
import Road_Map from "./components/Road_Map";
import Why_Choose_FRX from "./components/Why_Choose_FRX";
import Footer from "./components/Footer";
import Token_Allocation_Funds_Distribution from "./components/Token_Allocation_Funds_Distribution";
import Experts_Investor_Board from "./components/Meet_Experts_Investor_Board";
import Get_In_Touch from './components/Get_In_Touch';
import MobileMenu from "./components/Mobile_Menu";
import {ContextProvider} from "./context/Context_Provider";
import Blogs from './components/Blogs';
import FeatureIn from './components/FeaturedIn';
import NewsLetter from "./components/NewsLetter";
import ModalAndToast from "./components/ModalAndToast";
import Naveed_Hussain from "./components/Naveed_Hussain";

// const Layouts = ({showFooter, showHeader, children}) => {
//     return (<>
//             {showHeader && <Header/>}
//             {children}
//             {showFooter && <Footer/>}
//         </>
//     )
// }

function App() {

    const linkpath = '/naveed_hussainVnoCDcq9DlAsfVNpimIJjx6oXprD429b';
    return (
        <div className="main-app">
            <ContextProvider>
                <Router>
                    {
                        (window.location.pathname !== linkpath) ?
                            <>
                                <ModalAndToast/>
                                <MobileMenu/>
                                <Hero/>
                            </>
                            : ""
                    }

                    <Routes>
                        <Route exat path={linkpath} element={<Naveed_Hussain/>}/>
                        <Route path="/*" element={
                            <>
                                <Fornax_Coin/>
                                <Buying_FRX_Tokens/>
                                <What_FRX_Coin/>
                                <Supported_Block_Chain/>
                                <Why_Choose_FRX/>
                                <Token_Allocation_Funds_Distribution/>
                                <Road_Map/>
                                <Blogs/>
                                <FeatureIn/>
                                <NewsLetter/>
                                <Experts_Investor_Board/>
                                <Get_In_Touch/>
                            </>
                        }/>
                    </Routes>
                    {
                        (window.location.pathname !== linkpath) ?
                            <Footer/>
                            : ""
                    }

                </Router>
            </ContextProvider>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
