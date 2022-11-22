import React from 'react'
import '../../assets/css/home/slider/slider.css';

function Slider() {
    return (
        <div className='container'>
            <section id="slider">
                <div className="owl-carousel slider">
                    <img src={require('../../assets/images/h3-slider-background-3.jpg')} />
                    {/* <img src={require('../../assets/images/h3-slider-background.jpg')} />
                    <img src={require('../../assets/images/h3-slider-background.jpg')} /> */}
                </div>
                <div className="container context pl-lg-5 ml-lg-3">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="text">
                                <h1>Send <span>flowers</span> like</h1>
                                <h1>you mean it</h1>
                                <p className="text-black-50 d-none d-sm-block">Where flowers are our inspiration to create lasting memories. Whatever the occasion, our flowers will
                                    make it special cursus a sit amet mauris. </p>
                            </div>
                            <div className="img">
                                <img src={require('../../assets/images/logo.png')} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Slider