import React from "react";

function About() {
    return (
        <div className="container m-4">
            <h3 className="mb-3">
                Everything you need to know about{" "}
                <span className="app1">App1</span>
            </h3>
            <p>
                <span className="app1">App1</span> is an independently
                maintained frontend application. It's a React app, independently
                hosted <a href="http://localhost:3001/app1">here</a>.
            </p>
            <p>
                <span className="app1">App1</span> is also a integrated into the
                microfrontend container{" "}
                <span className="base-app">Base App</span>, hosted{" "}
                <a href="http://localhost:3000">here</a>.
            </p>
        </div>
    );
}

export default About;
