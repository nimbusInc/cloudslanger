import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AllProducts from "./components/AllProducts";
import { retrieveProducts } from "/reducers/products";

class Routes extends Component {
    componentDidMount() {
        this.props.fetchInitialData()
    }

    render() {
        return (
            <Router>
                <div className="culmn">
                    {" "}{/*this is the way god wants it...*/}
                    <Navbar />
                    <Route exact path="/" component={Home} />

                    <Route path="/products" component={AllProducts} />
                </div>
            </Router>
        );
    }
}

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(retrieveProducts());
    }
});

export default connect(null, mapDispatch)(Routes);
