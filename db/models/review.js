'use strict'

const {TEXT, INTEGER} = require('sequelize')

module.exports = db => db.define('reviews', {
    body: {
        type: TEXT,
        allowNull: false
    },
    star: {
        type: INTEGER,
        allowNull: false
    }
})

module.exports.associations = (Review, {Product, User}) => {
    Review.belongsTo(User)
    Review.belongsTo(Product)
}
