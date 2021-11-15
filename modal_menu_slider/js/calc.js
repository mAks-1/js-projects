let firstValue, operate, fractions;
let qwe = [1, 2, 3, 4];

document.getElementById("zero").addEventListener("click", zeroFunction);
function zeroFunction() {
  document.getElementById("screen").textContent += "0";
}

document.getElementById("one").addEventListener("click", oneFunction);
function oneFunction() {
  document.getElementById("screen").textContent += "1";
}

document.getElementById("two").addEventListener("click", twoFunction);
function twoFunction() {
  document.getElementById("screen").textContent += "2";
}

document.getElementById("three").addEventListener("click", threeFunction);
function threeFunction() {
  document.getElementById("screen").textContent += "3";
}

document.getElementById("four").addEventListener("click", fourFunction);
function fourFunction() {
  document.getElementById("screen").textContent += "4";
}

document.getElementById("five").addEventListener("click", fiveFunction);
function fiveFunction() {
  document.getElementById("screen").textContent += "5";
}

document.getElementById("six").addEventListener("click", sixFunction);
function sixFunction() {
  document.getElementById("screen").textContent += "6";
}

document.getElementById("seven").addEventListener("click", sevenFunction);
function sevenFunction() {
  document.getElementById("screen").textContent += "7";
}

document.getElementById("eight").addEventListener("click", eightFunction);
function eightFunction() {
  document.getElementById("screen").textContent += "8";
}

document.getElementById("nine").addEventListener("click", nineFunction);
function nineFunction() {
  document.getElementById("screen").textContent += "9";
}

document.getElementById("plus").addEventListener("click", plusFunction);

function plusFunction() {
  // operate = 1;
  operate = qwe[0];
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document.getElementById("minus").addEventListener("click", minusFunction);

function minusFunction() {
  operate = qwe[1];
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document
  .getElementById("multiplication")
  .addEventListener("click", multiplicationFunction);

function multiplicationFunction() {
  operate = qwe[2];
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document.getElementById("division").addEventListener("click", divisionFunction);

function divisionFunction() {
  operate = qwe[3];
  firstValue = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = "";
}

document.getElementById("reset").addEventListener("click", resetFunction);

function resetFunction() {
  document.getElementById("screen").textContent = "";
}

function removeFunction() {
  let str = document.getElementById("screen").textContent;
  document.getElementById("screen").textContent = str.substring(
    0,
    str.length - 1
  );
}

document.getElementById("equals").addEventListener("click", equalsFunction);
function equalsFunction() {
  if (operate == 1) {
    document.getElementById("screen").textContent =
      parseInt(firstValue) +
      parseInt(document.getElementById("screen").textContent);
  } else if (operate == 2) {
    document.getElementById("screen").textContent =
      parseInt(firstValue) -
      parseInt(document.getElementById("screen").textContent);
  } else if (operate == 3) {
    document.getElementById("screen").textContent =
      parseInt(firstValue) *
      parseInt(document.getElementById("screen").textContent);
  } else {
    document.getElementById("screen").textContent =
      parseInt(firstValue) /
      parseInt(document.getElementById("screen").textContent);
  }
}

// document.getElementById("style").addEventListener("style", styleFunction);

function styleFunction() {
  for (let q = 0; q < 20; q++) {
    document.getElementById("body").style.background = "#262424";
    document.getElementById("toMain").style.color = "white";
    document.getElementById("back").style.color = "white";
    document.getElementsByClassName("btn")[q].style.backgroundColor = "#262424";
    document.getElementsByClassName("btn")[q].style.color = "white";
    document.getElementById("calculator").style.backgroundColor = "#F7C2C2";
    document.getElementsByClassName("back")[1].style.color = "white";
  }
}
