'use strict'

const {STRING, INTEGER} = require('sequelize')

module.exports = db => db.define('products', {
  name: STRING,
  img: STRING,
  description: STRING,
  quantity: INTEGER,
  price: INTEGER,
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
