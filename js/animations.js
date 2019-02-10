var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	startDelay: 10,
	typeSpeed: 50,
	backSpeed: 70,
	showCursor: true,
  	cursorChar: '|',
  	autoInsertCss: true,
	smartBackspace: true,
});

// alert(screen.width);

if (screen.width < 1166) {
	document.getElementById("column2").innerHTML = "Activities";
}

// var typed2 = new Typed('#typed2', {
// 	strings: [
// 	  "git push --force ^1000\n `pushed to origin with option force`"
// 	]
// });
