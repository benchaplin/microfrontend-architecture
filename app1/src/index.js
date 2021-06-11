import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

window.renderApp1 = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId)
    );
};

window.unmountApp1 = containerId => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("App1-container")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
