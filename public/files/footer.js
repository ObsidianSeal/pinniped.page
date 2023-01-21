const content = document.querySelector(".content");
const contentBottom = content.getBoundingClientRect().bottom;
const screenHeight = window.innerHeight;

console.log(screenHeight, contentBottom);
console.log(screenHeight - 80 > contentBottom);

if (screenHeight - 80 > contentBottom) {
	const space = document.createElement("div");
	const height = screenHeight - 80 - contentBottom;
	space.setAttribute("style", `height: ${height}px`);
	content.appendChild(space);
}
