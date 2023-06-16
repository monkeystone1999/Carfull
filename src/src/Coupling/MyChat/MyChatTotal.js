import React, {useEffect} from "react";
import stl from "./MyChat.module.css"

function MyChatTotal(props) {
    const {handleSubmit, title, message, setMessage, sendMessage, allMessage, setDialog, Dialoging, disconnect, nick} = props;
    useEffect(() => {
        document.body.style = `overflow: hidden`;
        return () => document.body.style = `overflow: auto`
    }, [])
    return (
        <>
            <div className={stl.Container} onClick={Dialoging}>
                <div className={stl.Des}>
                    <label>{title}<b>방의 채팅</b></label>
                    <div className={stl.Chats}>
                        {allMessage.map((message, index) => (
                            <div key={index}>
                                {
                                    message.nick == nick ?
                                        <div className={stl.Mine}> <span className={stl.MineChat}>{message.content}</span></div>
                                        : <div className={stl.Opponent}>{message.nick} : {message.content}</div>
                                }

                            </div>
                        ))}
                    </div>
                    <form onSubmit={handleSubmit} className={stl.Forms}>
                        <div className={stl.Input}>
                            <input
                                placeholder="내용을 입력하세요"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                            <button
                                onClick={sendMessage}
                                className={stl.Submit}
                            >
                                보내기
                            </button>
                        </div>
                        <div className={stl.Buttons}>
                            <button onClick={() => {
                                setDialog(false)
                            }}>나가기
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export {MyChatTotal}

