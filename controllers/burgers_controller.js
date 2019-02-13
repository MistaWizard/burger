const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger_name], function() {
        res.redirect("/");
    });
});

router.put("/burgers/:id", function(req, res) {
    let condition = "id = " + req.params.id;
    burger.updateOne({devoured: true}, condition, function() {
        res.redirect("/");
    });
});

module.exports = router;