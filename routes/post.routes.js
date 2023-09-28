const express = require("express");
const router = express.Router();
const Post = require("../models/Post.model");
const Hobby = require("../models/Hobby.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");
const fileUploader = require("../config/cloudindary.config");

router.get("/posts", (req, res, next) => {
   
    Post.find()
        .populate("hobby") 
        .then((allPosts) => res.json(allPosts))
        .catch(err => {
            console.log("Error geting list of posts...", err);
            res.status(500).json({
                message: "Error geting list of posts",
                error: err
            });
        });
});

router.post("/posts", isAuthenticated, (req, res, next) => {
  const { image, description, hobby } = req.body;
  const author = req.payload._id;
  const newPost = {
    image,
    description,
    hobby,
    author,
  };

    Post.create(newPost)
        .then(post => res.json(post))
        .catch(err => {
          console.log("Error creating posts...", err);
          res.status(500).json({
              message: "Error creating posts",
              error: err
          });
      });
});

router.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  Post.findById(id)
    .then((post) => res.json(post))
    .catch((err) => console.log(err));
});

router.put("/posts/:id", isAuthenticated, (req, res, next) => {
    const { description, hobby, image } = req.body;
    if (req.file) {
      console.log(req.file.path);
      Post.findByIdAndUpdate(req.params.id, { description, image: req.file.path, hobby },{ new: true })
        .then((updatedPost) => {
          res.json(updatedPost);
        })
        .catch(err => {
          console.log("Error updating post...", err);
          res.status(500).json({
              message: "Error updating post",
              error: err
          });
      });
    } else {
      Post.findByIdAndUpdate(req.params.id, { description, hobby }, { new: true })
        .then((updatedPost) => {
          res.json(updatedPost);
        })
        .catch(err => {
          console.log("Error updating post...", err);
          res.status(500).json({
              message: "Error updating post",
              error: err
          });
      });
}});

router.delete("/posts/:id", isAuthenticated, (req, res, next) => { 
    Post.findByIdAndDelete(req.params.id)
     .then(() => res.status(200).json())
     .catch(err => {
      console.log("Error deleting post...", err);
      res.status(500).json({
          message: "Error deleting post",
          error: err
      });
  });
})
module.exports = router;
