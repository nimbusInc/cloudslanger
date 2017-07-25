import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'

class Routes extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                </div>

            </Router>
        );
    }
}

export default Routes