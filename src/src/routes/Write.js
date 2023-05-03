import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API} from "../../config";
import RecruitWriteForm from "../components/recruit-write/RecruitWriteForm";


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
        <RecruitWriteForm
            titleOnChange={setTitle}
            feeOnChange={setFee}
            limitOnChange={setLimit}
            startPointOnChange={setStart}
            endPointOnChange={setEnd}
            commentOnChange={setComment}
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

export {Write}