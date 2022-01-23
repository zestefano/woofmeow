const express = require('express')
const asyncHandler = require('express-async-handler')
const {check, validationResult} = require('express-validator')
const {User, Sitter, Booking, Review, Photo} = require('../../db/models')
const {handleValidationErrors} = require('../../utils/validation')

const router = express.Router()


// GET ALL SITTERS
router.get('/', 
asyncHandler(async(req, res) => {
    const sitters = await Sitter.findAll({
        include: [User, Photo]
    })
    res.json(sitters)
}))

// ADD SITTER
router.post('/',
 asyncHandler(async(req,res) => {
    const {dog, cat, exotic, about, zipcode, price, userId} = req.body
    const sitterError = validationResult(req)

    if(sitterError.isEmpty()) {
        const sitter = await Sitter.create({
            dog, cat, exotic, about, zipcode, price, userId
        })
        const newSitter = await Sitter.findByPk(sitter.id, {
            include: [User, Photo]
        })
        return res.json({newSitter})
    } else {
        let errors = sitterError.array().map(error => error.msg)
        return res.json({errors})
    }
}))

//Single sitter
router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const sitter = await Sitter.findByPk(req.params.id, {
        include: [User, Photo]
    })
    return res.json(sitter)
}))

// router.post('/photo', 
// asyncHandler(async(req,res) => {
//     const {url, sitterId} = req.body
//     const newPhoto = {
//         url, sitterId
//     }
//     const photo = await Photo.create(newPhoto)
//     res.json(photo)
// }))


module.exports = router