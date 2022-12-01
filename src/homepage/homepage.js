import React from 'react';
import '../homepage/homepage.css';
import Image from '../images/homepage.png';
import Slide from '../components/slides/slide';
function Homepage() {
    return(
        <div className='home-box'>
    <div className='container'>
        <img src={Image}/>
        <Slide/>
        <h1>tddtdtdtdtdt</h1>
    </div>
    </div>
    );
}
export default Homepage;