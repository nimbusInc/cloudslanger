'use strict'

const db = require('APP/db')
const Order = db.model('order')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')


    //All orders route
    router.get('/', (req, res, next) => {
        Order.findAll()
        .then(orders => res.json(orders))
        .catch(next)
    })

    //Single order route
    router.get('/:id', (req, res, next) => {
        Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(next)

    })

module.exports = router