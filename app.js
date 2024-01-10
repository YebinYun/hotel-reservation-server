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
      maxAge: 60 * 60 * 24, // 24시간 뒤 만료(자동 삭제)
    },
    name: "session-cookie", // 세션 쿠키명 디폴트값은 connect.sid이지만 다른 이름을 줄수도 있다.
  })
);

app.get("/auth", (req, res, next) => {
  const authenticatedUser = {
    id: "user123",
    username: "example_user",
  };
  res.json({ success: true, message: "성공", user: authenticatedUser });
});
