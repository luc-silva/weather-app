import React, { Component } from "react";
import { SimpleWeatherData } from "../../models/WeatherData";

import styles from './WeatherDisplay.module.css'

class WeatherDisplay extends Component {
    constructor(props: SimpleWeatherData) {
        super(props);
    }

    render() {
        return (
            <span className={styles['weather-display']}>
                <div className={styles['weather-city']}>----</div>
                <div className={styles['weather-status-display']}>
                    <div className={styles['weather-status']}>----</div>
                    <div className={styles['weather-temperature']}>N/A°C</div>
                </div>
            </span>
        );
    }
}

export default WeatherDisplay;
