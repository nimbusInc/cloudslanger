import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
console.log('foo')
import AllProducts from './components/AllProducts'
import { fetchProducts } from './reducers/products'
import Thumbnail from './components/Thumbnail'
import Login from './components/Login'


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
                </div>
            </Router>
        )
    }
}

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchProducts())
    }
})

export default connect(null, mapDispatch)(Routes)
