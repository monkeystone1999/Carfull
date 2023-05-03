import React from "react";
import st from "../style.module.css";


function LoginSubmit(props){
    const{onClick} = props
    return(
        <>
                <div className={`${st.SubmitButton} ${st.LoginButton}`}>
                    <button className={`${st.LoginButton}`} type={"submit"} onClick={onClick}>로그인!</button>
                </div>
        </>
    )
}


export {LoginSubmit}