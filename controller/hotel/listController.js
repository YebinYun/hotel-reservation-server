const ListModel = require("../../models/ListModel.js");
const pagination = require("./pagination.js");

const listController = async (req, res) => {
  const { page } = req.query;

  try {
    let query = {};

    if (req.query.location !== "All") {
      query = { property_type: req.query.location };
    }

    const totalPost = await ListModel.countDocuments(query);
    if (!totalPost) {
      throw Error();
    }
    let { maxPost, currentPage, hidePost, totalPage, startPage, endPage } =
      pagination(page, totalPost);

    const post = await ListModel.find(query)
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
  } catch {
    (err) => res.status(500).send(err);
  }
};

module.exports = listController;
