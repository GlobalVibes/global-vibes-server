const { Schema, model } = require('mongoose');

const Post = new Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        validate: {
            max: {
                args: 500,
                msg: "Maximum 500 characters allowed in last name"
            },
            min: {
                args: 1,
                msg: "Minimum 1 characters required in last name"
            },
            hobbie: {
                type: Schema.Types.ObjectId,
                ref: "hobbie",
                required: true,
            }
        }
    }
})

module.exports = model("Post", Post);