const express = require("express");
const route = express.Router();
const controllerBlog = require("../controllers/blog.controller");

route.get("/", controllerBlog.blog);
module.exports = route;
