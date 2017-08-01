import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SearchResults extends Component {
    render() {
        let productsBySearch = []
        if (this.props.searchInput) {
            productsBySearch = this.props.products.filter(product => product.name.toLowerCase().match(this.props.searchInput))
        }
        return (
            <div>
                {productsBySearch && productsBySearch.map((product) => (
                    <div className="grid text-left" key={product.id}>
                        <NavLink to={`/products/${product.id}`} >
                            <div className="feature_btns" style={{ marginLeft: 65, color: 'white' }}>
                                 <span className="btn btn-default text-white text-uppercase"> {product.name} <i className="fa fa-long-arrow-right"></i></span>
                            </div>
                        </NavLink>
                    </div>
                ))}

            </div>
        )
    }
}

const mapProps = ({ products }) => ({ products })

export default connect(mapProps)(SearchResults)
