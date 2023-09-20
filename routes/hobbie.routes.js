const router = require("express").Router(); 
const mongoose = require("mongoose");
const Hobbie = require("../models/Hobbie.model");

 router.post("/hobbies", (req, res, next) => {
  const { title, description } = req.body;
 
  Hobbie.create({ title, description})
    .then(response => res.json(response))
    .catch(err => res.json(err));
});
 
module.exports = router;