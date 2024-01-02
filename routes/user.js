// import userController from "../controller/user/userController.js";
// import express from "express";

const userController = require("../controller/user/userController.js");
const express = require("express");

const router = express.Router();
// const User = require("../models/User");

router.get("/user/:id", userController);

module.exports = router;

// // Find All
// router.get("/user", (req, res) => {
//   User.findAll()
//     .then((user) => {
//       if (user.length) return res.status(404).send({ err: "Todo not found" });
//       res.send(`find successfully: $${user}`);
//     })
//     .catch((err) => res.status(500).send(err));
// });

// // Find
// router.get("/userId/:userId", (req, res) => {
//   User.findOneBy;
// });

// // Create new User document
// router.post("/", (req, res) => {
//   User.create(req.body)
//     .then((todo) => res.send(todo))
//     .catch((err) => res.status(500).send(err));
// });

// app.get('/search/:userId', (req, res) => {
//     const data = User.find({userId: req.params.userId})
//     res.send(data)
// })
// // http://localhost:30000/search/yebind
// app.post('/join', async (req, res) => {

//     const { userId, userName, password, email, phoneNumber, birthDay } = req.body

//      다운 받아서, password 암호화
//     const hashedPassword = crypto-js 라이브러리로  password hash 만들고

//     const bytes = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()

//     await User.create({
//         userId: userId,
//         userName: userName,
//         password: hashedPassword,
//         email: email,
//         phoneNumber: phoneNumber,
//         birthDay: birthDay
//     })  <-- 틀릴수 있어용~

// })

// ddfdd.save((err, data) {
//     if(err) {
//         return res.send({message: '저장중 에러요.'})
//     } else {
//         return res.send(data)
//     }
// })

// export default router;
