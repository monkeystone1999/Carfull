import stl from "./Login.module.css"
import {LoginHeader} from "./LoginComponent/LoginHeader";
import {LoginInput} from "./LoginComponent/LoginInput";
import {useState} from "react";

function LoginTotal(props) {
    const { onClick, formData} = props;
    const [isID, setID] = useState("");
    const [isPW, setPW] = useState("");
    formData.append('userId', isID);
    formData.append('pw', isPW);
    return (
        <>
            <div className={stl.Container}>
                <LoginHeader/>
                <LoginInput idOnChange={(event)=>{
                    setID(event.target.value)
                }} pwOnChange={(event)=>{
                    setPW(event.target.value)
                }} onClick={onClick}/>
            </div>
        </>
    )

}

export {LoginTotal}