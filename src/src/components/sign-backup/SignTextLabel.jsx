import React from 'react';
import stl from './SignForm.module.css';

function SignTextLabel(props) {
    const { labelText } = props;
    
    return <label className={stl.signTextLabel}>{labelText}</label>
}

export default SignTextLabel;