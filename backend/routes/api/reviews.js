const express = require('express')
const asyncHandler = require('express-async-handler')
const {check, validationResult} = require('express-validator')
const {setCookie, restoreUser} = require('../../utils/auth')
const { handleValidationErrors } = require('../../utils/validation');
const {User, Sitter, Booking, Review} = require('../../db/models')

const router = express.Router()

const reviewValidator = [
    check('review')
        .exists()
        .not()
        .isEmpty()
        .withMessage('review cannot be blank'),
    handleValidationErrors
]

router.get('/',
asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({
        include: [User, Sitter]
    })
    res.json(reviews)
}))



module.exports = router;
