import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
    return (
        <div  className="container">
            
            <div className="card-panel center-align">
                <h1><FormattedMessage id="home.title" /></h1>
                <h2><FormattedMessage id="home.subtitle" /></h2>
                <div className="preloader-wrapper active">
                <div className="spinner-layer spinner-red-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home;