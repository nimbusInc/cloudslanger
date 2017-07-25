import React from 'react'

export default () => {

    return (
        <nav  className="navbar navbar-default navbar-fixed bootsnav text-uppercase">

            <div className="top-search">
                <div className="container">
                    <div  className="input-group">
                        <span className="input-group-addon"><i className="fa fa-search"></i></span>
                        <input type="text" className="form-control" placeholder="Search"></input>
                        <span className="input-group-addon close-search"><i className="fa fa-times"></i></span>
                    </div>
                </div>
            </div>


            <div   className="container">

                <div onClick={(e) => {$('.top-search').slideToggle()}}  className="attr-nav">
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
                        <li><a href="">home</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">our models</a></li>
                        <li><a href="">blog</a></li>
                        <li><a href="">contact</a></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}