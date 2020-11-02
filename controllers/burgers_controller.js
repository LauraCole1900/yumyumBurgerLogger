const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

const app = express;

app.engine("handlebars", handleb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Create the `router` for the app, and export the `router` at the end of your file.