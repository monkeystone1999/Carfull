import {useStore} from "react-redux";
import {useEffect, useState} from "react";
import {axiosWrite} from "../export/axios_custom";
import {getToken} from "../export/access";
import {redirect, useNavigate} from "react-router-dom";

function Write() {
    // recruitCarfullID writeMember boardTitle fee personLimit startPoint endPoint comment view isDeleted
    const [isTitle, setTitle] = useState("");
    const [isFee, setFee] = useState("");
    const [isLimit, setLimit] = useState("");
    const [isStart, setStart] = useState("");
    const [isEnd, setEnd] = useState("");
    const [isComment, setComment] = useState("");
    const formData = new FormData();
    const navigate = useNavigate();
    const [isWrite, setWrite] = useState(false);
    formData.append("boardTitle", isTitle);
    formData.append("fee", isFee);
    formData.append("personLimit", isLimit);
    formData.append("startPoint", isStart);
    formData.append("endPoint", isEnd);
    formData.append("comment", isComment);
    const Submit = ()=>{
        const access_token = localStorage.getItem("access_token");
        axiosWrite(formData,access_token, setWrite);
    }
    useEffect(()=>{
        if(isWrite){
            navigate("/")
        }
    }, [])

    return (
        <>
            <input type={"text"} name={"boardTitle"} onChange={(event)=>{
                setTitle(event.target.value);
            }} placeholder="제목"></input>
            <input type={"text"} name={"fee"} onChange={(event)=>{
                setFee(event.target.value);
            }} placeholder="가격"></input>
            <input type={"text"} name={"personLimit"} onChange={(event)=>{
                setLimit(event.target.value);
            }} placeholder="최대 인원수 제한"></input>
            <input type={"text"} name={"startPoint"} onChange={(event)=>{
                setStart(event.target.value);
            }} placeholder="출발"></input>
            <input type={"text"} name={"endPoint"} onChange={(event)=>{
                setEnd(event.target.value);
            }} placeholder="도착"></input>
            <textarea name={"comment"} onChange={(event)=>{
                setComment(event.target.value);
            }} placeholder="글"></textarea>
            <button type={"submit"} onClick={Submit}>등록!</button>
        </>
    )
}

export default Write