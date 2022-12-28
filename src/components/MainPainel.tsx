import React, { Component } from "react";

class MainPanel extends Component {
    constructor(props: object) {
        super(props);
    }
    render() {
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
