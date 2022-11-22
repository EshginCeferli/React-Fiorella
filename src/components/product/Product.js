import React from 'react'
import '../../assets/css/home/product/product.css';

function Product() {
    return (
        <section id="products">
            <div className="container">
                {/* <!-- <div className="row pt-5">
            <div className="col-12 d-flex justify-content-between">
                <ul className="category-mobile d-md-none list-unstyled">
                    <li>
                        <a href="" className="categories mr-2">Categories</a>
                        <i className="fas fa-caret-down"></i>
                        <ul className="category list-unstyled" style="display: none;">
                            <li><a href="" data-id="all">All</a></li>
                            <li><a href="" data-id="popular">Popular</a></li>
                            <li><a href="" data-id="winter">Winter</a></li>
                            <li><a href="" data-id="various">Various</a></li>
                            <li><a href="" data-id="exotic">Exotic</a></li>
                            <li><a href="" data-id="green">Greens</a></li>
                            <li><a href="" data-id="cactuse">Cactuses</a></li>
                        </ul>
                    </li>
                </ul>
                <ul className="category d-none d-md-flex list-unstyled">
                    <li><a href="" data-id="all">All</a></li>
                    <li><a href="" data-id="popular">Popular</a></li>
                    <li><a href="" data-id="winter">Winter</a></li>
                    <li><a href="" data-id="various">Various</a></li>
                    <li><a href="" data-id="exotic">Exotic</a></li>
                    <li><a href="" data-id="green">Greens</a></li>
                    <li><a href="" data-id="cactuse">Cactuses</a></li>
                </ul>
                <ul className="list-unstyled">
                    <li>
                        <a href="" className="mr-2">Filter</a>
                        <i className="fas fa-caret-down"></i>
                    </li>
                </ul>
            </div>
        </div> --> */}
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="popular">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />                        </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="popular">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />                        </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="winter">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />                        </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="winter">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />                        </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="various">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />                   
                                </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="various">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />
                                </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="exotic">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />                        </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-3 mt-3">
                        <div className="product-item text-center" data-id="exotic">
                            <div className="img">
                                <a href="">
                                    <img src={require('../../assets/images/logo.png')} />                        </a>
                            </div>
                            <div className="title mt-3">
                                <h6>MAJESTY PALM</h6>
                            </div>
                            <div className="price">
                                <span className="text-black-50">Add to cart</span>
                                <span className="text-black-50">$259</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product