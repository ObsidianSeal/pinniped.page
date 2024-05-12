const content = document.querySelector(".content");
const contentBottom = content.getBoundingClientRect().bottom;
const screenHeight = window.innerHeight;

document.addEventListener("DOMContentLoaded", () => {
	if (screenHeight - 80 > contentBottom) {
		const space = document.createElement("div");
		const height = screenHeight - 80 - contentBottom;
		console.log(`DEBUG: added a ${height}px tall space to the bottom of this page.`);
		space.setAttribute("style", `height: ${height}px`);
		content.appendChild(space);
	}
});
