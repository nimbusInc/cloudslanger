import React from 'react'

export default () => {

    return (
        <nav class="navbar navbar-default navbar-fixed bootsnav text-uppercase">

            <div class="top-search">
                <div class="container">
                    <div class="input-group">
                        <span class="input-group-addon"><i class="fa fa-search"></i></span>
                        <input type="text" class="form-control" placeholder="Search"></input>
                        <span class="input-group-addon close-search"><i class="fa fa-times"></i></span>
                    </div>
                </div>
            </div>


            <div class="container">

                <div class="attr-nav">
                    <ul>
                        <li class="search"><a href="#"><i class="fa fa-search"></i></a></li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                <i class="fa fa-shopping-bag"></i>
                                <span class="badge">3</span>
                            </a>
                        </li>

                    </ul>
                </div>



                <div class="collapse navbar-collapse" id="navbar-menu">
                    <ul class="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                        <li><a href="index.html">home</a></li>
                        <li><a href="aboutus.html">about</a></li>
                        <li><a href="model.html">our models</a></li>
                        <li><a href="blog.html">blog</a></li>
                        <li><a href="contactus.html">contact</a></li>
                    </ul>
                </div>

            </div>

        </nav>
    )
}