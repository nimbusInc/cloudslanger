import React from 'react'
import Items from './AllProductsItem'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import {select, deselect} from '../reducers/currentcategory'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            currentState: {
                id: 0
            }}
    }

    render() {
        const curCat = this.props.currentCategory
        return (
            <div>
                <div className="col-md-12 m-bottom-60">
                    <div className="filters-button-group text-right sm-text-center">
                        <button className="button is-checked" onClick={() => {
                            const emptyCurrentCategory = {id: 0}
                            this.setState({currentState: emptyCurrentCategory})
                            return (this.props.catSelect({}))
                        }}>View all</button>
                        {this.props.categories && this.props.categories.map((cat) => (
                            <button className="button" key={cat.id} onClick={() => {
                                this.setState({currentState: cat})
                                return (this.props.catSelect(cat))
                            }}
                            >{cat.name}</button>
                        )
                        )
                        }
                    </div>
                </div>
                <Items currentCategory={this.state.currentState}/>
            </div>
        )
    }
}

const mapProps= (state) => ({
    categories: state.categories,
    products: state.products,
    currentCategory: state.currentCategory
})

const mapDispatch = dispatch => ({
    catSelect: (newCat) => {
        dispatch(select(newCat))
    }
})

export default connect(mapProps, mapDispatch)(Categories)
