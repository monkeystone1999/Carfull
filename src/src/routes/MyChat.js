import React, {useCallback, useEffect, useMemo, useState} from "react";
import {API} from "../../config";
import {Client} from "@stomp/stompjs";
import axios from "axios";


function MyChat(props) {
    // const [stompClient, setStompClient] = useState(null);
    const { recruitPostID, title } = props;
    const [connected, setConnected] = useState(false);
    const [message, setMessage] = useState("");
    const [allMessage, setallMessage] = useState([]);
    const [receivedMsg, setReceivedMsg] = useState("");
    const [loadMessage, setLoadMessage] = useState(false);
    // const connect = () => {
    //     // const socket = new SockJs(`${API.CHAT}`);
    //     // const client = StompJs.over(socket);
    //     // setStompClient(client);
    //     stompClient.activate();
    //     setConnected(true);
    //
    //     console.log("Connected");
    // };

    // ==========메시지 객체 정보===========
    // private final String msgID;
	// private final String content;
	// private final String nick;
	// private final String time;

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

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="connect">연결 상태: {connected ?
                                <span>접속 되었습니다!</span>
                            :<span>접속 중입니다</span>}</label>
                            {/*<button*/}
                            {/*    id="connect"*/}
                            {/*    className="btn btn-default"*/}
                            {/*    type="button"*/}
                            {/*    onClick={connect}*/}
                            {/*>*/}
                            {/*    Connect*/}
                            {/*</button>*/}
                            {/*<button*/}
                            {/*    id="disconnect"*/}
                            {/*    className="btn btn-default"*/}
                            {/*    type="button"*/}
                            {/*    onClick={disconnect}*/}
                            {/*>*/}
                            {/*    Disconnect*/}
                            {/*</button>*/}
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{title}의 채팅</label>
                            <input
                                type="text"
                                id="message"
                                className="form-control"
                                placeholder="내용을 입력하세요"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                        <button
                            id="send"
                            className="btn btn-default"
                            type="button"
                            onClick={sendMessage}
                            disabled={!connected}
                        >
                            보내기
                        </button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped">
                        <thead>
                        <tr>
                            <th>채팅 내역</th>
                        </tr>
                        </thead>
                        <tbody id="allMessage">
                        {allMessage.map((message, index) => (
                            <tr key={index}>
                                <td>{message.nick} : {message.content}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}


export {MyChat}
