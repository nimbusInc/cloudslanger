'use strict'

const {STRING} = require('sequelize')

module.exports = db => db.define('orders')

module.exports.associations = (Order, {User}) => {
  Order.belongsTo(User)
}
