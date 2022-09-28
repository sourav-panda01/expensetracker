const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Expense = sequelize.define('expense', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  Purpose: {
    type: Sequelize.STRING,
    allownull: false
    },
    amount: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
    
});

module.exports = Expense;
