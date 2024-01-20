export function createGames(container, games) {
	container.innerHTML = "";

	games.forEach(function (game) {
		// Create the game card div
		var gameCard = document.createElement("div");
		gameCard.className = "gamecard";

		// create the image element
		var img = document.createElement("img");
		img.src = game.image;
		img.className = "image-size";
		img.alt = game.title;
		gameCard.appendChild(img);

		// Create the title element (h3)
		var title = document.createElement("h3");
		title.textContent = game.title;
		gameCard.appendChild(title);

		// Create the price paragraph
		var price = document.createElement("p");
		price.textContent = "$" + game.price;
		gameCard.appendChild(price);

		// Create the genre paragraph
		var genre = document.createElement("p");
		genre.textContent = game.genre;
		gameCard.appendChild(genre);

		// Create the 'Read more' link
		var readMore = document.createElement("a");
		readMore.href = "gamedetail.html?id=" + game.id;
		readMore.className = "button button-white";
		readMore.textContent = "Read more";
		gameCard.appendChild(readMore);

		// Create the 'Add to cart' link
		var addToCart = document.createElement("a");
		addToCart.href = "cart.html";
		addToCart.className = "button button-turquoise";
		addToCart.textContent = "Add to cart";
		gameCard.appendChild(addToCart);

		// Append the game card to the container
		container.appendChild(gameCard);
	});
}
