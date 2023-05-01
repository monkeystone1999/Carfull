import React from 'react';
import stl from './SignForm.module.css';

function SignPhoneInput(props) {
    const { placeHolder, phoneOnChange } = props;

    return (
        <input type="text" onChange={phoneOnChange} className={stl.signPhoneInput} placeholder={placeHolder}/>
    );
}

export default SignPhoneInput;