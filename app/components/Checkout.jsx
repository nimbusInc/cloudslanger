import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addOrder } from '../reducers/orders'

/* EXPLANATION
  1.Renders a container that wraps the sidebar and all the product thumbnails
  2.Sidebar and thumbnails are then wrapped in bootstrap row
  3. Within that row we create a new col-lg-9(bootstrap stuff) which will hold all our thumbnails
  4. Maps through products and creates thumbnail for each product that are list elements inside a greater
  unordered list
*/

const Checkout = ({ cart, products, user, addOrder, history }) => {
    const productIds = Object.keys(cart)
    return (
        <section id="testimonial" className="testimonial fix roomy-100">
            <div className="container">
                <div className="row">


                    <div className="service_content_area">

                        <div className="col-md-4 service_left wow fadeInLeft">


                            <div className="service_items">
                                <div className="row">


                                    <div className="col-xs-3">
                                        <div className="hexagon">
                                            <div className="about-content">
                                                <span className="fa fa-leaf"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-9">
                                        <div className="text-left service_left_text">
                                            <h4 className="main-color">Free Shipping</h4>
                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</p>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className="service_items">
                                <div className="row">

                                    <div className="col-xs-3">
                                        <div className="hexagon">
                                            <div className="about-content">
                                                <span className="fa fa-diamond"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-9">
                                        <div className="text-left service_left_text">
                                            <h4 className="main-color">Garaunteed Delivery</h4>
                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</p>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className="service_items">
                                <div className="row">

                                    <div className="col-xs-3">
                                        <div className="hexagon">
                                            <div className="about-content">
                                                <span className="fa fa-android"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xs-9">
                                        <div className="text-left service_left_text">
                                            <h4 className="main-color">Pore Cleansing</h4>
                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</p>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>



                        <div className="col-md-4 sm-m-top-40 sm-text-center">
                            <div className="service-img wow bounceIn">
                                <img src='https://booster.io/wp-content/uploads/checkout-custom-fields-e1438367928930.png' alt="Architect Img"></img>
                            </div>
                        </div>


                        <div className="col-md-4 service_right wow fadeInRight sm-m-top-40" >


                            <div className="service_items">
                                <div className="row">

                                    <div className="col-xs-9">
                                        <div className="service_right_text p-l-15 text-right">
                                            <h4 className="main-color">Rain & Shine</h4>
                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</p>
                                        </div>
                                    </div>


                                    <div className="col-xs-3">
                                        <div className="hexagon">
                                            <div className="about-content">
                                                <span className="fa fa-cut"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>




                            <div className="service_items">
                                <div className="row">

                                    <div className="col-xs-9">
                                        <div className="service_right_text p-l-15 text-right">
                                            <h4 className="main-color">God is you</h4>
                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</p>
                                        </div>
                                    </div>



                                    <div className="col-xs-3">
                                        <div className="hexagon">
                                            <div className="about-content">
                                                <span className="fa fa-bullhorn"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="service_items">
                                <div className="row">


                                    <div className="col-xs-9">
                                        <div className="service_right_text p-l-15 text-right">
                                            <h4 className="main-color">And much more</h4>
                                            <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie</p>
                                        </div>
                                    </div>


                                    <div className="col-xs-3">
                                        <div className="hexagon">
                                            <div className="about-content">
                                                <span className="fa fa-paper-plane"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>



            <section id="contact" className="contact fix">
                <div className="container">
                    <div className="row">
                        <div className="main_contact p-top-100">

                            <div className="col-lg-12 sm-m-top-30">
                                <form onSubmit={(event) => {
                                    event.preventDefault()
                                    addOrder({
                                        info: {
                                            email: event.target.email.value,
                                            name: event.target.name.value,
                                            payment: event.target.payment.value,
                                            address: event.target.address.value
                                        },
                                        user,
                                        cart
                                    })
                                    history.push('confirmation')
                                }}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Your Name *</label>
                                                <input id="name" name="name" type="text" className="form-control" required=""></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Your Email *</label>
                                                <input id="email" name="email" type="text" className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Your Credit Card *</label>
                                                <input id="payment" name="payment" type="text" className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <label>Your Address *</label>
                                                <input id="address" name="address" type="text" className="form-control"></input>
                                            </div>
                                        </div>

                                        <div className="col-sm-12">
                                            <div className="form-group">
                                                <button
                                                    type="submit"
                                                    className="btn btn-default">PURCHASE <i className="fa fa-long-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section >
    )
}

const mapProps = ({ cart, products, user }) => ({ cart, products, user })
const mapDispatch = ({ addOrder })
export default connect(mapProps, mapDispatch)(Checkout)
