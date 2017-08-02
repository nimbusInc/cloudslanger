'use strict'

const {STRING, INTEGER, TEXT} = require('sequelize')

module.exports = db => db.define('products', {
    name: {
        type: STRING,
        allowNull: false
    },
    img: {
        type: STRING,
        allowNull: false
    },
    description: {
        type: TEXT,
        allowNull: false
    },
    quantity: {
        type: INTEGER,
        allowNull: false
    },
    price: {
        type: INTEGER,
        allowNull: false
    }
}, {
    getterMethods: {
        price: function() {
            return (this.getDataValue('price') / 100).toFixed(2)
        }
    },
})

module.exports.associations = (Product, { Order, Category, Review, OrderProduct }) => {
    Product.belongsToMany(Order, {through: OrderProduct})
    Product.belongsTo(Category)
    Product.hasMany(Review)
}
