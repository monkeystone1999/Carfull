import stl from "./Input.module.css"
import {Input} from "../../../Presentation/Input/Input";
import {InputRadio} from "../../../Presentation/InputRadio/InputRadio";

function SignInput(props) {
    const {setId, setPW, setPwCheck, ChecksetNick, setGender, setEmail, setPhoneNum, setAgree, onClick} = props;
    return (
        <>
            <div className={stl.Container}>
                <form>
                    <Input id={"SignId"} label={"아이디"} setData={setId}/>
                    <Input id={"SignPW"} label={"비밀번호"} setData={setPW}/>
                    <Input id={"setPwCheck"} label={"비밀번호 재확인"} setData={setPwCheck}/>
                    <Input id={"ChecksetNick"} label={"닉네임"} setData={ChecksetNick}/>
                    <InputRadio name={"gender"} Lvalue={"women"} Rvalue={"men"} Lname={"women"} Rname={"men"}/>
                    <Input id={"setEmail"} label={"Emil"} setData={setEmail}/>
                    <Input id={"setPhoneNum"} label={"전화번호"} setData={setPhoneNum}/>
                    <InputRadio name={"agree"} Lvalue={"true"} Rvalue={"false"} Lname={"동의"} Rname={"비동의"}/>
                    <button className={stl.Button} type={"submit"} onClick={onClick}>회원가입</button>
                </form>
            </div>
        </>
    )
}

export {SignInput}