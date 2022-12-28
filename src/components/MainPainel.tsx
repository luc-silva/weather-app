import React, { Component } from "react";
import getData from "../scripts/fetch";

class MainPanel extends Component {
    constructor(props: object) {
        super(props);
    }
    async getWeatherStatus(){
        let data:Object = await getData()
        return data
    }

    render() {
        console.log(this.getWeatherStatus())
        return (
            <div id="weather-app-image">
                <span id="weather-tip">
                    Click above the temperature to change its format
                </span>
                <span id="weather-display">
                    <div id="weather-city">----</div>
                    <div id="weather-status-display">
                        <div id="weather-status">----</div>
                        <div id="weather-temperature">N/A°C</div>
                    </div>
                </span>
            </div>
        );
    }
}

export default MainPanel;
