import React from 'react'
import '../../assets/css/home/nav/nav.css';

function Navbar() {

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav
                        className="navbar navbar-expand-lg d-flex d-lg-block justify-content-between d-xl-flex navbar-light py-3 py-lg-0">
                        <a className="navbar-brand" href="#">
                        <img src={require('../../assets/images/logo.png')} />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation" id="mobile-navbar-show">
                            <span className="navbar-toggler-icon" style={{ fontSize: "12px" }}></span>
                        </button>

                        <div className="collapse navbar-collapse d-none d-lg-block" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Home</a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pages</a>

                                </li>
                                <li className="nav-item shop-li">
                                    <a className="nav-link" href="#">Shop</a>
                                    <div className="container">
                                        <div className="row shop py-5">
                                            <div className="col-lg-3">
                                                <div className="item px-4">
                                                    <h5>Product Types</h5>

                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item px-4">
                                                    <h5>Shop Pages</h5>

                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item px-4">
                                                    <h5>Shop Types</h5>

                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="item px-4">
                                                    <h5>Shop Layouts</h5>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                                    <ul className="list-unstyled py-3">
                                        <li className=""><a className="px-1" href="">Portfolio 1</a></li>
                                        <li className=""><a className="px-1" href="">Portfolio 2</a></li>
                                        <li className="">
                                            <a className="px-1 mr-5" href="">Portfolio 3</a>
                                            <i className="fas fa-chevron-right fa-sm"></i>

                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Blog</a>
                                    <ul className="list-unstyled py-3">
                                        <li className=""><a className="px-1" href="">Blog 1</a></li>
                                        <li className=""><a className="px-1" href="">Blog 2</a></li>
                                        <li className="">
                                            <a className="px-1 mr-5" href="">Blog 3</a>
                                            <i className="fas fa-chevron-right fa-sm"></i>

                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Elements</a>
                                    <ul className="list-unstyled py-3 elements">
                                        <li className=""><a className="px-1" href="">Element 1</a></li>
                                        <li className=""><a className="px-1" href="">Element 2</a></li>
                                        <li className="element">
                                            <i className="fas fa-chevron-right fa-sm mr-5"></i>
                                            <a className="px-1" href="">Element 3</a>

                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item my-auto search">
                                    <i className="fas fa-search" id="search"></i>
                                    <ul className="list-unstyled py-3">
                                        <li className="d-flex px-3">
                                            {/* <input id="input-search" type="text" placeholder="Search"> */}
                                            <i className="fas fa-search my-auto" id="search"></i>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item my-auto shop-cart">
                                    <i className="fas fa-shopping-bag"></i>
                                    <sup className="rounded-circle">0</sup>
                                    <span>CART ($0)</span>
                                    <ul className="list-unstyled py-3">
                                        <li className="">No products in the cart.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar