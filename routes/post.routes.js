const express = require("express");
const router = express.Router();
const Post = require('../models/Post.model');


router.get("/posts", (req, res, next) =>{
    Post.find()
        .then((allPosts) => res.json(allPosts))
        .catch(e => console.log(e));
})

router.post("/posts", (req, res, next) => {
    const {image, descripiton} = req.body;
    Post.create({image, descripiton})
        .then(post => res.json(post))
        .catch(e => console.log(e));
})

router.post("/posts/:id/update", (req, res, next) => {
    const {image, descripiton} = req.body;
    Post.findByIdAndUpdate(req.params.id, {image, descripiton})
        .then(() => {
            res.redirect("/posts")
        })
        .catch(e => console.log(e))
})

router.get("/post/:id/delete", (req, res, next) =>{
    Post.findByIdAndDelete(req.params.id)
     .then(() => res.redirect("/posts"))
     .catch(e => console.log(e))
})

module.exports = router;