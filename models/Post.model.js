const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 200,
    },
    hobby: [{
        type: Schema.Types.ObjectId,
        ref: "Hobby",
        required: true,
    }],
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = model("Post", PostSchema);