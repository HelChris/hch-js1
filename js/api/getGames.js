import { url } from "./constants.js";

export async function getGames() {
	try {
		const response = await fetch(url);
		if (response.ok !== true) {
			throw new Error(`HTTP Error! status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error("error getting games", error);
		throw error;
	}
}
