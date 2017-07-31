'use strict'

const db = require('APP/db')
const router = require('express').Router()
const { Product, OAuth } = require('APP/db')

router.get('/', (req, res, next) => {
    if (req.session.isNew) req.session.cart = {}
    res.send(req.session.cart)
})

router.put('/', (req, res, next) => {
    console.log(req.user.role)
    const item = req.body
    const itemExistsInCart = req.session.cart[item.id]

    if (itemExistsInCart) {
        if (item.action === 'add') req.session.cart[item.id]++
        else if (item.action === 'subtract') req.session.cart[item.id]--
        else if (item.action === 'delete') delete req.session.cart[item.id]
    } else req.session.cart[item.id] = 1

    res.send(req.session.cart)
})

router.delete('/', (req, res, next) => {
    res.send(req.session.cart = {})
})

module.exports = router
