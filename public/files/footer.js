const screenHeight = window.innerHeight;
const contentHeight = document.querySelector(".content").clientHeight + 120;

console.log(screenHeight, contentHeight);
console.log(screenHeight - 80 > contentHeight);
