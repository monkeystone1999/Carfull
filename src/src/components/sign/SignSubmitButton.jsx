import React from 'react';
import stl from './SignForm.module.css';

function SignSubmitButton(props) {
    const {onClick } = props;

    return (
        <input type="submit" value="등록" onClick={onClick} className={stl.signSubmitButton} />
    );
}

export default SignSubmitButton;