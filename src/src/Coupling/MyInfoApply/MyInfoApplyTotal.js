import {Link} from "react-router-dom";
import React, {useState} from "react";
import {Card_2} from "../../Presentation/Card/Card_2";
import stl from "./MyInfoApply.module.css"
import {MyChat} from "../../routes/MyChat";

function MyInfoApplyTotal(props) {
    const {recruitPost,nick} = props
    console.log(recruitPost)
    // recruitPostID, title
    const [onChat, setChat] = useState(false);
    return (
        <>
            <div className={stl.Container}>
                <Card_2
                    value={recruitPost}
                    btn={<button onClick={()=>{
                        setChat(true);
                    }}>
                        채팅하기!
                    </button>}
                />
                {
                    onChat ? <MyChat
                    setChat={setChat}
                    onChat={onChat}
                    nick={nick}
                    recruitPostID={recruitPost.writeMember.idNumber}
                    title={recruitPost.writeMember.userId
                    }/> : null
                }

            </div>
        </>
    )
}

export {MyInfoApplyTotal}