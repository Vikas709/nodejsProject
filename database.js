const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/project1")
  .then(() => {
    console.log("database connnected");
  })
  .catch((e) => {
    console.log(e);
  });

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("userdetails", schema);

module.exports = userModel;
