import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            productList: this.props.products
        }
        console.log('props in cons', props)
    }

    componentWillReceiveProps(nextProps) {
        // console.log('HERE', nextProps)
        // console.log(this.state.productList)
        // console.log('PROPS', this.props)
        const newProductList = nextProps.products.filter((product) => {
            // console.log('is all', !Object.keys(nextProps.currentCategory).length)
            // console.log('PRODUCTS', nextProps.products)
            // console.log('is newcategory', product.category_id === nextProps.currentCategory.id)
            console.log('pre if CurrCat', nextProps.currentCategory)
            console.log('VALIDATOR', nextProps.currentCategory === undefined)
            if (nextProps.currentCategory === undefined) {
                console.log('here 1')
                return true
            } else {
                console.log('here 2')
                console.log('PRODUCT', product)
                console.log('CAT', nextProps.currentCategory)
                return product.category_id === nextProps.currentCategory.id
            }
        })
        this.setState({productList: newProductList})
    }

    render() {
        // console.log('productList', this.state.productList)
        // console.log('products', this.props.products)
        return (

            <div>
                {this.state.productList.map((product) => (
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
    currentCategory: state.currentCategory
})

export default connect(mapProps)(Item)
