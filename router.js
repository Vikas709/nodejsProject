const express = require("express");
const user = require("./database");
const Router = express.Router();

Router.get("/", (req, res) => {
  res.render("index");
});

Router.post("/register", async (req, res) => {
  try {
    const data = new user(req.body);
    console.log(data);
    const saveData = await data.save();
    res.send(saveData);
  } catch (error) {
    res.status(404).send(error);
  }
});
module.exports = Router;
