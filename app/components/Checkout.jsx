import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emptyCart, updateCart } from '../reducers/cart'

const Checkout = ({ cart, products, updateCart }) => {
    return Object.keys(cart).length ? (
        <section id="feature" className="feature p-top-100">
            <div className="container">
                {
                    cart && products && Object.keys(cart).map(id => {
                        let item = products.find(p => p.id === +id)
                        return item ? (
                            <div className="row">
                                <div className="main_feature">

                                    <div className="col-md-6 m-top-120">

                                        <div className="head_title">
                                            <h2>{item && item.name}</h2>
                                            <h5><em>{item && item.description}</em></h5>
                                            <div className="separator_left"></div>
                                        </div>

                                        <div className="feature_content wow fadeIn m-top-40">
                                            <p>Eusus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores
                                        legere me lius quod ii legunt saepius. Duis autem vel eum iriure dolor in hendrerit vulputate
                                        velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et
                                        accumsan et iusto odio dignissim qui blandit praesent luptatum</p>

                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat,
                                        vel illum dolore feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim</p>

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
export default connect(mapProps, mapDispatch)(Checkout)
