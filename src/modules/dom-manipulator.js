let weatherAppDomManipulator = (function () {
	let createDivElement = () => document.createElement("div");
	let createBtnElement = () => document.createElement("button");
	let createInptElement = () => document.createElement(`input`);
	let createStrongElement = () => document.createElement("strong");

	let createSearchContainer = function () {
		let mainContainer = createDivElement();
		mainContainer.id = "clock-search-container";

		let searchContainer = createDivElement();
		searchContainer.id = "search-container";

		let searchInpt = createInptElement();
		searchInpt.placeholder = "Type a city here...";

		let searchBtn = createBtnElement();
		searchBtn.textContent = "Search";
		searchContainer.append(searchInpt, searchBtn);

		//
		let clockContainer = createDivElement();
		let hours = createStrongElement();
		hours.id = "weather-clock";

		clockContainer.append(hours);

		mainContainer.append(searchContainer, clockContainer);
		return mainContainer;
	};

	let createWeatherCardContainer = function () {
		let container = createDivElement();

		return container;
	};

	let updateClock = (function () {
		setInterval(getTime, 3000);
	})();

	let changeBackground = function (newImage) {
		let image = document.querySelector("#weather-app-image");
		image.style.backgroundImage = `url(${newImage})`;
	};

	return { createSearchContainer, changeBackground };
})();

function getTime() {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
    if (minutes < 10){
        minutes = `0`+ minutes
    }
	let clock = document.querySelector("#weather-clock");

	console.log(`${hours}:${minutes}`);
	clock.textContent = `${hours}:${minutes}`;
}

let createWeatherPanel = function () {
	let screen = document.querySelector("#main-container");
	screen.textContent = "";

	let searchContainer = weatherAppDomManipulator.createSearchContainer();
	//let weatherCardContainer = createWeatherCardContainer();

	screen.append(searchContainer);
};

export { createWeatherPanel, weatherAppDomManipulator };
