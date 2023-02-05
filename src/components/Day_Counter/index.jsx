import React, {useEffect} from 'react';
import './Day_Counter.css'
import {day_counter} from "./Day_Counter";

const Day_Counter = () => {

    useEffect(() => {
        day_counter();
    })
    return (
        <section className="day-counter-timer">
            <div className="container">
                <div className="container-segment">
                    <div className="segment">
                        <div className="flip-card" data-days-tens>
                            <div className="top">1</div>
                            <div className="bottom">1</div>
                        </div>
                        <div className="flip-card" data-days-ones>
                            <div className="top">5</div>
                            <div className="bottom">5</div>
                        </div>
                    </div>
                    <div className="segment-title">Days</div>
                </div>
                <div className="dots">
                    <div></div>
                    <div></div>
                </div>
                <div className="container-segment">
                    <div className="segment">
                        <div className="flip-card" data-hours-tens>
                            <div className="top">2</div>
                            <div className="bottom">2</div>
                        </div>
                        <div className="flip-card" data-hours-ones>
                            <div className="top">4</div>
                            <div className="bottom">4</div>
                        </div>
                    </div>
                    <div className="segment-title">Hours</div>
                </div>
                <div className="dots">
                    <div></div>
                    <div></div>
                </div>
                <div className="container-segment">
                    <div className="segment">
                        <div className="flip-card" data-minutes-tens>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                        <div className="flip-card" data-minutes-ones>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                    </div>
                    <div className="segment-title">Minutes</div>
                </div>
                <div className="dots">
                    <div></div>
                    <div></div>
                </div>
                <div className="container-segment">
                    <div className="segment">
                        <div className="flip-card" data-seconds-tens>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                        <div className="flip-card" data-seconds-ones>
                            <div className="top">0</div>
                            <div className="bottom">0</div>
                        </div>
                    </div>
                    <div className="segment-title">Seconds</div>
                </div>
            </div>
        </section>
    );
}

export default Day_Counter;