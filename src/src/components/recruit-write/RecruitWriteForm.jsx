import React from 'react';
import stl from '../sign/SignForm.module.css';
import SignTextLabel from '../sign/SignTextLabel';
import SignTextInput from '../sign/SignTextInput';

function RecruitWriteForm(props) {
    const {titleOnChange} = props;
    
    return (
        <div className={stl.signFormWrapper}>
            <SignTextLabel labelText = {`제목`}/>
            <SignTextInput
                placeHolder={`제목을 입력하세요`}
                onChange
            />
        </div>
    );
}

export default RecruitWriteForm;