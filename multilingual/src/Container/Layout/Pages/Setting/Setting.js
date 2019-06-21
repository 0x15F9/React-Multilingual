import React from 'react';
import LanguageChanger from '../../../LanguageChanger/LanguageChanger';

import { FormattedMessage } from 'react-intl';

const Setting = (props) => {
    console.log(props)
    return (
        <div className="container">
            
            <h1><FormattedMessage id="setting.title" /></h1>
            <LanguageChanger changeLanguage={ (l) =>  props.changeLanguage(l)  } />

            <br />

        </div>

    )
}

export default Setting;