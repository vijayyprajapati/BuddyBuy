const router = require("express").Router();
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const authController = require("../controllers/authController");

router.post("/", authController.authenticateUser);

module.exports = router;
