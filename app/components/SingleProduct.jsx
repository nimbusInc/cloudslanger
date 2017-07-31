import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../reducers/cart'

function SingleProduct({ products, match, updateCart, categories }) {
    const product = products.find(p => p.id === +match.params.id)
    const category = categories.find(c => c.id === +product.category_id)
    return product ? (
        <section id="blog_fashion" className="blog_fashion roomy-100">
            <div className="container">
                <div className="row">
                    <div className="main_blog_fashion">
                        <div className="col-md-8">
                            <div className="blog_fashion_left">
                                <div className="blog_fashion_img">
                                    <img src={product.img} alt="" ></img>
                                </div>
                                <div className="blog_fashion_content">
                                    <ol className="breadcrumb">
                                        <li><a href="#" className="text-black">{category.name}</a></li>
                                    </ol>
                                    <a href="blog-details.html"><h2>{product.name}</h2></a>
                                    <p>{product.description}</p>
                                    <button
                                        onClick={() => { updateCart(product, 'add') }}
                                        className="btn btn-default text-uppercase">Add to cart
                                        <i className="fa fa-long-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="blog_fashion_right">
                                {
                                product && product.reviews.map(rev => {
                                    return (
                                    <div>
                                        <div className="fashion_test text-center">
                                            <img className="img-circle" src="/assets/images/blog-test-img1.jpg" alt=""></img>

                                            <h6 className="m-top-20">Pouseidon - From OCean</h6>
                                            <p className="m-top-20">{rev.body}</p>
                                            <img className="m-top-20" src="/assets/images/blog-sign.png" alt="" ></img>
                                        </div>
                                    </div>
                                    )
                                }
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : null
}

const mapDispatch = ({ updateCart })
const mapProps = ({ products, categories }) => ({ products, categories })


export default connect(mapProps, mapDispatch)(SingleProduct)
