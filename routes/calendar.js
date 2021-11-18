const express = require('express');
const { isLoggedIn } = require('./middlewares');
const Calendar = require('../models/calendar');

/**
 * @swagger
 * tags:
 *   name: Calendar
 *   description: Calendar management
 */
const router = express.Router();
/**
 * @swagger
 * paths:
 *  /calendar:
 *    get:
 *      summary: Select Calendar
 *      tags: [Calendar]
 *      responses:
 *        "201":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResultResponse'
 *        "404":
 *          description: not is loggedIn
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DefaultResponse'
 *      security:
 *      - ApiKeyAuth: []
 */

router.get('/', isLoggedIn, async (req, res) => {
  const result = await Calendar.findAll({
    where: { userId: req.snsId },
    attributes: ['id', 'content', 'dateStart', 'dateEnd'],
  });
  res.status(201).json({
    code: 201,
    message: '조회되었습니다.',
    result,
  });
});

/**
 * @swagger
 * paths:
 *  /calendar:
 *    post:
 *      summary: Create Calendar
 *      tags: [Calendar]
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Calendar'
 *      responses:
 *        "201":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/ResultResponse'
 *        "404":
 *          description: not is loggedIn
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DefaultResponse'
 *      security:
 *      - ApiKeyAuth: []
 */
router.post('/', isLoggedIn, async (req, res, next) => {
  try {
    const result = await Calendar.create({
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

/**
 * @swagger
 * paths:
 *  /calendar/{id}:
 *    put:
 *      summary: Edit Calendar
 *      tags: [Calendar]
 *      parameters:
 *        - in: query
 *          name: id
 *          required: true
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Calendar'
 *      responses:
 *        "201":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DefaultResponse'
 *        "404":
 *          description: not is loggedIn
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DefaultResponse'
 *      security:
 *      - ApiKeyAuth: []
 */
router.put('/:id', isLoggedIn, async (req, res, next) => {
  try {
    await Calendar.update(
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

/**
 * @swagger
 * paths:
 *  /calendar/{id}:
 *    delete:
 *      summary: Delete Calendar
 *      tags: [Calendar]
 *      parameters:
 *        - in: query
 *          name: id
 *      responses:
 *        "201":
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DefaultResponse'
 *        "404":
 *          description: not is loggedIn
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/DefaultResponse'
 *      security:
 *      - ApiKeyAuth: []
 */
router.delete('/:id', isLoggedIn, async (req, res, next) => {
  try {
    await Calendar.destroy({ where: { id: req.params.id } });
    res.status(201).json({
      code: 201,
      message: '삭제되었습니다.',
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
