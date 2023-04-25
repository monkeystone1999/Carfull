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
                required
            />
            <div>password :</div>
            <input
                type="password"
                name={"pw"}
                onChange={(e) => {
                    setPw(e.target.value);
                }}
                placeholder="password check"
                required
            />
            <div>password check :</div>
            <input
                type="password"
                name={"pw_check"}
                onChange={(e) => {
                    setPwCheck(e.target.value);
                }}
                placeholder="password"
                required
            />
            <div>Nick :</div>
            <input
                type="text"
                name={"nick"}
                onChange={(e) => {
                    setNick(e.target.value);
                }}
                placeholder="Email"
                required
            />
            <div>Email :</div>
            <input
                type="text"
                name={"email"}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                placeholder="Email"
                required
            />
            <div>Phone Number :</div>
            <input
                type="text"
                name={"phone_number"}
                onChange={(e) => {
                    setPhoneNum(e.target.value);
                }}
                placeholder="Phone Number"
                required
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