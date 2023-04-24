import {redirect, useParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../Auth";
import {axiosRecruitApply,axiosRecruitDetail,axiosRecruitOwner,axiosRecruitDel}from "./Container";
/* eslint-disable*/
function RecruitDetail() {
    const {isUser} = useContext(AuthContext);
    let {detail} = useParams();
    let [isRecruit, setRecruit] = useState(Array);
    const [isMine, setMine] = useState(false);
    const [isRecruitResult, setRecruitResult] = useState(false);
    const formData = new FormData();
    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        formData.append('recruit_ID', parseInt(detail));
        axiosRecruitDetail(detail, setRecruit);
        if(localStorage.getItem("access_token")){
            axiosRecruitOwner(formData, access_token, setMine);
        }
    }, [])
    useEffect(() => {
        if (isRecRes) {
            redirect("/");
        }
    }, [isRecRes])
    // 뭐가 내려갈까? axiosRecruitOwner 랑

    const Submit = (recruitCarfullID, type) => {
        const access_token = localStorage.getItem("access_token");
        type == 'del' ?
            axiosRecruitDel(recruitCarfullID, access_token,setRecRes)
            : axiosRecruitApply(recruitCarfullID, access_token, setRecRes)
    }
    const Mine = () => {
        if (!isMine) {
            return (<button onClick={() => {
                Submit(isRecruit.recruitCarfullID, 'apply')
            }}>신청하기!</button>)
        } else return (<button onClick={() => {
            Submit(isRecruit.recruitCarfullID, 'del')
        }}>Delete!</button>)
    }
    return (
        <>
            <div>사람 수 제한 : {isRecruit.personLimit}</div>
            <div>가격 : {isRecruit.fee}</div>
            <div>출발시간 : {isRecruit.startTime}</div>
            <div>출발지 : {isRecruit.startPoint}</div>
            <div>도착지 : {isRecruit.endPoint}</div>
            {isUser ? Mine() : null}
        </>
    )
}

function Owner(){
// 오우너
}

function Vagabond(){
//     Vagabond = 부랑자

}
export {RecruitDetail}