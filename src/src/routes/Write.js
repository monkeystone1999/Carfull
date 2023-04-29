import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API} from "../../config";


function Write(){
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
    useEffect(()=>{
        if(isWrite){
            navigate("/")
        }
    }, [])
    return (
        <>
            <WriteInput setTitle={setTitle} setFee={setFee} setLimit={setLimit} setStart={setStart}
                        setEnd={setEnd} setComment={setComment} ></WriteInput>
            <button type={"submit"} onClick={()=>{WriteSubmit(formData, setWrite)}}></button>
        </>
    )

}

export {Write}
function WriteInput({setTitle, setFee,setLimit,setStart,setEnd,setComment}){

    return <>
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
    </>
}
const WriteSubmit = (formData, Auth, setResult)=>{
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