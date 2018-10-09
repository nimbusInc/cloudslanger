import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

class AdminCategories extends React.Component {
    render() {
        const categoryList = this.props.categories
        return (< div className = "row" > {
            categoryList && categoryList.map((category) => (
                <div className="text-center" key={category.id}>
                    <NavLink to={`admin/categories/${category.id}`}>
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12 ">
                            <img alt="" src={category.img}></img>
                            <div className=" text-center">
                                <h4 >{category.name}</h4>
                            </div>
                        </div>
                    </NavLink>
                </div>
            ))
        } < NavLink to = {
            `admin/addCategory`
        } > ADD CATEGORY < /NavLink>
        </div >)
    }
}

const mapProps = (state) => ({categories: state.categories})

export default connect(mapProps)(AdminCategories)
