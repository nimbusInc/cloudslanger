import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emptyCart } from '../reducers/cart'

const Checkout = ({ cart, products }) => {
    return <h1></h1>
}

const mapProps = ({ cart, products }) => ({ cart, products })
const mapDispatch = null
export default connect(mapProps, mapDispatch)(Checkout)
