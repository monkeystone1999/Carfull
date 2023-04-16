import style from "./style.module.css";
import React from "react";

export function Sign_MainFunc({setId, setPw, setPwCheck, setNick, setEmail,setPhoneNum}){
    return(
        <><div>Id :</div>
            <input
                type="text"
                name={"id"}
                onChange={(e) => {
                    setId(e.target.value);
                }}
                placeholder="Id"
            />
            <div>password :</div>
            <input
                type="password"
                name={"pw"}
                onChange={(e) => {
                    setPw(e.target.value);
                }}
                placeholder="password check"
            />
            <div>password check :</div>
            <input
                type="password"
                name={"pw_check"}
                onChange={(e) => {
                    setPwCheck(e.target.value);
                }}
                placeholder="password"
            />
            <div>Nick :</div>
            <input
                type="text"
                name={"nick"}
                onChange={(e) => {
                    setNick(e.target.value);
                }}
                placeholder="Email"
            />
            <div>Email :</div>
            <input
                type="text"
                name={"email"}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                placeholder="Email"
            />
            <div>Phone Number :</div>
            <input
                type="text"
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
        </>
    )
}