import React from 'react';
import stl from './SignForm.module.css';

function SignPhoneInput(props) {
    const { placeHolder, onChange } = props;

    return (
        <input type={"text"} onChange={onChange} className={stl.signPhoneInput} placeholder={placeHolder}/>
    );
}

export default SignPhoneInput;