let item = "";
let price = 0;
let prettyName = "";
let desc = "";
let image = "";

document.addEventListener("DOMContentLoaded", (event) => {

	item = location.href.substring(location.href.indexOf("=") + 1);

	console.log(item);

	switch (item) {
		case "deck1":
			price = 60;
			prettyName = "Astral Deck";
			desc = "The Astral Deck; one of two decks available in the first wave. Made of Maple wood harvested from the most somber trees, crafted with the most sinister rituals and spells that you've never even heard of. Available in 7.5 inches, 8 inches, and 8.25 inches.";
			image = "deck1.png";
			break;
		case "deck2":
			price = 60;
			prettyName = "Etherial Deck";
			desc = "The Etherial Deck; one of two decks available in the first wave. Made of maple from the darkest forests, polished with the finest giant's bone powder. Available in 7.5 inches, 8 inches, and 8.25 inches. ";
			image = "deck2.png";
			break;
		case "truck1":
			price = 55;
			prettyName = "Unreal Trucks (Set Of 2)";
			desc = "The Unreal Trucks; one of two truck sets available in the first wave. Made from the strongest aluminum, forged in the dwarven forges of the north. Steady and reliable, with grade 8 kingpins. Available in 8 inches, 8.38 inches, and 8.625 inches.";
			image = "truck1.png";
			break;
		case "truck2":
			price = 80;
			prettyName = "Mythic Trucks (Set Of 2)";
			desc = "The Mythic Trucks; one of two trucks sets available in the first wave. Dipped in dragon blood, crafted from the coldest steel. Grade 8 kingpins made by the strongest blacksmiths. Available in 8 inches, 8.38 inches, and 8.625 inches.";
			image = "truck2.png";
			break;
		case "wheels":
			price = 40;
			prettyName = "Glide Wheels (Set Of 4)";
			desc = "Made from the feathers of harpies, these wheels will make you feel like you're truly flying. Available in 52mm.";
			image = "wheel.png";
			break;
		case "wheels2":
			price = 40;
			prettyName = "Spectre Wheels (Set Of 4)";
			desc = "Imbued with spirits, making you feel as if you're floating above the ground. Available in 52mm.";
			image = "wheel2.png";
			break;
		case "bearing":
			price = 30;
			prettyName = "Surreal Bearings (Set Of 8)";
			desc = "Crafted with the utmost care, with the best materials from all the lands for performance and durability. Easily removable for cleaning. ";
			image = "bearing.png";
			break;
		case "tool":
			price = 15;
			prettyName = "Skate Tool";
			desc = "Feel like the mountain dwarves when you use this! All-in-one design, you'll never need to buy anything else for your skateboards.";
			image = "tool.png";
			break;
		default:
		//header('Location: https://live.esoteric.host/drops.html');
		//exit();
	}

	document.getElementById('productImg').innerHTML = "<img src=\"../assets/images/" + image + "\" alt=\"" + prettyName + "\" />";
	document.getElementById('productTitle').innerHTML = prettyName + "    " + price + "<span class=\"dollarSign\">$</span>";
	document.getElementById('productDesc').innerHTML = desc;
});