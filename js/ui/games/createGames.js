export function createGames(container, games) {
	container.innerHTML = "";

	games.forEach(function (game) {
		container.innerHTML += `<div class="gamecard">
		  <img src="${game.image}" class="image-size" alt="${game.title}" />
		  <h3>${game.title}</h3>
			<p>$${game.price}</p>
			<p>${game.genre}</p>
		  <a href="gamedetail.html?id=${game.id}" class="button button-white">Read more</a>
			<a href="cart.html" class="button button-turquoise">Add to cart</a>
			</div>`;
	});
}
