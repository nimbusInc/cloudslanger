import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class SearchResults extends Component {
    render() {
        console.log(this.props.searchInput)
        let productsBySearch = []
        if (this.props.searchInput) {
            productsBySearch = this.props.products.filter(product => product.name.match(this.props.searchInput))
        }
        console.log('PRODUCTBS', productsBySearch)
        return (
            <div>
                <h1> FILLER </h1>
                <h1> FILLER </h1>
                <h1> FILLER </h1>
                    <div className="container">
                        <div className="attr-nav">
                            <ul>
                                <li className="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" >
                                     <i className="fa fa-search"> </i>
                                    </a>
                                    <ul className="dropdown-menu cart-list">
                                    {productsBySearch && productsBySearch.map((product) => (
                                        <li>
                                            <div className="col-xs-12">
                                                <img src={product.img} className="cart-thumb" alt="" />
                                            </div>
                                            <h6><a href="#"> {product.name} </a></h6>
                                            <p className="m-top-10"><span className="price">{product.price}</span></p>
                                        </li>
                                    ))}
                                    </ul>
                                </li>

                            </ul>
                        </div>
                    </div>
            </div>
        )
    }
                }

const mapProps = ({products}) => ({products})

export default connect(mapProps)(SearchResults)
