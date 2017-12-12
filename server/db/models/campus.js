const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'http://nineplanets.org/images/jupiter.jpg',
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
})
