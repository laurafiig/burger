var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/burgers/create", function(req, res) {
  if (req.body.burger_name != "") {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function() {
          
      res.redirect("/burgers");
    });
  };
});

router.put("/burgers/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/burgers");
  });
});
// Export routes for server.js to use.
module.exports = router;
