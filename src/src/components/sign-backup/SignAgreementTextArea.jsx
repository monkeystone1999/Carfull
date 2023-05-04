import React from 'react';
import stl from './SignForm.module.css';

function SignAgreementTextArea(props) {
        return (
            <textarea readOnly className={stl.signAgreementTextArea}>
                {`~~~~회원가입 약관~~~~~
                `}
            </textarea>
        );
}

export default SignAgreementTextArea;