import { getQueryStringParam } from "./getQueryStringParam.js";
import { url } from "./constants.js";

async function getGame() {
	const id = getQueryStringParam("id");

	if (!id) {
		document.location.href = "/";
	}

	const gameUrl = `${url}/${id}`;

	try {
		const response = await fetch(gameUrl);

		if (response.ok === false) {
			throw new Error("There was an error fetching the game with id: " + id);
		}

		const game = await response.json();

		const resultsContainer = document.querySelector("#game-detail-page");

		resultsContainer.innerHTML = `<section class="game-detail-page">
      <img src="${game.image}" class="image-size" alt="${game.title}" />
      <div class="gamedetail">
      <h1>${game.title}</h1>
			<p>Price: $${game.price}</p>
			<p>Genre: ${game.genre}</p>
			<p>Released: ${game.released}</p>
			<p>Age: ${game.ageRating}</p>
			<p>${game.description}</p>
      <a href="cart.html" class="button button-turquoise">Add to cart</a>
      </div>
    </section>`;
	} catch (error) {
		const resultsContainer = document.querySelector("#game-detail-page");
		resultsContainer.innerHTML = `<p class="error">${error}Oh no! An error occurred when retrieving the games details. It will be fixed asap.</p>`;
	}
}

getGame();
