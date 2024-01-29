const userController = require("../controller/user/userController.js");
const userRegisterController = require("../controller/user/userRegisterController.js");
const loginController = require("../controller/user/loginController.js");
const LikeController = require("../controller/like/likeController.js");
const hotelListController = require("../controller/hotel/hotelListController.js");

const express = require("express");
const userLikeController = require("../controller/like/userLikeController.js");
const authMiddleware = require("../middleware/authMiddleware.js");
const router = express.Router();

router.get("/user", authMiddleware, userController);
router.get("/hotelList", hotelListController);
router.post("/user", authMiddleware, userRegisterController);
router.post("/login", loginController);
router.get("/likes", authMiddleware, LikeController);
router.post("/likes", userLikeController);

module.exports = router;
