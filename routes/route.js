const userController = require("../controller/user/userController.js");
const userRegisterController = require("../controller/user/userRegisterController.js");
const authRouter = require("../controller/user/authController.js");
const LikeController = require("../controller/like/likeController.js");

const express = require("express");
const userLikeController = require("../controller/like/userLikeController.js");
const router = express.Router();

router.get("/user", userController);
router.post("/user", userRegisterController);
router.post("/login", authRouter);
router.get("/likes", LikeController);
router.post("/likes", userLikeController);

module.exports = router;
