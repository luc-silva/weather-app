import { WeatherData } from "../models/WeatherData";

async function getData(city: string, unit: string): Promise<WeatherData> {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=67556afc5b803ebc6540b49ddb13c6a3&units=${unit}`
        );
        return response.json();

    } catch (error) {
        throw new Error(`${error}`);
    }
}


export default getData;
