import React from "react";
import { Link } from "react-router-dom";

function Features() {
    return (
        <div className="container m-3">
            <h3>
                Features of <span className="app1">App1</span>
            </h3>
            <ul>
                <li>
                    <span className="app1">App1</span> is a React app with it's
                    own routing:
                    <ul>
                        <li>
                            <Link to="/app1">/app1</Link>
                        </li>
                        <li>
                            <Link to="/app1/about">/app1/about</Link>
                        </li>
                        <li>
                            <Link to="/app1/features">/app1/features</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <span className="app1">App1</span> is independently hosted
                    at{" "}
                    <Link to="http://localhost:3001/app1">
                        http://localhost:3001/app1
                    </Link>
                    . That means:
                    <ul>
                        <li>
                            <span className="app1">App1</span> can be
                            independently maintained and deployed to it's own
                            domain
                        </li>
                        <li>
                            <span className="app1">App1</span> can be integrated
                            into the Base App at runtime (see{" "}
                            <Link to="http://localhost:3000/app1">
                                http://localhost:3000/app1
                            </Link>
                            )
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}

export default Features;
