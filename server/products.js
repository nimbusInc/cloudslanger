'use strict'

const db = require('APP/db')
const Product = db.model('prodcut')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')


    //All products route
    router.get('/', (req, res, next) => {
        Product.findAll()
        .then(products => res.json(products))
        .catch(next)
    })

    //