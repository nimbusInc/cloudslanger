'use strict'

const {STRING, INTEGER, TEXT} = require('sequelize')

module.exports = db => db.define('products', {
  // OB/SJB: consider validations
  name: STRING,
  img: STRING,
  description: TEXT,
  quantity: INTEGER,
  price: INTEGER, // OB/SJB: stored in cents, yay! floating point math
}, {
  getterMethods: {
    price: function() {
      return (this.getDataValue('price') / 100).toFixed(2)
    }
  }
})

module.exports.associations = (Product, {Order}) => {
  Product.belongsToMany(Order, {through: 'OrderProduct'})
}
