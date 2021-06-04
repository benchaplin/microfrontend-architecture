import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

window.renderApp1 = (containerId, history) => {
    ReactDOM.render(
        <App history={history} />,
        document.getElementById(containerId)
    );
};

window.unmountApp1 = containerId => {
    console.log(document);
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById("App1-container")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}
