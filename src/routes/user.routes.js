const userRouter = require("express").Router();

const UserController = require("../controllers/user.controller")

userRouter.post("/register", UserController.register)
userRouter.post("/login", UserController.login)

module.exports = {userRouter};