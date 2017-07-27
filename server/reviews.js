'use strict'

const db = require('APP/db')
const Review = db.model('review')
const router = require('express').Router()
const {mustBeLoggedIn, forbidden} = require('./auth.filters')

    // All reviews route
router.get('/', (req, res, next) => {
    Review.findAll()
        .then(reviews => res.json(reviews))
        .catch(next)
})

        // Single Review route
router.get('/:id', (req, res, next) => {
    Review.findById(req.params.id)
            .then(review => res.json(review))
            .catch(next)
})

        // Add single review
router.post('/', (req, res, next) => {
    if (req.body) {
        Review.create(req.body)
            .then(review => res.status(201).json(review))
            .catch(next)
    } else {
        res.sendStatus(500)
    }
})

        // Update single review
router.put('/:id', (req, res, next) => {
    Review.findOne({
        where: {
            id: req.params.id
        }
    })
          .then(function(unupdatedReview) {
              if (unupdatedReview) {
                  return unupdatedReview.update(req.body)
              }
          })
          .then(updatedReview => res.status(201).json(updatedReview))
          .catch(next)
})

        // Delete Single review
router.delete('/:id', (req, res, next) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    })
          .then(() => {
              res.send({
                  message: 'Review removed'
              })
          })
          .catch(next)
})

module.exports = router
