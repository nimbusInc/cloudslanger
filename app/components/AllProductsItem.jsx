import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Item(props) {
    return (
        <div className="grid text-center">
            {props.products.map((product) => {
                if (props.category === 'all' || product.category === props.category) {
                    return (
                        <NavLink to={`/products/${product.id}`} key={product.id}>
                            <div className="grid-item transition metal ium">
                                <img alt="" src={product.img}></img>
                                <div className="grid_hover_area text-center">
                                    <div className="grid_hover_text m-top-110">
                                        <h4 className="text-white">{product.name}</h4>
                                        <h5 className="text-white">
                                            <em>{product.description}</em>
                                        </h5>
                                        <img src="assets/images/porfolio-01.jpg" className="popup-img text-white m-top-40"/>See more
                                        <i className="fa fa-cloud"></i>
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    )
                }
            })
            }
        </div>
    )
}
