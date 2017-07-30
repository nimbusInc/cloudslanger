'use strict'

const { INTEGER } = require('sequelize')

module.exports = db => db.define('carts', {
    session: INTEGER
})

module.exports.associations = (Cart, { Product, User }) => {
    Cart.belongsToMany(Product, { through: 'CartProduct' })
    Cart.belongsTo(User)
}
