'use strict'

const {INTEGER} = require('sequelize')

module.exports = db => db.define('orderProducts', {
    quantity: INTEGER
})
