const Sequelize = require("sequelize");

const sequelize = new Sequelize("postimagesapp", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
