import {useState} from "react";
import {SignHeader} from "./SignComponent/SignHeader";
import {SignInput} from "./SignComponent/SignInput";
import stl from "./Sign.module.css";

function SignTotal(props) {
    const {formData, onClick, setResult} = props
    const [isID, setID] = useState("");
    const [isPW, setPW] = useState("");
    const [isPwCheck, setPwCheck] = useState("");
    const [isNick, setNick] = useState("");
    const [isGender, setGender] = useState("");
    const [isEmail, setEmail] = useState("");
    const [isPhoneNum, setPhoneNum] = useState("");
    const [isAgree, setAgree] = useState(false);
    formData.append('id', isID);
    formData.append('pw', isPW);
    formData.append('pw_check', isPwCheck);
    formData.append('nick', isNick);
    formData.append('gender', isGender);
    formData.append('email', isEmail);
    formData.append('phone_number', isPhoneNum);

    return (
        <>
            <div className={stl.Container}>
                <SignHeader/>
                <SignInput
                    setId={(event) => {
                        setID(event.target.value)
                    }}
                    setPW={(event) => {
                        setPW(event.target.value)
                    }}
                    setPwCheck={(event) => {
                        setPwCheck(event.target.value)
                    }}
                    setNick={(event) => {
                        setNick(event.target.value)
                    }}
                    setGender={(event) => {
                        setGender(event.target.value)
                    }}
                    setEmail={(event) => {
                        setEmail(event.target.value)
                    }}
                    setPhoneNum={(event) => {
                        setPhoneNum(event.target.value)
                    }}
                    setAgree={(event) => {
                        setAgree(event.target.value)
                    }}

                />
            </div>
        </>
    )
}

export {SignTotal}