var siteNav = document.querySelector(".site-nav__toggle");
var siteNavList = document.querySelector(".site-nav__list");

siteNav.addEventListener("click", function(event) {
	event.preventDefault();
	siteNavList.classList.toggle("site-nav__list--closed");
});