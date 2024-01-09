const loginController = async (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  console.log("req", req.session);
  req.session.id = "hello";
  res.status(200).json({ data: req.session.id });
};

//   req.session = "세션값";
//   console.log(req);

//   // 세션에 데이터를 설정하면, 모든 세션이 설정되는게아니라, 요청 받은 고유의 세션 사용자의 값만 설정 된다.
//   // 즉, 개인의 저장 공간이 생긴 것과 같다.
//   if ((await req.session.num) === undefined) req.session.num = 1;
//   else req.session.num += 1;

//   //   .then((res) => {
//   //     if (res) {
//   //       console.log("res", res);
//   //       return res.status(200).send({
//   //         message: (`${req.session.num}번 접속`),
//   //         resultCode: 200,
//   //         data: res,
//   //       });
//   //     }
//   //   })
//   //   .catch((err) => {
//   //     return res.status(200).send({
//   //       message: " 실패.",
//   //       resultCode: 9999,
//   //       data: err,
//   //     });
//   //   });
// };

module.exports = loginController;
