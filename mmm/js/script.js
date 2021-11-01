let r = Math.floor(Math.random() * (256));
let g = Math.floor(Math.random() * (256));
let b = Math.floor(Math.random() * (256));
let colorq = '#' + r.toString() + g.toString() + b.toString();




function onClick() {
document.getElementById("text").style.color = colorq
//     document.getElementById("text").style.color = 'rgb('+ 
//     Math.floor(Math.random() * 255) + 1 + ',' + Math.floor(Math.random() * 255) + 1 
//     +',' + Math.floor(Math.random() * 255) + 1 +')';
}
