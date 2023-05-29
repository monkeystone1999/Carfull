import stl from "./Header.module.css"
import {Input} from "../../../Presentation/Input/Input";
import {Link} from "react-router-dom";

function SignHeader(){
    return(
        <>
            <div className={stl.Container}>
                <div className={stl.Header}>
                    <Link to={"/"}>CarFull</Link>
                </div>
                <div className={stl.SignType}>
                    <div className={` ${stl.CarFullLogin}`}>CarFull 회원가입</div>
                    <div className={`${stl.O2Auth}`}>O2Auth</div>
                </div>
            </div>
        </>
    )
}
export {SignHeader}