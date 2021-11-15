let sliderImgs = ["./img/photo1.jpg", "./img/mountain.jpg", "./img/road.jpg"];

let bgGradient = [
    document.getElementById("body").style.background = "linear-gradient(90deg, rgba(171,135,219,1) 4%, rgba(129,180,227,1) 51%, rgba(181,135,244,1) 88%)",
    document.getElementById("body").style.background = "linear-gradient(90deg, rgba(83,233,164,1) 4%, rgba(179,204,177,1) 44%, rgba(244,238,135,1) 88%)",
    document.getElementById("body").style.background = "linear-gradient(90deg, rgba(26,221,244,1) 4%, rgba(188,201,178,1) 47%, rgba(0,212,255,1) 100%)",
    document.getElementById("body").style.background = "linear-gradient(90deg, rgba(173,219,135,1) 7%, rgba(129,180,227,1) 60%, rgba(218,208,233,1) 85%)",
    document.getElementById("body").style.background = "linear-gradient(90deg, rgba(219,179,135,1) 7%, rgba(129,180,227,1) 51%, rgba(218,208,233,1) 85%)",
    document.getElementById("body").style.background = "linear-gradient(90deg, rgba(223,180,181,1) 9%, rgba(129,180,227,1) 48%, rgba(206,233,231,1) 75%, rgba(218,208,233,1) 85%)"
];

let currentImg = 0;

function moveToRight() {
  document.getElementById("sliderImg").src = sliderImgs[currentImg];
  if (currentImg < sliderImgs.length - 1 && currentImg > 0) {
    currentImg++;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
    document.getElementById("body").style.background = bgGradient[Math.floor(Math.random() * 6)];
  } else {
    if (currentImg == 0) {
      currentImg = sliderImgs.length - 2;
      document.getElementById("sliderImg").src = sliderImgs[currentImg];
    document.getElementById("body").style.background = bgGradient[Math.floor(Math.random() * 6)];
    } else {
      currentImg = 0;
      document.getElementById("sliderImg").src = sliderImgs[currentImg];
    document.getElementById("body").style.background = bgGradient[Math.floor(Math.random() * 6)];
    }
  }
}

function moveToLeft() {
    document.getElementById("body").style.background = bgGradient[Math.floor(Math.random() * 6)];
  document.getElementById("sliderImg").src = sliderImgs[currentImg]; 
    
  
  if (currentImg <= sliderImgs.length && currentImg > 0) {
    currentImg--;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
    document.getElementById("body").style.background = bgGradient[Math.floor(Math.random() * 6)];
  } else {
    currentImg = sliderImgs.length - 1;
    document.getElementById("sliderImg").src = sliderImgs[currentImg];
    document.getElementById("body").style.background = bgGradient[Math.floor(Math.random() * 6)];
  }
}