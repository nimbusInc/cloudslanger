import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function Review(rev) {
    return (
        <div>
            <h5>{rev.review.user.name}</h5>
            <p>{rev.review.body}</p>
            {
            <i className="fa fa-star"></i>
            }
            <hr />
        </div>
    )
}
