import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emptyCart, updateCart } from '../reducers/cart'

const Cart = ({ cart, products, updateCart }) => {
    let price
    const cartItems = Object.keys(cart)

    if (cartItems.length) {
        price = (cartItems.reduce((total, itemId) => {
            const productInCart = products.find(product => product.id === +itemId)
            const quantity = +cart[itemId]
            return productInCart ? +productInCart.price * quantity + total : total
        }, 0)).toFixed(2)
    }

    return Object.keys(cart).length ? (
        <section id="feature" className="feature p-top-100">
            <div className="container">
                {

                    cart && products && Object.keys(cart).map((id, i) => {
                        let item = products.find(p => p.id === +id)
                        return item ? (
                            <div key={id} className="row">
                                <div className="main_feature">

                                    <div className="col-md-6 m-top-120">

                                        <div className="head_title">
                                            <h2>{item && item.name}</h2>
                                            <h5><em>{item && item.description}</em></h5>
                                            <div className="separator_left"></div>
                                        </div>

                                        <div className="feature_content wow fadeIn m-top-40">
                                            <div className="feature_btns m-top-60">
                                                <button
                                                    onClick={() => {
                                                        cart[item.id] > 1
                                                            ? updateCart(item, 'subtract')
                                                            : updateCart(item, 'delete')
                                                    }}
                                                    className="btn btn-default text-uppercase">
                                                    <i className="fa fa-long-arrow-left"></i>
                                                </button>
                                                <h2 className="statistic-counter"> {cart[id]} </h2>
                                                <button
                                                    onClick={() => { updateCart(item, 'add') }}
                                                    className="btn btn-default text-uppercase">
                                                    <i className="fa fa-long-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-2 m-top-100">
                                        <div className="feature_photo wow fadeIn sm-m-top-40">
                                            <div className="photo_border"></div>
                                            <div className="feature_img">
                                                <img src={item && item.img} alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    {!i &&
                                        <div className="col-md-4">
                                            <div className="blog_fashion_right">
                                                <div className="fashion_test text-center">
                                                    <h1>${price}</h1>

                                                    <h6 className="m-top-20">Take it and run</h6>
                                                    <p className="m-top-20">With the waves from somewhere so far.
                                            We comes with elegants and beautiful.
                                            Just do what we love and always love what we do</p>
                                                    <Link to='/checkout'>
                                                        <button
                                                            className="btn btn-default">Checkout
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    }

                                </div>
                            </div>
                        ) : null
                    })

                }

            </div>
        </section>
    ) : <section id="simple" className="simple bg-grey roomy-80">
            <div className="container">
                <div className="row">
                    <div className="main_simple text-center">
                        <div className="col-md-12">
                            <h2>Your cart is empty!</h2>
                            <p>Eusus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere
                                    me lius quod ii legunt saepius. Duis autem vel eum iriure dolor in hendrerit vulputate velit esse
                                    molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan blandit
                                    praesent luptatum.</p>

                            <Link to='/products/1' className="btn btn-default m-top-40">Get Shopping <i className="fa fa-long-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
}

const mapProps = ({ cart, products }) => ({ cart, products })
const mapDispatch = ({ updateCart })
export default connect(mapProps, mapDispatch)(Cart)
