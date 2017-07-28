import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <nav className="navbar navbar-default navbar-fixed bootsnav text-uppercase">

        <div className="top-search">
            <div className="container">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-search"></i></span>
                    <input type="text" className="form-control" placeholder="Search"></input>
                    <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                </div>
            </div>
        </div>
        <div className="container">
            <div onClick={(e) => { $('.top-search').slideToggle() }} className="attr-nav">
                <ul>
                    <li className="search"><a href="#"><i className="fa fa-search"></i></a></li>
                    <li>
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <i className="fa fa-shopping-bag"></i>
                            <span className="badge">3</span>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/products">products</Link></li>
                    <li><Link to="">our models</Link></li>
                    <li><Link to="">blog</Link></li>
                    <li><Link to="">contact</Link></li>
                </ul>
            </div>

        </div>

    </nav>
)
