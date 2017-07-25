import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from './components/Home'

class Routes extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Home} />
            </Router>
        );
    }
}

export default Routes