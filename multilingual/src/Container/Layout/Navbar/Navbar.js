import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Navbar = (props) => {
    return (
        
        <nav>
            <div className="container nav-wrapper">
            <a href="/" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to='/'><FormattedMessage id="home.title" /></Link></li>
                <li><Link to='/about'><FormattedMessage id="about.title" /></Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar;