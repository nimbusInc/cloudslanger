import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Item(props) {
    const product = props.product
    return (
        <div className="grid text-center">
            <NavLink to={`/products/${product.id}`} key={product.id}>
                <div className="grid-item transition metal ium">
                    <img alt="" src={product.img}></img>
                    <div className="grid_hover_area text-center">
                        <div className="grid_hover_text m-top-110">
                            <h4 className="text-white">{product.name}</h4>
                            <h5 className="text-white">
                                <em>{product.description}</em>
                            </h5>
                            <img className="popup-img text-white m-top-40"/>See more
                            <i className="fa fa-cloud"></i>
                        </div>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}
