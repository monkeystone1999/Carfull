import {Input} from "../../Presentation/Input/Input";
import stl from "./MyInfoChangePW.module.css"

function MyInfoChangePWTotal(props) {
    const {setExPW, setPW, onClick} = props
    return (
        <>
            <div className={stl.Container}>
                <div className={stl.Header}>
                    CarFull
                </div>
                <Input id={"setExPW"} label={"이전 비밀번호"} type={"text"} setData={setExPW}/>
                <Input id={"setPW"} label={"새 비밀번호"} type={"text"} setData={setPW}/>
                <button className={stl.ButtonSub} onClick={onClick}>바꾸기</button>
            </div>
        </>
    )
}

export {MyInfoChangePWTotal}