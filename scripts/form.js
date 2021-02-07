function validateEmail(emailToTest) {
	var mailformat = "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/";
	if(emailToTest.value.match(mailformat)) {
		alert("Valid email address!");
	//	document.form1.text1.focus();
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
	//	document.form1.text1.focus();
		return false;
	}
}

function onEmailListFormSubmit(emailToTest, firstNameToTest) {
	let emailExists = emailToTest.value.length > 0;
	let firstNameExists = firstNameToTest.value.length > 0;
	
	return false;
}

function onContactFormSubmit(emailToTest, firstNameToTest) {
	return false;
}