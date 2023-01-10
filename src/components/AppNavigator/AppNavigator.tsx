import React, { Component } from "react";

import styles from "./AppNavigator.module.css"

class AppNavigator extends Component {
    render() {
        return (
            <nav className={styles['weather-app-navigator']}>
                <ul>
                    <li className={styles['weather-app-navigator']}>Weather</li>
                    <li>News</li>
                    <li>Agenda</li>
                </ul>
                <button id={styles['settings-button']}>Settings</button>
            </nav>
        );
    }
}
export default AppNavigator;
