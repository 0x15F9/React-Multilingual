import React from 'react';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';

const Layout = (props) => {
    return (
        <div>
            <Navbar />
                <Home />
                {/* TODO: Remove */}
                <hr /> 
                <About />
            <Footer />
        </div>
    )
}

export default Layout;