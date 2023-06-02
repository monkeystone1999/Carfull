import stl from "./Input.module.css"
import {Input} from "../../../Presentation/Input/Input";
import {Link} from "react-router-dom";

function LoginInput(props) {
    const {idOnChange, onClick, pwOnChange } = props;
    return (
        <>
            <div className={stl.Container}>
                <form>
                    <Input id={"ID"} label={"ID"} type={"text"} setData={idOnChange}/>
                    <Input id={"PW"} label={"PW"} type={"password"} setData={pwOnChange}/>
                    <div className={stl.Buttons}>
                        <button className={stl.Button} type={"button"} onClick={onClick}>로그인</button>
                        <button className={stl.Button} type={"button"}><Link to={"/sign"}>회원가입</Link>
                        </button>
                    </div>
                </form>

            </div>
        </>
    )

}

export {LoginInput}