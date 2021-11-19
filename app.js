const fs = require('fs');
const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const { sequelize } = require('./models');
const helmet = require('helmet');
const hpp = require('hpp');
const { swaggerUi, specs } = require('./modules/swagger');
const https = require('https');
const http = require('http');
const cors = require('cors');

dotenv.config();
const calendarRouter = require('./routes');

const app = express();
app.set('port', process.env.PORT || 8000);
app.set('sslPort', parseInt(app.get('port')) + 1);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결');
  })
  .catch((err) => {
    console.error(err);
  });

if (process.env.NODE_ENV === 'production') {
  app.enable('trust proxy');
  app.use(morgan('combined'));
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(hpp());
  // sessionOptuon.proxy = true;
  // sessionOptuon.cookie.secure = true;
} else {
  app.use(morgan('dev'));
}
app.use(
  cors({
    origin: 'https://api.kumas.dev',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', calendarRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

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

http.createServer(app).listen(app.get('port'), () => {
  console.log(`http Server is started on port ${app.get('port')}`);
});

try {
  const option = {
    ca: fs.readFileSync('/etc/letsencrypt/live/kumas.dev/fullchain.pem'),
    key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/kumas.dev/privkey.pem'), 'utf8').toString(),
    cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/kumas.dev/cert.pem'), 'utf8').toString(),
  };
  https.createServer(option, app).listen(app.get('sslPort'), () => {
    console.log(`https Server is started on port ${app.get('sslPort')}`);
  });
} catch (error) {
  console.error('https 오류가 발생하였습니다. https 서버는 실행되지 않습니다.');
}
