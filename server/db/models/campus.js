const Sequelize = require('sequelize');
const db = require('../index');

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:  'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584'
  },
  description: {
    type: Sequelize.TEXT
  }
})
