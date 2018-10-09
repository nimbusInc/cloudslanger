import { NavLink } from 'react-router-dom'
import React from 'react'

export default function Review(rev) {
    const stars = Array.apply(null, Array(+rev.review.star)).map(star => null) /* null gives the array values */
    return stars ? (
        <div>
            <NavLink to={`/userReviews/${rev.review.user_id}`} ><h5>{rev.review.user.name}</h5></NavLink>
            <p>{rev.review.body}</p>
            {
            stars && stars.map((star, i) => (<i className={`fa fa-cloud`} key={i}></i>))
            }
            <hr />
        </div>
    ) : null
}
