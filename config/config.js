require('dotenv').config();
module.exports = {
  development: {
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'calendar',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: { dateStrings: true, typeCast: true },
    timezone: '+09:00',
  },
  production: {
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'calendar',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: { dateStrings: true, typeCast: true },
    timezone: '+09:00',
  },
};
