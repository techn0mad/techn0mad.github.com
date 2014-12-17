//// JavaScript Navigation for slide
// Variables from setup.js: nextPageUrl, prevPageUrl, indexPageUrl, firstPageUrl, lastPageUrl
function nextPage() {
	document.location=nextPageUrl;
	takenAction = false;
}
function prevPage() {
	document.location=prevPageUrl;
	takenAction = false;
}
function indexPage() {
	document.location=indexPageUrl;
	takenAction = false;
}
function firstPage() {
	document.location=firstPageUrl;
	takenAction = false;
}
function lastPage() {
	document.location=lastPageUrl;
	takenAction = false;
}
function navSlideShow() {
	//TODO_BY_YOU: If you have a slide show toggle function, put it here
	//Ex:toggleSlideShow(exp);
	takenAction = false;
}
function navToggleInfo() {
	//TODO_BY_YOU: If you have a show exif info toggle function, put it here
	//Ex:toggleInfo();
	takenAction = false;
}
