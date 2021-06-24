(() => {
    const baseApp =
        "color:rgb(30, 20, 46);background-color: rgb(202, 206, 219);padding: 3px 5px;border-radius: 5px;";

    const app3 =
        "color: rgb(26, 54, 21);background-color: rgb(215, 231, 213);padding: 3px 5px;border-radius: 5px;";

    const nav = `
        <nav
            class="navbar navbar-expand-sm navbar-light"
            style="background-color: rgb(243, 243, 230); height: 50px"
        >
            <a class="navbar-brand" style="padding-top: 20px ${app3}" href="/app3" >
                App 3
            </a>
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
                        <span style="${app3}">App3</span>
                    </h1>
                    <p class="lead">
                        And this is a cool chessboard...
                    </p>
                    <div style="display: flex; align-items: center; justify-content: center; position: relative;">
                        <iframe src="https://lichess.org/training/frame?theme=brown&bg=dark" style="width: 400px; height: 444px;" allowtransparency="true" frameborder="0"></iframe>
                        <div style="position: absolute; margin: 0 auto; width: 400px; height: 444px; cursor: pointer" onclick="window.location = 'https://bit.ly/3dekD8e'" />
                    </div>
                </div>
            `;
        }
    }

    const router = id => {
        const routes = [
            { path: "/app3", view: Home },
        ];

        const currentRoute =
            routes.find(route => location.pathname == route.path) || routes[0];

        const view = new currentRoute.view();

        document.getElementById(id).innerHTML = view.getHtml();
    };

    const render = id => {
        router(id);
    };

    if (!document.getElementById("App3-container")) {
        render("app");
    }

    window.renderApp3 = (containerId, history) => {
        render(containerId);
    };

    window.unmountApp3 = containerId => {};

})()