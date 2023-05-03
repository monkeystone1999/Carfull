import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API} from "../../config";
import {WriteTotal} from "../components/reStyle/write/writeTotal";

import RecruitWriteForm from "../components/recruit-write/RecruitWriteForm";


function Write(){
    const [isTitle, setTitle] = useState("");
    const [isFee, setFee] = useState("");
    const [isLimit, setLimit] = useState("");
    const [isStart, setStart] = useState("");
    const [isEnd, setEnd] = useState("");
    const [isDate, setDate] = useState("");
    const [isComment, setComment] = useState("");
    const formData = new FormData();
    const navigate = useNavigate();
    const [isWrite, setWrite] = useState(false);
    formData.append("boardTitle", isTitle);
    formData.append("fee", isFee);
    formData.append("personLimit", isLimit);
    formData.append("startPoint", isStart);
    formData.append("endPoint", isEnd);
    formData.append("startTime", isDate);
    formData.append("comment", isComment);
    useEffect(()=>{
        if(isWrite){
            navigate("/")
        }
    }, [isWrite])
    return (
        <RecruitWriteForm
            titleOnChange={(event) => {
                setTitle(event.target.value);
            }}
            feeOnChange={(event) => {
                setFee(event.target.value);
            }}
            limitOnChange={(event) => {
                setLimit(event.target.value);
            }}
            startPointOnChange={(event) => {
                setStart(event.target.value);
            }}
            endPointOnChange={(event) => {
                setEnd(event.target.value);
            }}
            commentOnChange={(event) => {
                setComment(event.target.value);
            }}
            dateOnChange={(event) => {
                setDate(event);
            }}
            onClick={() => {
                WriteSubmit(formData, setWrite)
            }}
        />

        // <>
        //     <WriteInput setTitle={setTitle} setFee={setFee} setLimit={setLimit} setStart={setStart}
        //                 setEnd={setEnd} setComment={setComment} ></WriteInput>
        //     <button type={"submit"} onClick={()=>{WriteSubmit(formData, setWrite)}}></button>
        // </>
    )
}

const WriteSubmit = (formData, setResult)=>{
    const Auth = localStorage.getItem("access_token");
    axios({
        url: `${API.WRITE}`,
        method: 'post',
        data: formData,
        headers: {
            Authorization: "Bearer " + Auth,
        }
    }).then(res => {
        console.log(res);
        setResult(true);
        alert('등록이 되었습니다!');
    }).catch(err => {
    })
}

export {Write}