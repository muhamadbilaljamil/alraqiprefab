import React, {useEffect, useState} from 'react';
import './Chart.css'
import ChartD from './ChartD';

function Index() {
    const [data, setData] = useState([{x: 0, y: [1]}]);
    const userData = {
        // eslint-disable-next-line array-callback-return
        labels: data.map((e, index) => {
            return index + 1;
        }),
        datasets: [
            {
                data: data.map(e => e.y[0]),
                backgroundColor: "#333",
                borderColor: "#B37F29",
                borderWidth: 3,
                tension: 0.3,
            }
        ]
    };

    useEffect(() => {
        const getData = () => {
            fetch('data.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(function (response) {
                    return response.json();
                })
                .then(function (myJson) {
                    // console.log(myJson);
                    setData(myJson.slice(0, 10))
                });
        }
        getData();
    }, []);


    return (
        <section className="chart active">
            <div className="performance-chart-section container-wrapper">
                <div className="chart-content">
                    <div className="chart-content-left">
                        <div className="chart-title">FRX Market Performance</div>
                        <div className="chart-drawing">
                            {<ChartD chartData={userData}/>}
                            {/*<canvas id="myChart" style="width:80%; max-width:80%"></canvas>*/}
                        </div>
                        {/*<div className="chart-table">
                            <div className="chart-table-col">
                                <div className="chart-table-col-text">Current Price</div>
                                <div className="chart-table-col-number">$ 0.78</div>
                            </div>
                            <div className="chart-table-col">
                                <div className="chart-table-col-text">Transaction Value</div>
                                <div className="chart-table-col-number">$324.98M</div>
                            </div>
                            <div className="chart-table-col">
                                <div className="chart-table-col-text">Transaction Count</div>
                                <div className="chart-table-col-number">5.95M</div>
                            </div>

                        </div>*/}
                    </div>
                    <div className="chart-content-right">
                        <div className="chart-table-right">
                            <div className="chart-table-col-right">
                                <div className="chart-table-col-text">Total Market Cap</div>
                                <div className="chart-table-col-number">{(20 * 0.78).toFixed(2)} M</div>
                            </div>
                            <div className="chart-table-col-right">
                                <div className="chart-table-col-text">Current Price</div>
                                <div className="chart-table-col-number">$ 1.00</div>
                            </div>
                            <div className="chart-table-col-right">
                                <div className="chart-table-col-text">Accounts holding FRX</div>
                                <div className="chart-table-col-number"> 500 </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

    export default Index;