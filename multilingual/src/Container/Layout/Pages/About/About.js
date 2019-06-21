import React from 'react';
import { FormattedMessage } from 'react-intl';

const About = () => {
    return(
        <div>
            <div className="card large">
                <div className="card-image">
                    <img alt="Desert" src="https://cdn.pixabay.com/photo/2017/11/21/22/10/desert-2969368_960_720.jpg" />
                    <span className="card-title"><FormattedMessage id="about.title" /></span>
                </div>
                <div className="container card-content">
                    <p><FormattedMessage id="about.p1" /></p>
                    <code><FormattedMessage id="about.p2" /></code>
                </div>
            </div>
        </div>
    )
}

export default About;