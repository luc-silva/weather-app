import React, { Component } from "react";
import AppNavigator from "./components/AppNavigator";
import MainBody from "./components/MainBody";
import MainPanel from "./components/MainPainel";

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
