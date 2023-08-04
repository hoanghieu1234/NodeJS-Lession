const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const routeUsers = require("./routes/user.route");
const routeBlogs = require("./routes/blog.route");
const app = express();

//MiddleWare
app.use(express.urlencoded());
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(cors());

// route
app.use("/api/v1/users", routeUsers);
app.use("/api/v1/blogs", routeBlogs);

// start server
const port = 8080;
app.listen(port, () => {
  console.log(`Server Express Running On http://localhost:${port}`);
});
