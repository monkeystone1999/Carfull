import React, {useCallback, useEffect, useRef, useState} from "react";
import {API} from "../../config";
import SockJs from "sockjs-client";
import StompJs from "stompjs";


function MyChat(props) {
    const formData = new FormData();
    const [msg, setMsg] = useState();
    const [myMsg, setMyMsg] = useState("");
    let sock;
    let stomp;

    useEffect(() => {
        sock = new SockJs(`${API.CHAT}`);
        stomp = StompJs.over(sock);
        stompConnect();
        return ()=>{
            DisConnect();
        }
    }, [])
    const DisConnect = () => {
        try {
            stomp.debug = null;
            stomp.disconnect(() => {
                stomp.unsubscribe("sub-0");
            });
        } catch (err) {
        }
    };
    const SendMessage = (myMsg) => {
        const data = {
            'name' : myMsg
        }
        stomp.send(`${API.CHAT_SEND}`, {}, JSON.stringify(data));
    };
    const stompConnect = () => {
        try {
            stomp.debug = null;
            //웹소켓 연결시 stomp에서 자동으로 connect이 되었다는것을
            //console에 보여주는데 그것을 감추기 위한 debug
            stomp.connect({}, () => {
                stomp.subscribe(
                    `${API.GREET}`,
                    (data) => {
                        setMsg(JSON.parse(data.body))
                        //데이터 파싱
                    },
                    {}
                );
            });
        } catch (err){}
    };

    return (
        <>
            {msg}
            {myMsg}
            <input type={"text"} onChange={(event)=>{
                setMyMsg(event.target.value)
            }}></input>
            <button onClick={()=>{
                SendMessage(myMsg)
            }}>제출!</button>
        </>
    )
}


export {MyChat}
