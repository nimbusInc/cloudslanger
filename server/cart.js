'use strict'

const db = require('APP/db')
const router = require('express').Router()

router.get('/', (req, res, next) => {
    if (req.session.isNew) req.session.cart = {}
    res.send(req.session.cart)
})

router.put('/', (req, res, next) => {
    const item = req.body

    req.session.cart[item.id]
        ? req.session.cart[item.id]++
        : req.session.cart[item.id] = 1

    res.send({ [item.id]: req.session.cart[item.id] })
})

module.exports = router
