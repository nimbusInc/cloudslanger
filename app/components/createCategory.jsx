import React from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import {updateProduct} from './reducers/products'

class adminAddCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        if (event.target.name === 'name') {
            this.setState({name: event.target.value})
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const newCategory = {
            name: this.state.name
        }
        this.props.addCategory(newCategory)
        this.setState({
            name: ''
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.campusName}</h1>
                <form onSubmit= {this.handleSubmit}>
                    <div className="form-group">
                        <label>NAME</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} id="name-field" name="name" />
                    </div>
                    <button type="submit">Add Category</button>
                </form>
            </div>
        )
    }
}

const mapProps= (state) => ({
    categories: state.categories
})

const mapDispatch = {updateProduct}

export default connect(mapProps, mapDispatch)(adminAddCategory)
