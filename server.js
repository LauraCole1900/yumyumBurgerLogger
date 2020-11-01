const mysql = require("mysql");
const express = require("express");
const handleb = require("express-handlebars");

const app = express;

app.engine("handlebars", handleb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

