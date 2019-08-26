const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('employees', 'root', 'nichita1', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.sequelize.sync();

module.exports = db