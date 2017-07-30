import React from 'react'

import { signup } from '../reducers/user'

export const Signup = ({ login, signup }) => (
    <section id="contact" className="contact fix">
        <div className="container">
            <div className="row">
                <div className="main_contact p-top-100">

                    <div className="col-lg-12 sm-m-top-30">
                        <form onSubmit={evt => {
                            evt.preventDefault()
                            signup(evt.target.name.value, evt.target.email.value, evt.target.password.value)
                        }}>
                            <div className="row">

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Name *</label>
                                        <input name="name" type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Email *</label>
                                        <input name="email" type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label>Password *</label>
                                        <input name="password" type="text" className="form-control"></input>
                                    </div>
                                </div>

                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-default">Signup <i className="fa fa-long-arrow-right"></i></button>
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>
)

import { login } from 'APP/app/reducers/user'
import { connect } from 'react-redux'

export default connect(
    state => ({}),
    { login, signup },
)(Signup)
