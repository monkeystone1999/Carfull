import React, {useCallback, useEffect, useMemo, useState} from "react";
import {API} from "../../config";
import {Client} from "@stomp/stompjs";


function MyChat(props) {
    // const [stompClient, setStompClient] = useState(null);
    const { recruitPostID, title } = props;
    const [connected, setConnected] = useState(false);
    const [message, setMessage] = useState("");
    const [greetings, setGreetings] = useState([]);
    const [receivedMsg, setReceivedMsg] = useState("");
    // const connect = () => {
    //     // const socket = new SockJs(`${API.CHAT}`);
    //     // const client = StompJs.over(socket);
    //     // setStompClient(client);
    //     stompClient.activate();
    //     setConnected(true);
    //
    //     console.log("Connected");
    // };

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

    useEffect(() => {
        if(receivedMsg != "") { 
            setGreetings([...greetings, JSON.parse(receivedMsg)]);
        }
    }, [receivedMsg]);
    useEffect(()=>{
        setTimeout(()=>{
            stompClient.activate();
            setConnected(true);
        },100)
    },[])
    
    const clickHandler = () => {
        let token = localStorage.getItem("access_token")
        stompClient.publish({destination: `/app/recruit/`+recruitPostID, 
        body: JSON.stringify({ message, token })});
    }

    // useEffect(() => {
    //     if (stompClient !== null) {
    //         stompClient.connect({}, (frame) => {
    //             setConnected(true);
    //             console.log("Connected: " + frame);
    //             stompClient.subscribe(`${API.GREET}`, (greeting) => {
    //                 console.log(greeting);
    //                 const message = JSON.parse(greeting.body).content;
    //                 setGreetings((prevGreetings) => [...prevGreetings, message]);
    //             });
    //         });
    //     }
    // }, [stompClient]);


    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        console.log("Disconnected");
    };

    // const sendName = () => {
    //     stompClient.send(`${API.CHAT_SEND}`, {}, JSON.stringify({ name }));
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="connect">WebSocket connection: {connected ?
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
                            onClick={clickHandler}
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
                            <th>Greetings</th>
                        </tr>
                        </thead>
                        <tbody id="greetings">
                        {greetings.map((message, index) => (
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
