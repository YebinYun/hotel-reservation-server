const express = require("express");
const router = express.Router();

const userRegisterController = require("../controller/user/userRegisterController.js");
const loginController = require("../controller/user/loginController.js");
const LikeController = require("../controller/like/likeController.js");
const listController = require("../controller/hotel/listController.js");
const authMiddleware = require("../middleware/authMiddleware.js");

router.post("/user", userRegisterController);
router.get("/hotelList", listController);
router.post("/login", loginController);
router.get("/likes", authMiddleware, LikeController);

module.exports = router;
