import React from 'react';
import stl from './SignForm.module.css';

function SignPasswordInput(props) {
    const { placeHolder, onChange } = props;

    return <input className={stl.signPasswordInput} type='password' placeholder={placeHolder} onChange={onChange}></input>
}

export default SignPasswordInput;