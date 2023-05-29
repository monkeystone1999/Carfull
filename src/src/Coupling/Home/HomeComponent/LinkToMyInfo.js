import stl from "./MyInfo.module.css"
import {Link} from "react-router-dom";

function LinkToMyInfo(props){
    return (
        <>
            <div className={stl.Container}>
                <div className={stl.Title}>
                    <Link to={"/MyInfo"}>조회하기</Link>
                    <svg width="13" height="27" viewBox="0 0 13 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.959961 1.48001L10.96 13.48L0.959961 25.48" stroke="black" strokeWidth="2"/>
                    </svg>
                </div>
            </div>
        </>
    )
}
export {LinkToMyInfo}