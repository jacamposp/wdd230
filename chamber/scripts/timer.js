let counter = 1;
let lastDay;
let timerContainer = document.querySelector('#timer');

let word = counter > 1 ? 'days' : 'day';

function getDates() {
    //getting current date
    let today = new Date().toLocaleDateString();
    //store current day as last day visited
    localStorage.setItem('lastDayConnected', today);
    // store last day visited to variable
    lastDay = localStorage.getItem('lastDayConnected');

    if(today.toString() != lastDay.toString()){
        counter ++;
    }
    timerContainer.textContent = counter + ' ' + word;
}

getDates();