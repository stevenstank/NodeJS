
const express = require("express");
const path = require("node:path");

const app = express(); 

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });

  // app.js
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

});

app.listen(3000, () => {           
  console.log("Server running on http://localhost:3000/");
});
