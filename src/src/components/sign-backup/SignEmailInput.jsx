import React from 'react';
import stl from './SignForm.module.css';

function SignEmailInput(props) {
    const { placeHolder,onChange } = props;

    return (
        <input type="email" onChange={onChange} placeholder={placeHolder} className={stl.signEmailInput} />
    )    
}

export default SignEmailInput;