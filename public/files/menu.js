function menu() {
	var x = document.getElementById("navbar-mobile");
	var icon1 = document.getElementById("menu-open");
	var icon2 = document.getElementById("menu-close");

	if (x.style.display == "block") {
		x.style.display = "none";

		icon1.style.display = "block";
		icon2.style.display = "none";
	} else {
		x.style.display = "block";

		icon1.style.display = "none";
		icon2.style.display = "block";
	}
}

// additional functionality I am just going to throw in here HEHEHHAHAHEHAHEHAH
window.addEventListener("load", () => {
	document.querySelectorAll("a").forEach((link) => {
		if (!link.hasAttribute("title")) {
			link.setAttribute("title", `“${link.innerHTML}”\n(${link.href})\n***AUTO-GENERATED TOOLTIP`);
		}
	});
	document.querySelectorAll("img").forEach((image) => {
		if (!image.hasAttribute("alt")) {
			image.setAttribute("alt", `${image.src.substring(image.src.lastIndexOf("/") + 1)} [AUTO-GENERATED ALT TEXT]`);

			if (!image.hasAttribute("title")) {
				image.setAttribute("title", `${image.src.substring(image.src.lastIndexOf("/") + 1)}\n***AUTO-GENERATED TOOLTIP`);
			}
		} else if (!image.hasAttribute("title")) {
			image.setAttribute("title", image.alt);
		}
	});
});
