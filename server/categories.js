'use strict'

const db = require('APP/db')
const Category = db.model('categories')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')

// All categories route
router.get('/', (req, res, next) => {
    Category.findAll()
        .then(categories => res.json(categories))
        .catch(next)
})

// Single category route
router.get('/:id', (req, res, next) => {
    Category.findById(req.params.id)
        .then(category => res.json(category))
        .catch(next)
})

// Add single category
router.post('/', (req, res, next) => {
    if (req.body) {
        Category.create(req.body)
            .then(category => res.status(201).json(category))
            .catch(next)
    } else {
        res.sendStatus(500)
    }
})

// Update single category
router.put('/:id', (req, res, next) => {
    Category.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(function(unupdatedCategory) {
            if (unupdatedCategory) {
                return unupdatedCategory.update(req.body)
            }
        })
        .then(updatedCategory => res.status(201).json(updatedCategory))
        .catch(next)
})

// Delete Single Category
router.delete('/:id', (req, res, next) => {
    Category.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(() => {
            res.send({
                message: 'Category removed'
            })
        })
        .catch(next)
})

module.exports = router
