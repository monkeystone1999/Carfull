import React from 'react';
import stl from './SignForm.module.css';

function SignEmailInput(props) {
    const { placeHolder,emailOnChange } = props;

    return (
        <input type="email"  onChange={emailOnChange} placeholder={placeHolder} className={stl.signEmailInput} />
    )    
}

export default SignEmailInput;