'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('orders')

module.exports.associations = (Order, {User, Product}) => {
    Order.belongsTo(User)
    Order.belongsToMany(Product, {through: 'OrderProduct'})
}
