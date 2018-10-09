import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Confirmation = () => (
    <section id="testimonial" className="testimonial fix roomy-100">
        <div className="container">
            <div className="row">
                <div className="main_testimonial text-center">
                    <div className="item testimonial_item">
                        <div className="col-sm-10 col-sm-offset-1">
                            <div className="test_authour">
                                <img id='confirmation' className="img-circle" src={'https://clutterbusting.com/wp-content/uploads/2016/12/Feature3_image2_vitD.jpeg'} alt="" />
                                <h6 className="m-top-20">Thank you for your order!</h6>
                                <h5><em>Enjoy the weather</em> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

const mapProps = ({ cart, products }) => ({ cart, products })
const mapDispatch = null
export default connect(mapProps, mapDispatch)(Confirmation)
