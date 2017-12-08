var siteMenu = document.querySelector(".site-menu__btn");
var siteMenuList = document.querySelector(".site-menu__list");

siteMenu.addEventListener("click", function(event) {
	event.preventDefault();
	siteMenuList.classList.toggle("site-menu__list--closed");
});