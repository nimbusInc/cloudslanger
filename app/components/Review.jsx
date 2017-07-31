import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default function Review(rev) {
    console.log('here', rev)
    return (
        <div>
            <h4>{rev.review.user.name}</h4>
            <p>{rev.review.body}</p>
        </div>
    )
}
