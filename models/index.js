const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const Calender = require('./calender');

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Calender = Calender;

Calender.init(sequelize);

Calender.associate(db);

module.exports = db;
