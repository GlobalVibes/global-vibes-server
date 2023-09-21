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
    hobbie: [{
        type: Schema.Types.ObjectId,
        ref: "hobbie",
        required: true,
    }],
});

module.exports = model("Post", PostSchema);