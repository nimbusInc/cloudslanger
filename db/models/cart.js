'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('carts')

module.exports.associations = (Cart, { Product, User }) => {
    Cart.belongsToMany(Product, {through: 'CartProduct'})
    Cart.belongsTo(User)
}
