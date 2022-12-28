import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";

const root = ReactDOM.createRoot(
    document.querySelector("#root") as HTMLDivElement
);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
