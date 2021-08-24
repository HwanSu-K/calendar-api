const express = require('express');
const { isLoggedIn } = require('./middlewares');
const Calender = require('../models/calender');

const router = express.Router();

router.get('/', isLoggedIn, async (req, res) => {
  const result = await Calender.findAll({
    where: { userId: req.snsId },
    attributes: ['id', 'content', 'dateStart', 'dateEnd'],
  });
  res.status(201).json({
    code: 201,
    message: '조회되었습니다.',
    result,
  });
});

router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const result = await Calender.create({
      userId: req.snsId,
      content: req.body.content,
      dateStart: req.body.dateStart,
      dateEnd: req.body.dateEnd,
    });
    res.status(201).json({
      code: 201,
      message: '등록되었습니다.',
      result,
    });
  } catch (error) {
    next(error);
  }
});

router.put('/:id', isLoggedIn, async (req, res, next) => {
  try {
    await Calender.update(
      {
        content: req.body.content,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.status(201).json({
      code: 201,
      message: '수정되었습니다.',
    });
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    await Calender.destroy({ where: { id: req.params.id } });
    res.status(201).json({
      code: 201,
      message: '삭제되었습니다.',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
