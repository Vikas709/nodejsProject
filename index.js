const express = require("express");
const Router = require("./router");
const app = express();
const port = 3000;

app.set("view engine", "ejs");

app.use(Router);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log("node hajir hoo on 3000");
});
