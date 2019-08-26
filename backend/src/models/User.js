
const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    surname: {
      type: Sequelize.STRING
    },
    age: {
      type: Sequelize.SMALLINT
    },
    salary: {
      type: Sequelize.INTEGER
    },
    email: {
      type: Sequelize.STRING
    },
    position: {
      type: Sequelize.STRING
    },
    tasks: {
      type: Sequelize.STRING
    },
    deadline: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    status: {
      type: Sequelize.STRING,
    }
  },
  {
    timestamps: false,
  } 
)
