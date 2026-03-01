"use strict";

// already on page
document.querySelectorAll(".same-page-link").forEach((link) => {
	link.addEventListener("click", () => {
		scroll(link.href);
	});
});

// page load
window.addEventListener("load", () => {
	if (/#.+$/.test(location.href)) scroll(location.href);
});

// do the scroll
function scroll(string) {
	let id = string.substring(string.indexOf("#") + 1);
	let element = document.getElementById(id);
	let scrollPixel = element.getBoundingClientRect().top + window.pageYOffset - 80;
	console.log(`%cINFO:`, infoStyle, `new scroll script is being tested; scroll ${id} to ${scrollPixel}`);
	setTimeout(() => {
		window.scrollTo({ top: scrollPixel, left: 0, behavior: "smooth" });
	}, 50);
}
