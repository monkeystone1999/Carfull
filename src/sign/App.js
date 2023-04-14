import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {axiosSign} from "../export/axios_custom";
/*eslint-disable*/

function Sign() {
    const [isId, setId] = useState("");
    const [isPw, setPw] = useState("");
    const [isPwCheck, setPwCheck] = useState("");
    const [isNick, setNick] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isPhoneNum, setPhoneNum] = useState("");
    const [isSignBool, setSignBool] = useState(false);
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('id', isId);
    formData.append('pw', isPw);
    formData.append('pw_check', isPwCheck);
    formData.append('nick', isNick);
    formData.append('email', isEmail);
    formData.append('phone_number', isPhoneNum);

    // id pw pw_check nick email phone_number
    function reUrl(e) {
        e.preventDefault();
        axiosSign(formData, setSignBool);
    }
    useEffect(() => {
        if(isSignBool){
            return navigate('/')
        }
    }, [isSignBool])

    return (
        <>
            <form onSubmit={reUrl}>
                <div>Id :</div>
                <input
                    type="text"
                    value={isId}
                    name={"id"}
                    onChange={(e) => {
                        setId(e.target.value);
                    }}
                    placeholder="Id"
                />
                <div>password :</div>
                <input
                    type="password"
                    value={isPw}
                    name={"pw"}
                    onChange={(e) => {
                        setPw(e.target.value);
                    }}
                    placeholder="password check"
                />
                <div>password check :</div>
                <input
                    type="password"
                    value={isPwCheck}
                    name={"pw_check"}
                    onChange={(e) => {
                        setPwCheck(e.target.value);
                    }}
                    placeholder="password"
                />
                <div>Nick :</div>
                <input
                    type="text"
                    value={isNick}
                    name={"nick"}
                    onChange={(e) => {
                        setNick(e.target.value);
                    }}
                    placeholder="Email"
                />
                <div>Email :</div>
                <input
                    type="text"
                    value={isEmail}
                    name={"email"}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    placeholder="Email"
                />
                <div>Phone Number :</div>
                <input
                    type="text"
                    value={isPhoneNum}
                    name={"phone_number"}
                    onChange={(e) => {
                        setPhoneNum(e.target.value);
                    }}
                    placeholder="Phone Number"
                />
                {/*<div>성별 :</div>*/}
                {/*<select name={"gender"}>*/}
                {/*    <option value='' selected>선택</option>*/}
                {/*    <option value = "men">남성</option>*/}
                {/*    <option value = "women">여성</option>*/}
                {/*</select>*/}
                <button type="submit">
                    Sign In
                </button>
            </form>
        </>
    )

}

export default Sign