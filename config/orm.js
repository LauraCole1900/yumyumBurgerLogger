const connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

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