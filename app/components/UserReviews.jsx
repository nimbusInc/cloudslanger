import { NavLink } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

function UserReviews({ match, reviews, products, user }) {
    const userReviews = reviews && reviews.filter(review => +review.user_id === +match.params.id)
    return userReviews && (
        <section className="blog_fashion roomy-100">
                <div className="blog_fashion_left">
                    <div>
                        {userReviews && userReviews.map(review => (
                                <div className="container">
                                    < p > {review.body}</p>
                                    <p>{review.star}</p>
                                    <hr />
                                </div>
                            ))
                        }
                    </div>
                </div>
        </section>
    )
}

const mapProps = ({ reviews, products, user }) => ({ reviews, products, user })

export default connect(mapProps)(UserReviews)
