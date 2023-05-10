const router = require("express").Router();
const { User, validate } = require("../models/user");
const userController = require("../controllers/userController");

router.post("/", userController.createUser);

module.exports = router;
