import React, {useState} from 'react';
import { MyChat } from '../../routes/MyChat';
import {Link} from "react-router-dom";
import {MyChatTotal} from "../../Coupling/MyChat/MyChatTotal";

function MyInfoApplyTotal(props){
    const [isDialog, setDialog] = useState(false);
    const {recruitPostID ,title, fee, personLimit, startPoint, endPoint, comment} = props
    return (
        <>
            <div><br/></div>
            <div>제목 : {title}</div>
            <div>가격 : {fee}</div>
            <div>인원 수 제한 : {personLimit}</div>
            <div>출발지 : {startPoint}</div>
            <div>도착지 : {endPoint}</div>
            <div>내용 : {comment}</div>
            <br/>
            {
                isDialog == false ?
                    <button onClick={()=>{setDialog(true)}}>채팅하기</button>:
                    <MyChatTotal recruitPostID={recruitPostID} title={title} setDialog={setDialog}/>
            }
        </>
    )
}

export {MyInfoApplyTotal}