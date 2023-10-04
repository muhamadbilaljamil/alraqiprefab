export const days_counter = () => {
    let days = document.getElementById('days')
    let hours = document.getElementById('hours')
    let minutes = document.getElementById('minutes')
    let seconds = document.getElementById('seconds')

    let dd = document.getElementById('dd')
    let hh = document.getElementById('hh')
    let mm = document.getElementById('mm')
    let ss = document.getElementById('ss')

    let day_dots = document.querySelector('.day_dot')
    let hour_dots = document.querySelector('.hour_dot')
    let minute_dots = document.querySelector('.minute_dot')
    let second_dots = document.querySelector('.second_dot')


    let endDate = '01/22/2023 00:00:00';
    //     date format mm/dd/yyyy

    let x = setInterval(function () {
        let now = new Date(endDate).getTime();
        let countDown = new Date().getTime();
        let distance = now - countDown;

        //     time calculation for days, hours, minutes and seconds

        let d = Math.floor(distance / (1000 * 60 * 60 * 24));
        let h = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        let m = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
        let s = Math.floor(distance % (1000 * 60) / (1000));

        // output the result in element with id

        days.innerHTML = d + '<br> <span>Days</span>';
        hours.innerHTML = h + '<br> <span>Hours</span>';
        minutes.innerHTML = m + '<br> <span>Minutes</span>';
        seconds.innerHTML = s + '<br> <span>Seconds</span>';

        //  animate stroke

        // 365 days in a year
        dd.style.strokeDashoffset = 440 - (440 * d) / 365;
        // 24 hours in a day
        hh.style.strokeDashoffset = 440 - (440 * h) / 24;
        // 60 minutes in an hour
        mm.style.strokeDashoffset = 440 - (440 * m) / 60;
        // 60 seconds in a minute
        ss.style.strokeDashoffset = 440 - (440 * s) / 60;

        //     animate circle dots
        // 360deg / 365days = 0.986
        day_dots.style.transform = `rotateZ(${d * 0.986}deg)`;
        // 360deg / 24hours = 15
        hour_dots.style.transform = `rotateZ(${h * 15}deg)`;
        // 360deg / 60minutes = 6
        minute_dots.style.transform = `rotateZ(${m * 6}deg)`;
        // 360deg / 365days = 0.986
        second_dots.style.transform = `rotateZ(${s * 6}deg)`;

        if (distance < 0) {
            clearInterval(x);
            const countContainer = document.getElementById('time');
            countContainer.style.display = 'none';
        }

    })
}