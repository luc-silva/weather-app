import React, { Component } from "react";
import { WeatherData } from "../../models/WeatherData";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";

import styles from "./MainPanel.module.css"

class MainPanel extends Component{
    render() {
        return (
            <div className={styles['weather-app-image']}>
                <span className={styles['weather-tip']}>
                    Click above the temperature to change its format
                </span>
                <WeatherDisplay />
            </div>
        );
    }
}

export default MainPanel;
