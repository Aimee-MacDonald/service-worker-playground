const express = require("express");
const app = express();

app.get("/", (req, res) => res.status(200).send("<h1>Service Worker Playground</h1>"));

app.listen(8080, () => console.log("Server Listening on Port: 8080"));
