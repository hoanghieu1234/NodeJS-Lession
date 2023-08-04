# Tại sao lại sử dụng thằng ORM(Object Relational Mapping ) trong dự án Express.js

1. Tiện lợi

- Khi triển khai một dự án sử dụng thằng ORM này, có nhiều loại => như là Sequelize, TypeOrm, Knex.js để tương tác với cơ sở dữ liệu SQL thay vì viết SQL thuần túy. ORM giúp giảm thiểu việc phải viết và duy trì các truy vấn SQL cụ thể và thay vào đó sử dụng các đối tượng và các phương thức trong ngôn ngữ lập trình để mình tương tác với cơ sở dữ liệu

2. Triển khai

- Cài đặt Sequelize
  npm install sequelize sequelize-cli

create a new Tutorial: create(object)
find a Tutorial by id: findByPk(id)
get all Tutorials: findAll()
update a Tutorial by id: update(data, where: { id: id })
remove a Tutorial: destroy(where: { id: id })
remove all Tutorials: destroy(where: {})
find all Tutorials by title: findAll({ where: { title: ... } })
