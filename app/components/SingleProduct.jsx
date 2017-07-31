import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCart } from '../reducers/cart'
import Review from './Review'

function SingleProduct({ products, match, updateCart, categories, reviews }) {
    const product = products.find(product => product.id === +match.params.id)
    const category = product && categories.find(category => category.id === +product.category_id)
    const productReview = category && reviews.filter(review => review.product_id === +product.id)
    const averageReview = productReview && Math.ceil(productReview.reduce((acc, cur) => { return acc + cur.star }, 0)/productReview.length)
    const AverageStars = averageReview && Array.apply(null, Array(averageReview)).map(star => null)
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
                                    <a href="blog-details.html"><h1>{product.name}</h1></a>
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
                                <h4>Reviews for {product.name}</h4>
                                <small>average review {AverageStars && AverageStars.map(star => (<i className={`fa fa-cloud`} ></i>))}</small>
                                <hr/>
                                {
                                    productReview && productReview.map(rev => (<Review review={rev} key={rev.id}/>
                                    ))
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
const mapProps = ({ products, categories, reviews }) => ({ products, categories, reviews })

export default connect(mapProps, mapDispatch)(SingleProduct)
