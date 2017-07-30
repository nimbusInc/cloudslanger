import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../reducers/cart'

function SingleProduct({ products, match, updateCart }) {
    const product = products.find(p => p.id === +match.params.id)
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
                                        <li><a href="#" className="text-black">Fashion</a></li>
                                        <li><a href="#" className="text-black">Feb 28th 2015</a></li>
                                        <li><a href="#" className="text-black">2 comments</a></li>
                                    </ol>
                                    <a href="blog-details.html"><h2>International Fashion week 2015</h2></a>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                                            nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                                            suscipit lobortis nisl aliquip commodo consequat.Duis autem vel
                                            eum iriure dolor...</p>
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
                                <div className="fashion_test text-center">
                                    <img className="img-circle" src="/assets/images/blog-test-img1.jpg" alt=""></img>

                                    <h6 className="m-top-20">Pouseidon - From OCean</h6>
                                    <p className="m-top-20">With the waves from somewhere so far.
                                            We comes with elegants and beautiful.
                                            Just do what we love and always love what we do</p>
                                    <img className="m-top-20" src="/assets/images/blog-sign.png" alt="" ></img>
                                </div>

                                <div className="fashion_praspect m-top-40">
                                    <div className="fashion_praspect_inner bg-black">
                                        <p className="text-white">Good design is making something intelligible and memorable.
                                                Great design is making something memorable and meaningful.</p>
                                        <p className="text-white">_ Dieter Rams</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) : null
}

const mapProps = ({ products }) => ({ products })
const mapDispatch = ({ updateCart })

export default connect(mapProps, mapDispatch)(SingleProduct)
