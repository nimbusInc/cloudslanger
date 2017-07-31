import React from 'react'
import Items from './AllProductsItem'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {select, deselect} from '../reducers/currentcategory'

function Categories(props) {
    return (
        <div>
            <div className="col-md-12 m-bottom-60">
                <div className="filters-button-group text-right sm-text-center">
                    <button className="button is-checked" onClick={() => props.catSelect({})}>View all</button>
                    {props && props.categories.map((cat) => (
                        <button className="button" key={cat.id} onClick={() => props.catSelect(cat)}
                        >{cat.category}</button>
                    )
                    )
                    }
                </div>
            </div>
            {!props.currentCategory ? props.products.map((product) => {
                console.log("I'm reading this as true", !props.currentCategory)
                return (<Items key={product.id} product={product}/>)
            }) : props.products.map((product) => {
                console.log("I'm reading this as false", !props.currentCategory)
                if (product.category_id === props.currentCategory.id) {
                    return (<Items key={product.id} product={product}/>)
                }
            })
            }
        </div>
    )
}

const mapProps= (state) => ({
    categories: state.categories,
    products: state.products,
    currentCategory: state.currentCategory
})

const mapDispatch = dispatch => ({
    catSelect: (newCat) => {
        dispatch(select(newCat))
    }
})

export default connect(mapProps, mapDispatch)(Categories)
