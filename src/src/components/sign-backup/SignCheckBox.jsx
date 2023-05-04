import React from 'react';
import stl from './SignForm.module.css';

function SignCheckBox(props) {
    const { checkBoxOnChange } = props;

    return (
        <input type="checkbox" onChange={checkBoxOnChange} className={stl.signCheckBox}/>
    );
}

export default SignCheckBox;