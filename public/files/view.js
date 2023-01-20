const firebaseConfig = {
	apiKey: "AIzaSyAigBAgn7Uhybip_m3P508DIpybb2qdI5g",
	authDomain: "the-pinniped-page.firebaseapp.com",
	databaseURL: "https://the-pinniped-page.firebaseio.com",
	projectId: "the-pinniped-page",
	storageBucket: "the-pinniped-page.appspot.com",
	messagingSenderId: "636989973689",
	appId: "1:636989973689:web:6d938d9588606d803a6768",
};

firebase.initializeApp(firebaseConfig);

const illegalCharacters = [".", "#", "$", "[", "]", "/", "\\"];
var postName = document.querySelector("h3").innerHTML;
illegalCharacters.forEach((character) => (postName = postName.replace(character, "_")));
var alreadyViewed = false;

const postViewsRef = firebase.database().ref("/post-views/" + postName);
postViewsRef.on("value", (snapshot) => {
	if (snapshot.exists()) {
		const views = snapshot.val().views;
		addView(views);
	} else {
		addView(0);
	}
});

function addView(views) {
	if (!alreadyViewed) {
		alreadyViewed = true;

		firebase
			.database()
			.ref("/post-views/" + postName)
			.set({
				views: views + 1,
			});
	}
}
