import React from 'react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Home from './Pages/Home/Home';

const Layout = (props) => {
    return (
        <div>
            <Navbar />
                <Home />
            <Footer />
        </div>
    )
}

export default Layout;