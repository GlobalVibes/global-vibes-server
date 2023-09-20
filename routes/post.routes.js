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
        .then(response => res.json(response))
        .catch(e => console.log(e));
})

module.exports = router;