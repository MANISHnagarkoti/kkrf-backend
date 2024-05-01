const moongos = require("mongoose");

const userSchema = new moongos.Schema(
  {
    name: {
      type: String,
      require: [true, "user name is required"],
    },

    email: {
      type: String,
      require: [true, "user email is required"],
    },
    phno: {
      type: Number,
      require: [true, "user number is required"],
    },
    query: {
      type: String,
      require: [true, "user query is required"],
    },
  },
  { timestamps: true }
);

const UserSchema = moongos.model("User", userSchema);

module.exports = UserSchema;
