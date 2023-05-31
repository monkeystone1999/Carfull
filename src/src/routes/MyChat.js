import React, {useCallback, useEffect, useMemo, useState} from "react";
import {API} from "../../config";
import {Client} from "@stomp/stompjs";
import {MyChatTotal} from "../Coupling/MyChat/MyChatTotal";


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
        // title handleSubmit
        <>
            <MyChatTotal
                handleSubmit={handleSubmit}
                connected={connected}
                title={title}
                message={message}
                setMessage={setMessage}
                clickHandler={clickHandler}
                greetings={greetings}
            />
        </>
    )
}


export {MyChat}
