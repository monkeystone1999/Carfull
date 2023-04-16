import {useEffect, useState} from "react";
import {Write_Submit} from "./Container"
import {useNavigate} from "react-router-dom";
import {Write_MainFunc} from "./Presentation";

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
    useEffect(()=>{
        if(isWrite){
            navigate("/")
        }
    }, [])

    return (
        <>
            <Write_MainFunc
                setTitle={setTitle} setFee={setFee} setLimit={setLimit} setStart={setStart}
                setEnd={setEnd} setComment={setComment}>
            </Write_MainFunc>
            <button type={"submit"} onClick={Write_Submit(formData, setWrite)}>등록!</button>
        </>
    )
}

export default Write