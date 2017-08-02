import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class AdminProducts extends React.Component {
    render() {
        const productList = this.props.products
        return (
            <div>
                <div className="row">
                    {productList && productList.map((product) => (
                        <div className="text-center" key={product.id}>
                            <NavLink to={`admin/products/${product.id}`} >
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                                    <img alt="" src={product.img}></img>
                                    <div className=" text-center">
                                        <h4 >{product.name}</h4>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                    <NavLink to={`admin/addProduct`}>ADD PRODUCT</NavLink>
                </div>
            </div>
        )
    }
}

const mapProps = (state) => ({
    products: state.products
})

export default connect(mapProps)(AdminProducts)
