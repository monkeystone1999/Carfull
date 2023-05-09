import React, {useEffect, useMemo, useState} from "react";
import {API} from "../../config";
import {Client} from "@stomp/stompjs";


function MyChat(props) {
    // const [stompClient, setStompClient] = useState(null);
    const [connected, setConnected] = useState(false);
    const [name, setName] = useState("");
    const [greetings, setGreetings] = useState([]);

    const stompClient = useMemo(() => {
        let client = new Client();

        client.configure({
            brokerURL : 'ws://anu330.iptime.org:8080/withcar/gs-guide-websocket',
            // brokerURL: `${API.CHAT}`,
            onConnect: () => {
                console.log('onConnect');
                
                client.subscribe('/withcar/topic/greetings', message => {
                    console.log(message);
                    setGreetings(message.body);
                });
            },
            // debug: (str) => {console.log(new Date, str);}
        });
        setConnected(true);
        return client;
    }, [])

    stompClient.activate();
    
    const clickHandler = () => {
        stompClient.publish({destination: '/withcar/app/hello', body: name});
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

    // const connect = () => {
    //     const socket = new SockJs(`${API.CHAT}`);
    //     const client = StompJs.over(socket);
    //     setStompClient(client);
    // };

    // const disconnect = () => {
    //     if (stompClient !== null) {
    //         stompClient.disconnect();
    //     }
    //     setConnected(false);
    //     console.log("Disconnected");
    // };

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
                            <label htmlFor="connect">WebSocket connection:</label>
                            <button
                                id="connect"
                                className="btn btn-default"
                                type="button"
                            >
                                Connect
                            </button>
                            <button
                                id="disconnect"
                                className="btn btn-default"
                                type="button"
                            >
                                Disconnect
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <form className="form-inline" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">What is your name?</label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Your name here..."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <button
                            id="send"
                            className="btn btn-default"
                            type="button"
                            onClick={clickHandler}
                            disabled={!connected}
                        >
                            Send
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
                                <td>{message}</td>
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
