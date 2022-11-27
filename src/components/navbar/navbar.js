import React from 'react';
import './navbar.css';
import Logo from '../logo';
import { FaCaretDown } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
function Navbar(){
    return (
        <div className='navbar'>
<ul>
    <li><a href='#'>MEN <FaCaretDown/></a></li>
    <li><a href='#'>WOMEN <FaCaretDown/></a></li>
    <li><a href='#'>KIDS <FaCaretDown/></a></li>
    <li><Logo/></li>
    <li><a href='#'>HOME AND KITCHEN <FaCaretDown/></a></li>
    
    <li><a href='#'><FaHeart/></a></li>
    <li><a href='#'><FaShoppingCart/></a></li>
</ul>
        </div>
    )
}
export default Navbar;
