
var hamburger = document.querySelector(".hamburger"),
	popup = document.querySelector(".popup"),
	headerMenu = document.querySelector(".header__menu");



function hideHamburger() {
	if(document.documentElement.clientWidth < 550) {
		hamburger.style.display = 'block';
		headerMenu.style.display = 'none';
	} else {
		hamburger.style.display = 'none';
		headerMenu.style.display = 'flex';
	}
}

hideHamburger();

window.onresize = function() {
	hideHamburger();
};


hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
    if(hamburger.classList.contains("is-active")) {
    	popup.style.display = "flex";
    } else {
    	popup.style.display = "none";
    }
});

