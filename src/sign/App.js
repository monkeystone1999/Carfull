import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Sign_Submit} from "./Container";
import {Sign_MainFunc} from "./Presentation"
/*eslint-disable*/

function Sign() {
    const [isId, setId] = useState("");
    const [isPw, setPw] = useState("");
    const [isPwCheck, setPwCheck] = useState("");
    const [isNick, setNick] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isPhoneNum, setPhoneNum] = useState("");
    const [isResult, setResult] = useState(false);
    const navigate = useNavigate();
    const formData = new FormData();
    formData.append('id', isId);
    formData.append('pw', isPw);
    formData.append('pw_check', isPwCheck);
    formData.append('nick', isNick);
    formData.append('email', isEmail);
    formData.append('phone_number', isPhoneNum);

    // id pw pw_check nick email phone_number
    useEffect(() => {
        if (isResult) {
            return navigate('/')
        }
    }, [isResult])

    return (
        <>
            <Sign_MainFunc setId={setId} setPw={setPw} setPwCheck={setPwCheck}
                      setNick={setNick} setEmail={setEmail} setPhoneNum={setPhoneNum}
            ></Sign_MainFunc>
            <button type={"submit"} onClick={()=>{Sign_Submit(formData, setResult)}}>Sign In</button>
        </>
    )

}

export default Sign