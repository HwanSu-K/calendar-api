const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { sequelize } = require('./models');
const helmet = require('helmet');
const hpp = require('hpp');

dotenv.config();
const calendarRouter = require('./routes/calendar');

const app = express();
app.set('port', process.env.PORT || 8001);
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결');
  })
  .catch((err) => {
    console.error(err);
  });

if (process.env.NODE_ENV === 'production') {
  // app.enable('trust proxy');
  app.use(morgan('combined'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
  // sessionOptuon.proxy = true;
  // sessionOptuon.cookie.secure = true;
} else {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/calendar', calendarRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    code: err.status || 500,
    message: err.message || '오류가 발생했습니다.',
  });
});
console.log(process.env.SEQUELIZE_USERNAME);
console.log(process.env.SEQUELIZE_PASSWORD);
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
