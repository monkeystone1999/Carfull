import React from "react";
import dt from "./detail.module.css"

function DetailHead(props){
    const {boardTitle,nick, startPoint,personLimit } = props
    return(
        <>
            <div className={`${dt.headBox}`}>
                <div></div>
                <div>사용자 : {nick?.nick}</div>
            </div>
        </>
    )
}

export {DetailHead}