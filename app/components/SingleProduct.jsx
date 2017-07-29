import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../reducers/user'

function SingleProduct({ products, match, addToCart }) {
    const product = products.find(p => p.id === +match.params.id)

    return product ? (

        <section id="feature" className="feature p-top-100">
            <div className="container">
                <div className="row">
                    <div className="main_feature">

                        <div className="col-md-6 m-top-120">

                            <div className="head_title">
                                <h2>{product.name}</h2>
                                <h5><em>Pouseidon brings the waves to somewhere so far,
                                            with beautiful & elegant</em></h5>
                                <div className="separator_left"></div>
                            </div>

                            <div className="feature_content wow fadeIn m-top-40">
                                <p></p>

                                <p></p>

                                <div className="feature_btns m-top-30">
                                    <button
                                        onClick={() => { addToCart(product) }}
                                        className="btn btn-default text-uppercase">Add to cart
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="feature_photo wow fadeIn sm-m-top-40">
                                <div className="feature_img">
                                    <a href="#" className="thumbnail">
                                        <img src={product.img} alt=""></img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : <h1></h1>
}

const mapProps = ({ products }) => ({ products })
const mapDispatch = ({ addToCart })

export default connect(mapProps, mapDispatch)(SingleProduct)
