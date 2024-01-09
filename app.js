require("dotenv").config();

const mongoUri = process.env.MONGO_URI;
const Port = process.env.PORT;

const cors = require("cors");
const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require("cookie-parser");
const { urlencoded, json } = require("express");
const { connect } = require("mongoose");
const router = require("./routes/route.js");

app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(urlencoded({ extended: true }));
app.use(json());
app.use(express.static("public"));
app.use(cors());
app.use("/", router);

connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));

app.listen(Port, () => console.log(`Server listening on port ${Port}`));

// 미들웨어
app.use(
  session({
    secure: false, // https 환경에서만 session 정보를 주고받도록처리
    secret: process.env.COOKIE_SECRET, // 암호화하는 데 쓰일 키
    resave: false, // 세션을 언제나 저장할지 설정함
    saveUninitialized: true, // 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할지 설정
    cookie: {
      //세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
      maxAge: 3.6e6 * 24, // 24시간 뒤 만료(자동 삭제)
    },
    name: "session-cookie", // 세션 쿠키명 디폴트값은 connect.sid이지만 다른 이름을 줄수도 있다.
  })
);

app.get("/auth", (req, res, next) => {
  // 세션에 데이터를 설정하면, 모든 세션이 설정되는게아니라, 요청 받은 고유의 세션 사용자의 값만 설정 된다.
  // 즉, 개인의 저장 공간이 생긴 것과 같다.
  req.session.id = "hello";
  // res.json({ id: req.session.id });
  res.json({ session: req.session });
});

//비밀번호를 확인하여 세션 정보 저장
// if (await check_password(result, password)) {
//   // 세션 저장
//   req.session.user = {
//     userId: userId,
//     userName: userName,
//   };
// }
