import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {SignTotal} from "../components/reStyle/sign/signTotal";
import {API} from "../../config";

function Sign(){
    const [isID, setID] = useState("");
    const [isPW, setPW] = useState("");
    const [isPwCheck, setPwCheck] = useState("");
    const [isNick, setNick] = useState("");
    const [isGender, setGender] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isPhoneNum, setPhoneNum] = useState("");
    const [isAgree, setAgree] = useState(false);
    const [isResult, setResult] = useState(false);

    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('id', isID);
    formData.append('pw', isPW);
    formData.append('pw_check', isPwCheck);
    formData.append('nick', isNick);
    formData.append('gender', isGender);
    formData.append('email', isEmail);
    formData.append('phone_number', isPhoneNum);
    formData.append('agree', isAgree);

    useEffect(() => {
        if (isResult) {
            return navigate('/')
        }
    }, [isResult]);

    return(
        <>
            <SignTotal
                idOnChange = {(event) => {
                    setID(event.target.value);
                }}
                pwOnChange = {(event) => {
                    setPW(event.target.value);
                }}
                pwCheckOnChange = {(event) => {
                    setPwCheck(event.target.value);
                }}
                nickOnChange = {(event) => {
                    setNick(event.target.value);
                }}
                genderOnChange = {(event) => {
                    setGender(event.target.value);
                }}
                emailOnChange = {(event) => {
                    setEmail(event.target.value);
                }}
                phoneOnChange = {(event) => {
                    setPhoneNum(event.target.value);
                }}
                checkBoxOnChange = {(event) => {
                    // label 에서 나오는 동의 값은
                    setAgree(event.target.value);
                    console.log(event.target.value);
                }}
                onClick = {() => {
                    SignSubmit(formData, setResult);
                }}
            />
        </>
    )
}
function SignSubmit(formData, setResult){
    axios({
        // 이 부분이 config 부분
        url: `${API.SIGN}`,
        method: "post",
        data: formData,
        //     요까지
    })
        .then((res) => {
            if(res.data == "wrongAccountInformation"){
                alert("잘못된 입력이 있었습니다");
            }
            else if(res.data == "nickDuplicateError"){
                alert("닉네임이 중복입니다")
            }
            else if(res.data == "userIdDuplicateError"){
                alert("ID 가 중복입니다")
            }
            else{
                setResult(true);
                alert("성공하셨습니다 다시 로그인 해주세요");
            }
        })
        .catch((e) => {
            console.log(e);
        });
}

export {Sign}