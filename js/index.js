import { url } from "./constants.js";

async function getGames() {
	try {
		const response = await fetch(url);

		if (response.ok !== true) {
			throw new Error(`HTTP Error! status: ${response.status}`);
		}

		const games = await response.json();

		const resultsContainer = document.querySelector("#container");
		resultsContainer.innerHTML = "";

		games.forEach(function (game) {
			console.log(game);

			resultsContainer.innerHTML += `<section class="product-list">
			<div class="game-card">
			<img src="${game.image}" class="image-size" alt="${game.title}" />
			<h3>${game.title}</h3>
			<p>$${game.price}</p>
			<p>${game.genre}</p>
			<a href="gamedetail.html?id=${game.id}" class="button button-white">Read more</a>
			<a href="cart.html" class="button button-turquoise">Add to cart</a>
			</div>
			</section>`;
		});
	} catch (error) {
		console.error(error);
		const resultsContainer = document.querySelector("#container");
		resultsContainer.innerHTML =
			'<p class="error">Oh no! An error occurred when loading the games.It will be fixed.</p>';
	}
}
getGames();
