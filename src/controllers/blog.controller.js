const modelBlog = require("../model/model.blog");

const blog = (req, res) => {
  modelBlog.modelBlogs(res);
};

module.exports = { blog };
