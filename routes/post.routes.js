const express = require("express");
const router = express.Router();
const Post = require('../models/Post.model');
const Hobbie = require("../models/Hobby.model")

router.get("/posts", (req, res, next) => {
    Post.find()
        .populate("hobbie") 
        .then((allPosts) => res.json(allPosts))
        .catch(e => console.log(e));
});

router.post("/posts", (req, res, next) => {
    const {image, descripiton} = req.body;
    Post.create({image, descripiton})
        .then(hobby => res.json(hobby))
        .catch(e => console.log(e));
});

router.put("/posts/:id", (req, res, next) => {
    const {image, description} = req.body;
    Post.findByIdAndUpdate(req.params.id, {image, description}, {new: true})
        .then((updatedPost) => {
            res.json(updatedPost)
        })
        .catch(e => console.log(e));
});

router.delete("/posts/:id", (req, res, next) => { 
    Post.findByIdAndDelete(req.params.id)
     .then(() => res.redirect("/posts"))
     .catch(e => console.log(e))
})
module.exports = router;