import React from 'react';
import { FormattedMessage } from 'react-intl';

const Home = () => {
    return (
        <div>
            
            <div class="card-panel center-align">
                <h1><FormattedMessage id="home.title" /></h1>
                <h2><FormattedMessage id="home.subtitle" /></h2>
                <div class="preloader-wrapper active">
                <div class="spinner-layer spinner-red-only">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div><div class="gap-patch">
                        <div class="circle"></div>
                    </div><div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Home;