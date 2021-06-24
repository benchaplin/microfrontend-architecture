import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav
                className="navbar navbar-expand-sm navbar-light"
                style={{ backgroundColor: "rgb(222, 226, 229)" }}
            >
                <Link className="navbar-brand" to="/">
                    <big className="base-app">Base App</big>
                </Link>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/app1">
                                App1
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/app2">
                                App2
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/app3">
                                App3
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
