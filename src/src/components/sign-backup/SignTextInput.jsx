import React from 'react';
import stl from './SignForm.module.css';

function SignTextInput(props) {
    const { placeHolder, onChange } = props;

    return (
        <input className={stl.signTextInput} type={"text"} placeholder={placeHolder} onChange={onChange}></input>
    );
}

export default SignTextInput;