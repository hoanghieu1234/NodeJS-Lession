const modelUser = require("../model/model.user");

const addUser = (req, res) => {
  modelUser.modelAdd(res);
};

const getUser = (req, res) => {
  modelUser.getAll(req, res);
};

const deleteUser = (req, res) => {
  const idParam = req.params.id;
  modelUser.modelDelete(idParam, res);
};

module.exports = {
  addUser,
  getUser,
  deleteUser,
};
