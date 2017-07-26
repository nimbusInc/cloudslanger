'use strict'

const db = require('APP/db')
const Product = db.model('product')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')


    //All products route
    router.get('/', (req, res, next) => {
        Product.findAll()
        .then(products => res.json(products))
        .catch(next)
    })

    //Single Product Route
    router.get('/:id', (req, res, next) => {
        Product.findById(req.params.id)
        .then(product=>res.json(product))
        .catch(next)
    })

    //Add Prouduct Route
     router.post('/', (req, res, next) => {
        Product.findById(req.params.id)
        .then(product=>res.json(product))
        .catch(next)
    })

    //Update Product Route
     router.get('/:id', (req, res, next) => {
        Product.findById(req.params.id)
        .then(product=>res.json(product))
        .catch(next)
    })
    


module.exports = router