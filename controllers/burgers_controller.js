const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// Create the `router` for the app, and export the `router` at the end of your file.

// R: GET
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbrObject = {
      burger: data
    };
    console.log(hbrObject);
    res.render("index", hbrObject);
  });
});

// C: POST
router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

// U: PUT
router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// D: DELETE
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export
module.exports = router;
