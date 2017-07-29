import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

function Thumbnail({ products, match }) {
    console.log('products', products)
    const product = products.filter(product => product.id === +match.params.id)[0]

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
                                <p>{product.description}</p>
                                <p>${product.price}</p>

                                <div className="feature_btns m-top-30">
                                    <a href="" className="btn btn-default text-uppercase">more about us <i className="fa fa-long-arrow-right"></i></a>
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
const mapDispatch = null

export default connect(mapProps, mapDispatch)(Thumbnail)
