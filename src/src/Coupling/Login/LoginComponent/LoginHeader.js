import stl from "./Header.module.css"
import {Link} from "react-router-dom";

function LoginHeader() {
    return (
        <>
            <div className={stl.Container}>
                <div className={stl.Header}>
                    <Link to={"/"}>CarFull</Link>
                </div>
                <div className={stl.LoginType}>
                    <div className={` ${stl.CarFullLogin}`}>CarFull 로그인</div>
                    <div className={`${stl.O2Auth}`}>임시 로그인</div>
                </div>
            </div>
        </>
    )
}

export {LoginHeader}