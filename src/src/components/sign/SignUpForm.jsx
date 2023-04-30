import React from 'react';
import SignTextInput from './SignTextInput';
import SignTextLabel from './SignTextLabel';
import stl from './SignForm.module.css';
import SignPasswordInput from './SignPasswordInput';
import SignRadioInput from './SignRadioInput';
import SignEmailInput from './SignEmailInput';
import SignPhoneInput from './SignPhoneInput';
import SignSubmitButton from './SignSubmitButton';
import SignAgreementTextArea from './SignAgreementTextArea';
import SignCheckBox from './SignCheckBox';

function SignUpForm(props) {
    const { idOnChange, pwOnChange, pwCheckOnChange, nickOnChange, genderOnChange, emailOnChange, phoneOnChange, onClick, checkBoxOnChange } = props;

    return (

        <div className={stl.signFormContainer}>
            <div className={stl.signFormWrapper}>

                <div>
                    <SignTextLabel labelText = {`아이디`}>
                    </SignTextLabel>

                    <SignTextInput
                        placeHolder={`사용할 ID를 입력하세요`}
                        onChange={idOnChange}
                    />
                </div>

                <div>
                    <SignTextLabel labelText = {`패스워드`}>
                    </SignTextLabel>

                    <SignPasswordInput
                        placeHolder={`사용할 패스워드를 입력하세요`}
                        onChange={pwOnChange}
                        />
                </div>

                <div>
                    <SignTextLabel labelText = {`패스워드`}>
                    </SignTextLabel>

                    <SignPasswordInput
                        placeHolder={`패스워드를 다시 입력해주세요`}
                        onChange={pwCheckOnChange}
                        />
                </div>

                <div>
                    <SignTextLabel labelText = {`닉네임`}>
                    </SignTextLabel>

                    <SignTextInput
                        placeHolder={`사용할 닉네임을 입력하세요`}
                        onChange={nickOnChange}
                    />
                </div>

                <div>
                    <SignTextLabel labelText = {`성별`}>
                    </SignTextLabel>

                    <SignRadioInput onChange={genderOnChange}/>
                </div>

                <div>
                    <SignTextLabel labelText = {`이메일`}>
                    </SignTextLabel>
            
                    <SignEmailInput
                        placeHolder = {`exaple@gmail.com`}
                        onChange={emailOnChange}
                    />
                </div>

                <div>
                    <SignTextLabel labelText = {`휴대폰 번호`}>
                    </SignTextLabel>

                    <SignPhoneInput
                        placeHolder = {`010-1234-1234`}
                        onChange={phoneOnChange}
                    />
                </div>
                <br />

                <SignAgreementTextArea/>

                <SignCheckBox onChange={checkBoxOnChange} />

                <SignSubmitButton
                        onClick={onClick}
                />
            </div>
        </div>
    );
}

export default SignUpForm;