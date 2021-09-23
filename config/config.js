require('dotenv').config();
module.exports = {
  development: {
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'calendar',
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectOptions: { dateStrings: true, typeCast: true },
  },
  production: {
    username: process.env.SEQUELIZE_USERNAME,
    password: process.env.SEQUELIZE_PASSWORD,
    database: 'calendar',
    host: process.env.SEQUELIZE_HOSTNAME,
    dialect: 'mysql',
    dialectOptions: { dateStrings: true, typeCast: true },
  },
};
