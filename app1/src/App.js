import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import App1 from "./App1";
import About from "./About";
import Features from "./Features";

function App() {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/app1">
                    <App1 />
                </Route>
                <Route path="/app1/about">
                    <About />
                </Route>
                <Route path="/app1/features">
                    <Features />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
