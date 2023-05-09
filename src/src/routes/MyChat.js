import React, {useCallback, useEffect, useRef, useState} from "react";
import {API} from "../../config";
import SockJs from "sockjs-client";
import StompJs from "stompjs";


function MyChat(props) {
    const [stompClient, setStompClient] = useState(null);
    const [connected, setConnected] = useState(false);
    const [name, setName] = useState("");
    const [greetings, setGreetings] = useState([]);

    useEffect(() => {
        if (stompClient !== null) {
            stompClient.connect({}, (frame) => {
                setConnected(true);
                console.log("Connected: " + frame);
                stompClient.subscribe(`${API.GREET}`, (greeting) => {
                    console.log(greeting);
                    const message = JSON.parse(greeting.body).content;
                    setGreetings((prevGreetings) => [...prevGreetings, message]);
                });
            });
        }
    }, [stompClient]);

    const connect = () => {
        const socket = new SockJs(`${API.CHAT}`);
        const client = StompJs.over(socket);
        setStompClient(client);
    };

    const disconnect = () => {
        if (stompClient !== null) {
            stompClient.disconnect();
        }
        setConnected(false);
        console.log("Disconnected");
    };

    const sendName = () => {
        stompClient.send(`${API.CHAT_SEND}`, {}, JSON.stringify({ name }));
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
                            <label htmlFor="connect">WebSocket connection:</label>
                            <button
                                id="connect"
                                className="btn btn-default"
                                type="button"
                                onClick={connect}
                                disabled={connected}
                            >
                                Connect
                            </button>
                            <button
                                id="disconnect"
                                className="btn btn-default"
                                type="button"
                                onClick={disconnect}
                                disabled={!connected}
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
                            onClick={sendName}
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
