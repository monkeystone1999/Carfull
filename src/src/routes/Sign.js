import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
// import {SignTotal} from "../components/sign/signTotal";
import {API} from "../../config";
import {SignTotal} from "../Coupling/Sign/SignTotal";

function Sign(){
    // const [isID, setID] = useState("");
    // const [isPW, setPW] = useState("");
    // const [isPwCheck, setPwCheck] = useState("");
    // const [isNick, setNick] = useState("");
    // const [isGender, setGender] = useState("");
    // const [isEmail, setEmail] = useState("");
    // const [isPhoneNum, setPhoneNum] = useState("");
    // const [isAgree, setAgree] = useState(false);
    const [isResult, setResult] = useState(false);

    const navigate = useNavigate();
    const formData = new FormData();
    // formData.append('agree', isAgree);

    useEffect(() => {
        if (isResult) {
            return navigate('/')
        }
    }, [isResult]);

    return(
        <>
            <SignTotal
                formData={formData}
                setResult={setResult}
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