// let text = 'You are not sharing your screen :)';
// let textArray = ['H','E','L','L','O']
// let check = 0;

// setInterval(function typing() {
//     if(check < textArray.length) {
//     document.getElementById("text").textContent += textArray[check];
//     document.getElementById("text").style.fontSize = "38px";
// check ++;
//     }
// }
// ,1000);



let textArray = ['M','y',' ','p','a','g','e'];
let check = 0;

setInterval(function typing() {
    if(check < textArray.length) {
    document.getElementById("page").textContent += textArray[check];
check ++;
    }
}
,1000);

