import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
  return (
    <Link to={TKTKTKT}>
      <div className={`container`}>
        <div className={`col-lg-12`}>
          <img src={TKTKTKT} />
        </div>
        <p className="lead">
          {props.productName}
        </p>
        <hr />
        <p>
          {props.productDescription}
        </p>
        <p>
          ${props.price}
        </p>
      </div>
    </Link>
  );
}