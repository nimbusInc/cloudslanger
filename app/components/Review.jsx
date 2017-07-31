import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function Review(rev) {
    let stars = Array.apply(null, Array(+rev.review.star)).map(star => null) /* null gives the array values*/
    return stars ? (
        <div>
            <h5>{rev.review.user.name}</h5>
            <p>{rev.review.body}</p>
            {
            stars && stars.map(star => (<i className={`fa fa-cloud`} ></i>))
            }
            <hr />
        </div>
    ) : null
}

