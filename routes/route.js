const express = require("express");
const router = express.Router();

const userController = require("../controller/user/userController.js");
const userRegisterController = require("../controller/user/userRegisterController.js");
const loginController = require("../controller/user/loginController.js");
const LikeController = require("../controller/like/likeController.js");
const listController = require("../controller/hotel/listController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.get("/user", authMiddleware, userController);
router.post("/user", authMiddleware, userRegisterController);
router.get("/hotelList", listController);
router.post("/login", loginController);
router.get("/likes", authMiddleware, LikeController);

module.exports = router;
