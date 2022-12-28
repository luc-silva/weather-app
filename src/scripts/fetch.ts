async function getData(
    city: string = "London",
    unit: string = "metric"
) {
    try {
        let response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=67556afc5b803ebc6540b49ddb13c6a3&units=${unit}`
        );
        let data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Wasn't possible to fetch data from API. ${error}`);
    }
}

export default getData;
