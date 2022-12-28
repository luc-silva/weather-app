import React, { Component } from "react";
import AppNavigator from "./components/AppNavigator";
import MainPanel from "./components/MainPainel";

class App extends Component {
    constructor(props: object) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <MainPanel />
                <AppNavigator />
            </div>
        )
    }
}

export default App;
