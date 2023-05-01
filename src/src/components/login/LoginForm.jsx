import React from 'react';
import stl from '../sign/SignForm.module.css';
import SignTextLabel from '../sign/SignTextLabel';

function LoginForm(props) {
    const {idOnChange, pwOnChange, onClick} = props;

    return (
        <div className={stl.signFormContainer}>
            <div className={stl.signFormWrapper}>

                <SignTextInput
                    placeHolder={`ID를 입력하세요`}
                    onChange={idOnChange}
                />
                <SignPasswordInput
                    placeHolder={`패스워드를 입력하세요`}
                    onChange={pwOnChange}
                    />

                <SignSubmitButton
                    onClick={onClick}
                />
            </div>

        </div>
    );
}

export default LoginForm;