import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const PurchaseOrder = () => {
    return (
        <section id="testimonial" className="testimonial fix roomy-100">
            <div className="container">
                <div className="row">
                    <div className="main_testimonial text-center">

                        <div className="item testimonial_item">
                            <div className="col-sm-10 col-sm-offset-1">

                                <div className="test_authour">
                                    <img className="img-circle" src="assets/images/test-img.jpg" alt="" />
                                    <h6 className="m-top-20">Thank you for your order!</h6>
                                    <h5><em>Enjoy your weather</em> </h5>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />

            <div className="container">
                <div className="row">
                    <div className="main_cbrand text-center">
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="cbrand_item m-bottom-10">
                                <a href=""><img src="assets/images/brand-img1.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="cbrand_item m-bottom-10">
                                <a href=""><img src="assets/images/brand-img2.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="cbrand_item m-bottom-10">
                                <a href=""><img className="" src="assets/images/brand-img3.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="cbrand_item m-bottom-10">
                                <a href=""><img src="assets/images/brand-img4.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="cbrand_item m-bottom-10">
                                <a href=""><img src="assets/images/brand-img5.png" alt="" /></a>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 col-xs-6">
                            <div className="cbrand_item m-bottom-10">
                                <a href=""><img src="assets/images/brand-img1.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const mapProps = ({ cart, products }) => ({ cart, products })
const mapDispatch = null
export default connect(mapProps, mapDispatch)(PurchaseOrder)
