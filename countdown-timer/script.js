/*var Dday = new Date("2023-12-31T23:59:59");


setInterval(countDownFun, 100);
function countDownFun(){
  var Tday = new Date();
  var Dmonth = Dday.getMonth() - Tday.getMonth();
  var Ddate = Dday.getDate() - Tday.getDate();
  var Dhour = Dday.getHours() - Tday.getHours();
  var Dmin = Dday.getMinutes() - Tday.getMinutes();
  var Dsec = Dday.getSeconds() - Tday.getSeconds();

  if(Dhour < 0) {
    Ddate--;
    Dhour += 24;
  }
  if (Ddate < 0) {
    Dmonth--;
    Ddate += 31;
  }

  document.getElementById("months").innerHTML = Dmonth;
  document.getElementById("days").innerHTML = Ddate;
  document.getElementById("hours").innerHTML = Dhour;
  document.getElementById("mins").innerHTML = Dmin;
  document.getElementById("secs").innerHTML = Dsec;

// this donesn't give accurate dates as calculation require if month contains 30-31 days + lean year
// this only works for current year
} */

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");

const Ddate = new Date("2023-12-31T22:59:59");


function countDownFun(){
  const Tdate = new Date();

  const totalSec = (Ddate - Tdate) / 1000;
  const Dsec = Math.floor(totalSec) % 60; // Total secs are devided by 60sec(mins) and reminder would be secs
  const Dmin = Math.floor(totalSec / 60) % 60; // Total secs are devided by 60sec(min) and it need to devided by 60mins(hours) and reminder would be mins
  const Dhour = Math.floor(totalSec / 3600) % 24; // Total secs are devided by 60sec(min), 60mins ->hours and it needs to devide by 24hours(days) and reminder would be hours
  const Dday = Math.floor(totalSec / 3600 / 24); // Total secs are devided by 60sec(min), 60mins(hours), 24hours ->days
  daysEl.innerHTML= Dday;
  hoursEl.innerHTML= Dhour;
  minsEl.innerHTML= Dmin;
  secsEl.innerHTML= Dsec;
}

setInterval(countDownFun, 100);