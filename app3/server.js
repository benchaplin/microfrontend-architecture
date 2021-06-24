const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/asset-manifest.json", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "asset-manifest.json"));
});

app.use("/static", express.static(path.resolve(__dirname, "public", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(3003, () => console.log("Server running on port 3003..."));
