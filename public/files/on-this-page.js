// determine link colour (to be applied through a class)
let linkClass = "link-3";
if (location.href.includes("/projects/")) linkClass = "link";
if (location.href.includes("/posts/")) linkClass = "link-2";

// the main element and its heading
let onThisPageElement = document.querySelector(".on-this-page");
if (onThisPageElement) {
	onThisPageElement.innerHTML = `<b class="half-opacity">ON THIS PAGE</b>`;

	// indenting
	let previousDepth = 0,
		indent = 0;

	// identify, modify, and create links to subheadings
	for (let subheading of document.querySelectorAll(".subheading")) {
		let text = subheading.children[0].children[0].innerHTML;
		let icon = subheading.children[1].classList[1];
		let id = text.toLowerCase().replaceAll(/&.+;/g, "-").replaceAll(/\W+/g, "-").replace(/-$/, "");
		subheading.id = id;

		let depth = parseInt(subheading.nodeName.charAt(1));
		if (previousDepth >= 1) {
			if (depth > previousDepth) indent += 1;
			if (depth < previousDepth) indent -= 1;
		}

		let linkElement = document.createElement("p");
		linkElement.classList.add("blog-archive");
		linkElement.style = `margin-left: calc(var(--blog-archive-list-marker-width) * ${indent})`;
		linkElement.innerHTML = `<span class="blog-archive-list-marker half-opacity"><i class="fa-solid ${icon}"></i></span><span class="blog-archive-list-item"><a href="#${id}" class="${linkClass} same-page-link" title="click to scroll to &ldquo;${text}&rdquo;">${text}</a></span>`;
		onThisPageElement.appendChild(linkElement);

		previousDepth = depth;
	}
}
