import React from 'react'
import Items from './AllProductsItem'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { select, deselect } from '../reducers/currentcategory'

class Categories extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentState: {
                id: 0
            }
        }
    }

    render() {
        const thisCategory = this.props.currentCategory
        return (
            <div>
                <div className="col-md-12 m-bottom-60">
                    <div className="filters-button-group text-right sm-text-center">
                        <button className="button is-checked" onClick={() => {
                            const emptyCurrentCategory = { id: 0 }
                            this.setState({ currentState: emptyCurrentCategory })
                            return (this.props.categorySelect({}))
                        }}>
                            View all
                        </button>
                        {
                            this.props.categories && this.props.categories.map((thisCategory) => (
                                <button className="button" key={thisCategory.id} onClick={() => {
                                    this.setState({ currentState: thisCategory })
                                    return (this.props.categorySelect(thisCategory))
                                }}>
                                    {thisCategory.name}
                                </button>
                            ))
                        }
                    </div>
                </div>
                <Items currentCategory={this.state.currentState} />
            </div>
        )
    }
}

const mapProps = ({ categories, products, currentCategory }) => ({ categories, products, currentCategory })

const mapDispatch = dispatch => ({
    categorySelect: (newCat) => {
        dispatch(select(newCat))
    }
})

export default connect(mapProps, mapDispatch)(Categories)
