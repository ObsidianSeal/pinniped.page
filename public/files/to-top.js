const toTopButton = document.createElement("div");
toTopButton.id = "to_top_button";
toTopButton.style = "pointer-events: none; opacity: 0";
toTopButton.innerHTML = '<i class="fa-solid fa-arrow-up-long"></i>';
document.querySelector(".content").appendChild(toTopButton);

// to-top button scroll
toTopButton.addEventListener("click", () => {
	window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

// show/hide to-top button
document.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		toTopButton.style = "pointer-events: all; opacity: 1";
	} else {
		toTopButton.style = "pointer-events: none; opacity: 0";
	}
});
