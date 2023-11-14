/*=======================================
This Is The Main JS File With Functions
That Are Used On Every Page. More JS
Files Can Be Made For Specific Use Cases
=======================================*/

loggedIn = false;

document.addEventListener("DOMContentLoaded", (event) => {
	let cartOpen = false;
	var cDate = new Date();
	var cYear = cDate.getFullYear();
	document.querySelector("#cYear").innerHTML = cYear;

	if (loggedIn) {
		document.getElementById("loginOption").innerText = "「 ACCOUNT 」";
		document.getElementById("loginOption").href = "account.html";
	}
	else {
		document.getElementById("loginOption").innerText = "「 LOGIN 」";
		document.getElementById("loginOption").href = "login.html";
	}

	setInterval(() => {
		document.title = "「 " + glitch("ESOTERIC") + " 」";
		if (document.getElementsByClassName("brandname")[0] !== undefined) {
			document.getElementsByClassName("brandname")[0].innerText = glitch("ESOTERIC");
		}
		if (document.getElementsByClassName("pageTitle")[0] !== undefined) {
			document.getElementsByClassName("pageTitle")[0].innerText = "「 " + glitch("DROPS") + " 」";
		}
	}, 80);

	document.addEventListener("click", function (e) {
		if (!cartOpen && (e.target.offsetParent.id == "cart" || e.target.id == "cart")) {
			cartOpen = true;
			document.getElementById("cart").classList.add("cartOpen");
		}
		else if (cartOpen && (e.target.offsetParent.id != "cart" && e.target.id != "cart")) {
			cartOpen = false;
			document.getElementById("cart").classList.remove("cartOpen");
		}
	});
});

function glitch(input) {
	const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
	let flipped = chars.charAt(Math.floor(Math.random() * chars.length));
	let idx = Math.floor(Math.random() * input.length);

	return Math.random() < (20 / 100) ? Array.from(input).toSpliced(idx, 1, flipped).join("") : input;
}

function toggleMenu() {
	if (document.getElementById("header").className === "header") {
		document.getElementById("header").className += " open";
	}
	else {
		document.getElementById("header").className = "header";
	}
}

function switchForm(shown) {
	console.log("shown: " + shown);
	if (shown == "login") {
		document.getElementsByClassName("register")[0].style.display = "none";
		document.getElementsByClassName("register")[1].style.display = "none";
		document.getElementsByClassName("login")[0].style.removeProperty("display");
	}
	else {
		document.getElementsByClassName("register")[0].style.removeProperty("display");
		document.getElementsByClassName("register")[1].style.removeProperty("display");
		document.getElementsByClassName("login")[0].style.display = "none";
	}
}
