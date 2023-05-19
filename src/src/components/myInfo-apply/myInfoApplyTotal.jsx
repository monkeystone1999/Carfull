import React from 'react';
import { MyChat } from '../../routes/MyChat';

function MyInfoApplyTotal(props){
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
            
            {/* <Link to={"/MyChat"}>채팅하기</Link> */}
            <MyChat
                recruitPostID = {recruitPostID}
                title = {title}
            />
        </>
    )
}

export {MyInfoApplyTotal}