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
        <div className={`container`}>
            <div className={`row`}>
                <div className={`col-lg-9`}>
                    <ul className={`list-unstyled`}>
                        {props.products.map((product) => (
                            <li className="col-lg-3 col-md-4 col-sm-6 col-xs-12" key={ product.id }>
                                <NavLink to={`/products/${product.id}`} className="thumbnail">
                                    <img src={product.img} />
                                    <div className="caption">
                                        <h5>
                                            <span>{product.name}</span>
                                            <hr/>
                                            <p>{product.description}</p>
                                        </h5>
                                    </div>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}
const mapProps= (state) => ({
    products: state.products
})

export default connect(mapProps)(AllProducts)
