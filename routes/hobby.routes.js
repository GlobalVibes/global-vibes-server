const router = require("express").Router();
const mongoose = require("mongoose");
const Hobby = require("../models/Hobby.model");
const { isAuthenticated } = require("../middleware/jwt.middleware");


router.get("/hobbies", (req, res, next) => {
    Hobby.find()
        .then((allHobbies) => res.json(allHobbies))
        .catch(err => {
            console.log("Error getting list of hobbies...", err);
            res.status(500).json({
                message: "Error getting list of hobbies",
                error: err
            });
        });
})

router.post("/hobbies", isAuthenticated, (req, res, next) => {
    const { title } = req.body;

    Hobby.create({ title })
        .then(response => res.json(response))
        .catch(err => {
            console.log("Error creating new hobby...", err);
            res.status(500).json({
                message: "Error creating a new hobby",
                error: err
            });
        });
});

module.exports = router;