import React, { Component } from "react";

class AppNavigator extends Component {
    constructor(props: object) {
        super(props);
    }
    render() {
        return (
            <nav id="weather-app-navigator">
                <ul>
                    <li id="weather-tab-btn">Weather</li>
                    <li>News</li>
                    <li>Agenda</li>
                </ul>
                <button id="settings-button">Settings</button>
            </nav>
        );
    }
}
export default AppNavigator;
