'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('review', {
  body: STRING
})

module.exports.associations = (Review, {Product, User}) => {
  Review.belongsTo(User)
  Review.belongsTo(Product)
}
