module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  req.session.id = "hello";
  res.status(200).json({ data: req.session.id });
};
