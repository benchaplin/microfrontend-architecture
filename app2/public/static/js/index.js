(() => {
    const baseApp =
        "color:rgb(30, 20, 46);background-color: rgb(202, 206, 219);padding: 3px 5px;border-radius: 5px;";

    const app2 =
        "color: rgb(26, 54, 21);background-color: rgb(215, 231, 213);padding: 3px 5px;border-radius: 5px;";

    const nav = `
        <nav
            class="navbar navbar-expand-sm navbar-light"
            style="background-color: rgb(243, 243, 230); height: 50px"
        >
            <a class="navbar-brand" style="padding-top: 20px ${app2}" href="/app2" >
                App 2
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/app2/about" >About</a>
                    </li>
                </ul>
            </div>
        </nav>
    `;

    class AbstractView {
        constructor(params) {
            this.params = params;
        }

        getHtml() {
            return "";
        }
    }

    class Home extends AbstractView {
        constructor(params) {
            super(params);
        }

        getHtml() {
            return `
                ${nav}
                <div class="jumbotron" style="background-color:white">
                    <h1 class="display-4">
                        <span style="${app2}">App2</span>
                    </h1>
                    <p class="lead">
                        This is another independently-hosted microfrontend.
                    </p>
                    <hr class="my-4" />
                    <p>
                        <span style="${app2}">App2</span> is a simple Vanilla Javascript app.
                        How does it fit into the microfrontend architecture?
                        <a href="/about">Click here</a> to find out.
                    </p>
                </div>
            `;
        }
    }

    class About extends AbstractView {
        constructor(params) {
            super(params);
        }

        getHtml() {
            return `
                ${nav}
                <div class="container m-4">
                    <h3 class="mb-3">
                        <span style="${app2}">App2</span> - simple Vanilla Javascript
                    </h3>
                    <p>
                        <span style="${app2}">App2</span> is an independently
                        maintained frontend application. It's a vanilla JS app, independently
                        hosted at
                        <a href="http://localhost:3002/app2">
                            http://localhost:3002/app2
                        </a>.
                    </p>
                    <p>
                        <span style="${app2}">App2</span> is also a integrated into the
                        microfrontend container
                        <span style="${baseApp}">Base App</span>, at
                        <a href="http://localhost:3000">http://localhost:3000/app2</a>.
                    </p>
                </div>
            `;
        }
    }

    const router = id => {
        const routes = [
            { path: "/app2", view: Home },
            { path: "/app2/about", view: About },
        ];

        const currentRoute =
            routes.find(route => location.pathname == route.path) || routes[0];

        const view = new currentRoute.view();

        document.getElementById(id).innerHTML = view.getHtml();
    };

    const render = id => {
        router(id);
    };

    if (!document.getElementById("App2-container")) {
        render("app");
    }

    window.renderApp2 = (containerId, history) => {
        render(containerId);
    };

    window.unmountApp2 = containerId => {};
})()