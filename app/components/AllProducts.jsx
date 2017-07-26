import React from 'react'
import { Link } from 'react-router-dom'
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

const AllProducts = function({allProducts}) {
  return (

      <div className={`container`}>
      <h1> am i here?!?</h1>
        <div className={`row`}>
          <Sidebar />
          <div className={`col-lg-9`}>
            <ul className={`list-unstyled`}>
            {
              {allProducts && allProducts.map(product => {
                return (
                  <div key={product.id} className={`col-lg-4`}>
                    <figure className={`highlight-default`}>
                      <li>
                        <Thumbnail {...product} />
                      </li>
                    </figure>
                  </div>
                )
              })}

            }

            </ul>
          </div>
        </div>
      </div>

  )
}

const mapProps = ({products})=>({allProducts:products})

export default connect(mapProps)(AllProducts)
