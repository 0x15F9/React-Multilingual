import React from 'react';

const LanguageChanger = (props) => {
    return(
      <div>
        <a href="/" className="waves-effect waves-light btn" onClick={ () => this.changeLanguage() }>English</a>
        {/* <a className="waves-effect waves-light btn" onClick={}>English</a>
        <a className="waves-effect waves-light btn" onClick={}>French</a> */}
      </div>
    )
}

export default LanguageChanger;