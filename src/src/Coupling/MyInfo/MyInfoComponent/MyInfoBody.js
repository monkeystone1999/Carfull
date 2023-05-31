import stl from "./Body.module.css"
import {Link} from "react-router-dom";
import React from "react";


function MyInfoBody() {
    return (
        <>
            <div className={stl.Container}>
                <div className={stl.Write}>
                    <Link to={`/MyInfo/recruit`}>작성 내역 </Link>
                </div>
                <div className={stl.Apply}>
                    <Link to={`/MyInfo/apply`}>신청 내역</Link>
                </div>
            </div>
        </>
    )
}

export {MyInfoBody}