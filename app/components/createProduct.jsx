import React from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import {addProduct} from '../reducers/products'

class AdminAddProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: '',
            img: '',
            description: '',
            quantity: 0,
            price: 0,
            category_id: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if (event.target.name === 'name') {
            this.setState({name: event.target.value})
        } else if (event.target.name === 'img') {
            this.setState({img: event.target.value})
        } else if (event.target.name === 'description') {
            this.setState({description: event.target.value})
        } else if (event.target.name === 'quantity') {
            this.setState({quantity: +event.target.value})
        } else if (event.target.name === 'price') {
            this.setState({price: +event.target.value})
        } else if (event.target.name === 'category') {
            this.setState({category_id: +event.target.value})
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const newProduct = {
            name: this.state.name,
            img: this.state.img,
            description: this.state.description,
            quantity: this.state.quantity,
            price: this.state.price,
            category_id: this.state.category_id
        }
        this.props.addProduct(newProduct)
        this.setState({
            name: '',
            img: '',
            description: '',
            quantity: 0,
            price: 0,
            category_id: 0
        })
    }

    render() {
        return (
            <div>
                <h1>NEW PRODUCT FORM</h1>
                <form onSubmit= {this.handleSubmit}>
                    <div className="form-group">
                        <label>NAME</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} id="name-field" name="name" />
                    </div>
                    <div className="form-group">
                        <label>IMG</label>
                        <input type="text" value={this.state.img} onChange={this.handleChange} id="img-field" name="img" />
                    </div>
                    <div className="form-group">
                        <label>DESCRIPTION</label>
                        <input type="text" value={this.state.description} onChange={this.handleChange} id="description-field" name="description" />
                    </div>
                    <div className="form-group">
                        <label>QUANTITY</label>
                        <input type="text" value={this.state.quantity} onChange={this.handleChange} id="quantity-field" name="quantity" />
                    </div>
                    <div className="form-group">
                        <label>PRICE</label>
                        <input type="text" value={this.state.price} onChange={this.handleChange} id="price-field" name="price" />
                    </div>
                    <div className="form-group">
                        <label>CATEGORY</label>
                        <select name="category">
                            {this.props.categories && this.props.categories.map((category) => (<option value={category.id}>{category.name}</option>))}
                        </select>
                    </div>
                    <button type="submit">Add Product to Inventory</button>
                </form>
            </div>
        )
    }
}

const mapProps= (state) => ({
    categories: state.categories
})

const mapDispatch = {addProduct}

export default connect(mapProps, mapDispatch)(AdminAddProduct)
