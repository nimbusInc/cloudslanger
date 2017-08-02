import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addOrder } from '../reducers/orders'

const OrderList = ({ cart, products, user, addOrder, history, orders }) => {
    return (
        <section id="feature" className="feature p-top-100">

            <br /><br /><br /><br /><br /><br />

            {
                orders && orders.map(order => {
                    return order.user_id === user.id && order.products && order.products.length && (
                        <div key={order.id} className="container">
                            <div className="row">
                                <div className="main_work">
                                    <div className="col-md-7 col-sm-12 col-xs-12">
                                        <div className="work_item">
                                            <div className="row">
                                                <div className="col-md-7 col-sm-12 col-xs-12">
                                                    <div className="work_item_img sm-text-center sm-m-top-40">
                                                        <img src="https://inapikle.com/wp-content/uploads/ORDER-NOW-PINK-BUTTON.jpg" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-5 col-sm-12 col-xs-12 text-left pull-left sm-text-center">
                                                    <div className="work_item_details m-top-80 sm-m-top-20">
                                                        <h4>{order.created_at.slice(0, 10)}</h4>
                                                        <div className="work_separator2"></div>
                                                        <br />
                                                        {
                                                            order.products.map(product => {
                                                                return <Link key={product.id} to={`/products/${product.id}`}><h2>{product.name}</h2></Link>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /><br /><br /><br /><br />
                        </div>
                    )
                })
            }
        </section>
    )
}

const mapProps = ({ cart, products, user, orders }) => ({ cart, products, user, orders })
const mapDispatch = ({ addOrder })
export default connect(mapProps, mapDispatch)(OrderList)
