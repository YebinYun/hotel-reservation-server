const userController = require("../controller/user/userController.js");
const userRegisterController = require("../controller/user/userRegisterController.js");
const authRouter = require("../controller/user/authController.js");
const LikeController = require("../controller/like/likeController.js");

const express = require("express");
const router = express.Router();

router.get("/user", userController);
router.post("/user", userRegisterController);
router.post("/login", authRouter);
// router.post("/likes", LikeController);
router.get("/likes", LikeController);

module.exports = router;
