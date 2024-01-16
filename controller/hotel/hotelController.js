const { json } = require("express");
const ListModel = require("../../models/ListModel");
const paging = require("./paging");

const hotelController = async (req, res) => {
  const { page } = req.query;
  res.setHeader("Access-Control-Allow-origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  try {
    const totalPost = await ListModel.countDocuments({});
    if (!totalPost) {
      throw Error();
    }
    let { maxPost, currentPage, hidePost, totalPage, startPage, endPage } =
      paging(page, totalPost);

    const post = await ListModel.find()
      .sort({ createAt: -1 })
      .skip(hidePost)
      .limit(maxPost);
    res.status(200).json({
      post: post,
      totalPost: totalPost,
      maxPost: maxPost,
      currentPage: currentPage,
      totalPage: totalPage,
      startPage: startPage,
      endPage: endPage,
    });
    // res.status(200).json(totalPost);
  } catch {
    (err) => res.status(500).send(err);
  }
};

module.exports = hotelController;
