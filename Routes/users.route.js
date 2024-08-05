const express = require("express");
const router = express.Router();
const usersController = require("../Controllers/users.controller");
const verifyToken = require("../Middleware/verifyToken");


router
    .route("/")
    .get(verifyToken, usersController.getAllUsers);

router
    .route("/register")
    .post(usersController.register);

router
    .route("/login")
    .post(usersController.login);

module.exports = router;
