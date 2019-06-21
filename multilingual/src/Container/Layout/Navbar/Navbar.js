import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav>
            <div class="nav-wrapper">
            <a href="/" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="/"><Link to='/'>Home</Link></a></li>
                <li><a href="/about"><Link to='/about'>About</Link></a></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;