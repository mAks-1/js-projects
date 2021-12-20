// function myFunction() {
//   let showTime = document.getElementById("myinput").value;
//   alert(showTime);
// }
let hour = "00";
let min = "00";
let sec = "00";


function myFunction() {
let x = setInterval(function timeFunction() {
  hour = +hour;
  if (hour < 10) {
    hour = "0" + hour;
  }

  min = +min;
  if (min < 10) {
    min = "0" + min;
  }
  if (min == 59) {
    min = "00";
    hour = +hour;
    hour = "0" + 1;
  }

  sec = +sec;
  if (sec < 60) {
    sec++;
    // sec;
  }
  if (sec == 60) {
    sec = "00";
    min = +min;
    min = "0" + 1;
  }

  if (sec < 10) {
    document.getElementById("showSec").textContent = "0" + sec;
  } else {
    document.getElementById("showSec").textContent = sec;
  }
  document.getElementById("showMin").textContent = min;
  document.getElementById("showHour").textContent = hour;
}, 1000);
function stopFunction() {
  clearInterval(x);
}
};