import React from 'react';
import '../homepage/homepage.css';
import Image from '../images/homepage.png';
function Homepage() {
    return(
    <div className='container'>
        <img src={Image}/>
    </div>
    );
}
export default Homepage;