import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import AllProducts from './components/AllProducts'
import { fetchProducts } from './reducers/products'
import {fetchCategories} from './reducers/categories'
import Thumbnail from './components/Thumbnail'
import Login from './components/Login'
import Footer from './components/Footer'

class Routes extends Component {
    componentDidMount() {
        this.props.fetchInitialData()
    }

    render() {
        return (
            <Router>
                <div className='culmn'>
                    {''}{/* this is the way god wants it... */}
                    <Navbar />
                    <Route exact path='/thumbnail' component={Thumbnail} />
                    <Route exact path='/products' component={AllProducts} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                    <Route path='/thumbnail' component={Thumbnail} />
                    <Route path='/products' component={AllProducts} />
                    <Footer />
                </div>
            </Router>
        )
    }
}

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchProducts())
        dispatch(fetchCategories())
    }
})

export default connect(null, mapDispatch)(Routes)
