import React from "react";
import {useAuthState} from "../../../AuthContext";
import {DetailList} from "./detailList";
import DetailSubmitButton from "./detailSubmitButton";
import stl from "./detail.module.css";
import { Navigate, useNavigate } from "react-router-dom";

function DetailTotal(props){
    const {Detail, isMine, isApplied, isAccepted, API, formData} = props;

    let submit = init(isMine, isApplied, isAccepted, Detail, API, formData);

    return(
        <>
            <DetailList
                boardTitle={Detail.boardTitle}
                comment={Detail.comment}
                WriteTime={Detail.recruitWriteTime}
                nick={Detail.writeMember}
                personLimit={Detail.personLimit}
                applyCount={Detail.applyPersonCount}
                fee={Detail.fee}
                startTime={Detail.startTime}
                startPoint={Detail.startPoint}
                endPoint={Detail.endPoint}
            />
            <div className={stl.Detail_submit}>
                {submit}
            </div>
        </>
    )
}

function init(isMine, isApplied, isAccepted, Detail, API, formData) {
    let submit;
    
    if(isMine) {
        // 내가 쓴 글이므로 삭제 버튼을 띄움
        submit = 
            <DetailSubmitButton
                text={``}
                buttonText={`삭제`}
                textCSS={stl.acceptedText}
                onClick={() => {
                    recruitDelete(API, formData)
                }} />;
        return submit;
    }

    if (isApplied) {
        if (isAccepted) {
            // 신청, 승낙까지 모두 완료된 상태
            submit =
                <DetailSubmitButton
                    text={`탑승 예정인 카풀이에요!`}
                    buttonText={`취소`}
                    textCSS={stl.acceptedText}
                    onClick={() => {
                        recruitCancel(API, formData)
                    }}  />;
        } else {
            // 신청은 했지만 승낙이 안된 상태
            submit =
                <DetailSubmitButton
                    text={`운전자의 승낙을 기다리는 중이에요!`}
                    buttonText={`취소`}
                    textCSS={stl.appliedText}
                    onClick={() => {
                        recruitCancel(API, formData)
                    }}  />;
        }
    } else {
        if (Detail.personLimit <= Detail.applyPersonCount) {
            // 신청은 안했지만 카풀 인원이 모두 차서 신청이 불가능한 상태
            submit =
                <DetailSubmitButton
                    text={`현재 꽉 찬 카풀이에요!`}
                    buttonText={`신청`}
                    textCSS={stl.disableText}
                    disable={true} />;
        } else {
            //신청 가능한 상태
            submit =
                <DetailSubmitButton
                    text={``}
                    buttonText={`신청`}
                    textCSS={stl.submitText}
                    onClick = {() => {
                        recruitApply(API, formData)
                    }}  />;
        }
    }
    return submit;
}

function recruitApply(API, formData) {
    const access_token = localStorage.getItem("access_token");

    axios({
        url: `${API.RECRU_APL}`,
        method : 'post',
        data : formData,
        headers:{
            Authorization: "Bearer " + access_token,
        }
    }).then(res => {
        if(res.data) {
            useNavigate(`/detail/${formData.recruit_ID}`)
        } else {
            alert(`error : ${res}`);
        }
    })
}

function recruitDelete(API, formData) {
    const access_token = localStorage.getItem("access_token");

    axios({
        url: `${API.RECRU_DEL}`,
        method : 'post',
        data : formData,
        headers:{
            Authorization: "Bearer " + access_token,
        }
    }).then(res => {
        if(res.data) {
            useNavigate(`/detail/${formData.recruit_ID}`)
        } else {
            alert(`error : ${res}`);
        }
    })
}

function recruitCancel(API, formData) {
    const access_token = localStorage.getItem("access_token");

    axios({
        url: `${API.RECRU_CAN}`,
        method : 'post',
        data : formData,
        headers:{
            Authorization: "Bearer " + access_token,
        }
    }).then(res => {
        if(res.data) {
            useNavigate(`/detail/${formData.recruit_ID}`)
        } else {
            alert(`error : ${res}`);
        }
    })
}

export default {DetailTotal}