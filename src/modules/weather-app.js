import settings from "../index.js";

let weatherApp = (async function () {
	let weatherTemperature = document.querySelector("#weather-temperature");

	let showTemperature = async function () {
		let weatherData = null;
		if (settings.temperatureUnit == "metric") {
			settings.temperatureUnit = "imperial";
			weatherData = await getData("london", settings.temperatureUnit);
			weatherTemperature.textContent = `${weatherData.main.temp}°F`;
		} else {
			settings.temperatureUnit = "metric";
			weatherData = await getData("london", settings.temperatureUnit);
			weatherTemperature.textContent = `${weatherData.main.temp}°C`;
		}
	};

	weatherTemperature.addEventListener("click", showTemperature);

	showTemperature();
})();

async function getData(city, unit = "metric") {
	try {
		let response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=67556afc5b803ebc6540b49ddb13c6a3&units=${unit}`
		);
		let data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		throw new Error(`Wasn't possible to fetch data from API. ${error}`);
	}
}

export { getData };
