'use strict'

const db = require('APP/db')
const Review = db.model('review')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')


    //All reviews route
    router.get('/', (req, res, next) => {
        Review.findAll()
        .then(reviews => res.json(reviews))
        .catch(next)
    })

    //

module.exports = router