const cookieController = {};

cookieController.setSSIDCookie = (req, res, next) => {
  if (!res.locals.user.id) return next(new Error('error obtaining user ID'));
  res.cookie(
    'ssid',
    res.locals.user.id
    //   {
    //     httpOnly: true,
    //   }
  );
  console.log('USER ID IN COOKIE =>>', res.locals.user.id);
  return next();
};

module.exports = cookieController;
