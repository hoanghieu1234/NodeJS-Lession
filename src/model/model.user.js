const sql = require("../db/db.connect");
const fs = require("fs");
const dbUser = require("../db/data/users.json");
const { error } = require("console");

const modelAdd = (res) => {
  // const insertGeo = `INSERT INTO geo (idGeo,lat, lng) VALUES (?,?,?)`;
  const insertAddress = `INSERT INTO address( street,suit,city,zipcode,phone,website,idGeo)VALUES (?,?,?,?,?,?,?)`;
  const insertCompany = `INSERT INTO company(name,catchPhrase,bs)VALUES (?,?,?)`;
  const insertUsers = `INSERT INTO users(name,username,email,idAddress,idCompany)VALUES (?,?,?,?,?)`;

  dbUser.forEach((user) => {
    let geo = [user.id, user.address.geo.lat, user.address.geo.lng];
    sql.query("INSERT INTO geo (lat, lng) VALUES (?,?)", geo, (err, result) => {
      console.log(111111111111, result);
      if (err) {
        console.error(err, "Lỗi Dữ Liệu Lên");
        return res.status(500).json({ mgs: "err" });
      }
    });
    const address = [
      user.address.street,
      user.address.suite,
      user.address.city,
      user.address.zipcode,
      user.phone,
      user.website,
      user.id,
    ];
    sql.query(insertAddress, address, (err, result) => {
      if (err) {
        console.error(err, "Lỗi truyền address lên");
        return res.status(500).json({ mgs: "err" });
      }
    });

    // const company = [
    //   user.company.name,
    //   user.company.catchPhrase,
    //   user.company.bs,
    // ];
    // sql.query(insertCompany, company, (err, result) => {
    //   if (err) {
    //     console.error(err, "Lỗi truyền address lên");
    //     return res.status(500).json({ mgs: "err" });
    //   }
    // });

    const users = [user.name, user.username, user.email, user.id, user.id];
    sql.query(insertUsers, users, (err, result) => {
      if (err) {
        console.error(err, "Lỗi truyền users lên");
        return res.status(500).json({ mgs: "err" });
      }
    });
  });

  res.status(200).json({ msg: "success" });
};

const getAll = (req, res) => {
  const query = `SELECT * FROM users`;
  console.log(query);
  sql.query(query, (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ mgs: "error" });
    }
    res.status(200).json(result);
  });
};

const modelDelete = (idParam, res) => {
  const deleteUser = `DELETE FROM users WHERE idUser = ?`;
  const deleteCompany = `DELETE FROM company WHERE idCompany = ?`;

  sql.query(deleteUser, [idParam], (err, result) => {
    if (err) {
      console.error(err, "Lỗi khi xóa người dùng");
      res.status(500).json({ msg: "err" });
    }
    res.status(200).json({ msg: "success" });
  });
};
module.exports = { modelAdd, getAll, modelDelete };
