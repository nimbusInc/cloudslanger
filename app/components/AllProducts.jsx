import React from 'react'
import { NavLink } from 'react-router-dom'
import Thumbnail from './Thumbnail.jsx'
import Categories from './AllProductsCategoryFilter.jsx'
import { connect } from 'react-redux'

/* EXPLANATION
  1.Renders a container that wraps the sidebar and all the product thumbnails
  2.Sidebar and thumbnails are then wrapped in bootstrap row
  3. Within that row we create a new col-lg-9(bootstrap stuff) which will hold all our thumbnails
  4. Maps through products and creates thumbnail for each product that are list elements inside a greater
  unordered list
*/

function AllProducts(props) {
    return (
        <div>
            <section id="hello" className="model-banner bg-mega">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="main_home text-center">
                            <div className="model_text">
                                <h1 className="text-white text-uppercase">OUR MODELS</h1>
                                <ol className="breadcrumb">
                                    <li><a href="#">Home</a></li>
                                    <li className="active"><a href="#">OUR MODELS</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="gallery" className="gallery margin-top-120 bg-white">

                <div className="container">
                    <div className="row">
                        <div className="main-gallery main-model roomy-80">
                            <div className="col-md-12 m-bottom-60">
                                <div className="filters-button-group sm-text-center">
                                    <button className="button is-checked" data-filter="*">View all</button>
                                    <button className="button" data-filter=".metal">Catwalk</button>
                                    <button className="button" data-filter=".transition">Advertisement</button>
                                    <button className="button" data-filter=".alkali">Fashionista</button>
                                    <button className="button" data-filter=".ar">Model Photo</button>
                                </div>
                            </div>
                            <div style={{ clear: 'both' }}></div>

                            <div className="grid models text-center">
                                <div className="grid-item model-item transition metal ium">
                                    <img alt="" src="assets/images/model/1.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item metalloid " >
                                    <img alt="" src="assets/images/model/2.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item post-transition metal">
                                    <img alt="" src="assets/images/model/3.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item post-transition metal ium" >
                                    <img alt="" src="assets/images/model/4.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item metal ar" >
                                    <img alt="" src="assets/images/model/5.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item alkali ar" >
                                    <img alt="" src="assets/images/model/6.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item alkali ar" >
                                    <img alt="" src="assets/images/model/7.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item alkali ar" >
                                    <img alt="" src="assets/images/model/8.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item alkali ar" >
                                    <img alt="" src="assets/images/model/9.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item alkali ar" >
                                    <img alt="" src="assets/images/model/10.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item alkali ar" >
                                    <img alt="" src="assets/images/model/11.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>

                                <div className="grid-item model-item alkali ar" >
                                    <img alt="" src="assets/images/model/12.jpg"></img>
                                    <a href="model-details.html" className="btn btn-default m-top-20">View Details<i className="fa fa-long-arrow-right"></i></a>
                                </div>
                            </div>

                            <div style={{ clear: 'both' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="company" className="company bg-light">
                <div className="container">
                    <div className="row">
                        <div className="main_company roomy-100 text-center">
                            <h3 className="text-uppercase">pouseidon.</h3>
                            <p>7th floor - Palace Building - 221b Walk of Fame - London- United Kingdom</p>
                            <p>(+84). 123. 456. 789  -  info@poiseidon.lnk</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="scrollup">
                <a href="#"><i className="fa fa-chevron-up"></i></a>
            </div>
        </div>

    )
}

const mapProps = (state) => ({
    products: state.products
})

export default connect(mapProps)(AllProducts)
