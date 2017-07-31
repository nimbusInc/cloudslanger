import React from 'react'
import Items from './AllProductsItem'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {select, deselect} from '../reducers/currentcategory'

// beautify me!
function Categories(props) {
    return (
        <div>
            <div className="col-md-12 m-bottom-60">
                <div className="filters-button-group text-right sm-text-center">
                    <button className="button is-checked" onClick={() => props.catSelect({})}>View all</button>
                    {props && props.categories.map((cat) => (
                        <button className="button" key={cat.id} onClick={() => props.catSelect(cat)}
                        >{cat.name}</button>
                    )
                    )
                    }
                </div>
            </div>
            { props.products.map((product) => {
                return (<Items key={product.id} product={product}/>)
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

// SJB/OB: the more obvious the naming, the better
// use shorthand, mapDispatch can be an object instead of a function
const mapDispatch = dispatch => ({
    catSelect: (newCat) => {
        dispatch(select(newCat))
    }
})

export default connect(mapProps, mapDispatch)(Categories)
