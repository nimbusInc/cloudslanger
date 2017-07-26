import React from "react";
import { Link } from "react-router-dom";

export default function(product) {
  return (
    <Link to={'/'}>
      <div className={`container`}>
        <div className={`col-lg-12`}>
          <img src={product.img} />
        </div>
        <p className="lead">
          {product.name}
        </p>
        <hr />
        <p>
          {product.description}
        </p>
        <p>
          ${product.price}
        </p>
      </div>
    </Link>
  );
}
