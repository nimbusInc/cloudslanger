import React from 'react'
import { NavLink } from 'react-router-dom'
import Thumbnail from './Thumbnail.jsx'
import Sidebar from './Sidebar.jsx'
import {connect} from 'react-redux'

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
            <Sidebar/>
            <div className="col-lg-9">
                <section id="gallery" className="gallery margin-top-120 bg-grey">
                    <div className="container">
                        <div className="row">
                            <div className="main-gallery roomy-80">
                                <div className="col-md-12">
                                    <div className="head_title text-left sm-text-center wow fadeInDown">
                                        <h2>Selection</h2>
                                        <h5><em>Get your head in the clouds</em></h5>
                                        <div className="separator_left"></div>
                                    </div>
                                </div>

                                <div className="col-md-12 m-bottom-60">
                                    <div className="filters-button-group text-right sm-text-center">
                                        <button className="button is-checked" data-filter="*">View all</button>
                                        <button className="button" data-filter=".metal">Catwalk</button>
                                        <button className="button" data-filter=".transition">Advertisement</button>
                                        <button className="button" data-filter=".alkali">Fashionista</button>
                                        <button className="button" data-filter=".ar">Model Photo</button>
                                    </div>
                                </div>

                                <div className="grid text-center">
                                    {props.products.map(
                                        (product) => (
                                            <NavLink to={`/products/${product.id}`} key={ product.id }>
                                                <div className="grid-item transition metal ium">
                                                    <img alt="" src={product.img}></img>
                                                    <div className="grid_hover_area text-center">
                                                        <div className="grid_hover_text m-top-110">
                                                            <h4 className="text-white">{product.name}</h4>
                                                            <h5 className="text-white"><em>{product.description}</em></h5>
                                                            <img src="assets/images/porfolio-01.jpg" className="popup-img text-white m-top-40"/>See more <i className="fa fa-cloud"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        ))
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

const mapProps= (state) => ({
    products: state.products
})

export default connect(mapProps)(AllProducts)
