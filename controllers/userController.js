const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames:", usernames);
  res.send(usernames.map(u => u.username).join(", "));
}

function getNewUserForm(req, res) {
  res.render("new");
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getUsernames,
  getNewUserForm,
  createUsernamePost,
};