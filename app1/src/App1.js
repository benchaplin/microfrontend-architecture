import React from "react";
import { Link } from "react-router-dom";

function App1() {
    return (
        <div className="jumbotron" style={{ backgroundColor: "white" }}>
            <h1 className="display-4">
                <span className="app1">App1</span>
            </h1>
            <p className="lead">
                This is an independently-hosted microfrontend.
            </p>
            <hr className="my-4" />
            <p>
                To learn more about <span className="app1">App1</span> and how
                it fits into the microfrontend architecture, click below.
            </p>
            <button className="btn btn-light-outline btn-lg">
                <Link to="/app1/about" style={{ color: "black" }}>
                    Learn more
                </Link>
            </button>
        </div>
    );
}

export default App1;
