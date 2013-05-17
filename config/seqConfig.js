var Sequelize = require("sequelize"),
    mysql     = require('sequelize-mysql').mysql;

exports.Sequelize = Sequelize;

exports.database = new Sequelize('weightr', 'root', null, {
  dialect: 'mysql'
});

