export function createGames(container, games) {
	container.innerHTML = "";

	games.forEach(function (game) {
		var gameCard = document.createElement("div");
		gameCard.className = "gamecard";

		var img = document.createElement("img");
		img.src = game.image;
		img.className = "image-size";
		img.alt = game.title;
		gameCard.appendChild(img);

		var title = document.createElement("h3");
		title.textContent = game.title;
		gameCard.appendChild(title);

		var price = document.createElement("p");
		price.textContent = "$" + game.price;
		gameCard.appendChild(price);

		var genre = document.createElement("p");
		genre.textContent = game.genre;
		gameCard.appendChild(genre);

		var readMore = document.createElement("a");
		readMore.href = "gamedetail.html?id=" + game.id;
		readMore.className = "button button-white";
		readMore.textContent = "Read more";
		gameCard.appendChild(readMore);

		var addToCart = document.createElement("a");
		addToCart.href = "cart.html";
		addToCart.className = "button button-turquoise";
		addToCart.textContent = "Add to cart";
		gameCard.appendChild(addToCart);

		container.appendChild(gameCard);
	});
}
