import { getGames } from "./api/getGames.js";
import { displayGames } from "./ui/games/displayGames.js";
import { displayErrorMessage } from "./ui/shared/displayMessage.js";

async function renderGames() {
	try {
		const games = await getGames();
		displayGames(games, "#container");
	} catch (error) {
		console.error("error getting games:", error);
		displayErrorMessage(
			"#container",
			"Oh no! An error occured when loading the games. It will be fixed."
		);
	}
}
renderGames();
