const mysql = require("mysql");
const express = require("express");
const handleb = require("express-handlebars");
const path = require("path");
const routes = require("./controllers/burgers_controller.js");

const app = express();

const PORT = process.env.PORT || 3005;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.engine("handlebars", handleb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});