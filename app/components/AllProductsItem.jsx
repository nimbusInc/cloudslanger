import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

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

            <div className="row">
                {productList && productList.map((product) => (
                    <div className="text-center" key={product.id}>
                        <NavLink to={`/products/${product.id}`} >
                            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                                <img alt="" src={`/assets/images/small/${product.img}`}></img>
                                <div className=" text-center">
                                    <h4 >{product.name}</h4>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        )
    }
}

const mapProps = (state) => ({
    categories: state.categories,
    products: state.products,
})

export default connect(mapProps)(Item)
