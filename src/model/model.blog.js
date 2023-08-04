const sql = require("../db/db.connect");

const dbBlogs = require("../db/data/blogs.json");
const dbUsers = require("../db/data/users.json");

const modelBlogs = (res) => {
  const insertBlog = `INSERT INTO blogs(idBlog,title,body,idUser)VALUES (?,?,?,?)`;
  dbBlogs.forEach((blog) => {
    const blogs = [blog.id, blog.title, blog.body, blog.userId];
    const user = dbUsers.find((user) => user.id === blog.userId);
    blogs[3] = user.id;
    console.log(user);
    sql.query(insertBlog, blogs, (err, result) => {
      if (err) {
        console.error("Lỗi truyền data");
        return res.status(500).json({ msg: "error" });
      }
      console.log("Dữ liệu truyền thành công vào cơ sở dữ liệu");
    });
  });
  res.status(200).json("success");
};

module.exports = { modelBlogs };
