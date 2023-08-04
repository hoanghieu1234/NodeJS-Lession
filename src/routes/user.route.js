const express = require("express");
const route = express.Router();
const Controller = require("../controllers/user.controller");

route.post("/", Controller.addUser);
route.get("/", Controller.getUser);

route.delete("/:id", Controller.deleteUser);
module.exports = route;
