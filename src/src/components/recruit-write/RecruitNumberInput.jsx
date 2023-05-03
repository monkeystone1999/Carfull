import React from 'react';
import stl from '../sign/SignForm.module.css';

function RecruitNumberInput(props) {
    const { placeHolder, onChange} = props;

    return (
        <input type="number" placeholder={placeHolder} onChange={onChange} className={stl.recruitNumberInput}/>
    );
}

export default RecruitNumberInput;