const express = require('express')
const asyncHandler = require('express-async-handler')
const {check, validationResult} = require('express-validator')
const {User, Sitter, Booking, Review, Photo} = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')

const router = express.Router()



router.get('/', 
asyncHandler(async(req, res) => {
    const sitters = await Sitter.findAll({
        include: [User, Photo]
    })
    res.json(sitters)
}))

// router.post('/', asyncHandler(async(req,res) => {
//     const {dog, cat, exotic, about, zipcode, userId} = req.body
//     const sitterError = validationResult(req)

//     if(sitterError.isEmpty()) {
//         const sitter = await Sitter.create({
//             dog, cat, exotic, about, zipcode, userId
//         })
//     }
// }))


module.exports = router