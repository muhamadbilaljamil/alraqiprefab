import React from 'react';
import {Line} from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        },
    },
    scales: {
        x: {
            grid: {
                display: false,
                color: "#B37F29",
            }
        },
        y: {
            grid: {
                display: true,
                color: "#B37F29",
            },
        }
    }
    // scales: {
    //     xAxes: [{
    //         gridLines: {
    //             display: false,
    //             color: "black"
    //         },
    //         scaleLabel: {
    //             display: true,
    //             labelString: "Time in Seconds",
    //             fontColor: "red"
    //         }
    //     }],
    //     yAxes: [{
    //         gridLines: {
    //             color: "black",
    //             borderDash: [2, 5],
    //         },
    //         scaleLabel: {
    //             display: true,
    //             labelString: "Speed in Miles per Hour",
    //             fontColor: "green"
    //         }
    //     }]
    // }
};


function ChartD({chartData}) {


    return (
        <Line data={chartData} options={options}/>
    );
}

export default ChartD;