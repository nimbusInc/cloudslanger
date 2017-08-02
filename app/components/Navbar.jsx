
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../reducers/user'
import { emptyCart } from '../reducers/cart'
import { updateSearch } from '../reducers/search'
import SearchResults from './SearchResults'

const Navbar = ({ cart, user, logout, emptyCart, searchInput, updateSearch }) => {
    const cartSize = Object.values(cart).reduce((sum, cur) => sum + cur, 0)
    return (
        <nav className="navbar navbar-default navbar-fixed bootsnav text-uppercase">
            <div className="top-search">
                <div className="container">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input value={searchInput} type="text" className="form-control" placeholder="Search" onChange={(event) => { updateSearch(event.target.value) } }></input>
                        <span onClick={(e) => { $('.top-search').slideToggle() }} className="input-group-addon close-search"><i className="fa fa-times"></i></span>

                    </div>
                </div>
                    <SearchResults searchInput={ searchInput } />

            </div>

            <div className="container">
                <div className="attr-nav">
                    <ul>
                        <li
                            onClick={(e) => { $('.top-search').slideToggle() }}
                            className="search"><a href="#"><i className="fa fa-search"></i></a>
                        </li>

                        <li>
                            <Link to="/cart">
                                <i className="fa fa-shopping-bag"></i>
                                <span className="badge">{cartSize}</span>
                            </Link>
                        </li>

                    </ul>
                </div>
                <div className="navbar-brand">Nimbus, Inc </div>
                <div className="collapse navbar-collapse" id="navbar-menu">
                    <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/products">products</Link></li>
                        <li>{user && <Link to="/orders">{`${user.name}`}</Link>}</li>
                        <li onClick={(e) => { emptyCart(); logout() }}>{user && <Link to="/">logout</Link>}</li>
                        <li>{!user && <Link to="/login">login</Link>}</li>
                        <li>{!user && <Link to="/signup">signup</Link>}</li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
const mapProps = ({ user, cart, searchInput }) => ({ user, cart, searchInput })
const mapDispatch = ({ logout, emptyCart, updateSearch })

export default connect(mapProps, mapDispatch)(Navbar)
