const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
    image: {
        type: String,
    },
    description: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 200,
    },
    hobby: [{
        type: Schema.Types.ObjectId,
        ref: "Hobbie",
        required: true,
    }],
});

module.exports = model("Post", PostSchema);