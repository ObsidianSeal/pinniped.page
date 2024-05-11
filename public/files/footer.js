const content = document.querySelector(".content");
const contentEnd = document.querySelector(".content-end");
const contentBottom = contentEnd.getBoundingClientRect().bottom;
const screenHeight = window.innerHeight;

if (screenHeight - 80 > contentBottom) {
	const space = document.createElement("div");
	const height = screenHeight - 80 - contentBottom;
	console.log(`DEBUG: added a ${height}px tall space to the bottom of this page.`);
	space.setAttribute("style", `height: ${height}px`);
	content.appendChild(space);
}
