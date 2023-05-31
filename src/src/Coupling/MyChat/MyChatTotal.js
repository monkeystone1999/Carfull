import React from "react";


function MyChatTotal(props){
    const {handleSubmit, connected, title, message, setMessage,clickHandler,greetings} = props;
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <form className="form-inline" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="connect">WebSocket connection: {connected ?
                                    <span>접속 되었습니다!</span>
                                    :<span>접속 중입니다</span>}</label>
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
        </>
    )
}

export{MyChatTotal}