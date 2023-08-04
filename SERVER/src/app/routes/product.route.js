const express = require('express');
const router = express.Router();

const productCotroller = require('../controllers/product.controller');

router.route('/').post(productCotroller.insertData).get(productCotroller.getData);
router.route('/:id').patch(productCotroller.editData).delete(productCotroller.deleteData);

module.exports = router;
