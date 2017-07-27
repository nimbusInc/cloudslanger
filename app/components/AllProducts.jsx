import React from 'react'
import { Link } from 'react-router-dom'
import Thumbnail from './Thumbnail.jsx'
import Sidebar from './Sidebar.jsx'

/* EXPLANATION
  1.Renders a container that wraps the sidebar and all the product thumbnails
  2.Sidebar and thumbnails are then wrapped in bootstrap row
  3. Within that row we create a new col-lg-9(bootstrap stuff) which will hold all our thumbnails
  4. Maps through products and creates thumbnail for each product that are list elements inside a greater
  unordered list
*/

export default function Allproducts(props) {
    return (
      <div className={`container`}>
        <div className={`row`}>
          <Sidebar props={props}/>
          <div className={`col-lg-9`}>
            <ul className={`list-unstyled`}>
            </ul>
          </div>
        </div>
      </div>

    )
}
