import React from "react";
import {DetailHead} from "./detailHead";
import dt from "./detail.module.css"

function DetailList(props) {
    const {personLimit, fee, startTime, startPoint, endPoint, boardTitle, nick, WriteTime, comment} = props
    return (
        <>
            <div className={`${dt.bigbox}`}>
            <DetailHead
                boardTitle={boardTitle}
                nick={nick}
                startPoint={startPoint}
                personLimit={personLimit}
            />
            <div>가격 : {fee}</div>
            <div>출발시간 : {startTime}</div>
            <div>출발지 : {startPoint}</div>
            <div>도착지 : {endPoint}</div>
            </div>
        </>)
}

export {DetailList}