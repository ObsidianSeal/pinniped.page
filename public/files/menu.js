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
