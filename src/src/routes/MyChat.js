import React, {useCallback, useEffect, useMemo, useState} from "react";
import {API} from "../../config";
import {Client} from "@stomp/stompjs";
import {MyChatTotal} from "../Coupling/MyChat/MyChatTotal";
import axios from "axios";


function MyChat(props) {
    const { recruitPostID, title ,setChat,onChat,nick} = props;
    const [connected, setConnected] = useState(false);
    const [message, setMessage] = useState("");
    const [receivedMsg, setReceivedMsg] = useState("");
    const [allMessage, setallMessage] = useState([]);
    const [loadMessage, setLoadMessage] = useState(false);
    const stompClient = useMemo(() => {
        let client = new Client();
        client.configure({
            brokerURL : 'ws://anu330.iptime.org:8080/withcar/gs-guide-websocket',
            // brokerURL: `${API.CHAT}`,
            onConnect: () => {
                console.log('onConnect');

                client.subscribe(`/topic/recruit/`+recruitPostID, (message) => {
                    console.log(message);
                    setReceivedMsg(message.body);
                });
            },
            debug: (str) => {console.log(str);}
        });
        return client;
    }, []);

    // 처음에 이전 메시지 불러오기
    useEffect(() => {
        axios({
            url:`${API.LOAD_CHAT}/`+recruitPostID,
            method:'post',
        }).then((res)=>{
            // res.data.map((initMsg) => {
            //     setallMessage([...allMessage, initMsg]);
            // });
            setallMessage(res.data);
        });
        console.log(allMessage);
        setLoadMessage(true);
    }, []);

    //메시지 수신받을 때
    useEffect(() => {
        if(receivedMsg != "") {
            setallMessage([...allMessage, JSON.parse(receivedMsg)]);
        }
    }, [receivedMsg]);

    // 이전 메시지 받아왔을 때 채팅서버 연결
    useEffect(()=>{
        setTimeout(()=>{
            stompClient.activate();
            setConnected(true);
        },100)
    },[loadMessage]);

    // 메시지 전송할 때
    const sendMessage = () => {
        let token = localStorage.getItem("access_token")
        stompClient.publish({destination: `/app/recruit/`+recruitPostID,
            body: JSON.stringify({ message, token })});
    }

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        console.log("Disconnected");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const Dialoging = (event)=>{
        // eslint-disable-next-line no-unused-expressions
        event.target === this ?
            setChat(false)
            : null
    }
    return (
        <>
            {
                onChat ?
                    <MyChatTotal
                        handleSubmit={handleSubmit}
                        connected={connected}
                        title={title}
                        message={message}
                        setMessage={setMessage}
                        sendMessage={sendMessage}
                        allMessage={allMessage}
                        setDialog={setChat}
                        Dialoging={Dialoging}
                        disconnect={disconnect}
                        nick={nick}
                    />
                    :
                    <div></div>
            }

        </>
    )
}


export {MyChat}
