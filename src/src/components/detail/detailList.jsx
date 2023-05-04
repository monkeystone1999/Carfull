import React, { useEffect } from "react";
import moment from "moment";
// import stl from "./detail.module.css"
import stl from "../recruit-view/RecruitPost.module.css";
import detail from "./detail.module.css";

function DetailList(props) {
    const {personLimit, fee, startTime, startPoint, endPoint, boardTitle, nick, WriteTime, comment, applyCount} = props
    // const {recruitPost} = props;
    
    let startDate = moment(startTime, "YYYY-MM-DD'T'HH:mm:ss").format('YYYY-MM-DD hh:mm');
    let writeDate = moment(WriteTime, "YYYY-MM-DD'T'HH:mm:ss").format('YYYY-MM-DD hh:mm');
    return (
        <>
        <table className={detail.recruitListItemWrapper}>
            <thead className={stl.tableHead}>
                <th className={stl.boardTitle} style={{"width":"450px"}}>{boardTitle}</th>
                <th className={stl.personCount} style={{"width" :"200px", "padding-left":"100px"}}>{applyCount + `/` + personLimit + `명`}</th>
                <tr>
                     <td>작성자 : {nick?.nick}</td>
                     <td className={detail.writeDate}>{writeDate}</td>
                </tr>
            </thead>
            <tbody>
                <tr className={detail.pointsList}>
                    <td className={stl.points}>
                        <ul>
                            <li>{startPoint}</li>
                        </ul>
                    </td>
                    <td className={stl.points}>
                        <ul>
                            <li>&#8212;</li>
                        </ul>
                    </td>
                    <td className={stl.points}>
                        <ul>
                            <li>{endPoint}</li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td className={stl.startTimetd}>
                        <span className={stl.startTimeLabel}>출발일</span>
                        <span className={stl.startTimeText}>{startDate}</span>
                    </td>
                    <td>
                        <span className={stl.feeText}>{fee}</span>
                        <span className={stl.feeWon}>원</span>
                    </td>
                </tr>
                <tr className={detail.commentWrap}>
                    <td>{comment}</td>
                </tr>
            </tbody>
        </table>
        </>
    );
}

export {DetailList}