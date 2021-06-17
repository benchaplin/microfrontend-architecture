# A Microfrontend Architecture

-   `/base-app`: the gateway for the microfrontends
-   `/app1`: a React microfrontend
-   `/app2`: a vanilla JS microfrontend

## How to run the apps

Run:

-   `npm install` (if it's your first time checking out the project)
-   `npm start` in each app folder

They will run on the following ports:

|            |                |
| ---------- | -------------- |
| `base-app` | localhost:3000 |
| `app1`     | localhost:3001 |
| `app2`     | localhost:3002 |

### How it works

The microfrontends follow a contract (after choosing a unique `ID`):

-   Implement functions `window.render{ID}` and `window.unmount{ID}`
-   Keep any routes behind `"/{ID}"`
-   Bundle the entire app into a single JS file (including styles)
-   Deploy an `asset-manifest.json` on the webserver with the path to the bundle - `{ "files": { "main.js": "bundle.js" } }`

Then, the `base-app` only needs to know the host and `ID`, and it can do the work via run-time JS integration. Essentially, when it needs to render the microfrontend, it:

-   Reads the `asset-manifest.json` and attaches the bundle
-   Calls `window.render{ID}`
-   ...
-   Calls `window.unmount{ID}` when finished

### Benefits

Microfrontends offer the same benefits of microservices:

-   Smaller, focused codebases
-   Decoupled applications
    -   Independently developed and deployed
    -   Independently hosted and operated

This approach is particularly flexible:

-   Applications can be written using any framework/library that can be bundled completely in JS
-   Runtime integration allows for microfrontend updates to be reflected immediately in the gateway

### Drawbacks

This is a minimal example, and thus there are improvements which may need to be made in a real-world environment:

-   Introduce shared components
    -   The current system may result in copies of the same libraries, as each microfrontend creates a complete bundle of it's application
