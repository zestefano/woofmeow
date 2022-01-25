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

// GET REVIEWS
router.get('/',
asyncHandler(async(req, res) => {
    const reviews = await Review.findAll({
        include: [User, Sitter]
    })
    res.json(reviews)
}))

// ADD REVIEWS
router.post('/', 
reviewValidator, asyncHandler(async(req, res) => {
    const {userId, sitterId, review, rating} = req.body
    const reviewError = validationResult(req)
    const reviews = {
        review,
        rating,
        sitterId,
        userId
    }
    if(reviewError.isEmpty()) {
        const newReview = await Review.create(reviews)
        const reviewWithInfo = await Review.findByPk(newReview.id, { include: [User, Sitter]})
        return res.json(reviewWithInfo)
    } else {
        let errors = reviewError.array().map(error => error.msg)
        return res.json({errors})
    }
}))

router.put('/:id(\\d+)',
asyncHandler(async(req, res) => {
    const review = await Review.findByPk(req.params.id, {
        include: [Sitter, User]
    })

    review.review = req.body.review || review.review
    review.rating = req.body.rating || review.rating

    await review.save()
    return res.json({review})
}))



module.exports = router;
