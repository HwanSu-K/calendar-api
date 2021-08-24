const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const Calendar = require('./calendar');

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Calendar = Calendar;

Calendar.init(sequelize);

Calendar.associate(db);

module.exports = db;
