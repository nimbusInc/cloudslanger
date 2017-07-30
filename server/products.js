'use strict'

const db = require('APP/db')
const Product = db.model('products')
const Category = db.model('categories')
const router = require('express').Router()
const { mustBeLoggedIn, forbidden } = require('./auth.filters')

console.log('here Category', Category)

// All products route
router.get('/', (req, res, next) => {
    Product.findAll({include: [Category]})
        .then(products => {
            console.log('here Category', Category);
            return res.json(products)
        })
        .catch(next)
})

// Single Product Route
router.get('/:id', (req, res, next) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(next)
})

// Add Prouduct Route
router.post('/', (req, res, next) => {
    if (req.body) {
        Product.findById(req.params.id)
            .then(product => res.json(product))
            .catch(next)
    } else {
        res.sendStatus(500)
    }
})

// Update Product Route
router.put('/:id', (req, res, next) => {
    Product.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function (unupdatedProduct) {
            if (unupdatedProduct) {
                return unupdatedProduct.update(req.body)
            }
        })
        .then(updatedProduct => res.status(201).json(updatedProduct))
        .catch(next)
})

// Delete product route
router.delete('/:id', (req, res, next) => {
    Product.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send({
                message: 'Product removed'
            })
        })
        .catch(next)
})
module.exports = router
