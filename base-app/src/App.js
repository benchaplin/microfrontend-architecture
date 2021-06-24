import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import BaseApp from "./BaseApp";
import MicroFrontend from "./MicroFrontend";
import { createBrowserHistory } from "history";

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <BaseApp />
                </Route>
                <Route path="/app1">
                    <MicroFrontend
                        key="1"
                        name="App1"
                        host="http://localhost:3001"
                        history={history}
                    />
                </Route>
                <Route path="/app2">
                    <MicroFrontend
                        key="2"
                        name="App2"
                        host="http://localhost:3002"
                        history={history}
                    />
                </Route>
                <Route path="/app3">
                    <MicroFrontend
                        key="3"
                        name="App3"
                        host="http://localhost:3003"
                        history={history}
                    />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
