const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.getUsernames);
router.get("/new", userController.getNewUserForm);
router.post("/new", userController.createUsernamePost);


module.exports = router;

