exports.isLoggedIn = (req, res, next) => {
  const snsId = req.headers.authorization;
  if (snsId) {
    req.snsId = snsId;
    next();
  } else {
    res.status(401).json({
      code: 401,
      message: '로그인이 필요합니다.',
    });
  }
};
