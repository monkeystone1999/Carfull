import React, {useEffect, useState, ReactDOM} from "react";
import {API} from "../../config";
import SockJs from "sockjs-client";
import StompJs from "stompjs";


function MyChat(props) {
    const formData = new FormData();
    const [msg, setMsg] = useState([]);
    const [myMsg, setMyMsg] = useState("");

    let init = false;

    let sock;
    var stomp;

    useEffect(() => {
        
        init = true;
        return ()=>{
            DisConnect();
        }

    }, [])

    useEffect(() => {
        if(init) {
            sock = new SockJs(`${API.CHAT}`);
            stomp = StompJs.over(sock);
            stompConnect();
        }
    }, [init])

    const sendMessage = () => {
        stomp.send(`${API.CHAT_SEND}`, {}, JSON.stringify({'name' : myMsg}));
    };

    const stompConnect = () => {
        try {
            //웹소켓 연결시 stomp에서 자동으로 connect이 되었다는것을
            //console에 보여주는데 그것을 감추기 위한 debug
            // stomp.debug = null;
            stomp.connect({}, () => {
                stomp.subscribe(
                    `${API.GREET}`, (data) => {
                        let message = JSON.parse(data.body).content;
                        setMsg(prev => [...prev, message]);

                        //데이터 파싱
                    },
                    {}
                );
            });
        } catch (err){console.log(err)}
    };

    const DisConnect = () => {
        try {
            stomp.debug = null;
            stomp.disconnect(() => {
                stomp.unsubscribe("sub-0");
            });
        } catch (err) {
        }
    };

    ReactDOM.render(() => {
        return (
            <>
                {msg}
                <hr></hr>
                <input type={"text"} onChange={(event)=>{
                    setMyMsg(event.target.value)
                }}></input>
                <button onClick={()=>{
                    sendMessage()
                }}>제출!</button>
            </>
        );
    })
}


export {MyChat}
