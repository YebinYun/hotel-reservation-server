const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers.token;
  const verified = jwt.verify(token, "Hello!");

  console.log("verified", verified);
  // !토큰 (토큰 없음, 시간 만료, 유효하지 않은 토큰)
  if (!token) return res.status(401).json("없어요.. 아이디 정보가..");
  if (!verified) return res.status(401).json("토큰이 유효하지 않아유..");

  next();
};
