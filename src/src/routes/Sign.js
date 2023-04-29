import React, {useContext, useEffect, useState} from "react";
import {redirect, useNavigate} from "react-router-dom";
import axios from "axios";

function Sign(){
    const [isID, setID] = useState("");
    const [isPW, setPW] = useState("");
    const [isPwCheck, setPwCheck] = useState("");
    const [isNick, setNick] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isPhoneNum, setPhoneNum] = useState("");
    const [isResult, setResult] = useState(false);
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('id', isID);
    formData.append('pw', isPW);
    formData.append('pw_check', isPwCheck);
    formData.append('nick', isNick);
    formData.append('email', isEmail);
    formData.append('phone_number', isPhoneNum);

    useEffect(() => {
        if (isResult) {
            return navigate('/')
        }
    }, [isResult]);

    return(
        <>
            <SignInput setID={setID} setPW={setPW} setPwCheck={setPwCheck}
                       setNick={setNick} setEmail={setEmail} setPhoneNum={setPhoneNum}></SignInput>
            <button type={"submit"} onClick={(event)=>{
                event.preventDefault();
                SignSubmit(formData,setResult);
            }}></button>
        </>
    )
}
function SignSubmit(formData, setResult){
    axios({
        // 이 부분이 config 부분
        url: `/withcar/login-process`,
        method: "post",
        data: formData,
        //     요까지
    })
        .then((data) => {
            setResult(true);
            alert("성공하셨습니다 다시 로그인 해주세요");
        })
        .catch((e) => {
            console.log(e);
        });
}
function SignInput({setID, setPW,setPwCheck, setNick, setEmail,setPhoneNum}){
    return (
        <>
            <input
            type={"text"}
            onChange={(event)=>{
                setID(event.target.value);
            }}
            /><input
            type={"text"}
            onChange={(event)=>{
                setPW(event.target.value);
            }}
        /><input
            type={"text"}
            onChange={(event)=>{
                setPwCheck(event.target.value);
            }}
        /><input
            type={"text"}
            onChange={(event)=>{
                setNick(event.target.value);
            }}
        /><input
            type={"text"}
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
        /><input
            type={"text"}
            onChange={(event)=>{
                setPhoneNum(event.target.value);
            }}
        />
        </>
    )
}

export {Sign}