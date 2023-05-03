import React from "react";
import st from "../style.module.css";


function WriteSubmit(props){
    const{onClick} = props
    return(
        <>
            <div className={`${st.SubmitButton} ${st.LoginButton}`} style={{"margin-top" : "30px"}} >
                <button className={`${st.LoginButton}`} type={"submit"} onClick={onClick}>등록!</button>
            </div>
        </>
    )
}


export {WriteSubmit}