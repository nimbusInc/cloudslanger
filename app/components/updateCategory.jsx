import React from 'react'
import {connect} from 'react-redux'
import {updateCategory} from './reducers/categories'

class adminUpdateCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            name: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.categories.length) {
            const currentCategory = nextProps.categories.find(category => (category.id=== +nextProps.match.params.id))
            this.setState({
                name: currentCategory.name
            })
        };
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
                <h1>{this.state.name}</h1>
                <form onSubmit= {this.handleSubmit}>
                    <div className="form-group">
                        <label>NAME</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} id="name-field" name="name" />
                    </div>
                </form>
            </div>
        )
    }
}

const mapProps= (state) => ({
    categories: state.categories
})

const mapDispatch = {updateCategory}

export default connect(mapProps, mapDispatch)(adminUpdateCategory)
