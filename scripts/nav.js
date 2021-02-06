const NAV_HOME = "navHome";
const NAV_SCHEDULE = "navSchedule";
const NAV_EMAIL = "navEmail";
const NAV_CONTACT = "navContact";

/*
	Input needs to be one of the 4 constants above. Syntax to use is:
	
	setNavBreadcrumb(NAV_HOME);
*/
function setNavBreadcrumb(section) {
	let sectionToBreadcrumb = document.getElementById(section);

	if (!sectionToBreadcrumb) {
		throw("section does not exist");
	} else {
		sectionToBreadcrumb.classList.add("navBreadcrumb");
	}
}