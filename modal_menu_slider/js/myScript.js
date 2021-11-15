function onClickSlide() {
  // document.getElementById("menu").style.transform = "translateX(100%)"
  document.body.classList.toggle("show-nav");
}

let textArray = ["M", "y", " ", "p", "a", "g", "e"];
let check = 0;

setInterval(function typing() {
  if (check < textArray.length) {
    document.getElementById("page").textContent += textArray[check];
    check++;
  }
}, 300);

function onClickFix() {
  document.getElementById("info").style.display = "block";
}