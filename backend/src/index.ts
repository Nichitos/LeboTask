import express from "express";
const app = express();
let bodyParser = require("body-parser");

var cors = require("cors");

const PORT = 8080 || process.env.PORT;

const routes = require('./routes/routes')

app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());

app.use(routes)

app.listen(PORT, function () {
  console.log("==> 🌎  Magic is happening at %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});
