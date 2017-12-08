var searchOpen = document.querySelector(".search__open-btn");
var searchForm = document.querySelector(".search");
var search = document.querySelector("[name=text]");

searchOpen.addEventListener("click", function(event) {
	event.preventDefault();
	searchForm.classList.toggle("search--closed");
	search.focus();
});