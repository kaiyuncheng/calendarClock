 ;(function () {
   
let second = document.querySelector(`.second-hand`);
let min = document.querySelector(`.min-hand`);
let hour = document.querySelector(`.hour-hand`);

function setDate() {
  let now = new Date();

  let secondNow = now.getSeconds();
  let minNow = now.getMinutes();
  let hourNow = now.getHours();

  let secondDeg = secondNow * 6;
  let minDeg = minNow * 6 + (6 / 60) * secondNow;
  let hourDeg = hourNow * 30 + (30 / 60) * minNow;

  second.style.transform = `rotate(${secondDeg}deg)`;
  min.style.transform = `rotate(${minDeg}deg)`;
  hour.style.transform = `rotate(${hourDeg}deg)`;

  if (minNow < 10) {
    minNow = '0' + minNow;
  }
  if (secondNow < 10) {
    secondNow = '0' + secondNow;
  }

  document.querySelector(`h1`).innerHTML =
    hourNow + ' : ' + minNow + ' : ' + secondNow;
}

function setCalender() {
  let now = new Date();

  let date = now.getDate();
  if (date < 10) {
    date = '0' + date;
  }

  let day = now.getDay();
  switch (day) {
    case 0:
      day = 'Sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'Wednesday';
      break;
    case 4:
      day = 'Thursday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
  }

  let month = now.getMonth();

  switch (month) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'February';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'September';
      break;
    case 9:
      month = 'October';
      break;
    case 10:
      month = 'November';
      break;
    case 11:
      month = 'December';
  }

  document.querySelector(`.year`).innerHTML = now.getFullYear();
  document.querySelector(`.month`).innerHTML = month;
  document.querySelector(`.day`).innerHTML = day;
  document.querySelector(`.date`).innerHTML = now.getDate();
}

setDate();
setCalender();

setInterval(setDate, 1000);
setInterval(setCalender, 100000);

})();
