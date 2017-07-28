import React from 'react'
import {connect} from 'react-redux'

export default function Sidebar() {
    console.log("Hello world I'm")
    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3>Clouds</h3>
                    <hr/>
                    <p>Cloud typeA</p>
                    <p>Cloud typeB</p>
                    <p>Cloud typeC</p>
                </div>
                <div className="row">
                    <h3> Filters</h3>
                </div>
                <div className="row">
                    <h5>Color</h5>
                    <hr/>
                    <div className="input-group">
                        <div className="input-group-addon">
                            <input type="checkbox" aria-label="f">
                            </input>
                            <span>White</span>
                            <div className="input-group-addon">
                                <input type="checkbox" aria-label="e">
                                </input>
                                <span>Grey</span>
                                <div className="input-group-addon">
                                    <input type="checkbox" aria-label="d">
                                    </input>
                                    <span>Avocado</span>
                                </div>
                            </div>
                            <h5>Locations</h5>
                            <hr/>
                            <div className="input-group-addon">
                                <input type="checkbox" aria-label="a">
                                </input>
                                <span>Americas</span>
                                <div className="input-group-addon">
                                    <input type="checkbox" aria-label="b"></input>
                                </div>
                                <span> Eurasia</span>
                                <div className="input-group-addon">
                                    <input type="checkbox" aria-label="c"></input>
                                    <span>Austroasia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
