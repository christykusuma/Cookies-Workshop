

// Add buttons
var addSugar = document.querySelector(".addSugar");
var addChocolate = document.querySelector(".addChocolate");
var addLemon = document.querySelector(".addLemon");
var clearCookies = document.querySelector(".clearCookies");

// Cookie counters HTML
var sugarNumber = document.querySelector(".sugarNumber");
var chocolateNumber = document.querySelector(".chocolateNumber");
var lemonNumber = document.querySelector(".lemonNumber");

// Wait for document to finish loading
document.addEventListener("DOMContentLoaded", function() {

	// Update the cookie count values
	if( Cookies.get("sugarCookies")) {
		sugarNumber.innerText = Cookies.get("sugarCookies");
	}

	if( Cookies.get("chocolateCookies")) {
		chocolateNumber.innerText = Cookies.get("chocolateCookies");
	}

	if( Cookies.get("lemonCookies")) {
		lemonNumber.innerText = Cookies.get("lemonCookies");
	}

	// Wait for click on sugar cookie counter button
	addSugar.addEventListener("click", () => {
		console.log(Cookies.get("sugarCookies"));

		// Get the current cookie value and add by 1
		let sugar_count = ~~Cookies.get("sugarCookies") + 1;
		Cookies.set("sugarCookies", sugar_count);

		// Update display of sugar cookie counter
		sugarNumber.innerText = sugar_count;
	})

	// Wait for click on chocolate cookie counter button
	addChocolate.addEventListener("click", () => {
		console.log(Cookies.get("chocolateCookies"));

		// Get the current cookie value and add by 1
		let chocolate_count = ~~Cookies.get("chocolateCookies") + 1;
		Cookies.set("chocolateCookies", chocolate_count);

		// Update display of chocolate cookie counter
		chocolateNumber.innerText = chocolate_count;
	})

	// Wait for click on lemon cookie counter button
	addLemon.addEventListener("click", () => {
		console.log(Cookies.get("lemonCookies"));

		// Get the current cookie value and add by 1
		let lemon_count = ~~Cookies.get("lemonCookies") + 1;
		Cookies.set("lemonCookies", lemon_count);

		// Update display of lemon cookie counter
		lemonNumber.innerText = lemon_count;
	})

	// When clear button is clicked, gets rid of all the cookies
	clearCookies.addEventListener("click", () => {

		// Sugar cookies expire
		Cookies.expire("sugarCookies");
		sugarNumber.innerText = 0;

		// Chocolate cookies expire
		Cookies.expire("chocolateCookies");
		chocolateNumber.innerText = 0;

		// Lemon cookies expire
		Cookies.expire("lemonCookies");
		lemonNumber.innerText = 0;
	})

})
