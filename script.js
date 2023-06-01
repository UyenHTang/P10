// This simulate a browser-like environment. 
// This library allows you to create a virtual DOM that can be accessed and manipulated using JavaScript.
// const jsdom = require('jsdom');
// const {JSDOM} = jsdom;
// //create a virtual DOM
// const dom = new JSDOM(index);
const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
let randomNum = () => {
  return Math.floor(Math.random() * 256);
};
let changeColor = () => {
  let randomColor = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  document.querySelector(".one").style.backgroundColor = randomColor;
  document.getElementById("colorName").innerText = randomColor;
};

let changeColor2 = () => {
  let randomColor2 = `rgb(${randomNum()},${randomNum()},${randomNum()})`;
  document.querySelector(".two").style.backgroundColor = randomColor2;
  document.getElementById("colorName2").innerText = randomColor2;
};
btn.addEventListener("click", changeColor);
window.addEventListener("load", changeColor);

btn2.addEventListener("click", changeColor2);
window.addEventListener("load", changeColor2);


