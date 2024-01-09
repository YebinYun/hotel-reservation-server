module.exports = async (req, res, next) => {
  const { bearerToken } = req.headers;

  if (!bearerToken) return res.status(401).json("없어요.. 아이디 정보가..");

  next();
};
