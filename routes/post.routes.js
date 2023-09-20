const express = require("express");
const router = express.Router();
const Post = require('../models/Post.model');
const fileUploader = require("../config/cloudinary.config");
router.get("/posts", (req, res, next) =>{
    Post.find()
        .then((allPosts) => res.json(allPosts))
        .catch(e => console.log(e));
})

router.post("/posts",fileUploader.single("photo"), (req, res, next) => {
    const {image, descripiton} = req.body;
    Post.create({image: req.file.path, descripiton})
        .then(hobby => res.json(hobby))
        .catch(e => console.log(e));
})

module.exports = router;