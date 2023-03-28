import React from 'react';
import './Documents.css';
import mobile_payment from '../../assets/images/Mobile Payment.svg';
import white_paper from '../../assets/images/white_paper.png';
import presentation from '../../assets/images/presentation.png';
import certificate from '../../assets/images/certificate.png';

const Documents = () => {
    return (
        <section className="documents" id="documents">
            <div className="container-wrapper">
                <div className="documents-wrapper">
                    <div className="bg-layer"></div>
                    <div className="main-content">
                        <div className="header">
                            <h2>Documents</h2>
                            <p></p>
                            {/*<p>Empowering the Defi Future with Trust, Transparency, and Efficiency on the Fornax*/}
                            {/*    Blockchain.</p>*/}
                        </div>
                        <div className="cards-list">
                            <div className="card">
                                <div className="icon">
                                    <img src={white_paper} alt="Payment logo"/>
                                </div>
                                <div className="card-title">WHITE PAPER</div>
                                <a href="https://fornaxcoin.com/whitepaper.pdf?time=1670391733" target="_blank" rel="noreferrer">
                                    <button className="btn-9 pointer">DOWNLOAD</button></a>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={presentation} alt="Payment logo"/>
                                </div>
                                <div className="card-title">PRESENTATION</div>
                                <a href="https://fornaxcoin.com/presentations" target="_blank" rel="noreferrer"><button className="btn-9 pointer">VIEW</button></a>
                            </div>
                            <div className="card">
                                <div className="icon">
                                    <img src={certificate} alt="Payment logo"/>
                                </div>
                                <div className="card-title">CERTIFICATE</div>
                                <div className="card-description">
                                    <a href="https://fornaxcoin.com/assetsAdmin/img/cer.jpeg?time=1670391733" target="_blank" rel="noreferrer">
                                        <button className="btn-9 pointer">DOWNLOAD</button></a>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Documents;
