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
        include: User
    })
    res.json(sitters)
}))

// ADD SITTER
router.post('/',
 asyncHandler(async(req,res) => {
    const {dog, cat, exotic, about, zipcode, price, url, userId} = req.body
    const sitterError = validationResult(req)

    if(sitterError.isEmpty()) {
        const sitter = await Sitter.create({
            dog, cat, exotic, about, zipcode, price, url, userId
        })
        const newSitter = await Sitter.findByPk(sitter.id, {
            include: User
        })
        return res.json({newSitter})
    } else {
        let errors = sitterError.array().map(error => error.msg)
        return res.json({errors})
    }
}))

// GET SINGLE SITTER
router.get('/:id(\\d+)',
 asyncHandler(async(req, res) => {
    const sitter = await Sitter.findByPk(req.params.id, {
        include: User
    })
    return res.json(sitter)
}))

// GET SITTER PHOTO
// router.get('/photo/:id(\\d+)', 
// asyncHandler(async(req, res) => {
//     const photo = await Photo.findByPk(req.params.id, {
//         include: Sitter
//     })
//     return res.json(photo)
// }))

// POST SITTER PHOTO
// router.post('/photo', 
//  asyncHandler(async(req,res) => {
//     const {url, sitterId} = req.body
//     const newPhoto = {
//         url, sitterId
//     }
//     const photo = await Photo.create(newPhoto)
//     res.json(photo)
// }))

// EDIT SITTER
router.put('/:id(\\d+)',
 asyncHandler(async(req, res) => {
    const sitter = await Sitter.findByPk(req.params.id, {
        include: User
    })
    
    sitter.dog = req.body.dog || sitter.dog;
    sitter.cat = req.body.cat || sitter.cat;
    sitter.exotic = req.body.exotic || sitter.exotic;
    sitter.about = req.body.about || sitter.about;
    sitter.zipcode = req.body.zipcode || sitter.zipcode;
    sitter.price = req.body.price || sitter.price;
    sitter.url = req.body.url || sitter.url
    await sitter.save()
    return res.json({sitter})
}))

// EDIT SITTER PHOTO
// router.put('/photo/:id(\\d+)',
//  asyncHandler(async(req, res) => {
//     const photo = await Photo.findByPk(req.params.id, {
//         include: Sitter
//     })

//     photo.url = req.body.url || photo.url

//     await photo.save()
//     return res.json({photo})
// }))

module.exports = router