import React from "react";
import ReactDOM from "react-dom";
import VehicleList from "./components/VehicleList";
import { Provider } from "react-redux";
import store from "./store";
import "./global-styles.scss";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <VehicleList />
        </Provider>
    </React.StrictMode>,
    document.querySelector(".root")
);
