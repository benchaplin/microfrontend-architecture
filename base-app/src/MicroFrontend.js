import React from "react";

class MicroFrontend extends React.Component {
    componentDidMount() {
        const { name, host, document } = this.props;
        const scriptId = `micro-frontend-script-${name}`;

        if (document.getElementById(scriptId)) {
            this.renderMicroFrontend();
            return;
        }

        console.log("pre fetch", window);
        fetch(`${host}/asset-manifest.json`)
            .then(res => res.json())
            .then(manifest => {
                const script = document.createElement("script");
                script.id = scriptId;
                script.crossOrigin = "";
                script.src = `${host}${manifest["files"]["main.js"]}`;
                script.onload = this.renderMicroFrontend;
                document.head.appendChild(script);
            });
        console.log("post fetch", window);
    }

    componentWillUnmount() {
        const { name, window } = this.props;
        window[`unmount${name}`](`${name}-container`);
    }

    renderMicroFrontend = () => {
        const { name, window, history } = this.props;
        console.log("renderMicroFrontend", window);
        window[`render${name}`](`${name}-container`, history);
    };

    render() {
        return <main id={`${this.props.name}-container`} />;
    }
}

MicroFrontend.defaultProps = {
    document,
    window,
};

export default MicroFrontend;
