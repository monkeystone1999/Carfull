import React from 'react';
import {InputBox} from "../reStyle/input";
import {SignRadio} from "./signRadio";
import {SignTextArea} from "./signTextArea";
import {SignSubmit} from "./signSubmit";
import st from "../reStyle/style.module.css";

function SignTotal(props) {
    const {
        idOnChange,
        pwOnChange,
        pwCheckOnChange,
        nickOnChange,
        genderOnChange,
        emailOnChange,
        phoneOnChange,
        onClick,
        checkBoxOnChange
    } = props;
    return (
        <>
            <div className={`${st.SignBigBox}`}>
            <InputBox label="아이디" onChange={idOnChange}></InputBox>
            <InputBox label="비밀번호" onChange={pwOnChange}></InputBox>
            <InputBox label="비밀번호를 다시 입력해주세요" onChange={pwCheckOnChange}></InputBox>
            <InputBox label="닉네임" onChange={nickOnChange}></InputBox>


            <SignRadio label="성별" genderOnChange={genderOnChange}></SignRadio>


            <InputBox label="이메일" onChange={emailOnChange}></InputBox>
            <InputBox label="번호" onChange={phoneOnChange}></InputBox>
            <SignTextArea description="아이디" onChange={phoneOnChange}></SignTextArea>
            <SignSubmit onClick={onClick} checkBoxOnChange={checkBoxOnChange}></SignSubmit>
            </div>
        </>
    )
}

export {SignTotal}