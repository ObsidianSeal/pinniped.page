document.querySelectorAll(".same-page-link").forEach((link) => {
	link.addEventListener("click", () => {
		setTimeout(() => {
			window.scrollBy({ top: -80, left: 0, behavior: "smooth" });
		}, 50);
	});
});

window.addEventListener("load", () => {
	if (location.href.includes("#")) {
		window.scrollBy({ top: -80, left: 0, behavior: "smooth" });
	}
});
