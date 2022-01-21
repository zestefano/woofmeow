const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const sitterRouter = require('./sitters.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/sitters', sitterRouter)

router.post('/test', (req, res) => {
  res.json({ requestBody: req.body });
});

module.exports = router;



