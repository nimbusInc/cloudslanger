'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('categories', {
    category: STRING
}

module.exports.associations = (Category, { Product }) => {
    Category.hasOne(Product)
}