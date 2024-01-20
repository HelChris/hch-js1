export function displayErrorMessage(container) {
	const resultsContainer = document.querySelector(container);
	resultsContainer.innerHTML = '<p class="error">${message}</p>';
}
