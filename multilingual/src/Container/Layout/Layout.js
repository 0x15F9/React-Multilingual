import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import LanguageChanger from '../LanguageChanger/LanguageChanger';

const Layout = (props) => {
    return (
        <div>
            <Navbar changeLanguage={props.changeLanguage} />
            <LanguageChanger click={() => props.changeLanguage('fr') } />
            {/* <div onClick={() => props.changeLanguage('fr')} >Fr</div>
            <div onClick={() => props.changeLanguage('en')} >En</div> */}
            < Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about' component={About} />
            </Switch>
            <Footer />
        </div>
    )
}

export default Layout;