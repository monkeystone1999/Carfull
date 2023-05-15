import React from 'react';
import { MyChat } from '../../routes/MyChat';

function MyInfoApplyTotal(props){
    const {recruitPostID ,title, fee, personLimit, startPoint, endPoint, comment} = props
    return (
        <>
            <div><br/></div>
            <div>{title}</div>
            <div>{fee}</div>
            <div>{personLimit}</div>
            <div>{startPoint}</div>
            <div>{endPoint}</div>
            <div>{comment}</div>
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