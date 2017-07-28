import React from 'react'

export const Login = ({ login }) => (
            <section id="contact" className="contact fix">
                <div className="container">
                    <div className="row">
                        <div className="main_contact p-top-100">

                            <div className="col-lg-12 sm-m-top-30">
                                <form onSubmit={evt => { 
                                    evt.preventDefault() 
                                    login(evt.target.username.value, evt.target.password.value)
                                  } }>
                                    <div className="row">

                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <label>Email *</label>
                                                <input name="username" type="text" className="form-control"></input>
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
                                                <button type="submit" className="btn btn-default">Login <i className="fa fa-long-arrow-right"></i></button>
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

import {login} from 'APP/app/reducers/user'
import {connect} from 'react-redux'

export default connect(
  state => ({}),
  {login},
)(Login)

{/* <form onSubmit={evt => {
      evt.preventDefault()
      login(evt.target.username.value, evt.target.password.value)
  } }>
    <input name="username" />
    <input name="password" type="password" />
    <input type="submit" value="Login" />
  </form>  */}