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

// var typed2 = new Typed('#typed2', {
// 	strings: [
// 	  "git push --force ^1000\n `pushed to origin with option force`"
// 	]
// });

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
