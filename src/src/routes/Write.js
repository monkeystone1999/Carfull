import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API} from "../../config";
import {WriteTotal} from "../components/reStyle/write/writeTotal";


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
    }, [isWrite])
    return (
        <>
            <WriteTotal
                titleOnChange = {(event) => {
                    setTitle(event.target.value);
                }}
                priceOnChange = {(event) => {
                    setFee(event.target.value);
                }}
                limitOnChange = {(event) => {
                    setLimit(event.target.value);
                }}
                startOnChange = {(event) => {
                    setStart(event.target.value);
                }}
                endOnChange = {(event) => {
                    setEnd(event.target.value);
                }}
                areaOnChange = {(event) => {
                    setComment(event.target.value);
                }}
                onClick = {() => {
                WriteSubmit(formData, setWrite);
                }}
            />
        </>
    )

}

export {Write}

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