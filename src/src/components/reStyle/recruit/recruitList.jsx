import React from "react";
import st from '../style.module.css'
function RecruitList(props) {
    const {recruitList, onClick} = props
    return (
        <>
            <div className={`${st.recruitBox}`} onClick={onClick}>
                <div className={`${st.recruitTitle} LightFont`}>제목 : {recruitList.boardTitle}</div>
                <div className={`${st.fromTo}`}>
                    <div className={`${st.easyText}`}>{recruitList.startPoint}</div>
                    <div>=></div>
                    <div className={`${st.easyText}`}>{recruitList.endPoint}</div>
                </div>
                <div className={`${st.easyText}`}>출발시간 = {recruitList.startTime}</div>
                <div className={`${st.easyText}`}>제한인원 = {recruitList.personLimit}</div>
            </div>
        </>
    )
}

export {RecruitList}