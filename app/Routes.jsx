import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AllProducts from './components/AllProducts'
import { fetchProducts } from './reducers/products'
import { fetchCategories } from './reducers/categories'
import { fetchReviews } from './reducers/reviews'
import Login from './components/Login'
import Signup from './components/Signup'
import OrderList from './components/OrderList'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import Confirmation from './components/Confirmation'
import Footer from './components/Footer'
import SingleProduct from './components/SingleProduct'
import SearchResults from './components/SearchResults'

class Routes extends Component {
    componentDidMount() {
        this.props.fetchInitialData()
    }

    render() {
        return (
            <Router>
                <div className='culmn'>
                    <Navbar />
                    <Route exact path='/products' component={AllProducts} />
                    <Route exact path='/products/:id' component={SingleProduct} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={Signup} />
                    <Route exact path='/orders' component={OrderList} />
                    <Route exact path='/checkout' component={Checkout} />
                    <Route exact path='/confirmation' component={Confirmation} />
                    <Route exact path='/cart' component={Cart} />
                    <Route exact path='/' component={Home} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchCategories())
        dispatch(fetchProducts())
        dispatch(fetchReviews())
    }
})

const mapProps = ({ user, searchInput }) => ({ user, searchInput })

export default connect(mapProps, mapDispatch)(Routes)
