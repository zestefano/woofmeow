const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();



// Sign up
router.post(
    '/',
    asyncHandler(async (req, res) => {
      const { email, firstName, lastName, password, username } = req.body;
      const user = await User.signup({ email, firstName, lastName, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user
      });
    })
  );

//   nuqpCG2R-Zbz2w1TSsGf5yHBX63dpScbuWBQ









module.exports = router;