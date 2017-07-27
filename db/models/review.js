'use strict'

const {TEXT, INTEGER} = require('sequelize')

module.exports = db => db.define('reviews', {
    body: TEXT,
    star: INTEGER
})

module.exports.associations = (Review, {Product, User}) => {
    Review.belongsTo(User)
    Review.belongsTo(Product)
}
