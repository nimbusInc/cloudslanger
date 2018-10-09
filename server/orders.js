'use strict'

const db = require('APP/db')
const Order = db.model('orders')
const OrderProduct = db.model('orderProducts')
const User = db.model('users')
const Product = db.model('products')
const router = require('express').Router()
const { mustBeLoggedIn, forbidden } = require('./auth.filters')

// All orders route
router.get('/', (req, res, next) => {
    Order.findAll({ include: { model: Product } })
        .then(orders => res.json(orders))
        .catch(next)
})

// Single order route
router.get('/:id', (req, res, next) => {
    Order.findById(req.params.id)
        .then(order => res.json(order))
        .catch(next)
})

// Add single order
router.post('/', (req, res, next) => {
    const user = req.body.user
    const cart = req.body.cart
    Promise.all(
        Object.keys(cart).map(productId => Product.findById(+productId))
    ).then(products => {
        Order.create().then(newOrder => {
            products.forEach(product => {
                newOrder.addProduct(product, { quantity: cart[product.id] })
            })
            req.session.cart = {}
            if (user) newOrder.setUser(user.id)
            res.status(202).json(newOrder)
        })
    }).catch(next)
})

// Update single order
router.put('/:id', (req, res, next) => {
    Order.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function(unupdatedOrder) {
            if (unupdatedOrder) {
                return unupdatedOrder.update(req.body)
            }
        })
        .then(updatedOrder => res.status(201).json(updatedOrder))
        .catch(next)
})

// Delete Single Order
router.delete('/:id', (req, res, next) => {
    Order.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send({
                message: 'Order removed'
            })
        })
        .catch(next)
})

module.exports = router
