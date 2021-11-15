// let array = [1,2,3,4,5,6,7,8,9];
// for(let i = 1; i < array.length; i+=2) {
// console.log(array[i])
// }





// let array = [];
// for(let i = 0; i<Math.floor(Math.random() * 1000);) {
//   array.push(Math.floor(Math.random() * 1000), Math.floor(Math.random() * -1000));
// }
// console.log(array);






// let text = "You are not sharing your screen :)";
// let textArray = ["H", "E", "L", "L", "O"];
// let check = 0;

// setInterval(function typing() {
//     if(check < textArray.length) {
//     document.getElementById("text").textContent += textArray[check];
//     document.getElementById("text").style.fontSize = "38px";
// check ++;
//     }
// }
// ,1000);




// let r = 0;
// let txt = "Hello world!";
// let txtArray = txt.split("");

// function slow() {
//   if (r < txtArray.length) {
//     document.getElementById("text").textContent += txtArray[r];
//     r++;
//     setTimeout(slow, 1000);
//   }
// }
// setTimeout(slow(), 1000);





let counter = 0;
// 8

var maximSetInterval = setInterval(() => {
  console.log(counter);
  counter++;
  if (counter >= 8) {
      clearInterval(maximSetInterval);
  }
}, 1000);


