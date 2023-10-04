import React from 'react';
import './Statistics.css';


function Index() {

    return (
        <section className="statistics">
            <div className="container-wrapper">
                <div className="statistics-section active">
                    <div className="statistics-title">
                        Boasting over 300 Accounts and 1500 transactions. Fornax is world’s fastest
                        growing Public
                        Chain.
                    </div>
                    <div className="statistics-content">
                        <div className="statistics-tab ">
                            <div className="statistics-number">300</div>
                            <div className="statistics-label">Total Number of Accounts</div>
                        </div>
                        <div className="seprator"></div>

                        <div className="statistics-tab ">
                            <div className="statistics-number">1500</div>
                            <div className="statistics-label">Transaction Count</div>
                        </div>
                        <div className="seprator"></div>

                        <div className="statistics-tab">
                            <div className="statistics-number">2533581</div>
                            <div className="statistics-label">Block Heights</div>
                        </div>
                        <div className="seprator"></div>

                        <div className="statistics-tab ">
                            <div className="statistics-number">20 M</div>
                            <div className="statistics-label">Amount of core Tokens</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Index;