import React from "react";

function BaseApp() {
    return (
        <div className="jumbotron">
            <h2 className="display-4">Hello, world!</h2>
            <p className="lead">
                <span className="base-app">Base App</span> is the central access
                point for the microfrontend infrastructure.
            </p>
        </div>
    );
}

export default BaseApp;
