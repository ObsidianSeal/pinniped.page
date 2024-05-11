const toTopButton = document.createElement("div");
toTopButton.id = "to_top_button";
toTopButton.style = "display: none";
toTopButton.innerHTML = '<i class="fa-solid fa-arrow-up-long"></i>';
document.querySelector(".content").appendChild(toTopButton);

// to-top button scroll
toTopButton.addEventListener("click", (e) => {
	window.scroll(0, 0);
});

// show/hide to-top button
document.addEventListener("scroll", (e) => {
	if (window.scrollY > 300) toTopButton.style = "display: flex";
	else toTopButton.style = "display: none";
});
