'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('categories', {
    name: STRING
})
