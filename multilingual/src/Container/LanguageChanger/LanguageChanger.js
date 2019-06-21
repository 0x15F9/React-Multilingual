import React from 'react';

const LanguageChanger = (props) => {
    return(
      <div>
        <label>Language Select</label>
        <select onChange={ () => props.click('fr') } class="browser-default">
          <option >English</option>
          <option >French</option>
        </select>
      </div>
    )
}

export default LanguageChanger;