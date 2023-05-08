import React from 'react';
import stl from './detail.module.css';

function SubmitButton(props) {
    const {acceptedText, buttonText, textCSS, onClick, disable } = props;
    return (
        <div>
            <span className={textCSS}>{acceptedText}</span>
            <button className={stl.SubmitButton} onClick={onClick} disabled={disable}>{buttonText}</button>
        </div>
    );
}

export default SubmitButton;