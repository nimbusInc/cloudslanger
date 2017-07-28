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
