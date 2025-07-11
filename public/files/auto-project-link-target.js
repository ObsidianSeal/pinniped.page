// get depth
let depth = location.href.replaceAll(/[^\/]+/g, "").length;
if (location.href.includes("pinniped.page")) depth -= 2;
else depth -= 3;

// set backLinkString
let backLinkString = "";
for (let i = 0; i < depth - 1; i++) backLinkString += "../";

// get paths
let projectsJSON = {};
let paths = [];
try {
	const requestURL = backLinkString + "files/projects.json";
	const request = new Request(requestURL);
	const response = await fetch(request);
	const responseJSON = await response.json();

	// ignore "files/"
	for (let project in responseJSON) {
		let path = responseJSON[project].path;
		if (path.startsWith("projects/")) {
			paths.push(path);
			projectsJSON[project] = responseJSON[project];
		}
	}
} catch (error) {
	console.error(error); // ruh roh
}

// test & modify all links
document.querySelectorAll("a").forEach((link) => {
	for (let path of paths) {
		if (link.href.includes(path)) {
			for (let project in projectsJSON) {
				if (projectsJSON[project].path == path) {
					if (projectsJSON[project].connected) link.removeAttribute("target");
					else link.setAttribute("target", "_blank");
				}
			}
		}
	}
});
