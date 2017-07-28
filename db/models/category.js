'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('categories', {
    category: STRING
}