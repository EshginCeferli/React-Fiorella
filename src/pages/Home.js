import React from 'react'
import Navbar from '../components/layout/Navbar';
import Product from '../components/product/Product';
import Slider from '../components/slider/Slider';

function Home() {
    return (
       <>
       <Navbar />
       <Slider />
       <Product />
       </>
    ) 
}
export default Home
