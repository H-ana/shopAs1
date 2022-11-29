import React from 'react';
import './navbar.css';
import Logo from '../logo';
import { FaCaretDown } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
function Navbar(){
    return (
        <div className='navbar'>
            <header>
    <ul>
        <li><a href='#'><div><h2><CgProfile/></h2><h3>profile</h3></div></a></li>
        <li><a href='/men'>MEN <FaCaretDown/></a></li>
        <li><a href='#'>WOMEN <FaCaretDown/></a></li>
        <li><a href='#'>KIDS <FaCaretDown/></a></li>
       <li><Logo/></li>
        <li><a href='#'>HOME AND KITCHEN <FaCaretDown/></a></li>
        <li><a href='#'><div><h2><FaHeart/></h2><h3>wishlist</h3></div></a></li>
        <li><a href='#'><div><h2><FaShoppingCart/></h2><h3>cart</h3></div></a></li>
    </ul>
    
    </header>
        </div>

    )
}
export default Navbar;
