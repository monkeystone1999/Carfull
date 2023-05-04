import React from "react";
import {InputBox} from "../reStyle/input";
import st from "../reStyle/style.module.css";
import {LoginSubmit} from "./loginSubmit";


function LoginTotal(props){
    const{ onClick, idOnChange, pwOnChange} = props
    return(
        <>
            <div className={`${st.LoginBox}`}>
            <InputBox label={"아이디"} onChange={idOnChange}/>
            <InputBox type={"password"} label={"비밀번호"} onChange={pwOnChange}/>
            <LoginSubmit onClick={onClick}/>
            </div>
        </>
    )
}


export {LoginTotal}