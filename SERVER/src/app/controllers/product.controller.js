const product = require('../models/product.model');
const dataProduct = require('../../libs/file-data/data-backup.json');

// Truyền dữ liệu vào từ file data vào Database
const insertData = (req, res) => {
  const promises = dataProduct.map((data) => {
    return product.create({
      title: data.title,
      imageUrl: data.imageUrl,
      description: data.description,
      price: Number(data.price),
    });
  });

  Promise.all(promises)
    .then((data) => {
      console.log('Data Inserted Successfully');
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

// Lấy dữ liệu từ database
const getData = async (req, res) => {
  try {
    const dataProduct = await product.findAll();
    res.status(200).json({ data: dataProduct });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

// Xóa dữ liệu từ database
const deleteData = (req, res) => {
  const id = req.params.id;

  product
    .destroy({
      where: {
        id,
      },
    })
    .then((data) => {
      console.log('Data Deleted Successfully');
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

// Sữa dữ liệu từ database
const editData = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  product
    .update(data, {
      where: {
        id,
      },
    })
    .then((data) => {
      console.log('Data Edited Successfully');
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
};

module.exports = { insertData, deleteData, getData, editData };
