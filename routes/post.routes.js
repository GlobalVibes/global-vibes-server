const express = require("express");
const router = express.Router();
const Post = require('../models/Post.model');
const Hobby = require("../models/Hobby.model")
const { isAuthenticated } = require("../middleware/jwt.middleware");


router.get("/posts", (req, res, next) => {
   
    Post.find()
        .populate("hobby") 
        .then((allPosts) => res.json(allPosts))
        .catch(e => console.log(e));
});

router.post("/posts", (req, res, next) => { 
    const {image, description, hobby} = req.body;

    const newPost = {
        image, 
        description,
        hobby,
    }

    Post.create(newPost)
        .then(hobby => res.json(hobby))
        .catch(e => console.log(e));
});

router.get("/posts/:id", (req, res) => {
    const {id} = req.params
    Post.findById(id).then((post) => res.json(post)).catch(err => console.log(err))
})

router.put("/posts/:id", isAuthenticated, (req, res, next) => {
    const {image, description} = req.body;
    Post.findByIdAndUpdate(req.params.id, {image, description}, {new: true})
        .then((updatedPost) => {
            res.json(updatedPost)
        })
        .catch(e => console.log(e));
});

router.delete("/posts/:id", isAuthenticated, (req, res, next) => { 
    Post.findByIdAndDelete(req.params.id)
     .then(() => res.status(200).json())
     .catch(e => console.log(e))
})
module.exports = router;