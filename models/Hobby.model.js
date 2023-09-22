const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required."],
            unique: true,
        },
        description: {
            type: String,
            required: [true, "Description is required."],
        },
    },

    {
        timestamps: true,
    }
);

const Hobby = model("Hobby", userSchema);

module.exports = Hobby;