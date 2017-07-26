import React from "react";
import { Link } from "react-router-dom";
import Thumbnail from "./Thumbnail.jsx";
import { connect     } from "react-redux";

/* EXPLANATION
  1.Renders a container that wraps the sidebar and all the product thumbnails
  2.Sidebar and thumbnails are then wrapped in bootstrap row
  3. Within that row we create a new col-lg-9(bootstrap stuff) which will hold all our thumbnails
  4. Maps through products and creates thumbnail for each product that are list elements inside a greater
  unordered list
*/

const AllProducts = function({ allProducts }) {
  return <h1>hi?</h1>;
};

const mapProps = ({ products }) => ({ allProducts: products });

export default connect(mapProps)(AllProducts);
