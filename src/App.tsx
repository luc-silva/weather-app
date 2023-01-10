import React, { Component } from "react";
import AppNavigator from "./components/AppNavigator/AppNavigator";
import MainBody from "./components/MainBody/MainBody";
import MainPanel from "./components/MainPanel/MainPanel";

class App extends Component {
    constructor(props: object) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <MainPanel />
                {/* <AppNavigator />
                <MainBody /> */}
            </div>
        )
    }
}

export default App;
