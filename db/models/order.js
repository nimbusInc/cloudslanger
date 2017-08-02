'use strict'

const { STRING } = require('sequelize')

module.exports = db => db.define('orders')

module.exports.associations = (Order, { User, Product, OrderProduct }) => {
    Order.belongsTo(User)
    Order.belongsToMany(Product, { through: OrderProduct })
}
