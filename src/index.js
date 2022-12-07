import getData from "./modules/fetch.js";
import {
	createWeatherPanel,
	createSettingsPanel,
	weatherAppDomManipulator,
} from "./modules/dom-manipulator.js";

let settings = (function () {
	let temperatureUnit = "metric";
	let city = "London";

	return { temperatureUnit, city };
})();

let weatherApp = (async function () {
	let weatherTemperature = document.querySelector("#weather-temperature");
	let weatherData = await getData();

	let showTemperature = async function () {
		if (settings.temperatureUnit == "metric") {
			settings.temperatureUnit = "imperial";
			weatherData = await getData(
				settings.city,
				settings.temperatureUnit
			);
			weatherTemperature.textContent = `${weatherData.main.temp}°F`;
		} else {
			settings.temperatureUnit = "metric";
			weatherData = await getData(
				settings.city,
				settings.temperatureUnit
			);
			weatherTemperature.textContent = `${weatherData.main.temp}°C`;
		}
		checkWeatherCondition();
		checkCity();
	};

	let checkWeatherCondition = function () {
		let weatherStatus = document.querySelector("#weather-status");
		let status = weatherData.weather[0].description;
		status = upperize(status);
		weatherStatus.textContent = `${status}`;

		switch (weatherData.weather[0].main) {
			case "Rain":
				weatherAppDomManipulator.changeBackground(
					"../src/img/raining.jpg"
				);
				break;

			case "Thunderstorm":
				weatherAppDomManipulator.changeBackground(
					"../src/img/thunderstorm.jpg"
				);
				break;

			case "Clouds":
				weatherAppDomManipulator.changeBackground(
					"../src/img/cloudy.jpg"
				);
				break;

			case "Snow":
				weatherAppDomManipulator.changeBackground(
					"../src/img/snow.jpg"
				);
				break;

			case "Drizzle":
				weatherAppDomManipulator.changeBackground(
					"../src/img/drizzle.jpg"
				);
				break;

			default:
				weatherAppDomManipulator.changeBackground(
					"../src/img/clear.jpg"
				);
				break;
		}
	};

	let checkCity = function () {
		let weatherCity = document.querySelector("#weather-city");
		weatherCity.textContent = weatherData.name;
	};

	//panel buttons
	let settingsBtn = document.querySelector("#settings-button");
	settingsBtn.addEventListener("click", createSettingsPanel);

	let weatherBtn = document.querySelector("#weather-tab-btn");
	weatherBtn.addEventListener("click", createWeatherPanel);

	weatherTemperature.addEventListener("click", showTemperature);
	showTemperature();
})();

let upperize = (status) => {
	status = status.split(" ");
	let newStatus = [];
	status.forEach((word) => {
		word = word.split("");
		word[0] = word[0].toUpperCase();
		word = word.join("");
		newStatus.push(word);
	});
	newStatus = newStatus.join(" ");
	return newStatus;
};
