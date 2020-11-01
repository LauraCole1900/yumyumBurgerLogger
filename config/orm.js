const connection = require("./connection.js");

let orm = {
  selectAll: function(column) {
    const queryString = "SELECT ?? FROM burgers";
    connection.query(queryString, [column], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(colOne, colTwo, valColOne, valColTwo) {
    const queryString = "INSERT INTO burgers(??, ??) VALUES (?, ?)";
    connection.query(queryString, [colOne, colTwo, valColOne, valColTwo], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(colOne, valColOne, colTwo, valColTwo) {
    const queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
    connection.query(queryString, [colOne, valColOne, colTwo, valColTwo], function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;