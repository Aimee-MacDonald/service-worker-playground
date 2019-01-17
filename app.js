const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => res.status(200).sendFile(__dirname + "/public/views/index.html"));

let list = [];
app.post("/postNote", (req, res) => {
  list.push(req.body.note);
  res.status(200).send({"status:": "Note Added"});
  console.log(list);
});

app.listen(8080, () => console.log("Server Listening on Port: 8080"));
