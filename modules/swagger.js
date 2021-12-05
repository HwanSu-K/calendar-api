const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    swagger: '2.0',
    info: {
      title: 'Calendar API',
      version: '1.0.0',
      description: '',
    },
    host: 'calendar.kumas.dev',
    schemes: ['https', 'http'],
  },
  apis: ['./models/*.js', './routes/*.js', './swagger/*.yaml'],
};

const specs = swaggereJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};
