import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Item extends React.Component {
    render() {
        const productList = this.props.products.filter((product) => {
            if (!this.props.currentCategory.id) {
                return true
            } else {
                return product.category_id === this.props.currentCategory.id
            }
        })
        return (

            <div>
                {productList && productList.map((product) => (
                    <div className="grid text-center" key={product.id}>
                        <NavLink to={`/products/${product.id}`} >
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
                ))}
            </div>
        )
    }
}

const mapProps= (state) => ({
    categories: state.categories,
    products: state.products,
})

export default connect(mapProps)(Item)
