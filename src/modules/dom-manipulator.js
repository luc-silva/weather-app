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
		searchInpt.id = "search-input";

		let searchBtn = createBtnElement();
		searchBtn.addEventListener("click", () => {
			console.log(searchInpt.value);
			fetchCity(searchInpt.value);
		});
		searchBtn.textContent = "Search";
		searchBtn.id = "search-btn";

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

	let clock;
	let updateClock = function () {
		clock = setInterval(getTime, 3000);
	};

	let stopClock = function () {
		clearInterval(clock);
		clock = null
	};

	let changeBackground = function (newImage) {
		let image = document.querySelector("#weather-app-image");
		image.style.backgroundImage = `url(${newImage})`;
	};

	let createCityContainer = function (data) {
		let screen = document.querySelector("#weather-card-container");
		let container = createDivElement();
		container.id = "weather-city-container-card";

		let weatherInfo = createDivElement();
		weatherInfo.id = "weather-city-container-info";

		let weatherTitle = createDivElement();
		weatherTitle.innerHTML = `
		<div>
			<h2>${data.name} - ${data.sys.country}</h2>
			<p>${data.weather[0].description}</p>
		</div>`;

		let weatherStatus = createDivElement();
		weatherStatus.id = "weather-city-container-info-stts";
		weatherStatus.innerHTML = `
		<span><strong>Humidity: </strong>${data.main.humidity}%</span>
		<span><strong>Temp Min: </strong>${data.main.temp_min}°C</span>
		<span><strong>Temp Max: </strong>${data.main.temp_max}°C</span>`;

		weatherInfo.append(weatherTitle, weatherStatus);
		//

		let weatherImg = createDivElement();
		weatherImg.id = "weather-city-container-img";
		weatherImg.innerHTML = `
		<h3>${data.main.temp}°C</h3>
		<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;

		container.append(weatherInfo, weatherImg);

		if (screen.firstChild.id != "weather-city-container-card") {
			screen.prepend(container);
		} else {
			let children = screen.querySelectorAll("div");
			screen.removeChild(children[0]);
			screen.prepend(container);
		}
	};

	return {
		createSearchContainer,
		changeBackground,
		updateClock,
		stopClock,
		createWeatherCardContainer,
		createWeatherCard,
		createCityContainer,
	};
})();

let fetchCity = async function (city) {
	let data = await getData(city);
	weatherAppDomManipulator.createCityContainer(data);
};

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

let createSettingsPanel = async function () {
	weatherAppDomManipulator.stopClock()

	let screen = document.querySelector("#main-container");
	screen.textContent = "";

	let settingsContainer = document.createElement("div");
	settingsContainer.id = "settings-container";

	let title = document.createElement("h2");
	title.textContent = "Settings:";

	let cityInputDiv = document.createElement("div");
	cityInputDiv.textContent =
		"Default city: (City that shows on the main display)";
	let cityInput = document.createElement("input");
	cityInputDiv.append(cityInput)

	let unitInputDiv = document.createElement("div");
	unitInputDiv.textContent = "Unit:";
	let unitInput = document.createElement("select");
	unitInput.innerHTML = `
	<option value="metric">Metric</option>
	<option value="imperial">Imperial</option>`;
	unitInputDiv.append(unitInput)

	settingsContainer.append(title, cityInputDiv, unitInputDiv);

	screen.append(settingsContainer);
};

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

export { createWeatherPanel, createSettingsPanel, weatherAppDomManipulator };
