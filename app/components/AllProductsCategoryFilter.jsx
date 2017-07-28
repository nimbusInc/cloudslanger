import React from 'react'
import Items from './AllProductsItem'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'

function Categories(props) {
    let filter
    return (
        <div className="col-md-12 m-bottom-60">
            <div className="filters-button-group text-right sm-text-center">
                <button className="button is-checked" onClick={() => filter='all'}>View all</button>
                {props.categories.map((category) => (
                    <button className="button" onClick={() => filter= category}>{category}</button>
                )
                )
                }
            </div>
            <Items products={props.products} category={filter} />
        </div>
    )
}

const mapProps= (state) => ({
    categories: state.categories,
    products: state.products
})

export default connect(mapProps)(Categories)
