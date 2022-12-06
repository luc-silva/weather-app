import getData from "./fetch.js";

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
		let hours = createStrongElement();
		hours.id = "weather-clock";

		let clockContainer = createDivElement();

		clockContainer.append(hours);

		mainContainer.append(searchContainer, clockContainer);
		return mainContainer;
	};

	let createWeatherCardContainer = function () {
		let container = createDivElement();
		container.id = "weather-card-container";

		return container;
	};

	let createWeatherCard = function (data) {
		let card = createDivElement();
		card.classList.add("weather-card");
		card.innerHTML = `
        <span class="weather-card-city">${data.name}, ${data.sys.country}</span>
        <div class="weather-card-status-container">
            <div class="weather-card-status">
                <span>${Math.round(data.main.temp)}°C</span> /
                <span>${Math.round(data.main.temp * 1.8 + 32)}°F</span>
            </div>
            <div class="weather-card-condition">
                ${data.weather[0].description}
                <img src="http://openweathermap.org/img/wn/${
					data.weather[0].icon
				}@2x.png"></img>
            </div>
        </div>`;

		return card;
	};

	let updateClock = function () {
		setInterval(getTime, 3000);
	};

	let changeBackground = function (newImage) {
		let image = document.querySelector("#weather-app-image");
		image.style.backgroundImage = `url(${newImage})`;
	};

	return {
		createSearchContainer,
		changeBackground,
		updateClock,
		createWeatherCardContainer,
		createWeatherCard,
	};
})();

function getTime() {
	let time = new Date();
	let hours = time.getHours();
	let minutes = time.getMinutes();
	if (minutes < 10) {
		minutes = `0` + minutes;
	}
	let clock = document.querySelector("#weather-clock");

	clock.textContent = `${hours}:${minutes}`;
}

let createWeatherPanel = async function () {
	let screen = document.querySelector("#main-container");
	screen.textContent = "";

	let searchContainer = weatherAppDomManipulator.createSearchContainer();
	let weatherCardContainer =
		weatherAppDomManipulator.createWeatherCardContainer();

	screen.append(searchContainer, weatherCardContainer);

	weatherAppDomManipulator.updateClock();

	let cities = [
		"London",
		"Brasilia",
		"Washington",
		"Berlin",
		"Moscow",
		"Tokyo",
		"Mexico City",
	];
	for (let counter = 0; counter < cities.length; counter++) {
		let data = await getData(cities[counter]);

		let card = weatherAppDomManipulator.createWeatherCard(data);

		document.querySelector("#weather-card-container").append(card);
	}
};

export { createWeatherPanel, weatherAppDomManipulator };
