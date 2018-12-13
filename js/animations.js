var typed = new Typed('#typed', {
	stringsElement: '#typed-strings',
	startDelay: 10,
	typeSpeed: 100,
	backSpeed: 70,
	showCursor: true,
  	cursorChar: '|',
  	autoInsertCss: true,
	smartBackspace: true,
	loop: true,
	loopCount: Infinity,
});

var typed2 = new Typed('#typed2', {
	strings: [
	  "git push --force ^1000\n `pushed to origin with option force`"
	]
});
