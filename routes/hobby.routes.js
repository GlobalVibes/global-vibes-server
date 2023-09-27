const router = require("express").Router();
const mongoose = require("mongoose");
const Hobby = require("../models/Hobby.model");


router.get("/hobbies", (req, res, next) => {
    Hobby.find()
        .then((allHobbies) => res.json(allHobbies))
        .catch(e => console.log(e));
})

router.post("/hobbies", (req, res, next) => {
    const { title } = req.body;

    Hobby.create({ title })
        .then(response => res.json(response))
        .catch(err => res.json(err));
});

module.exports = router;