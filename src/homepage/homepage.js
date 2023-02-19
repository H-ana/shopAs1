import React from 'react';
import '../homepage/homepage.css';
import logo from '../images/logo.png';
import { Link, NavLink } from "react-router-dom";

import Slide from '../components/slides/slide';
function Homepage() {
    return(
        <div className='home-box'>
    <div className='top-container'>
        <div className='top-container-up'>
                <img src={logo}/>
                <div className='home-nav-list'>
                    <ul>
                        <li><NavLink>Men</NavLink></li>
                        <li><NavLink>Women</NavLink></li>
                        <li><NavLink>Kids</NavLink></li>
                        <li><NavLink>Home and Kitchen</NavLink></li>
                    </ul>
                </div>
        </div>
        <div className='top-container-down'>
            <p>
                IT’ S AN <br/>“ADD TO CART” <br/>KINDA DAY !
            </p>
            <div className='top-container-down-button'><Link to='#'>Explore now</Link></div>
        </div>
    </div>
    {/* <Slide/> */}
    </div>
    );
}
export default Homepage;