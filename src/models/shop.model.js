'use strict';

//using !!dmbg để render ra schema của mongoDB
const { model, Schema, Types } = require('mongoose');
const DOCUMENT_NAME = 'Shop';
const COLLECTION_NAME = 'Shops';
// Declare the Schema of the Mongo model
var shopSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobile: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//Export the model
module.exports = mongoose.model('User', userSchema);
