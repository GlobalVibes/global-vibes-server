const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    profilePhoto: {
      type: String,
    },
    country: {
      type: String,
      required: [true, "Country is required."],
    },
    language: {
      type: String,
      required: [true, "Language is required."],
    },
    hobbie: {
      type: Schema.Types.ObjectId,
      ref:"hobbie"
    }
  },

  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;