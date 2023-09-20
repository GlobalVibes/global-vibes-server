const {Schema, model} = require('mongoose');

const Post = new Schema({
    image: String,
    description: {
        type: String,
        required: true,
        validate: {
            max:{
                args: 500,
                msg:"Maximum 500 characters allowed in last name"
            },
            min:{
                args: 1,
                msg:"Minimum 1 characters required in last name"
            }
        }
    }
})

module.exports = model("Post", Post);