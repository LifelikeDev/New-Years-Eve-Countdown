const daysFig = document.querySelector('#days');
const hoursFig = document.querySelector('#hours');
const minsFig = document.querySelector('#mins');
const secsFig = document.querySelector('#secs');
const time = document.querySelectorAll('.time');

function countDown() {
    const newYearFormat = '1 Jan 2022';
    const currentYear = new Date();
    const newYear = new Date(newYearFormat);
    const yearDiff = newYear - currentYear;

    const totalSeconds = yearDiff / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const secs = Math.floor(totalSeconds) % 60;
    // console.log(days, hours, mins, secs);

    daysFig.innerHTML = `${days}`;
    hoursFig.innerHTML = `${hours}`;
    minsFig.innerHTML = `${mins}`;
    secsFig.innerHTML = `${secs}`;

    time.forEach(time => addZero(time));
}

function addZero(time) {

    let timeDet = time.textContent; // get textcontent of each time figure

    // console.log(timeDet.length);

    return timeDet.length < 2 ? (time.innerHTML = `0${timeDet}`) : time;

    // if(timeDet.length < 2) {
    //     time.innerHTML = `0${timeDet}`;
    //     // console.log('hey there');
    // } else {
    //     return time;
    // }
}

setInterval(countDown, 1000);