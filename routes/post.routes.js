const express = require("express");
const router = express.Router();
const Post = require('../models/Post.model');
const Hobbie = require("../models/Hobbie.model")

router.get("/posts", (req, res, next) => {
    Post.find()
        .populate("hobbie") 
        .then((allPosts) => res.json(allPosts))
        .catch(e => console.log(e));
});

router.post("/posts", (req, res, next) => {
    const { image, description, hobbie } = req.body;
    Post.create({ image, description, hobbie }) 
        .then(response => res.json(response))
        .catch(e => console.log(e));
});

router.put("/posts/:id", (req, res, next) => {
    const { image, description, hobbie } = req.body;
    Post.findByIdAndUpdate(req.params.id, { image, description, hobbie }, { new: true }) 
        .then(updatedPost => {
            res.json(updatedPost);
        })
        .catch(e => console.log(e));
});

router.delete("/posts/:id", (req, res, next) => { 
    Post.findByIdAndDelete(req.params.id)
        .then(() => res.redirect("/posts"))
        .catch(e => console.log(e));
});

module.exports = router;